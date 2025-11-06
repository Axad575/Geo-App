"use client";
import { useState, useEffect } from 'react';
import { useStrings } from "@/app/hooks/useStrings";

const CreateNoteModal = ({ isOpen, onClose, onSubmit }) => {
    const { t } = useStrings();
    const [formData, setFormData] = useState({
        title: '',
        content: '',
        category: ''
    });

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
        
        console.log('Form submission started with data:', formData);
        
        if (!formData.title.trim()) {
            alert(t('notes.pleaseEnterTitle'));
            return;
        }
        
        if (!formData.content.trim()) {
            alert(t('notes.pleaseEnterContent'));
            return;
        }        console.log('Calling onSubmit with:', formData);
        onSubmit(formData);
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
                className="bg-white dark:bg-gray-800 rounded-lg p-6 w-full max-w-2xl max-h-full overflow-auto my-auto mx-auto shadow-xl"
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

                    {/* Form Actions */}
                    <div className="flex justify-end gap-3 pt-6 border-t border-gray-200">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-6 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 rounded-lg transition-colors"
                        >
                            {t('meetings.cancel')}
                        </button>
                        <button
                            type="submit"
                            disabled={!formData.title.trim() || !formData.content.trim()}
                            className="px-6 py-3 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            {t('notes.createNote')}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateNoteModal;