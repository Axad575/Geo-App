"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "@/app/api/firebase";
import { collection, getDocs, doc, getDoc } from "firebase/firestore";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import { useStrings } from "@/app/hooks/useStrings";


const ProjectListItem = ({ project }) => {
    const router = useRouter();
    const { t } = useStrings();

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

    return (
        <div className={`bg-white rounded-lg border-2 ${getStatusColor(project.status)} mb-4`}>
            <div className="p-6">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-sm text-gray-600 mt-1">
                            {formatDate(project.startDate)}-{formatDate(project.endDate)}
                        </p>
                    </div>
                    <div className="text-right">
                        <p className="font-medium text-gray-900">{project.organization}</p>
                    </div>
                </div>
                <div className="flex justify-between items-center mt-4">
                    <button 
                        onClick={() => router.push(`/pages/projects/${project.id}`)}
                        className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
                        {t('projects.openProject')} &gt;&gt;
                    </button>
                    <p className="text-sm text-gray-600">
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
                    organization: orgName // Добавляем название организации
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
                    <h1 className="text-2xl font-bold mb-6 text-gray-900">{t('projects.title')}</h1>
                    {loading ? (
                        <div className="text-center text-gray-700">{t('loading')}...</div>
                    ) : projects.length === 0 ? (
                        <div className="text-center text-gray-500">No projects found</div>
                    ) : (
                        <div className="max-w-3xl">
                            {projects.map((project) => (
                                <ProjectListItem 
                                    key={project.id} 
                                    project={project}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
