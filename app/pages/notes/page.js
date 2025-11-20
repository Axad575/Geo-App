"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app, db, storage } from "@/app/api/firebase";
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
import { 
    ref, 
    uploadBytes, 
    getDownloadURL, 
    deleteObject 
} from "firebase/storage";
import Sidebar from "@/app/components/sidebar";
import Navbar from "@/app/components/navbar";
import CreateNoteModal from "@/app/components/CreateNoteModal";
import EditNoteModal from "@/app/components/EditNoteModal";
import { useStrings } from "@/app/hooks/useStrings";

// Компонент для добавления документа в библиотеку
const AddDocumentModal = ({ isOpen, onClose, onSubmit }) => {
    const { t } = useStrings();
    
    const [documentData, setDocumentData] = useState({
        title: '',
        description: '',
        type: 'article',
        url: '',
        tags: '',
        file: null
    });
    const [uploading, setUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (file.size > 10 * 1024 * 1024) {
                alert(t('notes.fileTooLarge'));
                return;
            }
            
            if (!documentData.title) {
                setDocumentData(prev => ({ 
                    ...prev, 
                    title: file.name.replace(/\.[^/.]+$/, ""),
                    file: file
                }));
            } else {
                setDocumentData(prev => ({ ...prev, file: file }));
            }
        }
    };

    const uploadFileToStorage = async (file, userId) => {
        try {
            const timestamp = new Date().getTime();
            const fileName = `${timestamp}_${file.name}`;
            const storageRef = ref(storage, `documents/${userId}/${fileName}`);
            
            setUploadProgress(25);
            
            const snapshot = await uploadBytes(storageRef, file);
            setUploadProgress(75);
            
            const downloadURL = await getDownloadURL(snapshot.ref);
            setUploadProgress(90);
            
            return {
                name: file.name,
                type: file.type,
                size: file.size,
                url: downloadURL,
                storagePath: snapshot.ref.fullPath,
                lastModified: file.lastModified
            };
        } catch (error) {
            console.error('Error uploading file to storage:', error);
            throw error;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!documentData.title.trim()) return;

        setUploading(true);
        setUploadProgress(0);

        try {
            let fileData = null;
            
            if (documentData.file) {
                const auth = getAuth(app);
                const userId = auth.currentUser?.uid;
                
                if (!userId) {
                    throw new Error(t('auth.loginError'));
                }
                
                fileData = await uploadFileToStorage(documentData.file, userId);
            }

            const submissionData = {
                title: documentData.title,
                description: documentData.description,
                type: documentData.type,
                url: documentData.url,
                tags: documentData.tags.split(',').map(tag => tag.trim()).filter(tag => tag),
                file: fileData
            };

            setUploadProgress(100);
            await onSubmit(submissionData);
            
            setDocumentData({
                title: '',
                description: '',
                type: 'article',
                url: '',
                tags: '',
                file: null
            });
        } catch (error) {
            console.error('Error submitting document:', error);
            alert(t('notes.errorAddingDocument') + ': ' + error.message);
        } finally {
            setUploading(false);
            setUploadProgress(0);
        }
    };

    const removeFile = () => {
        setDocumentData(prev => ({ ...prev, file: null }));
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">{t('notes.addDocument')}</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('notes.titleRequired')}
                        </label>
                        <input
                            type="text"
                            required
                            value={documentData.title}
                            onChange={(e) => setDocumentData(prev => ({ ...prev, title: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={t('notes.documentTitlePlaceholder')}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('notes.description')}
                        </label>
                        <textarea
                            value={documentData.description}
                            onChange={(e) => setDocumentData(prev => ({ ...prev, description: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="3"
                            placeholder={t('notes.descriptionPlaceholder')}
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('notes.type')}
                        </label>
                        <select
                            value={documentData.type}
                            onChange={(e) => setDocumentData(prev => ({ ...prev, type: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="article">{t('notes.article')}</option>
                            <option value="document">{t('notes.document')}</option>
                            <option value="book">{t('notes.book')}</option>
                            <option value="research">{t('notes.researchType')}</option>
                            <option value="video">{t('notes.video')}</option>
                            <option value="pdf">{t('notes.pdf')}</option>
                            <option value="image">{t('notes.image')}</option>
                            <option value="other">{t('notes.otherType')}</option>
                        </select>
                    </div>

                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-4">
                        <div className="text-center">
                            <h4 className="text-sm font-medium text-gray-700 mb-2">
                                {t('notes.chooseMethod')}
                            </h4>
                            
                            <div className="mb-3">
                                <label className="cursor-pointer inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    {t('notes.uploadFile')}
                                    <input
                                        type="file"
                                        onChange={handleFileChange}
                                        className="hidden"
                                        accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.mp4,.mp3,.zip,.rar"
                                        disabled={uploading}
                                    />
                                </label>
                                <p className="text-xs text-gray-500 mt-1">
                                    {t('notes.maxSize')}
                                </p>
                            </div>

                            {documentData.file && (
                                <div className="bg-green-50 border border-green-200 rounded p-3 mb-3">
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <svg className="w-5 h-5 text-green-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                            </svg>
                                            <div>
                                                <p className="text-sm font-medium text-green-800">{documentData.file.name}</p>
                                                <p className="text-xs text-green-600">
                                                    {(documentData.file.size / 1024 / 1024).toFixed(2)} MB
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={removeFile}
                                            disabled={uploading}
                                            className="text-red-500 hover:text-red-700 disabled:opacity-50"
                                        >
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            )}

                            <div className="text-sm text-gray-500 mb-2">{t('notes.orText')}</div>
                            
                            <input
                                type="url"
                                value={documentData.url}
                                onChange={(e) => setDocumentData(prev => ({ ...prev, url: e.target.value }))}
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder={t('notes.addLink')}
                                disabled={!!documentData.file || uploading}
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            {t('notes.tags')}
                        </label>
                        <input
                            type="text"
                            value={documentData.tags}
                            onChange={(e) => setDocumentData(prev => ({ ...prev, tags: e.target.value }))}
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder={t('notes.tagsPlaceholder')}
                            disabled={uploading}
                        />
                    </div>

                    {uploading && (
                        <div className="w-full">
                            <div className="flex justify-between text-sm text-gray-600 mb-1">
                                <span>
                                    {uploadProgress < 25 ? t('notes.preparingFile') :
                                     uploadProgress < 75 ? t('notes.uploadingToStorage') :
                                     uploadProgress < 90 ? t('notes.gettingLink') :
                                     uploadProgress < 100 ? t('notes.savingToDatabase') : t('notes.completed')}
                                </span>
                                <span>{uploadProgress}%</span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div 
                                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                                    style={{ width: `${uploadProgress}%` }}
                                ></div>
                            </div>
                        </div>
                    )}

                    <div className="flex gap-3 pt-4">
                        <button
                            type="submit"
                            disabled={!documentData.title.trim() || uploading}
                            className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {uploading ? t('notes.uploading') : t('notes.add')}
                        </button>
                        <button
                            type="button"
                            onClick={onClose}
                            disabled={uploading}
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

// Компонент DocumentCard
const DocumentCard = ({ document, onDelete }) => {
    const { t } = useStrings();
    
    const getTypeIcon = (type) => {
        switch (type) {
            case 'article': return '📄';
            case 'book': return '📚';
            case 'video': return '🎥';
            case 'research': return '🔬';
            case 'document': return '📋';
            case 'pdf': return '📕';
            case 'image': return '🖼️';
            default: return '📄';
        }
    };

    const getTypeColor = (type) => {
        switch (type) {
            case 'article': return 'bg-blue-100 text-blue-800';
            case 'book': return 'bg-green-100 text-green-800';
            case 'video': return 'bg-purple-100 text-purple-800';
            case 'research': return 'bg-orange-100 text-orange-800';
            case 'document': return 'bg-gray-100 text-gray-800';
            case 'pdf': return 'bg-red-100 text-red-800';
            case 'image': return 'bg-yellow-100 text-yellow-800';
            default: return 'bg-gray-100 text-gray-800';
        }
    };

    const getTypeText = (type) => {
        return t(`notes.${type}`) || type;
    };

    const formatFileSize = (bytes) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handleFileOpen = () => {
        if (document.file && document.file.url) {
            window.open(document.file.url, '_blank');
        }
    };

    return (
        <div className="bg-white rounded-lg shadow-sm border p-4 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-3">
                <div className="flex items-start gap-3 flex-1">
                    <div className="text-2xl">{getTypeIcon(document.type)}</div>
                    <div className="flex-1">
                        <h3 className="font-medium text-gray-900 mb-1 line-clamp-2">
                            {document.url ? (
                                <a 
                                    href={document.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-600 transition-colors"
                                >
                                    {document.title}
                                </a>
                            ) : (
                                <span className="cursor-pointer hover:text-blue-600" onClick={handleFileOpen}>
                                    {document.title}
                                </span>
                            )}
                        </h3>
                        {document.description && (
                            <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                                {document.description}
                            </p>
                        )}
                    </div>
                </div>
                <button
                    onClick={() => onDelete(document.id, document.file?.storagePath)}
                    className="text-gray-400 hover:text-red-500 p-1"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                    </svg>
                </button>
            </div>

            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(document.type)}`}>
                        {getTypeText(document.type)}
                    </span>
                    
                    <div className="flex gap-2">
                        {document.url && (
                            <a 
                                href={document.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 text-xs"
                            >
                                🔗 {t('notes.openLink')}
                            </a>
                        )}
                        {document.file && document.file.url && (
                            <button
                                onClick={handleFileOpen}
                                className="text-green-600 hover:text-green-800 text-xs"
                            >
                                📂 {t('notes.openFile')}
                            </button>
                        )}
                    </div>
                </div>
                
                {document.tags && document.tags.length > 0 && (
                    <div className="flex gap-1">
                        {document.tags.slice(0, 2).map((tag, index) => (
                            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                                #{tag}
                            </span>
                        ))}
                        {document.tags.length > 2 && (
                            <span className="text-gray-400 text-xs">+{document.tags.length - 2}</span>
                        )}
                    </div>
                )}
            </div>
            
            {document.file && (
                <div className="text-xs text-gray-500 mt-2 flex justify-between">
                    <span>📎 {document.file.name}</span>
                    <span>{formatFileSize(document.file.size)}</span>
                </div>
            )}
            
            {document.createdAt && (
                <div className="text-xs text-gray-500 mt-1">
                    {t('notes.added')}: {new Date(document.createdAt).toLocaleDateString()}
                </div>
            )}
        </div>
    );
};

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
    const [filterBy, setFilterBy] = useState("all");
    const [selectedNote, setSelectedNote] = useState(null);

    const [documents, setDocuments] = useState([]);
    const [isAddDocumentModalOpen, setIsAddDocumentModalOpen] = useState(false);
    const [activeTab, setActiveTab] = useState('notes');
    const [librarySearchTerm, setLibrarySearchTerm] = useState("");
    const [libraryFilterBy, setLibraryFilterBy] = useState("all");

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setCurrentUser(user);
                fetchNotes(user.uid);
                fetchDocuments(user.uid);
            } else {
                router.push('/');
            }
        });

        return () => unsubscribe();
    }, [auth, router]);

    const fetchNotes = async (userId) => {
        try {
            setLoading(true);
            const notesRef = collection(db, 'notes');
            const q = query(notesRef, where("userId", "==", userId));
            const notesSnapshot = await getDocs(q);
            
            const notesList = notesSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            notesList.sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));
            setNotes(notesList);
        } catch (error) {
            console.error('Error fetching notes:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchDocuments = async (userId) => {
        try {
            const documentsRef = collection(db, 'documents');
            const q = query(documentsRef, where("userId", "==", userId));
            const documentsSnapshot = await getDocs(q);
            
            const documentsList = documentsSnapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data()
            }));
            
            documentsList.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            setDocuments(documentsList);
        } catch (error) {
            console.error('Error fetching documents:', error);
        }
    };

    const handleCreateDocument = async (documentData) => {
        try {
            const newDocument = {
                ...documentData,
                userId: currentUser.uid,
                createdAt: new Date().toISOString(),
            };

            await addDoc(collection(db, 'documents'), newDocument);
            await fetchDocuments(currentUser.uid);
            setIsAddDocumentModalOpen(false);
        } catch (error) {
            console.error('Error creating document:', error);
            alert(t('notes.errorAddingDocument'));
        }
    };

    const handleDeleteDocument = async (documentId, storagePath) => {
        if (window.confirm(t('notes.deleteDocument'))) {
            try {
                if (storagePath) {
                    try {
                        const fileRef = ref(storage, storagePath);
                        await deleteObject(fileRef);
                    } catch (error) {
                        console.error('Error deleting file from storage:', error);
                    }
                }

                await deleteDoc(doc(db, 'documents', documentId));
                await fetchDocuments(currentUser.uid);
            } catch (error) {
                console.error('Error deleting document:', error);
                alert(t('notes.errorDeletingDocument'));
            }
        }
    };

    const handleCreateNote = async (noteData) => {
        try {
            const newNote = {
                ...noteData,
                userId: currentUser.uid,
                createdAt: new Date().toISOString(),
                updatedAt: new Date().toISOString(),
                isFavorite: false
            };

            await addDoc(collection(db, 'notes'), newNote);
            await fetchNotes(currentUser.uid);
            setIsCreateModalOpen(false);
        } catch (error) {
            console.error('Error creating note:', error);
        }
    };

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
        }
    };

    const handleDeleteNote = async (noteId) => {
        if (window.confirm(t('notes.confirmDeleteNote'))) {
            try {
                await deleteDoc(doc(db, 'notes', noteId));
                fetchNotes(currentUser.uid);
            } catch (error) {
                console.error('Error deleting note:', error);
            }
        }
    };

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

    const handleEditNote = (note) => {
        setEditingNote(note);
        setIsEditModalOpen(true);
    };

    const handleSelectNote = (note) => {
        setSelectedNote(note);
    };

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

    const filteredDocuments = documents.filter(document => {
        const matchesSearch = document.title.toLowerCase().includes(librarySearchTerm.toLowerCase()) ||
                            (document.description && document.description.toLowerCase().includes(librarySearchTerm.toLowerCase())) ||
                            (document.tags && document.tags.some(tag => tag.toLowerCase().includes(librarySearchTerm.toLowerCase())));
        
        if (libraryFilterBy === "all") return matchesSearch;
        return matchesSearch && document.type === libraryFilterBy;
    });

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString(undefined, {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const truncateContent = (content, maxLength = 150) => {
        if (!content) return '';
        if (content.length <= maxLength) return content;
        return content.substring(0, maxLength) + '...';
    };

    if (loading) {
        return (
            <div className="flex h-screen bg-gray-100">
                <Sidebar />
                <div className="flex-1 flex flex-col">
                    <Navbar />
                    <div className="flex-1 flex items-center justify-center">
                        <div className="text-center">
                            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
                            <p className="mt-4 text-gray-600">{t('loading')}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <Navbar />
                
                <main className="flex-1 overflow-y-auto p-6">
                    {/* Header with Tabs */}
                    <div className="mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <div className="flex items-center gap-6">
                                <h1 className="text-3xl font-bold text-gray-900">{t('nav.notes')}</h1>
                                
                                {/* Tab Navigation */}
                                <div className="flex bg-gray-200 rounded-lg p-1">
                                    <button
                                        onClick={() => setActiveTab('notes')}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                            activeTab === 'notes' 
                                                ? 'bg-white text-blue-600 shadow-sm' 
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        📝 {t('notes.notesTab')} ({notes.length})
                                    </button>
                                    <button
                                        onClick={() => setActiveTab('library')}
                                        className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                                            activeTab === 'library' 
                                                ? 'bg-white text-blue-600 shadow-sm' 
                                                : 'text-gray-600 hover:text-gray-900'
                                        }`}
                                    >
                                        📚 {t('notes.libraryTab')} ({documents.length})
                                    </button>
                                </div>
                            </div>
                            
                            <button
                                onClick={() => activeTab === 'notes' ? setIsCreateModalOpen(true) : setIsAddDocumentModalOpen(true)}
                                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                </svg>
                                {activeTab === 'notes' ? t('notes.newNote') : t('notes.addToLibrary')}
                            </button>
                        </div>

                        {/* Search and Filter - Notes */}
                        {activeTab === 'notes' && (
                            <>
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
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="all">{t('notes.allNotes')}</option>
                                        <option value="recent">{t('notes.recent')}</option>
                                        <option value="favorites">{t('notes.favorites')}</option>
                                    </select>
                                </div>

                                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                                    <span>{notes.length} {t('notes.totalNotes')}</span>
                                    <span>{notes.filter(n => n.isFavorite).length} {t('notes.favoritesCount')}</span>
                                    <span>{filteredNotes.length} {t('notes.showing')}</span>
                                </div>
                            </>
                        )}

                        {/* Search and Filter - Library */}
                        {activeTab === 'library' && (
                            <>
                                <div className="flex gap-4 mb-4">
                                    <div className="flex-1">
                                        <input
                                            type="text"
                                            placeholder={t('notes.searchLibrary')}
                                            value={librarySearchTerm}
                                            onChange={(e) => setLibrarySearchTerm(e.target.value)}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                        />
                                    </div>
                                    <select
                                        value={libraryFilterBy}
                                        onChange={(e) => setLibraryFilterBy(e.target.value)}
                                        className="px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-500"
                                    >
                                        <option value="all">{t('notes.allTypes')}</option>
                                        <option value="article">{t('notes.articles')}</option>
                                        <option value="book">{t('notes.books')}</option>
                                        <option value="video">{t('notes.videos')}</option>
                                        <option value="research">{t('notes.research')}</option>
                                        <option value="document">{t('notes.documents')}</option>
                                        <option value="pdf">{t('notes.pdfs')}</option>
                                        <option value="image">{t('notes.images')}</option>
                                        <option value="other">{t('notes.other')}</option>
                                    </select>
                                </div>

                                <div className="flex gap-4 text-sm text-gray-600 mb-4">
                                    <span>{documents.length} {t('notes.totalDocuments')}</span>
                                    <span>{filteredDocuments.length} {t('notes.shown')}</span>
                                </div>
                            </>
                        )}
                    </div>

                    {/* Content Area */}
                    {activeTab === 'notes' ? (
                        filteredNotes.length === 0 ? (
                            <div className="text-center py-12">
                                <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                </svg>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    {searchTerm || filterBy !== "all" ? t('notes.noNotesFound') : t('notes.noNotesYet')}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {searchTerm || filterBy !== "all" 
                                        ? t('notes.tryChangingFilter')
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
                            <div className="flex gap-4 h-[calc(100vh-280px)]">
                                {/* Left Panel - Notes List */}
                                <div className="w-80 bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
                                    <div className="flex-1 overflow-y-auto">
                                        {filteredNotes.map((note) => (
                                            <div
                                                key={note.id}
                                                onClick={() => handleSelectNote(note)}
                                                className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition-colors ${
                                                    selectedNote?.id === note.id ? 'bg-blue-50 border-l-4 border-l-blue-600' : ''
                                                }`}
                                            >
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="font-semibold text-gray-900 line-clamp-1 flex-1">
                                                        {note.title}
                                                    </h3>
                                                    {note.isFavorite && (
                                                        <svg className="w-4 h-4 text-yellow-500 flex shrink-0 ml-2" fill="currentColor" viewBox="0 0 24 24">
                                                            <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                        </svg>
                                                    )}
                                                </div>
                                                <p className="text-sm text-gray-600 line-clamp-2 mb-2">
                                                    {truncateContent(note.content, 80)}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <span className="text-xs text-gray-500">
                                                        {formatDate(note.updatedAt)}
                                                    </span>
                                                    {note.category && (
                                                        <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                                                            {note.category}
                                                        </span>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Panel - Note Detail */}
                                <div className="flex-1 bg-white rounded-lg shadow-md overflow-hidden">
                                    {selectedNote ? (
                                        <div className="h-full flex flex-col">
                                            {/* Note Header */}
                                            <div className="p-6 border-b border-gray-200">
                                                <div className="flex items-start justify-between mb-4">
                                                    <h1 className="text-2xl font-bold text-gray-900 flex-1">
                                                        {selectedNote.title}
                                                    </h1>
                                                    <div className="flex gap-2 ml-4">
                                                        <button
                                                            onClick={() => handleToggleFavorite(selectedNote.id, selectedNote.isFavorite)}
                                                            className={`p-2 rounded-lg transition-colors ${
                                                                selectedNote.isFavorite 
                                                                    ? 'text-yellow-500 bg-yellow-50 hover:bg-yellow-100' 
                                                                    : 'text-gray-400 hover:text-yellow-500 hover:bg-gray-100'
                                                            }`}
                                                            title={selectedNote.isFavorite ? t('notes.removeFromFavorites') : t('notes.addToFavorites')}
                                                        >
                                                            <svg className="w-5 h-5" fill={selectedNote.isFavorite ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => handleEditNote(selectedNote)}
                                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                                            title={t('edit')}
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                                            </svg>
                                                        </button>
                                                        <button
                                                            onClick={() => {
                                                                handleDeleteNote(selectedNote.id);
                                                                setSelectedNote(null);
                                                            }}
                                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                                            title={t('delete')}
                                                        >
                                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                                            </svg>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 text-sm text-gray-500">
                                                    <span>{t('notes.created')}: {formatDate(selectedNote.createdAt)}</span>
                                                    <span>•</span>
                                                    <span>{t('notes.lastUpdated')}: {formatDate(selectedNote.updatedAt)}</span>
                                                    {selectedNote.category && (
                                                        <>
                                                            <span>•</span>
                                                            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
                                                                {selectedNote.category}
                                                            </span>
                                                        </>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Note Content */}
                                            <div className="flex-1 overflow-y-auto p-6">
                                                <div className="prose max-w-none">
                                                    <pre className="whitespace-pre-wrap font-sans text-gray-700 leading-relaxed">
                                                        {selectedNote.content}
                                                    </pre>
                                                </div>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="h-full flex items-center justify-center text-gray-400">
                                            <div className="text-center">
                                                <svg className="w-16 h-16 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                                </svg>
                                                <p className="text-lg">{t('notes.selectNote')}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        )
                    ) : (
                        filteredDocuments.length === 0 ? (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">📚</div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">
                                    {librarySearchTerm || libraryFilterBy !== "all" ? t('notes.noDocuments') : t('notes.libraryEmpty')}
                                </h3>
                                <p className="text-gray-600 mb-4">
                                    {librarySearchTerm || libraryFilterBy !== "all" 
                                        ? t('notes.tryChangingLibraryFilter')
                                        : t('notes.addFirstDocument')
                                    }
                                </p>
                                {!librarySearchTerm && libraryFilterBy === "all" && (
                                    <button
                                        onClick={() => setIsAddDocumentModalOpen(true)}
                                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        {t('notes.createFirstDocumentBtn')}
                                    </button>
                                )}
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                {filteredDocuments.map((document) => (
                                    <DocumentCard
                                        key={document.id}
                                        document={document}
                                        onDelete={handleDeleteDocument}
                                    />
                                ))}
                            </div>
                        )
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

            <AddDocumentModal
                isOpen={isAddDocumentModalOpen}
                onClose={() => setIsAddDocumentModalOpen(false)}
                onSubmit={handleCreateDocument}
            />
        </div>
    );
}