import { useEffect, useState } from 'react';

const ThemeToggle = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        const stored = localStorage.getItem('theme') as 'light' | 'dark' | null;
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

        if (stored) {
            setTheme(stored);
            document.documentElement.classList.toggle('dark', stored === 'dark');
        } else {
            const defaultTheme = prefersDark ? 'dark' : 'light';
            setTheme(defaultTheme);
            document.documentElement.classList.toggle('dark', defaultTheme === 'dark');
        }
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
            className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-700 text-sm font-medium transition"
        >
            Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
        </button>
    );
};

export default ThemeToggle;