"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "@/app/api/firebase";
import { collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, where, orderBy } from "firebase/firestore";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import { useStrings } from "@/app/hooks/useStrings";

export default function Tickets() {
    const auth = getAuth(app);
    const router = useRouter();
    const { t, language } = useStrings();
    
    const [currentUser, setCurrentUser] = useState(null);
    const [orgId, setOrgId] = useState(null);
    const [loading, setLoading] = useState(true);
    const [submitting, setSubmitting] = useState(false);
    const [tickets, setTickets] = useState([]);
    const [showForm, setShowForm] = useState(false);
    const [activeTab, setActiveTab] = useState('my'); // 'my' или 'all'
    
    const [ticketData, setTicketData] = useState({
        title: '',
        description: '',
        type: 'suggestion',
        priority: 'medium'
    });

    const getLocale = () => {
        switch (language) {
            case 'ru': return 'ru-RU';
            case 'en': return 'en-GB';
            case 'uz': return 'uz-UZ';
            default: return 'en-GB';
        }
    };

    // Получение текущей организации пользователя
    const getCurrentUserOrg = async (userId) => {
        try {
            const organizationsSnapshot = await getDocs(collection(db, 'organizations'));
            
            for (const orgDoc of organizationsSnapshot.docs) {
                const userInOrgDoc = await getDoc(doc(db, `organizations/${orgDoc.id}/users/${userId}`));
                if (userInOrgDoc.exists()) {
                    return { 
                        orgId: orgDoc.id, 
                        userData: userInOrgDoc.data() 
                    };
                }
            }
            return null;
        } catch (error) {
            console.error('Error fetching user organization:', error);
            return null;
        }
    };

    // Загрузка тикетов
    const fetchTickets = async (organizationId, userId) => {
        try {
            const ticketsRef = collection(db, `organizations/${organizationId}/tickets`);
            const querySnapshot = await getDocs(query(ticketsRef, orderBy('createdAt', 'desc')));
            
            const ticketsList = querySnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            setTickets(ticketsList);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                const orgInfo = await getCurrentUserOrg(user.uid);
                if (orgInfo) {
                    setOrgId(orgInfo.orgId);
                    await fetchTickets(orgInfo.orgId, user.uid);
                }
                setLoading(false);
            } else {
                router.push('/auth/login');
            }
        });

        return () => unsubscribe();
    }, [router]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!ticketData.title.trim() || !ticketData.description.trim()) {
            alert(t('tickets.fillAllFields'));
            return;
        }

        setSubmitting(true);

        try {
            const ticketRef = collection(db, `organizations/${orgId}/tickets`);
            await addDoc(ticketRef, {
                ...ticketData,
                userId: currentUser.uid,
                userEmail: currentUser.email,
                userName: currentUser.displayName || currentUser.email,
                status: 'pending',
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString()
            });

            // Очистка формы
            setTicketData({
                title: '',
                description: '',
                type: 'suggestion',
                priority: 'medium'
            });
            
            setShowForm(false);
            
            // Обновляем список тикетов
            await fetchTickets(orgId, currentUser.uid);
            
            alert(t('tickets.ticketSubmitted'));
        } catch (error) {
            console.error('Error submitting ticket:', error);
            alert(t('tickets.submitError'));
        } finally {
            setSubmitting(false);
        }
    };

    const handleDeleteTicket = async (ticketId) => {
        if (!confirm(t('tickets.confirmDelete'))) return;

        try {
            await deleteDoc(doc(db, `organizations/${orgId}/tickets/${ticketId}`));
            await fetchTickets(orgId, currentUser.uid);
            alert(t('tickets.ticketDeleted'));
        } catch (error) {
            console.error('Error deleting ticket:', error);
            alert(t('tickets.deleteError'));
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        try {
            return new Date(dateString).toLocaleDateString(getLocale(), {
                day: '2-digit',
                month: '2-digit',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            return dateString;
        }
    };

    const getStatusBadge = (status) => {
        const statusColors = {
            pending: 'bg-yellow-100 text-yellow-800',
            in_progress: 'bg-blue-100 text-blue-800',
            resolved: 'bg-green-100 text-green-800',
            rejected: 'bg-red-100 text-red-800'
        };
        
        const statusTexts = {
            pending: t('tickets.pending'),
            in_progress: t('tickets.inProgress'),
            resolved: t('tickets.resolved'),
            rejected: t('tickets.rejected')
        };

        return (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusColors[status] || statusColors.pending}`}>
                {statusTexts[status] || status}
            </span>
        );
    };

    const getTypeBadge = (type) => {
        const typeColors = {
            suggestion: 'bg-purple-100 text-purple-800',
            bug: 'bg-red-100 text-red-800',
            feature: 'bg-blue-100 text-blue-800',
            question: 'bg-gray-100 text-gray-800',
            other: 'bg-gray-100 text-gray-800'
        };
        
        const typeTexts = {
            suggestion: t('tickets.suggestion'),
            bug: t('tickets.bug'),
            feature: t('tickets.feature'),
            question: t('tickets.question'),
            other: t('tickets.other')
        };

        return (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${typeColors[type] || typeColors.other}`}>
                {typeTexts[type] || type}
            </span>
        );
    };

    const getPriorityBadge = (priority) => {
        const priorityColors = {
            low: 'bg-green-100 text-green-800',
            medium: 'bg-yellow-100 text-yellow-800',
            high: 'bg-orange-100 text-orange-800',
            critical: 'bg-red-100 text-red-800'
        };
        
        const priorityTexts = {
            low: t('tickets.lowPriority'),
            medium: t('tickets.mediumPriority'),
            high: t('tickets.highPriority'),
            critical: t('tickets.criticalPriority')
        };

        return (
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColors[priority] || priorityColors.medium}`}>
                {priorityTexts[priority] || priority}
            </span>
        );
    };

    const filteredTickets = activeTab === 'my' 
        ? tickets.filter(ticket => ticket.userId === currentUser?.uid)
        : tickets;

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
                    <p className="mt-4 text-gray-600">{t('loading')}...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 flex">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Navbar />
                <main className="flex-1 p-6">
                    <div className="max-w-6xl mx-auto">
                        {/* Header */}
                        <div className="flex justify-between items-center mb-6">
                            <div>
                                <h1 className="text-3xl font-bold text-gray-900">{t('tickets.title')}</h1>
                                <p className="text-gray-600 mt-1">{t('tickets.subtitle')}</p>
                            </div>
                            <button
                                onClick={() => setShowForm(!showForm)}
                                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                {t('tickets.createTicket')}
                            </button>
                        </div>

                        {/* Create Form */}
                        {showForm && (
                            <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
                                <h2 className="text-xl font-semibold mb-4">{t('tickets.newTicket')}</h2>
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {/* Title */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('tickets.ticketTitle')} <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            type="text"
                                            required
                                            value={ticketData.title}
                                            onChange={(e) => setTicketData(prev => ({ ...prev, title: e.target.value }))}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                            placeholder={t('tickets.enterTitle')}
                                            disabled={submitting}
                                        />
                                    </div>

                                    {/* Type and Priority */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                {t('tickets.type')}
                                            </label>
                                            <select
                                                value={ticketData.type}
                                                onChange={(e) => setTicketData(prev => ({ ...prev, type: e.target.value }))}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                disabled={submitting}
                                            >
                                                <option value="suggestion">{t('tickets.suggestion')}</option>
                                                <option value="bug">{t('tickets.bug')}</option>
                                                <option value="feature">{t('tickets.feature')}</option>
                                                <option value="question">{t('tickets.question')}</option>
                                                <option value="other">{t('tickets.other')}</option>
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                {t('tickets.priority')}
                                            </label>
                                            <select
                                                value={ticketData.priority}
                                                onChange={(e) => setTicketData(prev => ({ ...prev, priority: e.target.value }))}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                                disabled={submitting}
                                            >
                                                <option value="low">{t('tickets.lowPriority')}</option>
                                                <option value="medium">{t('tickets.mediumPriority')}</option>
                                                <option value="high">{t('tickets.highPriority')}</option>
                                                <option value="critical">{t('tickets.criticalPriority')}</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* Description */}
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            {t('tickets.description')} <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            required
                                            value={ticketData.description}
                                            onChange={(e) => setTicketData(prev => ({ ...prev, description: e.target.value }))}
                                            rows={5}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-vertical"
                                            placeholder={t('tickets.enterDescription')}
                                            disabled={submitting}
                                        />
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex gap-3">
                                        <button
                                            type="submit"
                                            disabled={submitting}
                                            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                        >
                                            {submitting ? t('tickets.submitting') : t('tickets.submit')}
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowForm(false)}
                                            disabled={submitting}
                                            className="px-6 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 transition-colors"
                                        >
                                            {t('cancel')}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        )}

                        {/* Tabs */}
                        <div className="bg-white rounded-lg shadow mb-6">
                            <div className="border-b border-gray-200">
                                <nav className="flex space-x-8 px-6">
                                    <button
                                        onClick={() => setActiveTab('my')}
                                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            activeTab === 'my'
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        {t('tickets.myTickets')} ({tickets.filter(t => t.userId === currentUser?.uid).length})
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('all')}
                                        className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                                            activeTab === 'all'
                                                ? 'border-blue-500 text-blue-600'
                                                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                        }`}
                                    >
                                        {t('tickets.allTickets')} ({tickets.length})
                                    </button>
                                </nav>
                            </div>
                        </div>

                        {/* Tickets List */}
                        <div className="space-y-4">
                            {filteredTickets.length === 0 ? (
                                <div className="bg-white rounded-lg shadow p-12 text-center">
                                    <div className="text-6xl mb-4">📋</div>
                                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                                        {t('tickets.noTickets')}
                                    </h3>
                                    <p className="text-gray-600">
                                        {t('tickets.noTicketsDescription')}
                                    </p>
                                </div>
                            ) : (
                                filteredTickets.map(ticket => (
                                    <div key={ticket.id} className="bg-white rounded-lg shadow hover:shadow-md transition-shadow p-6">
                                        <div className="flex justify-between items-start mb-4">
                                            <div className="flex-1">
                                                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                                                    {ticket.title}
                                                </h3>
                                                <div className="flex items-center gap-2 mb-3">
                                                    {getTypeBadge(ticket.type)}
                                                    {getPriorityBadge(ticket.priority)}
                                                    {getStatusBadge(ticket.status)}
                                                </div>
                                                <p className="text-gray-600 text-sm mb-3">
                                                    {ticket.description}
                                                </p>
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                                        </svg>
                                                        {ticket.userName}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                        </svg>
                                                        {formatDate(ticket.createdAt)}
                                                    </span>
                                                </div>
                                            </div>
                                            {ticket.userId === currentUser?.uid && (
                                                <button
                                                    onClick={() => handleDeleteTicket(ticket.id)}
                                                    className="text-red-600 hover:text-red-800 p-2"
                                                    title={t('tickets.delete')}
                                                >
                                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                    </svg>
                                                </button>
                                            )}
                                        </div>
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}