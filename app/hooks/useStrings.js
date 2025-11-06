"use client";
import { useState, useEffect } from 'react';
import { getString, getCurrentLanguage } from '../assets/strings';

// Функция для применения темы
const applyTheme = (theme) => {
    if (typeof window === 'undefined') return;
    
    if (theme === 'dark') {
        document.documentElement.classList.add('dark');
    } else if (theme === 'light') {
        document.documentElement.classList.remove('dark');
    } else if (theme === 'auto') {
        // Системная тема - проверяем предпочтения пользователя
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (prefersDark) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }
};

// Функция для получения сохраненной темы
const getSavedTheme = () => {
    if (typeof window === 'undefined') return 'light';
    return localStorage.getItem('app-theme') || 'light';
};

// Хук для использования локализованных строк
export const useStrings = () => {
    const [language, setLanguage] = useState('ru');
    
    useEffect(() => {
        // Получаем текущий язык при монтировании компонента
        const currentLang = getCurrentLanguage();
        setLanguage(currentLang);
        
        // Инициализируем тему при загрузке
        const savedTheme = getSavedTheme();
        applyTheme(savedTheme);
        
        // Слушаем изменения системной темы если установлена auto
        const handleSystemThemeChange = (e) => {
            const currentTheme = getSavedTheme();
            if (currentTheme === 'auto') {
                applyTheme('auto');
            }
        };
        
        // Слушаем изменения языка
        const handleLanguageChange = () => {
            const newLang = getCurrentLanguage();
            setLanguage(newLang);
        };
        
        // Слушаем изменения темы
        const handleThemeChange = () => {
            const savedTheme = getSavedTheme();
            applyTheme(savedTheme);
        };
        
        // Добавляем слушатели
        window.addEventListener('language-changed', handleLanguageChange);
        window.addEventListener('theme-changed', handleThemeChange);
        
        // Слушаем изменения системной темы
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        mediaQuery.addEventListener('change', handleSystemThemeChange);
        
        return () => {
            window.removeEventListener('language-changed', handleLanguageChange);
            window.removeEventListener('theme-changed', handleThemeChange);
            mediaQuery.removeEventListener('change', handleSystemThemeChange);
        };
    }, []);
    
    // Функция для получения строки
    const t = (key) => {
        return getString(key, language);
    };
    
    return { t, language, setLanguage };
};

// Функция для изменения языка глобально
export const changeLanguage = (newLanguage) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('app-language', newLanguage);
        // Создаем кастомное событие для уведомления компонентов
        window.dispatchEvent(new Event('language-changed'));
    }
};

// Функция для изменения темы глобально
export const changeTheme = (newTheme) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem('app-theme', newTheme);
        applyTheme(newTheme);
        // Создаем кастомное событие для уведомления компонентов
        window.dispatchEvent(new Event('theme-changed'));
    }
};