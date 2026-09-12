import { SearchX, RotateCcw } from 'lucide-react';

/**
 * EmptyState — shown when search/filter yields no results.
 * Polished, editorial, and helpful with a direct action button.
 */
export default function EmptyState({
  icon: Icon = SearchX,
  title = 'No societies found',
  description,
  message,
  actionLabel = 'Clear all filters',
  onAction,
  children,
}) {
  const displayText = message || description || 'Try a different search query or clear active category filters.';

  return (
    <div
      className="
        flex flex-col items-center justify-center text-center
        py-16 sm:py-20 px-6
        my-6 rounded-2xl
        border border-dashed border-[var(--color-border)]
        bg-[var(--color-surface)]
      "
      role="status"
      aria-live="polite"
    >
      <div className="w-12 h-12 rounded-full flex items-center justify-center bg-[var(--color-surface-secondary)] border border-[var(--color-border-light)] mb-4 text-[var(--color-text-tertiary)]">
        <Icon size={24} strokeWidth={1.5} />
      </div>

      <h3 className="font-display text-[1.5rem] sm:text-[1.75rem] text-[var(--color-text-primary)] mb-2 tracking-tight">
        {title}
      </h3>

      <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)] max-w-[42ch] leading-relaxed mb-6">
        {displayText}
      </p>

      {onAction && (
        <button
          type="button"
          onClick={onAction}
          className="
            inline-flex items-center gap-2
            px-4 py-2 rounded-lg
            text-[var(--text-xs)] font-medium
            bg-[var(--color-surface-secondary)] text-[var(--color-text-primary)]
            border border-[var(--color-border)]
            hover:bg-[var(--color-surface-hover)]
            hover:border-[var(--color-border-strong)]
            transition-all duration-150
            cursor-pointer select-none
            active:scale-[0.98]
          "
        >
          <RotateCcw size={13} strokeWidth={2} className="text-[var(--color-accent)]" />
          <span>{actionLabel}</span>
        </button>
      )}

      {children && <div className="mt-4">{children}</div>}
    </div>
  );
}
