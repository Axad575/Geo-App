"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "@/app/api/firebase";
import { collection, getDocs, query, orderBy, doc, getDoc, updateDoc, addDoc } from "firebase/firestore";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import CreateMeetingModal from "@/app/components/CreateMeetingModal";
import MeetingListItem from "@/app/components/MeetingListItem";
import ParticipantSelector from "@/app/components/participantSelector";
import { useStrings } from "@/app/hooks/useStrings";

// Функция для генерации ссылки на конференцию
const generateConferenceUrl = (meetingTitle, orgId, meetingId) => {
    const roomName = `${orgId}_${meetingTitle.replace(/[^a-zA-Z0-9]/g, '_')}_${meetingId}`;
    return `https://meet.jit.si/${roomName}`;
};

// Функция для отправки уведомлений участникам
const sendMeetingNotifications = async (meeting, orgId, db) => {
    try {
        for (const participantId of meeting.participants || []) {
            await addDoc(collection(db, `organizations/${orgId}/users/${participantId}/notifications`), {
                type: 'meeting_started',
                meetingId: meeting.id,
                meetingTitle: meeting.title,
                conferenceUrl: meeting.conferenceUrl,
                createdAt: new Date().toISOString(),
                read: false,
                message: `Началась встреча: ${meeting.title}`
            });
        }
    } catch (error) {
        console.error('Error sending notifications:', error);
    }
};

// Обновленный компонент для мгновенной встречи
const QuickMeetingModal = ({ isOpen, onClose, onSubmit, orgId }) => {
    const { t } = useStrings();
    
    const [meetingData, setMeetingData] = useState({
        title: '',
        description: '',
        participants: []
    });
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentUser, setCurrentUser] = useState(null);

    useEffect(() => {
        if (isOpen && orgId) {
            fetchUsers();
            const auth = getAuth();
            setCurrentUser(auth.currentUser);
        }
    }, [isOpen, orgId]);

    const fetchUsers = async () => {
        try {
            const usersSnapshot = await getDocs(collection(db, `organizations/${orgId}/users`));
            const usersList = usersSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            setUsers(usersList);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!meetingData.title.trim()) return;

        setLoading(true);
        try {
            await onSubmit(meetingData);
            setMeetingData({
                title: '',
                description: '',
                participants: []
            });
        } catch (error) {
            console.error('Error creating quick meeting:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleParticipantsChange = (participants) => {
        setMeetingData(prev => ({
            ...prev,
            participants
        }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold">{t('meetings.instantMeeting')}</h3>
                    <button
                        onClick={onClose}
                        className="text-gray-400 hover:text-gray-600"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('meetings.meetingTopic')} *
                        </label>
                        <input
                            type="text"
                            required
                            value={meetingData.title}
                            onChange={(e) => setMeetingData(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={t('meetings.enterMeetingTopic')}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('meetings.description')}
                        </label>
                        <textarea
                            value={meetingData.description}
                            onChange={(e) => setMeetingData(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="3"
                            placeholder={t('meetings.briefDescription')}
                        />
                    </div>

                    <ParticipantSelector
                        users={users}
                        selectedParticipants={meetingData.participants}
                        onParticipantsChange={handleParticipantsChange}
                        excludeUserIds={currentUser ? [currentUser.uid] : []}
                        label={t('meetings.participantsLabel')}
                        placeholder={t('meetings.searchParticipants')}
                        maxHeight="250px"
                        showSelectedCount={true}
                    />

                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            disabled={!meetingData.title.trim() || loading}
                            className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center justify-center gap-2"
                        >
                            {loading ? t('meetings.starting') : (
                                <>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                    </svg>
                                    {t('meetings.startConference')}
                                </>
                            )}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={loading}
                            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400 disabled:opacity-50 transition-colors"
                        >
                            {t('cancel')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

// Обновленный компонент карточки встречи
const EnhancedMeetingListItem = ({ meeting, users, onMeetingUpdate }) => {
    const [isUpdating, setIsUpdating] = useState(false);
    const { t } = useStrings();
    
    const formatDate = (timestamp) => {
        if (!timestamp) return '';
        
        try {
            let date;
            if (timestamp.seconds) {
                date = new Date(timestamp.seconds * 1000);
            } else {
                date = new Date(timestamp);
            }
            
            return date.toLocaleDateString('ru-RU', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            });
        } catch (error) {
            console.error('Error formatting date:', error);
            return timestamp.toString();
        }
    };

    const getStatusColor = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed':
                return 'bg-green-100 text-green-800 border-green-200';
            case 'in_progress':
                return 'bg-blue-100 text-blue-800 border-blue-200';
            case 'scheduled':
            case 'upcoming':
            case null:
            case undefined:
                return 'bg-yellow-100 text-yellow-800 border-yellow-200';
            case 'cancelled':
                return 'bg-red-100 text-red-800 border-red-200';
            default:
                return 'bg-gray-100 text-gray-800 border-gray-200';
        }
    };

    const getStatusText = (status) => {
        switch (status?.toLowerCase()) {
            case 'completed': return t('meetings.meetingCompleted');
            case 'in_progress': return t('meetings.meetingInProgress');
            case 'scheduled':
            case 'upcoming':
            case null:
            case undefined:
                return t('meetings.meetingScheduled');
            case 'cancelled': return t('meetings.meetingCancelled');
            default: return t('meetings.meetingScheduled');
        }
    };

    const handleJoinConference = () => {
        if (meeting.conferenceUrl) {
            window.open(meeting.conferenceUrl, '_blank');
        } else {
            alert(t('meetings.conferenceUrlUnavailable'));
        }
    };

    const handleMarkCompleted = async () => {
        if (window.confirm(t('meetings.markAsCompleted'))) {
            setIsUpdating(true);
            try {
                await onMeetingUpdate(meeting.id, {
                    status: 'completed',
                    completedAt: new Date().toISOString()
                });
            } catch (error) {
                console.error('Error marking meeting as completed:', error);
                alert(t('meetings.errorUpdating'));
            } finally {
                setIsUpdating(false);
            }
        }
    };

    const handleStartMeeting = async () => {
        setIsUpdating(true);
        try {
            if (meeting.type === 'instant' && meeting.conferenceUrl) {
                await onMeetingUpdate(meeting.id, {
                    status: 'in_progress',
                    startedAt: new Date().toISOString()
                });
                window.open(meeting.conferenceUrl, '_blank');
            } else {
                const conferenceUrl = generateConferenceUrl(meeting.title, meeting.orgId, meeting.id);
                await onMeetingUpdate(meeting.id, {
                    status: 'in_progress',
                    startedAt: new Date().toISOString(),
                    conferenceUrl: conferenceUrl
                });
                window.open(conferenceUrl, '_blank');
            }
        } catch (error) {
            console.error('Error starting meeting:', error);
            alert(t('meetings.errorStarting'));
        } finally {
            setIsUpdating(false);
        }
    };

    const handleCancelMeeting = async () => {
        if (window.confirm(t('meetings.cancelMeetingConfirm'))) {
            setIsUpdating(true);
            try {
                await onMeetingUpdate(meeting.id, {
                    status: 'cancelled',
                    cancelledAt: new Date().toISOString()
                });
            } catch (error) {
                console.error('Error cancelling meeting:', error);
                alert(t('meetings.errorCancelling'));
            } finally {
                setIsUpdating(false);
            }
        }
    };

    const normalizedStatus = meeting.status?.toLowerCase() || 'scheduled';
    
    const isCompleted = normalizedStatus === 'completed';
    const isInProgress = normalizedStatus === 'in_progress';
    const isScheduled = normalizedStatus === 'scheduled' || 
                      normalizedStatus === 'upcoming' || 
                      !meeting.status || 
                      normalizedStatus === null;
    const isCancelled = normalizedStatus === 'cancelled';

    return (
        <div className="bg-white border border-gray-200 rounded-lg p-6 mb-4 hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg font-semibold text-gray-900">{meeting.title}</h3>
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(meeting.status)}`}>
                            {getStatusText(meeting.status)}
                        </span>
                        {meeting.type === 'instant' && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                {t('meetings.instant')}
                            </span>
                        )}
                        {meeting.conferenceUrl && (
                            <span className="px-2 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-800">
                                {t('meetings.videoConference')}
                            </span>
                        )}
                    </div>
                    
                    {meeting.description && (
                        <p className="text-gray-600 mb-3">{meeting.description}</p>
                    )}
                    
                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
                        <div>
                            <span className="font-medium">{t('meetings.meetingDate')}:</span> {formatDate(meeting.date)}
                        </div>
                        {meeting.location && (
                            <div>
                                <span className="font-medium">{t('meetings.location')}:</span> {meeting.location}
                            </div>
                        )}
                        {meeting.completedAt && (
                            <div>
                                <span className="font-medium">{t('meetings.finishedAt')}:</span> {formatDate(meeting.completedAt)}
                            </div>
                        )}
                        {meeting.startedAt && (
                            <div>
                                <span className="font-medium">{t('meetings.startedAt')}:</span> {formatDate(meeting.startedAt)}
                            </div>
                        )}
                    </div>

                    {meeting.participants && meeting.participants.length > 0 && (
                        <div className="mt-3">
                            <span className="text-sm font-medium text-gray-700">{t('meetings.participants')}: </span>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {meeting.participants.map((participantId) => (
                                    <span 
                                        key={participantId}
                                        className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs"
                                    >
                                        {users[participantId] || participantId}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="flex flex-col gap-2 ml-4">
                    {(isInProgress || (isScheduled && meeting.conferenceUrl)) && meeting.conferenceUrl && (
                        <button
                            onClick={handleJoinConference}
                            className="px-4 py-2 bg-purple-600 text-white text-sm rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-1"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                            </svg>
                            {t('meetings.joinConference')}
                        </button>
                    )}

                    {isCompleted ? (
                        <div className="flex items-center text-green-600 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                            {t('meetings.completed')}
                        </div>
                    ) : isCancelled ? (
                        <div className="flex items-center text-red-600 text-sm">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                            {t('meetings.cancelled')}
                        </div>
                    ) : isInProgress ? (
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={handleMarkCompleted}
                                disabled={isUpdating}
                                className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {isUpdating ? '...' : t('meetings.finish')}
                            </button>
                            <button
                                onClick={handleCancelMeeting}
                                disabled={isUpdating}
                                className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
                            >
                                {isUpdating ? '...' : t('meetings.cancel')}
                            </button>
                        </div>
                    ) : isScheduled ? (
                        <div className="flex flex-col gap-2">
                            <button
                                onClick={handleStartMeeting}
                                disabled={isUpdating}
                                className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                {isUpdating ? '...' : t('meetings.start')}
                            </button>
                            <button
                                onClick={handleMarkCompleted}
                                disabled={isUpdating}
                                className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 disabled:opacity-50 transition-colors flex items-center gap-1"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                </svg>
                                {isUpdating ? '...' : t('meetings.conducted')}
                            </button>
                            <button
                                onClick={handleCancelMeeting}
                                disabled={isUpdating}
                                className="px-4 py-2 bg-red-600 text-white text-sm rounded-lg hover:bg-red-700 disabled:opacity-50 transition-colors"
                            >
                                {isUpdating ? '...' : t('meetings.cancel')}
                            </button>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
};

export default function Meetings() {
    const auth = getAuth(app);
    const router = useRouter();
    const { t } = useStrings();
    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isQuickMeetingModalOpen, setIsQuickMeetingModalOpen] = useState(false);
    const [users, setUsers] = useState({});
    const [orgId, setOrgId] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [filter, setFilter] = useState('all');

    const getCurrentUserOrg = async (userId) => {
        try {
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

    const fetchUsers = async (organizationId) => {
        try {
            const usersSnapshot = await getDocs(collection(db, `organizations/${organizationId}/users`));
            const usersMap = {};
            usersSnapshot.docs.forEach(doc => {
                usersMap[doc.id] = doc.data().name || doc.data().email;
            });
            setUsers(usersMap);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const fetchMeetings = async (organizationId, userId) => {
        try {
            const meetingsRef = collection(db, `organizations/${organizationId}/meetings`);
            const querySnapshot = await getDocs(meetingsRef);
            
            console.log(`Found ${querySnapshot.docs.length} meetings in organization`);
            
            const meetingsList = querySnapshot.docs.map(doc => {
                const data = doc.data();
                console.log('Meeting data:', doc.id, data);
                return {
                    id: doc.id,
                    orgId: organizationId,
                    ...data
                };
            });
            
            meetingsList.sort((a, b) => {
                const dateA = new Date(a.date?.seconds ? a.date.seconds * 1000 : a.date || 0);
                const dateB = new Date(b.date?.seconds ? b.date.seconds * 1000 : b.date || 0);
                return dateB - dateA;
            });
            
            setMeetings(meetingsList);
        } catch (error) {
            console.error('Error fetching meetings:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleMeetingUpdate = async (meetingId, updateData) => {
        try {
            const meetingRef = doc(db, `organizations/${orgId}/meetings/${meetingId}`);
            await updateDoc(meetingRef, {
                ...updateData,
                updatedAt: new Date().toISOString()
            });
            
            await fetchMeetings(orgId, currentUser.uid);
        } catch (error) {
            console.error('Error updating meeting:', error);
            throw error;
        }
    };

    const handleQuickMeeting = async (meetingData) => {
        try {
            const tempId = Date.now().toString();
            const conferenceUrl = generateConferenceUrl(meetingData.title, orgId, tempId);
            
            const newMeeting = {
                ...meetingData,
                date: new Date().toISOString(),
                status: 'in_progress',
                type: 'instant',
                conferenceUrl: conferenceUrl,
                createdAt: new Date().toISOString(),
                createdBy: currentUser.uid,
                startedAt: new Date().toISOString()
            };

            const docRef = await addDoc(collection(db, `organizations/${orgId}/meetings`), newMeeting);
            
            const finalConferenceUrl = generateConferenceUrl(meetingData.title, orgId, docRef.id);
            await updateDoc(docRef, { conferenceUrl: finalConferenceUrl });
            
            window.open(finalConferenceUrl, '_blank');
            
            await sendMeetingNotifications({
                ...newMeeting,
                id: docRef.id,
                conferenceUrl: finalConferenceUrl
            }, orgId, db);
            
            await fetchMeetings(orgId, currentUser.uid);
            setIsQuickMeetingModalOpen(false);
        } catch (error) {
            console.error('Error creating quick meeting:', error);
            throw error;
        }
    };

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setCurrentUser(user);
                const userOrgId = await getCurrentUserOrg(user.uid);
                
                if (userOrgId) {
                    setOrgId(userOrgId);
                    await fetchUsers(userOrgId);
                    await fetchMeetings(userOrgId, user.uid);
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

    const handleSuccess = () => {
        if (orgId && currentUser) {
            fetchMeetings(orgId, currentUser.uid);
        }
    };

    const filteredMeetings = meetings.filter(meeting => {
        if (filter === 'all') return true;
        
        const normalizedStatus = meeting.status?.toLowerCase() || 'scheduled';
        
        if (filter === 'scheduled') {
            return normalizedStatus === 'scheduled' || 
                   normalizedStatus === 'upcoming' || 
                   !meeting.status || 
                   normalizedStatus === null;
        }
        
        return normalizedStatus === filter;
    });

    const stats = {
        total: meetings.length,
        scheduled: meetings.filter(m => {
            const status = m.status?.toLowerCase() || 'scheduled';
            return status === 'scheduled' || 
                   status === 'upcoming' || 
                   !m.status || 
                   status === null;
        }).length,
        in_progress: meetings.filter(m => m.status?.toLowerCase() === 'in_progress').length,
        completed: meetings.filter(m => m.status?.toLowerCase() === 'completed').length,
        cancelled: meetings.filter(m => m.status?.toLowerCase() === 'cancelled').length
    };

    return (
        <div className="flex h-screen bg-gray-50">
            <Sidebar orgId={orgId} />
            <div className="flex-1">
                <Navbar orgId={orgId} />
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900">{t('meetings.title')}</h1>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setIsQuickMeetingModalOpen(true)}
                                className="px-4 py-2 bg-green-600 text-white text-sm font-medium rounded-md hover:bg-green-700 
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                                {t('meetings.instantMeeting')}
                            </button>
                            <button
                                onClick={() => setIsModalOpen(true)}
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 
                                    focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                {t('meetings.scheduleMeeting')}
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-cols-5 gap-4 mb-6">
                        <div className="bg-white rounded-lg shadow p-4">
                            <div className="text-2xl font-bold text-gray-900">{stats.total}</div>
                            <div className="text-sm text-gray-600">{t('meetings.totalMeetings')}</div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <div className="text-2xl font-bold text-yellow-600">{stats.scheduled}</div>
                            <div className="text-sm text-gray-600">{t('meetings.scheduled')}</div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <div className="text-2xl font-bold text-blue-600">{stats.in_progress}</div>
                            <div className="text-sm text-gray-600">{t('meetings.inProgress')}</div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
                            <div className="text-sm text-gray-600">{t('meetings.completed')}</div>
                        </div>
                        <div className="bg-white rounded-lg shadow p-4">
                            <div className="text-2xl font-bold text-red-600">{stats.cancelled}</div>
                            <div className="text-sm text-gray-600">{t('meetings.cancelled')}</div>
                        </div>
                    </div>

                    <div className="flex gap-2 mb-6">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                filter === 'all' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {t('meetings.allMeetings')} ({stats.total})
                        </button>
                        <button
                            onClick={() => setFilter('scheduled')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                filter === 'scheduled' 
                                    ? 'bg-yellow-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {t('meetings.scheduled')} ({stats.scheduled})
                        </button>
                        <button
                            onClick={() => setFilter('in_progress')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                filter === 'in_progress' 
                                    ? 'bg-blue-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {t('meetings.inProgress')} ({stats.in_progress})
                        </button>
                        <button
                            onClick={() => setFilter('completed')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                filter === 'completed' 
                                    ? 'bg-green-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {t('meetings.completed')} ({stats.completed})
                        </button>
                        <button
                            onClick={() => setFilter('cancelled')}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                                filter === 'cancelled' 
                                    ? 'bg-red-600 text-white' 
                                    : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                        >
                            {t('meetings.cancelled')} ({stats.cancelled})
                        </button>
                    </div>

                    {loading ? (
                        <div className="text-center text-gray-700">{t('meetings.loading')}...</div>
                    ) : filteredMeetings.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="text-6xl mb-4">📹</div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {filter === 'all' ? t('meetings.noMeetingsYet') : 
                                 filter === 'scheduled' ? t('meetings.noScheduledMeetings') :
                                 filter === 'in_progress' ? t('meetings.noCurrentMeetings') :
                                 filter === 'completed' ? t('meetings.noCompletedMeetings') :
                                 t('meetings.noCancelledMeetings')}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {filter === 'all' 
                                    ? t('meetings.scheduleOrStartMeeting')
                                    : t('meetings.tryChangeFilter')
                                }
                            </p>
                            {filter === 'all' && (
                                <div className="flex gap-3 justify-center">
                                    <button
                                        onClick={() => setIsQuickMeetingModalOpen(true)}
                                        className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors flex items-center gap-2"
                                    >
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                        </svg>
                                        {t('meetings.instantMeeting')}
                                    </button>
                                    <button
                                        onClick={() => setIsModalOpen(true)}
                                        className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {t('meetings.scheduleMeeting')}
                                    </button>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div className="max-w-4xl">
                            {filteredMeetings.map((meeting) => (
                                <EnhancedMeetingListItem 
                                    key={meeting.id} 
                                    meeting={meeting}
                                    users={users}
                                    onMeetingUpdate={handleMeetingUpdate}
                                />
                            ))}
                        </div>
                    )}
                </div>

                {orgId && (
                    <>
                        <CreateMeetingModal 
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                            onSuccess={handleSuccess}
                            orgId={orgId}
                        />

                        <QuickMeetingModal
                            isOpen={isQuickMeetingModalOpen}
                            onClose={() => setIsQuickMeetingModalOpen(false)}
                            onSubmit={handleQuickMeeting}
                            orgId={orgId}
                        />
                    </>
                )}
            </div>
        </div>
    );
}
