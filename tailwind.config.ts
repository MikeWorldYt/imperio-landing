/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config =  {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            boxShadow: {
                'text-dark': '0px 4px 8px rgba(31, 31, 31, 0.8)',
                'text-light': '0px 4px 8px rgba(243, 244, 246, 0.8)',
            }
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