/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config =  {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            keyframes: {
                fadeInUp: {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            },
            animation: {
                fadeInUp: 'fadeInUp 0.6s ease-out forwards',
                fadeInUpDelay: 'fadeInUp 0.6s ease-out forwards 0.3s',
            },
            boxShadow: {
                'text-dark': '0px 4px 8px rgba(31, 31, 31, 0.8)',
                'text-light': '0px 4px 8px rgba(243, 244, 246, 0.8)',
            },
            colors: {
                'light': '#ffffff', // Fill - white
                'dark': '#1f1f1f', // Gray12
                'primary': '#1f2937', // Border / Texts
                'primary-dm': '#f3f4f6',
                'secondary': '#89c4ff', // Light Blue
                'secondary-dm': '#001e3b', // Dark Blue
                'acent': '#9ca3af',
                'mutted': '#6b7280',
            },
        },
    },
    darkMode: 'class', // Enable dark mode support
    plugins: [
        require('tailwind-scrollbar-hide'),
        function({ addUtilities }: Config ) {
            addUtilities({
                '.text-shadow-dark': {
                    textShadow: '0px 4px 8px rgba(31, 31, 31, 0.6)',
                },
                '.text-shadow-light': {
                    textShadow: '0px 4px 8px rgba(243, 244, 246, 0.3)',
                },
            })
        }
    ],
}

export default config;