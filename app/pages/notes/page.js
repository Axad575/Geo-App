"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db } from "@/app/api/firebase";
import { 
    collection, 
    getDocs, 
    addDoc, 
    updateDoc, 
    deleteDoc, 
    doc, 
    query, 
    orderBy, 
    where 
} from "firebase/firestore";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import CreateNoteModal from "@/app/components/CreateNoteModal";
import EditNoteModal from "@/app/components/EditNoteModal";
import { useStrings } from "@/app/hooks/useStrings";

export default function Notes() {
    const auth = getAuth(app);
    const router = useRouter();
    const { t } = useStrings();
    const [notes, setNotes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [editingNote, setEditingNote] = useState(null);
    const [currentUser, setCurrentUser] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterBy, setFilterBy] = useState("all"); // all, recent, favorites

    // Authentication check
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                fetchNotes(user.uid);
            } else {
                router.push('/');
            }
        });

        return () => unsubscribe();
    }, [auth, router]);

    // Fetch user's personal notes
    const fetchNotes = async (userId) => {
        try {
            setLoading(true);
            console.log('Fetching notes for user:', userId);
            
            const notesRef = collection(db, 'notes');
            // Сначала попробуем без orderBy, чтобы избежать проблем с индексами
            const q = query(
                notesRef, 
                where("userId", "==", userId)
            );
            const notesSnapshot = await getDocs(q);
            
            const notesList = notesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            // Сортируем на клиенте
            notesList.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            
            console.log('Fetched notes:', notesList);
            setNotes(notesList);
        } catch (error) {
            console.error('Error fetching notes:', error);
            alert('Error loading notes: ' + error.message);
        } finally {
            setLoading(false);
        }
    };

    // Create new note
    const handleCreateNote = async (noteData) => {
        try {
            console.log('Creating note with data:', noteData);
            console.log('Current user:', currentUser);
            
            const newNote = {
                ...noteData,
                userId: currentUser.uid,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                isFavorite: false
            };

            console.log('Final note object:', newNote);
            
            const docRef = await addDoc(collection(db, 'notes'), newNote);
            console.log('Note created with ID:', docRef.id);
            
            // Обновляем список заметок
            await fetchNotes(currentUser.uid);
            setIsCreateModalOpen(false);
            
            alert(t('notes.noteCreatedSuccessfully'));
        } catch (error) {
            console.error('Error creating note:', error);
            alert(t('notes.errorCreatingNote') + ': ' + error.message);
        }
    };

    // Update note
    const handleUpdateNote = async (noteId, noteData) => {
        try {
            const noteRef = doc(db, 'notes', noteId);
            await updateDoc(noteRef, {
                ...noteData,
                updatedAt: new Date().toISOString()
            });
            
            fetchNotes(currentUser.uid);
            setIsEditModalOpen(false);
            setEditingNote(null);
        } catch (error) {
            console.error('Error updating note:', error);
            alert(t('notes.errorUpdatingNote'));
        }
    };

    // Delete note
    const handleDeleteNote = async (noteId) => {
        if (window.confirm(t('notes.confirmDeleteNote'))) {
            try {
                await deleteDoc(doc(db, 'notes', noteId));
                fetchNotes(currentUser.uid);
            } catch (error) {
                console.error('Error deleting note:', error);
                alert(t('notes.errorDeletingNote'));
            }
        }
    };

    // Toggle favorite
    const handleToggleFavorite = async (noteId, currentFavoriteStatus) => {
        try {
            const noteRef = doc(db, 'notes', noteId);
            await updateDoc(noteRef, {
                isFavorite: !currentFavoriteStatus,
                updatedAt: new Date().toISOString()
            });
            fetchNotes(currentUser.uid);
        } catch (error) {
            console.error('Error toggling favorite:', error);
        }
    };

    // Open edit modal
    const handleEditNote = (note) => {
        setEditingNote(note);
        setIsEditModalOpen(true);
    };

    // Filter notes based on search and filter criteria
    const filteredNotes = notes.filter(note => {
        const matchesSearch = note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            note.content.toLowerCase().includes(searchTerm.toLowerCase());
        
        if (filterBy === "favorites") {
            return matchesSearch && note.isFavorite;
        }
        if (filterBy === "recent") {
            const oneWeekAgo = new Date();
            oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
            return matchesSearch && new Date(note.updatedAt) > oneWeekAgo;
        }
        return matchesSearch;
    });

    // Format date
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    // Truncate content for preview
    const truncateContent = (content, maxLength = 150) => {
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength) + '...';
    };

    if (loading) {
        return (
            <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">{t('loading')}...</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-100 dark:bg-gray-900">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                
                <main className="flex-1 overflow-y-auto p-6">
                    {/* Header */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <h1 className="text-3xl font-bold text-gray-900">{t('notes.title')}</h1>
                            <button
                                onClick={() => setIsCreateModalOpen(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                {t('notes.addNote')}
                            </button>
                        </div>

                        {/* Search and Filter */}
                        <div className="flex gap-4 mb-4">
                            <div className="flex-1">
                                <input
                                    type="text"
                                    placeholder={t('notes.searchNotes')}
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>
                            <select
                                value={filterBy}
                                onChange={(e) => setFilterBy(e.target.value)}
                                className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500 bg-right bg-no-repeat bg-contain appearance-none bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
                            >
                                <option value="all">{t('notes.allNotes')}</option>
                                <option value="recent">{t('notes.recent')}</option>
                                <option value="favorites">{t('notes.favorites')}</option>
                            </select>
                        </div>

                        {/* Stats */}
                        <div className="flex gap-4 text-sm text-gray-600">
                            <span>{notes.length} {t('notes.totalNotes')}</span>
                            <span>{notes.filter(n => n.isFavorite).length} {t('notes.favoritesCount')}</span>
                            <span>{filteredNotes.length} {t('notes.showing')}</span>
                        </div>
                    </div>

                    {/* Notes Grid */}
                    {filteredNotes.length === 0 ? (
                        <div className="text-center py-12">
                            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">
                                {searchTerm || filterBy !== "all" ? t('notes.noNotesFound') : t('notes.noNotesYet')}
                            </h3>
                            <p className="text-gray-600 mb-4">
                                {searchTerm || filterBy !== "all" 
                                    ? t('notes.tryAdjusting')
                                    : t('notes.createFirstNote')
                                }
                            </p>
                            {!searchTerm && filterBy === "all" && (
                                <button
                                    onClick={() => setIsCreateModalOpen(true)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    {t('notes.createYourFirstNote')}
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {filteredNotes.map((note) => (
                                <div
                                    key={note.id}
                                    className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 cursor-pointer"
                                >
                                    {/* Note Header */}
                                    <div className="flex justify-between items-start mb-3">
                                        <h3 
                                            className="text-lg font-semibold text-gray-900 line-clamp-2 flex-1"
                                            onClick={() => handleEditNote(note)}
                                        >
                                            {note.title}
                                        </h3>
                                        <div className="flex gap-2 ml-2">
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleToggleFavorite(note.id, note.isFavorite);
                                                }}
                                                className={`p-1 rounded ${note.isFavorite ? 'text-yellow-500' : 'text-gray-400 hover:text-yellow-500'}`}
                                            >
                                                <svg className="w-5 h-5" fill={note.isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                </svg>
                                            </button>
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDeleteNote(note.id);
                                                }}
                                                className="p-1 text-gray-400 hover:text-red-500 rounded"
                                            >
                                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Note Content */}
                                    <div 
                                        className="text-gray-600 mb-4 whitespace-pre-wrap"
                                        onClick={() => handleEditNote(note)}
                                    >
                                        {truncateContent(note.content)}
                                    </div>

                                    {/* Note Footer */}
                                    <div className="flex justify-between items-center text-sm text-gray-500">
                                        <span>{formatDate(note.updatedAt)}</span>
                                        <div className="flex gap-2">
                                            {note.category && (
                                                <span className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 px-2 py-1 rounded-full text-xs">
                                                    {note.category}
                                                </span>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </main>
            </div>

            {/* Modals */}
            <CreateNoteModal
                isOpen={isCreateModalOpen}
                onClose={() => setIsCreateModalOpen(false)}
                onSubmit={handleCreateNote}
            />

            <EditNoteModal
                isOpen={isEditModalOpen}
                onClose={() => {
                    setIsEditModalOpen(false);
                    setEditingNote(null);
                }}
                onSubmit={handleUpdateNote}
                note={editingNote}
            />
        </div>
    );
}
