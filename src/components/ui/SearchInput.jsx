import { Search, X } from 'lucide-react';

/**
 * SearchInput — Refined discovery search input for SocietyHub.
 *
 * Features:
 * - Search icon with semantic placement
 * - Dedicated clear button with accessible label
 * - Subtle inline result count feedback
 * - Distinct surface and high-contrast focus rings for Light and Dark modes
 */
export default function SearchInput({
  id = 'society-search-input',
  clearButtonId,
  value = '',
  onChange,
  onClear,
  placeholder = 'Search by name, fest, or domain…',
  resultCount,
  totalCount: _totalCount = 54,
  className = '',
  ...props
}) {
  const handleClear = () => {
    if (onClear) {
      onClear();
    } else if (onChange) {
      onChange({ target: { value: '' } });
    }
  };

  return (
    <div
      className={`
        relative flex items-center
        bg-[var(--color-surface-input)]
        border border-[var(--color-border)]
        rounded-lg
        transition-all duration-150
        focus-within:border-[var(--color-accent)]
        focus-within:ring-2 focus-within:ring-[var(--color-accent)]/20
        shadow-2xs
        ${className}
      `}
    >
      <Search
        size={16}
        strokeWidth={1.75}
        className="absolute left-3 text-[var(--color-text-tertiary)] pointer-events-none"
        aria-hidden="true"
      />

      <input
        id={id}
        type="text"
        role="searchbox"
        aria-label="Search societies by name, fest, or domain"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        autoComplete="off"
        spellCheck="false"
        className="
          w-full py-2.5 pl-9
          pr-20
          bg-transparent
          text-[var(--text-sm)] text-[var(--color-text-primary)]
          placeholder:text-[var(--color-text-tertiary)]
          outline-none
        "
        {...props}
      />

      {/* Right controls: Result count & Clear button */}
      <div className="absolute right-2.5 flex items-center gap-1.5 pointer-events-auto">
        {value.trim() && resultCount !== undefined && (
          <span
            className="
              hidden xs:inline-flex items-center
              text-[11px] font-medium tracking-tight
              px-1.5 py-0.5 rounded
              bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)]
              border border-[var(--color-border-light)]
            "
            aria-live="polite"
          >
            {resultCount}
          </span>
        )}

        {value && (
          <button
            type="button"
            id={clearButtonId || `clear-${id}`}
            onClick={handleClear}
            className="
              flex items-center justify-center
              min-w-[32px] min-h-[32px] sm:min-w-[24px] sm:min-h-[24px]
              rounded-md
              text-[var(--color-text-tertiary)]
              hover:text-[var(--color-text-primary)]
              hover:bg-[var(--color-surface-hover)]
              transition-colors duration-150
              cursor-pointer
            "
            aria-label="Clear search input"
            title="Clear search"
          >
            <X size={13} strokeWidth={2.2} />
          </button>
        )}
      </div>
    </div>
  );
}
