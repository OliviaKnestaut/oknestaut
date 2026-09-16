import React, { useEffect, useState } from 'react';

const ThemeContext = React.createContext({ theme: 'light', toggleTheme: () => {} });

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        if (typeof window === 'undefined') return 'light';
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    });

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        const handleChange = (event) => setTheme(event.matches ? 'dark' : 'light');
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const toggleTheme = () => setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));

    return <ThemeContext.Provider value={{ theme, toggleTheme }}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => React.useContext(ThemeContext);
