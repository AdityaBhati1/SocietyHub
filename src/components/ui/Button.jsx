/**
 * Button — primary interaction element.
 *
 * Variants:
 *   'primary'  → solid accent background
 *   'secondary' → outlined / subtle
 *   'ghost'    → no background, text only
 *
 * Sizes: 'sm', 'md', 'lg'
 */
export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  as: Tag = 'button',
  className = '',
  ...props
}) {
  const base = `
    inline-flex items-center justify-center gap-2
    font-sans font-medium tracking-wide
    transition-all duration-200 ease-out
    cursor-pointer select-none
    focus-visible:outline-2 focus-visible:outline-offset-2
    focus-visible:outline-[var(--color-accent)]
    disabled:opacity-50 disabled:cursor-not-allowed
  `;

  const variants = {
    primary: `
      bg-[var(--color-accent)] text-[var(--color-accent-text)]
      hover:bg-[var(--color-accent-hover)]
      active:scale-[0.98]
    `,
    secondary: `
      bg-transparent text-[var(--color-text-primary)]
      border border-[var(--color-border)]
      hover:bg-[var(--color-surface-hover)]
      active:scale-[0.98]
    `,
    ghost: `
      bg-transparent text-[var(--color-text-secondary)]
      hover:text-[var(--color-text-primary)]
      hover:bg-[var(--color-surface-hover)]
    `,
  };

  const sizes = {
    sm: 'text-[var(--text-xs)] px-3 py-1.5 rounded-md',
    md: 'text-[var(--text-sm)] px-4 py-2 rounded-md',
    lg: 'text-[var(--text-base)] px-6 py-2.5 rounded-lg',
  };

  return (
    <Tag
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </Tag>
  );
}
