/** @type {import('tailwindcss').Config} */
import type { Config } from 'tailwindcss';

const config: Config =  {
    content: [
        './src/**/*.{astro,html,js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {},
    },
    darkMode: 'class', // Enable dark mode support
    plugins: [
        require('tailwind-scrollbar-hide')
    ],
}

export default config;