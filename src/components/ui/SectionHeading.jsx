/**
 * SectionHeading — editorial-style section header.
 *
 * Uses the serif display typeface for the heading
 * and sans-serif for the optional subtitle.
 */
export default function SectionHeading({
  title,
  subtitle,
  align = 'left',
  className = '',
}) {
  const alignment = {
    left: 'text-left',
    center: 'text-center',
  };

  return (
    <header className={`${alignment[align]} ${className}`}>
      <h2
        className="font-display text-[var(--text-3xl)] leading-[1.15] tracking-tight
                   text-[var(--color-text-primary)]
                   md:text-[var(--text-4xl)]"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-[var(--text-base)] text-[var(--color-text-secondary)] max-w-[42ch] leading-relaxed"
           style={align === 'center' ? { marginInline: 'auto' } : undefined}
        >
          {subtitle}
        </p>
      )}
    </header>
  );
}
