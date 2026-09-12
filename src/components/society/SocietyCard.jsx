import { useState, memo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Bookmark, Layers } from 'lucide-react';
import { getCategoryColor } from '../../data/societies';
import { useShortlist, useCompare } from '../../context/ShortlistCompareContext';

/**
 * SocietyCard — NSUT Society Catalog Entry.
 *
 * Engineered with editorial restraint and browsing rhythm:
 * - Real extracted society logo with natural aspect ratio preserved (object-contain).
 * - Fixed height metrics for name and tagline to ensure 100% stable row alignment across all 54 cards.
 * - Understated category dot and label matching university sector tokens.
 * - Integrated subtle Bookmark and Compare controls with stopPropagation.
 * - Refined isolated hover interaction: upward lift, border definition, logo micro-scale, and animated click affordance.
 * - ZERO grid row reflow or disturbance of neighboring cards.
 */
function SocietyCard({ society, index = 0 }) {
  const { id, name, tagline, category, logo, annualEvent } = society;
  const [imgFailed, setImgFailed] = useState(false);

  const { isShortlisted, toggleShortlist } = useShortlist();
  const { isInCompare, toggleCompare } = useCompare();

  const saved = isShortlisted(id);
  const compared = isInCompare(id);

  // Generate 2-4 letter initials monogram for missing/null logo
  const initials = name
    ? name
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 3)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
    : 'SOC';

  const categoryColor = getCategoryColor(category);

  return (
    <Link
      to={`/society/${id}`}
      id={`society-card-${id}`}
      className="group block h-full select-none outline-none focus-visible:outline-2 focus-visible:outline-[var(--color-accent)] rounded-xl card-entrance"
      style={{
        animationDelay: `${Math.min(index * 20, 200)}ms`,
      }}
    >
      <article
        className="
          relative flex flex-col h-full
          bg-[var(--color-surface)]
          border border-[var(--color-border)]
          rounded-xl
          p-5 sm:p-6
          transition-all duration-200 ease-out
          hover:border-[var(--color-border-strong)]
          hover:shadow-[var(--shadow-md)]
          hover:-translate-y-0.5 sm:hover:-translate-y-1
          active:scale-[0.99]
        "
      >
        {/* ── Top row: Logo + Subtle Metadata Tag ───────────── */}
        <div className="flex items-start justify-between gap-3 mb-4">
          {/* Logo container: preserves original aspect ratio for any shape */}
          <div
            className="
              w-13 h-13 sm:w-14 sm:h-14
              rounded-lg
              border border-[var(--color-border-light)]
              bg-[var(--color-surface-secondary)]
              p-2
              flex items-center justify-center
              shrink-0 overflow-hidden
              shadow-[0_1px_2px_rgba(60,50,40,0.03)]
              transition-transform duration-250 ease-out
              group-hover:scale-[1.03]
            "
          >
            {logo && !imgFailed ? (
              <img
                src={logo}
                alt={`${name} logo`}
                width="56"
                height="56"
                className="max-w-full max-h-full w-auto h-auto object-contain"
                loading="lazy"
                decoding="async"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="font-display font-semibold text-xs tracking-wider text-[var(--color-accent)] select-none">
                {initials}
              </span>
            )}
          </div>

          {/* Top right actions: Flagship event tag + Bookmark button */}
          <div className="flex items-center gap-1.5 shrink-0">
            {annualEvent ? (
              <span
                className="
                  text-[10px] font-medium tracking-wide
                  text-[var(--color-text-secondary)]
                  bg-[var(--color-surface-secondary)]
                  px-2 py-0.5 rounded
                  border border-[var(--color-border-light)]
                  truncate max-w-[95px] sm:max-w-[115px]
                "
                title={`Flagship Event: ${annualEvent}`}
              >
                {annualEvent}
              </span>
            ) : (
              <span className="text-[10px] font-medium tracking-wider uppercase text-[var(--color-text-tertiary)]">
                NSUT
              </span>
            )}

            {/* Bookmark / Shortlist button */}
            <button
              type="button"
              id={`shortlist-btn-${id}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleShortlist(id);
              }}
              aria-label={saved ? `Remove ${name} from shortlist` : `Save ${name} to shortlist`}
              aria-pressed={saved}
              className={`
                p-1.5 rounded-lg border btn-press cursor-pointer
                ${
                  saved
                    ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] text-[var(--color-accent)] scale-100'
                    : 'bg-[var(--color-surface-secondary)] border-[var(--color-border-light)] text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-strong)]'
                }
              `}
              title={saved ? 'Remove from shortlist' : 'Save to shortlist'}
            >
              <Bookmark
                size={13}
                className={`transition-all duration-200 ${saved ? 'fill-current stroke-current scale-105' : ''}`}
              />
            </button>
          </div>
        </div>

        {/* ── Society Name ─────────────────────────────────── */}
        <h3
          className="
            font-display
            text-[1.3rem] sm:text-[1.42rem]
            leading-[1.18]
            text-[var(--color-text-primary)]
            font-normal
            tracking-tight
            line-clamp-2
            min-h-[3.2rem] sm:min-h-[3.5rem]
            mb-2
            group-hover:text-[var(--color-accent-hover)]
            transition-colors duration-150
          "
        >
          {name}
        </h3>

        {/* ── Tagline ─────────────────────────────────────── */}
        <p
          className="
            text-[var(--text-sm)]
            text-[var(--color-text-secondary)]
            leading-relaxed
            line-clamp-2
            min-h-[2.5rem] sm:min-h-[2.75rem]
            mb-5
            flex-grow
          "
        >
          {tagline || society.about}
        </p>

        {/* ── Card Footer: Category identity + Compare + click affordance ── */}
        <div
          className="
            pt-3.5 mt-auto
            border-t border-[var(--color-border-light)]
            flex items-center justify-between gap-2
            text-xs text-[var(--color-text-tertiary)]
          "
        >
          {/* Category indicator */}
          <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)] font-medium truncate">
            <span
              className="w-1.5 h-1.5 rounded-full shrink-0 transition-transform duration-200 group-hover:scale-125"
              style={{ backgroundColor: categoryColor }}
            />
            <span className="truncate max-w-[100px] sm:max-w-[120px]">{category}</span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Compare toggle button */}
            <button
              type="button"
              id={`compare-toggle-${id}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                toggleCompare(id);
              }}
              aria-label={`Compare ${name}`}
              aria-pressed={compared}
              className={`
                inline-flex items-center gap-1
                px-2 py-0.5 rounded
                text-[11px] font-medium border btn-press cursor-pointer
                ${
                  compared
                    ? 'bg-[var(--color-lavender-subtle)] border-[var(--color-lavender)] text-[var(--color-lavender)]'
                    : 'bg-[var(--color-surface-secondary)] border border-[var(--color-border-light)] text-[var(--color-text-tertiary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]'
                }
              `}
              title={compared ? 'Remove from compare' : 'Add to compare'}
            >
              <Layers size={11} strokeWidth={1.75} />
              <span>{compared ? 'Comparing' : 'Compare'}</span>
            </button>

            {/* Click affordance (arrow) */}
            <ArrowUpRight
              size={14}
              strokeWidth={2}
              className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}

export default memo(SocietyCard);
