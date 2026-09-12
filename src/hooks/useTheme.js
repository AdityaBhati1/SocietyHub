import { useEffect, useState, useCallback } from 'react';

/**
 * Manages theme state between 'light' and 'dark'.
 * Persists preference to localStorage.
 * Falls back to system preference, then light.
 */
export function useTheme() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('societyhub-theme');
    if (stored === 'light' || stored === 'dark') return stored;

    if (window.matchMedia?.('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    return 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('societyhub-theme', theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return { theme, toggleTheme };
}
