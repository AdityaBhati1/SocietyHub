import { getCategoryMeta } from '../../data/societies';

/**
 * SocietyBadge — a small inline badge showing recruitment status.
 */
export function RecruitmentBadge({ isOpen }) {
  return (
    <span
      className={`
        inline-flex items-center gap-1.5
        text-[var(--text-xs)] font-medium tracking-wide uppercase
        px-2.5 py-1 rounded-full
        ${
          isOpen
            ? 'bg-[var(--color-success-subtle)] text-[var(--color-success)]'
            : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-tertiary)]'
        }
      `}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          isOpen ? 'bg-[var(--color-success)]' : 'bg-[var(--color-text-tertiary)]'
        }`}
      />
      {isOpen ? 'Recruiting' : 'Closed'}
    </span>
  );
}

/**
 * CategoryBadge — inline category label with color dot.
 */
export function CategoryBadge({ categoryId }) {
  const cat = getCategoryMeta(categoryId);
  if (!cat) return null;

  return (
    <span className="inline-flex items-center gap-1.5 text-[var(--text-xs)] text-[var(--color-text-secondary)]">
      <span className="w-2 h-2 rounded-full" style={{ backgroundColor: cat.color }} />
      {cat.label}
    </span>
  );
}
