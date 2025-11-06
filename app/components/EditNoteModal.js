"use client";
import { useState, useEffect } from 'react';
import { useStrings } from "@/app/hooks/useStrings";

const EditNoteModal = ({ isOpen, onClose, onSubmit, note }) => {
    const { t, language } = useStrings();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: ''
    });

    // Получаем локаль для форматирования даты в зависимости от языка
    const getLocale = () => {
        switch (language) {
            case 'ru': return 'ru-RU';
            case 'en': return 'en-GB';
            case 'uz': return 'uz-UZ';
            default: return 'en-GB';
        }
    };

    const getCategories = () => [
        { key: 'personal', label: t('notes.categories.personal') },
        { key: 'work', label: t('notes.categories.work') },
        { key: 'ideas', label: t('notes.categories.ideas') },
        { key: 'tasks', label: t('notes.categories.tasks') },
        { key: 'meetings', label: t('notes.categories.meetings') },
        { key: 'research', label: t('notes.categories.research') },
        { key: 'other', label: t('notes.categories.other') }
    ];

    // Initialize form data when note changes
    useEffect(() => {
        if (note) {
            setFormData({
                title: note.title || '',
                content: note.content || '',
                category: note.category || ''
            });
        }
    }, [note]);

    // Reset form when modal closes
    useEffect(() => {
        if (!isOpen) {
            setFormData({
                title: '',
                content: '',
                category: ''
            });
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

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formData.title.trim()) {
            alert(t('notes.pleaseEnterTitle'));
            return;
        }
        
        if (!formData.content.trim()) {
            alert(t('notes.pleaseEnterContent'));
            return;
        }        if (!note?.id) {
            alert('Error: Note ID not found');
            return;
        }

        onSubmit(note.id, formData);
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({
            ...prev,
            [field]: value
        }));
    };

    const formatDate = (dateString) => {
        if (!dateString) return '';
        const date = new Date(dateString);
        return date.toLocaleDateString(getLocale(), {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    if (!isOpen || !note) return null;

    return (
        <div 
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-y-auto"
            onClick={(e) => {
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
        >
            <div 
                className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-full overflow-auto my-auto mx-auto shadow-xl"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="flex justify-between items-center mb-3">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-900">{t('notes.editNote')}</h2>
                        <div className="text-sm text-gray-500 mt-1">
                            <span>{t('notes.created')}: {formatDate(note.createdAt)}</span>
                            {note.updatedAt !== note.createdAt && (
                                <span className="ml-4">{t('notes.lastUpdated')}: {formatDate(note.updatedAt)}</span>
                            )}
                        </div>
                    </div>
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

                    {/* Note Status */}
                    {note.isFavorite && (
                        <div className="flex items-center gap-2 text-yellow-600 bg-yellow-50 px-3 py-2 rounded-lg">
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                            </svg>
                            <span className="text-sm font-medium">{t('notes.markedAsFavorite')}</span>
                        </div>
                    )}

                    {/* Form Actions */}
                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
                        >
                            {t('meetings.cancel')}
                        </button>
                        <button
                            type="submit"
                            disabled={!formData.title.trim() || !formData.content.trim()}
                            className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {t('notes.updateNote')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditNoteModal;