"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "@/app/api/firebase";
import { collection, getDocs, query, orderBy, doc, getDoc } from "firebase/firestore";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import CreateMeetingModal from "@/app/components/CreateMeetingModal";
import MeetingListItem from "@/app/components/MeetingListItem";
import { useStrings } from "@/app/hooks/useStrings";

export default function Meetings() {
    const auth = getAuth(app);
    const router = useRouter();
    const { t } = useStrings();
    const [meetings, setMeetings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [users, setUsers] = useState({});
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
                    ...data
                };
            });
            
            console.log(`Total meetings to display: ${meetingsList.length}`);
            console.log('Current user ID:', userId);
            
            // Показываем все встречи без фильтрации (временно для отладки)
            setMeetings(meetingsList);
        } catch (error) {
            console.error('Error fetching meetings:', error);
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

    return (
        <div className="flex h-screen bg-gray-50 dark:bg-gray-900">
            <Sidebar orgId={orgId} />
            <div className="flex-1">
                <Navbar orgId={orgId} />
                <div className="p-8">
                    <div className="flex justify-between items-center mb-6">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{t('meetings.title')}</h1>
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
                    {loading ? (
                        <div className="text-center text-gray-700 dark:text-gray-300">{t('loading')}...</div>
                    ) : meetings.length === 0 ? (
                        <div className="text-center text-gray-500 dark:text-gray-400">{t('meetings.noMeetings')}</div>
                    ) : (
                        <div className="max-w-3xl">
                            {meetings.map((meeting) => (
                                <MeetingListItem 
                                    key={meeting.id} 
                                    meeting={meeting}
                                    users={users}
                                />
                            ))}
                        </div>
                    )}
                </div>
                {orgId && (
                    <CreateMeetingModal 
                        isOpen={isModalOpen}
                        onClose={() => setIsModalOpen(false)}
                        onSuccess={handleSuccess}
                        orgId={orgId}
                    />
                )}
            </div>
        </div>
    );
}
