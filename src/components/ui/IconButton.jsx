/**
 * IconButton — a minimal button that wraps a single icon.
 * Used for actions like search, close, menu.
 */
export default function IconButton({
  children,
  label,
  size = 'md',
  className = '',
  ...props
}) {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-9 h-9',
    lg: 'w-10 h-10',
  };

  return (
    <button
      aria-label={label}
      className={`
        inline-flex items-center justify-center
        rounded-md
        transition-colors duration-200
        text-[var(--color-text-secondary)]
        hover:text-[var(--color-text-primary)]
        hover:bg-[var(--color-surface-hover)]
        focus-visible:outline-2 focus-visible:outline-offset-2
        focus-visible:outline-[var(--color-accent)]
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
}
