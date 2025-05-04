import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const defaultTheme = stored || (prefersDark ? 'dark' : 'light');
    
        setTheme(defaultTheme);
        document.documentElement.classList.toggle('dark', defaultTheme === 'dark');
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
        document.documentElement.classList.toggle('dark', newTheme === 'dark');
    };

    return (
        <button
        onClick={toggleTheme}
        className={`
            ml-2 w-12 h-8 rounded-full flex items-center justify-center transition-all
            shadow-[inset_4px_4px_8px_#d1d5db,inset_-4px_-4px_8px_#ffffff]
            dark:shadow-[inset_4px_4px_8px_#1f2937,inset_-4px_-4px_8px_#4b5563]
            bg-gray-100 dark:bg-zinc-800
        `}
        aria-label="Toggle theme"
        >
        {theme === 'dark' ? (
            <Moon className="w-5 h-5 text-white" />
        ) : (
            <Sun className="w-5 h-5 text-gray-600" />
        )}
        </button>
    );
};

export default ThemeToggle;