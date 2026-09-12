import { Sun, Moon } from 'lucide-react';

/**
 * Theme toggle — switches between light and "Midnight" atmospheres.
 * Uses sun/moon icons with a gentle crossfade.
 */
export default function ThemeToggle({ theme, onToggle }) {
  const isDark = theme === 'dark';

  return (
    <button
      id="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className="btn-press relative flex items-center justify-center min-w-[44px] min-h-[44px] sm:min-w-[36px] sm:min-h-[36px] w-9 h-9 rounded-md
                 transition-colors duration-200 cursor-pointer
                 hover:bg-[var(--color-surface-hover)] focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] outline-none"
    >
      <Sun
        size={18}
        strokeWidth={1.5}
        className="absolute transition-all duration-200"
        style={{
          opacity: isDark ? 0 : 1,
          transform: isDark ? 'scale(0.85)' : 'scale(1)',
          color: 'var(--color-text-secondary)',
          pointerEvents: isDark ? 'none' : 'auto',
        }}
      />
      <Moon
        size={18}
        strokeWidth={1.5}
        className="absolute transition-all duration-200"
        style={{
          opacity: isDark ? 1 : 0,
          transform: isDark ? 'scale(1)' : 'scale(0.85)',
          color: 'var(--color-text-secondary)',
          pointerEvents: isDark ? 'auto' : 'none',
        }}
      />
    </button>
  );
}
