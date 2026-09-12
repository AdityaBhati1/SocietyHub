import * as LucideIcons from 'lucide-react';
import { CATEGORIES } from '../../data/societies';

/**
 * CategoryItem — a distinctive discovery control for browsing categories.
 *
 * Not a generic pill button. Each category has its own muted pastel accent,
 * a small icon, and a subtle colored indicator. Designed to feel like
 * an intuitive navigation element rather than a filter toggle.
 */
export default function CategoryItem({
  categoryId,
  isActive = false,
  onClick,
  className = '',
}) {
  const cat = CATEGORIES.find((c) => c.id === categoryId);
  if (!cat) return null;

  const Icon = LucideIcons[cat.icon];

  return (
    <button
      onClick={onClick}
      className={`
        group
        flex items-center gap-3 px-4 py-3
        rounded-lg
        text-left
        whitespace-nowrap
        transition-all duration-200
        cursor-pointer select-none
        border
        ${
          isActive
            ? 'border-[var(--color-accent)] bg-[var(--color-accent-subtle)]'
            : 'border-transparent bg-[var(--color-surface)] hover:bg-[var(--color-surface-hover)]'
        }
        ${className}
      `}
    >
      {/* Icon circle with category color */}
      <span
        className="flex items-center justify-center w-9 h-9 rounded-md shrink-0
                   transition-transform duration-200 group-hover:scale-105"
        style={{ backgroundColor: cat.bg }}
      >
        {Icon && (
          <Icon
            size={17}
            strokeWidth={1.5}
            style={{ color: cat.color }}
          />
        )}
      </span>

      {/* Label */}
      <span
        className={`
          text-[var(--text-sm)] font-medium
          transition-colors duration-200
          ${
            isActive
              ? 'text-[var(--color-accent)]'
              : 'text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)]'
          }
        `}
      >
        {cat.label}
      </span>
    </button>
  );
}
