import { useState, memo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Clock, Send, Bookmark } from 'lucide-react';
import { RECRUITMENT_STATUSES } from '../../data/recruitment';
import { getCategoryColor } from '../../data/societies';
import { useShortlist } from '../../context/ShortlistCompareContext';

/**
 * RecruitmentCard — High-density, editorial card showcasing active society recruitment.
 *
 * Fully clickable card navigating to /recruitment/:societyId with independent
 * stopPropagation controls for Apply Now demo modal and Shortlist bookmarking.
 */
function RecruitmentCard({ recruitmentItem, society, index = 0, onApply }) {
  const navigate = useNavigate();
  const [imgFailed, setImgFailed] = useState(false);
  const { isShortlisted, toggleShortlist } = useShortlist();

  const {
    societyId,
    status,
    relativeDeadline,
    currentStage,
    roles = [],
  } = recruitmentItem;

  const societyName = society?.name || recruitmentItem.societyName;
  const category = society?.category || recruitmentItem.category;
  const logo = society?.logo;

  const statusMeta = RECRUITMENT_STATUSES[status] || RECRUITMENT_STATUSES.open;
  const categoryColor = getCategoryColor(category);
  const saved = isShortlisted ? isShortlisted(societyId) : false;

  // Initials fallback if logo fails
  const initials = societyName
    ? societyName
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 3)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
    : 'SOC';

  // Contextual deadline flags
  const isClosingSoon = status === 'closing_soon';
  const isOpen = status === 'open';
  const canApply = isOpen || isClosingSoon;

  const handleCardClick = (e) => {
    // If the click originated from an interactive control, let that control handle it
    if (e.target.closest('button, a')) return;
    navigate(`/recruitment/${societyId}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.target.closest('button, a')) {
      navigate(`/recruitment/${societyId}`);
    }
  };

  return (
    <article
      id={`recruitment-card-${societyId}`}
      onClick={handleCardClick}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="link"
      aria-label={`View recruitment details for ${societyName}`}
      className="
        group relative flex flex-col justify-between
        bg-[var(--color-surface)]
        border border-[var(--color-border)]
        rounded-xl p-5 sm:p-6
        transition-all duration-200 ease-out
        hover:border-[var(--color-border-strong)]
        hover:shadow-[var(--shadow-md)]
        hover:-translate-y-0.5 sm:hover:-translate-y-1
        active:scale-[0.99]
        card-entrance select-none cursor-pointer
        focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]
      "
      style={{
        animationDelay: `${Math.min(index * 25, 250)}ms`,
      }}
    >
      {/* ── Top Header: Logo + Category & Status & Bookmark ── */}
      <div>
        <div className="flex items-start justify-between gap-2.5 mb-3.5">
          {/* Logo container */}
          <div
            className="
              w-12 h-12 rounded-lg shrink-0
              flex items-center justify-center
              bg-[var(--color-surface-secondary)]
              border border-[var(--color-border-light)]
              overflow-hidden
              transition-transform duration-200 group-hover:scale-105
            "
          >
            {logo && !imgFailed ? (
              <img
                src={logo}
                alt={`${societyName} logo`}
                width="48"
                height="48"
                className="w-full h-full object-contain p-1.5"
                onError={() => setImgFailed(true)}
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="font-display font-semibold text-xs text-[var(--color-text-tertiary)]">
                {initials}
              </span>
            )}
          </div>

          {/* Right Action Cluster: Status Badge + Bookmark Toggle */}
          <div className="flex items-center gap-1.5">
            {/* Status Badge */}
            <span
              className={`
                inline-flex items-center gap-1.5
                px-2.5 py-1 rounded-full
                text-[11px] font-medium tracking-tight
                ${statusMeta.badgeClass}
              `}
            >
              <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dotClass} ${canApply ? 'status-pulse' : ''}`} />
              <span>{statusMeta.shortLabel}</span>
            </span>

            {/* Bookmark button with independent stopPropagation */}
            <button
              type="button"
              id={`recruitment-shortlist-${societyId}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (toggleShortlist) toggleShortlist(societyId);
              }}
              aria-label={saved ? `Remove ${societyName} from shortlist` : `Save ${societyName} to shortlist`}
              aria-pressed={saved}
              className={`
                p-1.5 rounded-lg border btn-press cursor-pointer
                transition-all duration-150
                ${
                  saved
                    ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] text-[var(--color-accent)] scale-100'
                    : 'bg-[var(--color-surface-secondary)] border-[var(--color-border-light)] text-[var(--color-text-tertiary)] hover:text-[var(--color-accent)] hover:border-[var(--color-border-strong)]'
                }
              `}
              title={saved ? 'Remove from shortlist' : 'Save to shortlist'}
            >
              <Bookmark size={13} className={saved ? 'fill-current stroke-current' : ''} />
            </button>
          </div>
        </div>

        {/* Category Label */}
        <div className="flex items-center gap-1.5 mb-1">
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: categoryColor }}
          />
          <span className="text-[11px] font-medium uppercase tracking-wider text-[var(--color-text-tertiary)]">
            {category}
          </span>
        </div>

        {/* Society Name */}
        <h3 className="font-display text-[1.25rem] sm:text-[1.35rem] text-[var(--color-text-primary)] leading-snug tracking-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors">
          {societyName}
        </h3>

        {/* Current Stage Indicator */}
        <div className="mb-4">
          <span className="text-[11px] text-[var(--color-text-tertiary)] block uppercase tracking-wider mb-0.5">
            Current Stage
          </span>
          <p className="text-xs font-medium text-[var(--color-text-secondary)] line-clamp-1">
            {currentStage}
          </p>
        </div>

        {/* Open Roles Preview */}
        {roles.length > 0 && (
          <div className="mb-4 pt-3 border-t border-[var(--color-border-light)]">
            <span className="text-[11px] text-[var(--color-text-tertiary)] block uppercase tracking-wider mb-1.5">
              Available Roles
            </span>
            <div className="flex flex-wrap gap-1.5">
              {roles.slice(0, 3).map((role, idx) => (
                <span
                  key={idx}
                  className="
                    text-[10px] font-medium
                    px-2 py-0.5 rounded
                    bg-[var(--color-surface-secondary)]
                    text-[var(--color-text-secondary)]
                    border border-[var(--color-border-light)]
                  "
                >
                  {role.split('(')[0].trim()}
                </span>
              ))}
              {roles.length > 3 && (
                <span className="text-[10px] text-[var(--color-text-tertiary)] px-1 self-center">
                  +{roles.length - 3} more
                </span>
              )}
            </div>
          </div>
        )}
      </div>

      {/* ── Bottom Section: Deadline + Actions ── */}
      <div className="pt-3 border-t border-[var(--color-border-light)] flex items-center justify-between gap-3">
        {/* Deadline Info */}
        <div className="flex items-center gap-1.5 text-xs text-[var(--color-text-secondary)]">
          <Clock size={13} className={isClosingSoon ? 'text-[var(--color-warm-red)]' : 'text-[var(--color-text-tertiary)]'} />
          <span
            className={`font-medium ${
              isClosingSoon
                ? 'text-[var(--color-warm-red)] font-semibold'
                : isOpen
                ? 'text-[var(--color-accent)]'
                : 'text-[var(--color-text-secondary)]'
            }`}
          >
            {relativeDeadline}
          </span>
        </div>

        {/* Right CTA Cluster */}
        <div className="flex items-center gap-2">
          {canApply && (
            <button
              type="button"
              id={`apply-btn-${societyId}`}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                if (onApply) {
                  onApply(recruitmentItem, society);
                }
              }}
              className="
                btn-press
                inline-flex items-center gap-1.5
                px-2.5 py-1.5 rounded-lg
                bg-[var(--color-accent)] text-[var(--color-accent-text)]
                text-xs font-semibold
                hover:bg-[var(--color-accent-hover)]
                transition-colors cursor-pointer shadow-xs
                active:scale-[0.98]
              "
              title={`Open demo application form for ${societyName}`}
            >
              <Send size={11} />
              <span>Apply Now</span>
            </button>
          )}

          {/* Semantic Details link */}
          <Link
            to={`/recruitment/${societyId}`}
            id={`view-recruitment-${societyId}`}
            onClick={(e) => e.stopPropagation()}
            className="
              inline-flex items-center gap-1
              text-xs font-semibold
              text-[var(--color-accent)]
              group-hover:underline
              group-hover:translate-x-0.5
              transition-transform duration-150
            "
            aria-label={`View recruitment details for ${societyName}`}
          >
            <span>Details</span>
            <ArrowRight size={13} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default memo(RecruitmentCard);
