"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app, db } from "@/app/api/firebase";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { useStrings } from "@/app/hooks/useStrings";

export default function NoSubscription() {
    const router = useRouter();
    const auth = getAuth(app);
    const { t } = useStrings();
    const [loading, setLoading] = useState(true);
    const [orgName, setOrgName] = useState('');
    const [subscription, setSubscription] = useState(null);

    useEffect(() => {
        const fetchOrgAndSubscription = async () => {
            const user = auth.currentUser;
            if (!user) {
                router.push('/');
                return;
            }

            try {
                const organizationsSnapshot = await getDocs(collection(db, 'organizations'));
                
                for (const orgDoc of organizationsSnapshot.docs) {
                    const userInOrgDoc = await getDoc(doc(db, `organizations/${orgDoc.id}/users/${user.uid}`));
                    if (userInOrgDoc.exists()) {
                        setOrgName(orgDoc.data().name || t('noSubscription.yourOrganization'));
                        
                        const subDoc = await getDoc(doc(db, `organizations/${orgDoc.id}/subscription/current`));
                        if (subDoc.exists()) {
                            setSubscription(subDoc.data());
                        }
                        break;
                    }
                }
            } catch (error) {
                console.error('Error fetching subscription:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchOrgAndSubscription();
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            router.push('/');
        } catch (error) {
            console.error('Error signing out:', error);
        }
    };

    const formatDate = (dateString) => {
        if (!dateString) return t('noSubscription.notSpecified');
        return new Date(dateString).toLocaleDateString('ru-RU', {
            day: '2-digit',
            month: 'long',
            year: 'numeric'
        });
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-xl text-gray-600">{t('noSubscription.loading')}</div>
            </div>
        );
    }

    const isExpired = subscription?.endDate && new Date(subscription.endDate) < new Date();

    return (
        <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-red-50 to-orange-50 p-4">
            <div className="max-w-2xl w-full bg-white rounded-2xl shadow-2xl p-8">
                {/* Icon */}
                <div className="flex justify-center mb-6">
                    <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center">
                        <svg className="w-12 h-12 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl font-bold text-center text-gray-900 mb-4">
                    {t('noSubscription.accessRestricted')}
                </h1>

                {/* Message */}
                <div className="bg-red-50 border-l-4 border-red-500 p-4 mb-6">
                    <div className="flex">
                        <div className="flex shrink-0">
                            <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                            </svg>
                        </div>
                        <div className="ml-3">
                            <p className="text-sm text-red-700 font-medium">
                                {isExpired
                                    ? t('noSubscription.subscriptionExpired')
                                        .replace('{orgName}', orgName)
                                        .replace('{date}', formatDate(subscription.endDate))
                                    : t('noSubscription.noActiveSubscription').replace('{orgName}', orgName)}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Details */}
                <div className="space-y-4 mb-8">
                    <p className="text-gray-600 text-center">
                        {t('noSubscription.accessRequirement')}
                    </p>
                    
                    {subscription && (
                        <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">{t('noSubscription.status')}:</span>
                                <span className="font-semibold text-red-600">
                                    {isExpired ? t('noSubscription.expired') : t('noSubscription.notActive')}
                                </span>
                            </div>
                            {subscription.endDate && (
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">{t('noSubscription.endDate')}:</span>
                                    <span className="font-semibold text-gray-900">{formatDate(subscription.endDate)}</span>
                                </div>
                            )}
                        </div>
                    )}

                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-6">
                        <h3 className="font-semibold text-blue-900 mb-2">{t('noSubscription.whatToDo')}</h3>
                        <ul className="text-sm text-blue-800 space-y-1">
                            <li>• {t('noSubscription.contactAdmin')}</li>
                            <li>• {t('noSubscription.adminCanRenew')}</li>
                        </ul>
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-center">
                    <button
                        onClick={handleLogout}
                        className="px-8 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium"
                    >
                        {t('noSubscription.logout')}
                    </button>
                </div>

                {/* Footer */}
                <div className="mt-8 pt-6 border-t text-center">
                    <p className="text-xs text-gray-500">
                        {t('noSubscription.footer')}
                    </p>
                </div>
            </div>
        </div>
    );
}
