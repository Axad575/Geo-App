"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "@/app/api/firebase";
import { collection, getDocs, doc, getDoc, updateDoc } from "firebase/firestore";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import { useStrings } from "@/app/hooks/useStrings";


const ProjectListItem = ({ project, onProjectUpdate }) => {
    const router = useRouter();
    const { t } = useStrings();
    const [isCompleting, setIsCompleting] = useState(false);

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'active':
                return 'border-black';
            case 'completed':
                return 'border-green-400';
            case 'upcoming':
            case 'in progress':
                return 'border-yellow-400';
            default:
                return 'border-gray-300';
        }
    };

    const formatDate = (date) => {
        if (!date) return '';
        try {
            return new Date(date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric'
            });
        } catch (error) {
            return date;
        }
    };

    const handleCompleteProject = async () => {
        if (!confirm(t('projects.confirmComplete') || 'Вы уверены, что хотите завершить этот проект?')) {
            return;
        }

        setIsCompleting(true);
        try {
            // Обновляем статус проекта на "completed"
            await updateDoc(doc(db, `organizations/${project.orgId}/projects/${project.id}`), {
                status: 'completed',
                completedAt: new Date().toISOString(),
                completedBy: project.currentUserId
            });

            console.log('Project completed successfully');
            
            // Обновляем список проектов
            if (onProjectUpdate) {
                onProjectUpdate();
            }
        } catch (error) {
            console.error('Error completing project:', error);
            alert(t('projects.errorCompleting') || 'Ошибка при завершении проекта');
        } finally {
            setIsCompleting(false);
        }
    };

    const isCompleted = project.status?.toLowerCase() === 'completed';
    const canComplete = !isCompleted && (project.status?.toLowerCase() === 'active' || project.status?.toLowerCase() === 'in progress');

    return (
        <div className={`bg-white rounded-lg border-2 ${getStatusColor(project.status)} mb-4`}>
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center gap-3">
                            <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                            {isCompleted && (
                                <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                                    ✓ Завершен
                                </span>
                            )}
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                            {formatDate(project.startDate)}-{formatDate(project.endDate)}
                        </p>
                        {project.completedAt && (
                            <p className="text-xs text-green-600 mt-1">
                                Завершен: {formatDate(project.completedAt)}
                            </p>
                        )}
                    </div>
                    <div className="text-right">
                        <p className="font-medium text-gray-900">{project.organization}</p>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                    <div className="flex gap-3">
                        <button 
                            onClick={() => router.push(`/pages/projects/${project.id}`)}
                            className="text-blue-600 hover:text-blue-800 transition-colors"
                        >
                            {t('projects.openProject')} &gt;&gt;
                        </button>
                        
                        {canComplete && (
                            <button
                                onClick={handleCompleteProject}
                                disabled={isCompleting}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    isCompleting
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-green-600 text-white hover:bg-green-700'
                                }`}
                            >
                                {isCompleting 
                                    ? (t('projects.completing') || 'Завершаем...')
                                    : (t('projects.completeProject') || 'Завершить проект')
                                }
                            </button>
                        )}
                        
                        {isCompleted && (
                            <div className="flex items-center text-green-600 text-sm">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                Проект завершен
                            </div>
                        )}
                    </div>
                    
                    <p className={`text-sm font-medium px-2 py-1 rounded ${
                        isCompleted 
                            ? 'bg-green-100 text-green-800'
                            : project.status?.toLowerCase() === 'active'
                            ? 'bg-black text-white'
                            : 'bg-gray-100 text-gray-800'
                    }`}>
                        {t('projects.status')}: {project.status}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default function Projects() {
    const auth = getAuth(app);
    const router = useRouter();
    const { t } = useStrings();
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orgId, setOrgId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [filterStatus, setFilterStatus] = useState('all');

    // Получение текущей организации пользователя
    const getCurrentUserOrg = async (userId) => {
        try {
            // Ищем пользователя в подколлекциях organizations/{orgId}/users
            const organizationsSnapshot = await getDocs(collection(db, 'organizations'));
            
            for (const orgDoc of organizationsSnapshot.docs) {
                const userInOrgDoc = await getDoc(doc(db, `organizations/${orgDoc.id}/users/${userId}`));
                if (userInOrgDoc.exists()) {
                    console.log('User found in organization:', orgDoc.id);
                    return orgDoc.id;
                }
            }

            console.log('User not found in any organization');
            return null;
        } catch (error) {
            console.error('Error fetching user organization:', error);
            return null;
        }
    };

    const fetchProjects = async (organizationId, userId) => {
        try {
            // Получаем название организации
            const orgDoc = await getDoc(doc(db, `organizations/${organizationId}`));
            const orgName = orgDoc.exists() ? orgDoc.data().name : 'Organization';
            
            const querySnapshot = await getDocs(collection(db, `organizations/${organizationId}/projects`));
            
            console.log(`Found ${querySnapshot.docs.length} projects in organization`);
            
            const projectsList = querySnapshot.docs.map(doc => {
                const data = doc.data();
                console.log('Project data:', doc.id, data);
                return {
                    id: doc.id,
                    ...data,
                    organization: orgName,
                    orgId: organizationId,
                    currentUserId: userId
                };
            });
            
            console.log(`Total projects to display: ${projectsList.length}`);
            console.log('Current user ID:', userId);
            
            // Показываем все проекты без фильтрации (временно для отладки)
            setProjects(projectsList);
        } catch (error) {
            console.error('Error fetching projects:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleProjectUpdate = () => {
        if (orgId && currentUser) {
            fetchProjects(orgId, currentUser.uid);
        }
    };

    const filteredProjects = projects.filter(project => {
        if (filterStatus === 'all') return true;
        return project.status?.toLowerCase() === filterStatus;
    });

    const projectStats = {
        total: projects.length,
        active: projects.filter(p => p.status?.toLowerCase() === 'active').length,
        completed: projects.filter(p => p.status?.toLowerCase() === 'completed').length,
        inProgress: projects.filter(p => p.status?.toLowerCase() === 'in progress').length
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                const userOrgId = await getCurrentUserOrg(user.uid);
                
                if (userOrgId) {
                    setOrgId(userOrgId);
                    await fetchProjects(userOrgId, user.uid);
                } else {
                    console.error('User is not assigned to any organization');
                    setLoading(false);
                }
            } else {
                router.push('/auth/login');
            }
        });

        return () => unsubscribe();
    }, []);

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar orgId={orgId} />
            <div className="flex-1">
                <Navbar orgId={orgId} />
                <div className="p-8">
                    <div className="mb-6">
                        <h1 className="text-2xl font-bold mb-4 text-gray-900">{t('projects.title')}</h1>
                        
                        {/* Статистика проектов */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-white rounded-lg border p-4">
                                <div className="text-2xl font-bold text-gray-900">{projectStats.total}</div>
                                <div className="text-sm text-gray-600">Всего проектов</div>
                            </div>
                            <div className="bg-white rounded-lg border p-4">
                                <div className="text-2xl font-bold text-blue-600">{projectStats.active}</div>
                                <div className="text-sm text-gray-600">Активных</div>
                            </div>
                            <div className="bg-white rounded-lg border p-4">
                                <div className="text-2xl font-bold text-yellow-600">{projectStats.inProgress}</div>
                                <div className="text-sm text-gray-600">В процессе</div>
                            </div>
                            <div className="bg-white rounded-lg border p-4">
                                <div className="text-2xl font-bold text-green-600">{projectStats.completed}</div>
                                <div className="text-sm text-gray-600">Завершенных</div>
                            </div>
                        </div>

                        {/* Фильтры */}
                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={() => setFilterStatus('all')}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${
                                    filterStatus === 'all'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                Все ({projectStats.total})
                            </button>
                            <button
                                onClick={() => setFilterStatus('active')}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${
                                    filterStatus === 'active'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                Активные ({projectStats.active})
                            </button>
                            <button
                                onClick={() => setFilterStatus('in progress')}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${
                                    filterStatus === 'in progress'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                В процессе ({projectStats.inProgress})
                            </button>
                            <button
                                onClick={() => setFilterStatus('completed')}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${
                                    filterStatus === 'completed'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                Завершенные ({projectStats.completed})
                            </button>
                        </div>
                    </div>

                    {loading ? (
                        <div className="text-center text-gray-700">{t('loading')}...</div>
                    ) : filteredProjects.length === 0 ? (
                        <div className="text-center text-gray-500">
                            {filterStatus === 'all' ? 'No projects found' : `Нет проектов со статусом "${filterStatus}"`}
                        </div>
                    ) : (
                        <div className="max-w-4xl">
                            {filteredProjects.map((project) => (
                                <ProjectListItem 
                                    key={project.id} 
                                    project={project}
                                    onProjectUpdate={handleProjectUpdate}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
