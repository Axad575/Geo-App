/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Включаем темную тему через класс
  theme: {
    extend: {
      colors: {
        // Можно добавить кастомные цвета для темной темы
        dark: {
          bg: '#1a1a1a',
          surface: '#2d2d2d',
          text: '#ffffff',
        }
      }
    },
  },
  plugins: [],
}