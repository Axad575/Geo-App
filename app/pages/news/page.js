"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "@/app/api/firebase";
import { collection, getDocs, doc, getDoc, updateDoc, addDoc } from "firebase/firestore";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import { useStrings } from "@/app/hooks/useStrings";

const NewsItem = ({ news, onNewsUpdate, currentUserId, isAdmin }) => {
    const router = useRouter();
    const { t } = useStrings();
    const [isUpdating, setIsUpdating] = useState(false);

    const formatDate = (date) => {
        if (!date) return '';
        try {
            return new Date(date).toLocaleDateString('ru-RU', {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return date;
        }
    };

    const getPriorityColor = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'high':
                return 'border-red-400 bg-red-50';
            case 'medium':
                return 'border-yellow-400 bg-yellow-50';
            case 'low':
                return 'border-green-400 bg-green-50';
            default:
                return 'border-gray-300 bg-white';
        }
    };

    const getPriorityBadge = (priority) => {
        switch (priority?.toLowerCase()) {
            case 'high':
                return 'bg-red-100 text-red-800';
            case 'medium':
                return 'bg-yellow-100 text-yellow-800';
            case 'low':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const handleMarkAsRead = async () => {
        if (!currentUserId || news.readBy?.includes(currentUserId)) return;

        setIsUpdating(true);
        try {
            const readBy = news.readBy || [];
            readBy.push(currentUserId);

            await updateDoc(doc(db, `organizations/${news.orgId}/news/${news.id}`), {
                readBy: readBy,
                lastReadAt: new Date().toISOString()
            });

            if (onNewsUpdate) {
                onNewsUpdate();
            }
        } catch (error) {
            console.error('Error marking news as read:', error);
        } finally {
            setIsUpdating(false);
        }
    };

    const handleArchive = async () => {
        if (!isAdmin) return;

        if (!confirm(t('news.confirmArchive'))) {
            return;
        }

        setIsUpdating(true);
        try {
            await updateDoc(doc(db, `organizations/${news.orgId}/news/${news.id}`), {
                archived: true,
                archivedAt: new Date().toISOString(),
                archivedBy: currentUserId
            });

            if (onNewsUpdate) {
                onNewsUpdate();
            }
        } catch (error) {
            console.error('Error archiving news:', error);
        } finally {
            setIsUpdating(false);
        }
    };

    const isRead = news.readBy?.includes(currentUserId);

    return (
        <div className={`rounded-lg border-2 mb-4 ${getPriorityColor(news.priority)} ${!isRead ? 'shadow-md' : ''}`}>
            <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                            <h3 className={`text-xl font-semibold ${!isRead ? 'text-gray-900' : 'text-gray-600'}`}>
                                {news.title}
                                {!isRead && (
                                    <span className="ml-2 w-2 h-2 bg-blue-500 rounded-full inline-block"></span>
                                )}
                            </h3>
                            <span className={`px-2 py-1 rounded text-xs font-medium ${getPriorityBadge(news.priority)}`}>
                                {news.priority || 'normal'}
                            </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                            {formatDate(news.createdAt)} • {news.authorName || t('news.authorUnknown')}
                        </p>
                        <p className={`${!isRead ? 'text-gray-900' : 'text-gray-600'} mb-4`}>
                            {news.content}
                        </p>
                        
                        {news.tags && news.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-4">
                                {news.tags.map((tag, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="flex justify-between items-center">
                    <div className="flex gap-3">
                        {!isRead && (
                            <button
                                onClick={handleMarkAsRead}
                                disabled={isUpdating}
                                className={`px-4 py-2 text-sm font-medium rounded-md transition-colors ${
                                    isUpdating
                                        ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                        : 'bg-blue-600 text-white hover:bg-blue-700'
                                }`}
                            >
                                {isUpdating ? t('news.marking') : t('news.markAsRead')}
                            </button>
                        )}
                        
                        {isRead && (
                            <div className="flex items-center text-green-600 text-sm">
                                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                {t('news.readStatus')}
                            </div>
                        )}

                        {isAdmin && !news.archived && (
                            <button
                                onClick={handleArchive}
                                disabled={isUpdating}
                                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-red-600 transition-colors"
                            >
                                {t('news.archiveButton')}
                            </button>
                        )}
                    </div>
                    
                    <div className="text-right">
                        <p className="text-xs text-gray-500">
                            {t('news.readBy')}: {news.readBy?.length || 0} {t('news.people')}
                        </p>
                        {news.archived && (
                            <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                {t('news.archivedStatus')}
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function News() {
    const auth = getAuth(app);
    const router = useRouter();
    const { t } = useStrings();
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [orgId, setOrgId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);
    const [filterType, setFilterType] = useState('all');
    const [showCreateForm, setShowCreateForm] = useState(false);
    const [newNews, setNewNews] = useState({
        title: '',
        content: '',
        priority: 'medium',
        tags: ''
    });

    const getCurrentUserOrg = async (userId) => {
        try {
            const organizationsSnapshot = await getDocs(collection(db, 'organizations'));
            
            for (const orgDoc of organizationsSnapshot.docs) {
                const userInOrgDoc = await getDoc(doc(db, `organizations/${orgDoc.id}/users/${userId}`));
                if (userInOrgDoc.exists()) {
                    const userData = userInOrgDoc.data();
                    setIsAdmin(userData.role === 'admin');
                    return orgDoc.id;
                }
            }

            return null;
        } catch (error) {
            console.error('Error fetching user organization:', error);
            return null;
        }
    };

    const fetchNews = async (organizationId, userId) => {
        try {
            const querySnapshot = await getDocs(collection(db, `organizations/${organizationId}/news`));
            
            const newsList = querySnapshot.docs.map(doc => {
                const data = doc.data();
                return {
                    id: doc.id,
                    ...data,
                    orgId: organizationId
                };
            }).sort((a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0));
            
            setNews(newsList);
        } catch (error) {
            console.error('Error fetching news:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleNewsUpdate = () => {
        if (orgId && currentUser) {
            fetchNews(orgId, currentUser.uid);
        }
    };

    const handleCreateNews = async (e) => {
        e.preventDefault();
        if (!newNews.title.trim() || !newNews.content.trim()) return;

        try {
            const tags = newNews.tags.split(',').map(tag => tag.trim()).filter(tag => tag);
            
            await addDoc(collection(db, `organizations/${orgId}/news`), {
                title: newNews.title,
                content: newNews.content,
                priority: newNews.priority,
                tags: tags,
                createdAt: new Date().toISOString(),
                authorId: currentUser.uid,
                authorName: currentUser.displayName || currentUser.email,
                readBy: [],
                archived: false
            });

            setNewNews({ title: '', content: '', priority: 'medium', tags: '' });
            setShowCreateForm(false);
            handleNewsUpdate();
        } catch (error) {
            console.error('Error creating news:', error);
            alert(t('news.errorCreating'));
        }
    };

    const filteredNews = news.filter(item => {
        if (filterType === 'all') return !item.archived;
        if (filterType === 'unread') return !item.archived && !item.readBy?.includes(currentUser?.uid);
        if (filterType === 'read') return !item.archived && item.readBy?.includes(currentUser?.uid);
        if (filterType === 'archived') return item.archived;
        return true;
    });

    const newsStats = {
        total: news.filter(n => !n.archived).length,
        unread: news.filter(n => !n.archived && !n.readBy?.includes(currentUser?.uid)).length,
        read: news.filter(n => !n.archived && n.readBy?.includes(currentUser?.uid)).length,
        archived: news.filter(n => n.archived).length
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                const userOrgId = await getCurrentUserOrg(user.uid);
                
                if (userOrgId) {
                    setOrgId(userOrgId);
                    await fetchNews(userOrgId, user.uid);
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

    if (loading) {
        return (
            <div className="flex items-center justify-center h-screen bg-gray-50">
                <div className="text-xl text-gray-700">{t('loading')}</div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar orgId={orgId} />
            <div className="flex-1">
                <Navbar orgId={orgId} />
                <div className="p-8">
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-2xl font-bold text-gray-900">{t('news.organizationNews')}</h1>
                            {isAdmin && (
                                <button
                                    onClick={() => setShowCreateForm(!showCreateForm)}
                                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
                                >
                                    {showCreateForm ? t('news.cancelButton') : t('news.addNewsButton')}
                                </button>
                            )}
                        </div>

                        {/* Форма создания новости */}
                        {showCreateForm && isAdmin && (
                            <div className="bg-white rounded-lg border p-6 mb-6">
                                <h3 className="text-lg font-semibold mb-4">{t('news.createNews')}</h3>
                                <form onSubmit={handleCreateNews}>
                                    <div className="mb-4">
                                        <input
                                            type="text"
                                            placeholder={t('news.newsHeadline')}
                                            value={newNews.title}
                                            onChange={(e) => setNewNews({...newNews, title: e.target.value})}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4">
                                        <textarea
                                            placeholder={t('news.newsContent')}
                                            value={newNews.content}
                                            onChange={(e) => setNewNews({...newNews, content: e.target.value})}
                                            rows="4"
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            required
                                        />
                                    </div>
                                    <div className="mb-4 flex gap-4">
                                        <select
                                            value={newNews.priority}
                                            onChange={(e) => setNewNews({...newNews, priority: e.target.value})}
                                            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        >
                                            <option value="low">{t('news.lowPriority')}</option>
                                            <option value="medium">{t('news.mediumPriority')}</option>
                                            <option value="high">{t('news.highPriority')}</option>
                                        </select>
                                        <input
                                            type="text"
                                            placeholder={t('news.tagsPlaceholder')}
                                            value={newNews.tags}
                                            onChange={(e) => setNewNews({...newNews, tags: e.target.value})}
                                            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <div className="flex gap-2">
                                        <button
                                            type="submit"
                                            className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
                                        >
                                            {t('news.createButton')}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowCreateForm(false)}
                                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
                                        >
                                            {t('news.cancelFormButton')}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}
                        
                        {/* Статистика новостей */}
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
                            <div className="bg-white rounded-lg border p-4">
                                <div className="text-2xl font-bold text-gray-900">{newsStats.total}</div>
                                <div className="text-sm text-gray-600">{t('news.totalNews')}</div>
                            </div>
                            <div className="bg-white rounded-lg border p-4">
                                <div className="text-2xl font-bold text-blue-600">{newsStats.unread}</div>
                                <div className="text-sm text-gray-600">{t('news.unread')}</div>
                            </div>
                            <div className="bg-white rounded-lg border p-4">
                                <div className="text-2xl font-bold text-green-600">{newsStats.read}</div>
                                <div className="text-sm text-gray-600">{t('news.read')}</div>
                            </div>
                            <div className="bg-white rounded-lg border p-4">
                                <div className="text-2xl font-bold text-gray-600">{newsStats.archived}</div>
                                <div className="text-sm text-gray-600">{t('news.archived')}</div>
                            </div>
                        </div>

                        {/* Фильтры */}
                        <div className="flex gap-2 mb-4">
                            <button
                                onClick={() => setFilterType('all')}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${
                                    filterType === 'all'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                {t('news.all')} ({newsStats.total})
                            </button>
                            <button
                                onClick={() => setFilterType('unread')}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${
                                    filterType === 'unread'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                {t('news.unreadFilter')} ({newsStats.unread})
                            </button>
                            <button
                                onClick={() => setFilterType('read')}
                                className={`px-4 py-2 text-sm font-medium rounded-md ${
                                    filterType === 'read'
                                        ? 'bg-blue-600 text-white'
                                        : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                }`}
                            >
                                {t('news.readFilter')} ({newsStats.read})
                            </button>
                            {isAdmin && (
                                <button
                                    onClick={() => setFilterType('archived')}
                                    className={`px-4 py-2 text-sm font-medium rounded-md ${
                                        filterType === 'archived'
                                            ? 'bg-blue-600 text-white'
                                            : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
                                    }`}
                                >
                                    {t('news.archive')} ({newsStats.archived})
                                </button>
                            )}
                        </div>
                    </div>

                    {filteredNews.length === 0 ? (
                        <div className="text-center text-gray-500 py-12">
                            <svg className="w-16 h-16 mx-auto text-gray-400 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                            </svg>
                            <p className="text-xl font-semibold mb-2">{t('news.noNewsMessage')}</p>
                            <p>
                                {filterType === 'all' ? t('news.noNewsDescription') : 
                                 filterType === 'unread' ? t('news.noUnreadNews') :
                                 filterType === 'read' ? t('news.noReadNews') :
                                 t('news.noArchivedNews')}
                            </p>
                        </div>
                    ) : (
                        <div className="max-w-4xl">
                            {filteredNews.map((newsItem) => (
                                <NewsItem
                                    key={newsItem.id}
                                    news={newsItem}
                                    onNewsUpdate={handleNewsUpdate}
                                    currentUserId={currentUser?.uid}
                                    isAdmin={isAdmin}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}