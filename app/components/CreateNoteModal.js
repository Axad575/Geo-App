"use client";
import { useState, useEffect } from 'react';
import { useStrings } from "@/app/hooks/useStrings";
import { uploadNoteFile } from '@/app/utils/fileStorage';

const CreateNoteModal = ({ isOpen, onClose, onSubmit, project, user }) => {
    const { t } = useStrings();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: ''
    });
    const [attachedFiles, setAttachedFiles] = useState([]);
    const [uploadingFiles, setUploadingFiles] = useState(false);

    const getCategories = () => [
        { key: 'personal', label: t('notes.categories.personal') },
        { key: 'work', label: t('notes.categories.work') },
        { key: 'ideas', label: t('notes.categories.ideas') },
        { key: 'tasks', label: t('notes.categories.tasks') },
        { key: 'meetings', label: t('notes.categories.meetings') },
        { key: 'research', label: t('notes.categories.research') },
        { key: 'other', label: t('notes.categories.other') }
    ];

    // Reset form when modal opens/closes
    useEffect(() => {
        if (!isOpen) {
            setFormData({
                title: '',
                content: '',
                category: ''
            });
            setAttachedFiles([]);
        }
    }, [isOpen]);

    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Функция для обработки выбора файлов
    const handleFileSelect = async (files) => {
        if (!files || files.length === 0) return;
        
        setUploadingFiles(true);
        const uploadedFiles = [];
        
        try {
            for (const file of Array.from(files)) {
                // Проверка размера файла (максимум 10MB)
                if (file.size > 10 * 1024 * 1024) {
                    alert(t('notes.fileTooLarge').replace('{fileName}', file.name));
                    continue;
                }
                
                // Создаем временный ID для заметки
                const tempNoteId = Date.now().toString();
                
                const uploadedFile = await uploadNoteFile(
                    file, 
                    project?.id || 'temp', 
                    tempNoteId, 
                    user?.uid || 'anonymous'
                );
                
                uploadedFiles.push(uploadedFile);
            }
            
            setAttachedFiles(prev => [...prev, ...uploadedFiles]);
        } catch (error) {
            console.error('File upload error:', error);
            alert(t('notes.fileUploadError'));
        } finally {
            setUploadingFiles(false);
        }
    };

    // Функция удаления файла
    const removeFile = (index) => {
        setAttachedFiles(prev => prev.filter((_, i) => i !== index));
    };

    // Функция для получения иконки файла
    const getFileIcon = (file) => {
        if (file.type?.startsWith('image/')) return '🖼️';
        if (file.type?.includes('pdf')) return '📄';
        if (file.name?.endsWith('.kml') || file.name?.endsWith('.gpx')) return '🗺️';
        return '📎';
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        console.log('Form submission started with data:', formData);
        
        if (!formData.title.trim()) {
            alert(t('notes.pleaseEnterTitle'));
            return;
        }
        
        if (!formData.content.trim()) {
            alert(t('notes.pleaseEnterContent'));
            return;
        }
        
        console.log('Calling onSubmit with:', { ...formData, attachments: attachedFiles });
        onSubmit({ ...formData, attachments: attachedFiles });
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    if (!isOpen) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div 
                className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-full overflow-auto my-auto mx-auto shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-3">
                    <h2 className="text-2xl font-semibold text-gray-900">{t('notes.createNewNote')}</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-3">
                    {/* Title */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('notes.noteTitle')} <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            required
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            placeholder={t('notes.enterNoteTitle')}
                            maxLength={100}
                        />
                        <div className="text-right text-xs text-gray-500 mt-1">
                            {formData.title.length}/100
                        </div>
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('notes.categoryOptional')}
                        </label>
                        <select
                            value={formData.category}
                            onChange={(e) => handleInputChange('category', e.target.value)}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                            <option value="">{t('notes.selectCategory')}</option>
                            {getCategories().map(category => (
                                <option key={category.key} value={category.key}>
                                    {category.label}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Content */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('notes.noteContent')} <span className="text-red-500">*</span>
                        </label>
                        <textarea
                            required
                            value={formData.content}
                            onChange={(e) => handleInputChange('content', e.target.value)}
                            rows={12}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-vertical"
                            placeholder={t('notes.writeNoteContent')}
                            maxLength={5000}
                        />
                        <div className="text-right text-xs text-gray-500 mt-1">
                            {formData.content.length}/5000
                        </div>
                    </div>

                    {/* File Upload Section */}
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            {t('files.attachments')} 📎
                        </label>
                        
                        {/* File Drop Zone */}
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-blue-400 transition-colors">
                            <input
                                type="file"
                                multiple
                                id="file-upload"
                                className="hidden"
                                onChange={(e) => handleFileSelect(e.target.files)}
                                accept="image/*,application/pdf,.doc,.docx,.txt,.csv,.kml,.gpx"
                            />
                            
                            <label htmlFor="file-upload" className="cursor-pointer">
                                <div className="space-y-2">
                                    <svg className="w-8 h-8 mx-auto text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                    <p className="text-sm text-gray-500">
                                        {uploadingFiles ? t('notes.uploadingFiles') : t('notes.fileDropZone')}
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        {t('notes.fileDropHint')}
                                    </p>
                                </div>
                            </label>
                        </div>

                        {/* Attached Files List */}
                        {attachedFiles.length > 0 && (
                            <div className="mt-3 space-y-2">
                                <p className="text-sm font-medium text-gray-700">
                                    {t('notes.attachedFiles')} ({attachedFiles.length}):
                                </p>
                                {attachedFiles.map((file, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded hover:bg-gray-100 transition-colors">
                                        <div className="flex items-center space-x-2">
                                            <span className="text-sm">
                                                {getFileIcon(file)}
                                            </span>
                                            <div>
                                                <p className="text-sm font-medium text-gray-700">
                                                    {file.name}
                                                </p>
                                                <p className="text-xs text-gray-500">
                                                    {(file.size / 1024 / 1024).toFixed(2)} {t('notes.mb')}
                                                </p>
                                            </div>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={() => removeFile(index)}
                                            className="text-red-500 hover:text-red-700 text-sm p-2"
                                        >
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Form Actions */}
                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            {t('cancel')}
                        </button>
                        <button
                            type="submit"
                            disabled={!formData.title.trim() || !formData.content.trim() || uploadingFiles}
                            className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {uploadingFiles ? t('notes.uploadingFiles') : t('notes.createNote')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNoteModal;