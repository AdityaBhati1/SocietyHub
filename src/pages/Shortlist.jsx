import { Link } from 'react-router-dom';
import { Bookmark, ArrowRight, Trash2, Layers, Compass } from 'lucide-react';
import { useShortlist, useCompare } from '../context/ShortlistCompareContext';
import { societies } from '../data/societies';
import SocietyCard from '../components/society/SocietyCard';
import PageMeta from '../components/common/PageMeta';

export default function Shortlist() {
  const { shortlist, shortlistCount, clearShortlist } = useShortlist();
  const { compareList, toggleCompare } = useCompare();

  // Look up saved society objects from societies.js
  const savedSocieties = shortlist
    .map((id) => societies.find((s) => s.id === id))
    .filter(Boolean);

  const canCompareAll = savedSocieties.length >= 2;

  return (
    <main className="w-full pb-20 sm:pb-28">
      <PageMeta
        title="My Shortlist — SocietyHub"
        description="Keep track of the NSUT societies you're interested in."
      />
      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-10 sm:pt-14">
        {/* ── Page Header ────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--color-border-light)]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                <Bookmark size={12} className="fill-current" />
                Personal Registry
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] text-[var(--color-text-primary)] leading-[1.04] tracking-tight">
              Your Shortlist
            </h1>

            <p className="mt-2.5 text-[var(--text-base)] sm:text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-[55ch] leading-relaxed">
              Keep the societies you&rsquo;re considering in one place. Save options while exploring, compare roles, and plan your recruitment strategy.
            </p>
          </div>

          {/* Quick Actions if populated */}
          {shortlistCount > 0 && (
            <div className="flex items-center gap-3 shrink-0">
              {canCompareAll && (
                <button
                  type="button"
                  id="shortlist-compare-all-btn"
                  onClick={() => {
                    // Add up to first 3 to compare list
                    savedSocieties.slice(0, 3).forEach((s) => {
                      if (!compareList.includes(s.id)) {
                        toggleCompare(s.id);
                      }
                    });
                  }}
                  className="
                    btn-press
                    inline-flex items-center gap-1.5
                    px-4 py-2.5 rounded-lg
                    text-xs font-semibold
                    bg-[var(--color-accent)] text-[var(--color-accent-text)]
                    hover:bg-[var(--color-accent-hover)]
                    transition-all duration-150 cursor-pointer shadow-xs
                    active:scale-[0.98]
                  "
                >
                  <Layers size={13} strokeWidth={2} />
                  <span>Compare Top 3</span>
                </button>
              )}

              <button
                type="button"
                id="clear-all-shortlist-btn"
                onClick={clearShortlist}
                className="
                  btn-press
                  inline-flex items-center gap-1.5
                  px-3.5 py-2.5 rounded-lg
                  text-xs font-medium
                  text-[var(--color-text-tertiary)]
                  hover:text-[var(--color-warm-red)]
                  bg-[var(--color-surface)]
                  border border-[var(--color-border)]
                  hover:border-[var(--color-warm-red)]/30
                  transition-all duration-150 cursor-pointer shadow-2xs
                  active:scale-[0.98]
                "
              >
                <Trash2 size={13} />
                <span>Clear list</span>
              </button>
            </div>
          )}
        </div>

        {/* ── Subtitle Count Bar ──────────────────────────────────── */}
        <div className="mt-4 mb-8 flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
          <span id="shortlist-total-count" className="font-semibold text-[var(--color-text-primary)]">
            {shortlistCount === 1 ? '1 society saved' : `${shortlistCount} societies saved`}
          </span>

          {shortlistCount > 0 && (
            <Link
              to="/#societies"
              className="text-[var(--color-accent)] hover:underline inline-flex items-center gap-1 font-medium"
            >
              <span>Explore more societies</span>
              <ArrowRight size={12} strokeWidth={2} />
            </Link>
          )}
        </div>

        {/* ── Shortlist Cards Grid or Polished Empty State ────────── */}
        {shortlistCount > 0 ? (
          <div
            id="shortlist-grid"
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              2xl:grid-cols-4
              gap-5 sm:gap-6
            "
          >
            {savedSocieties.map((society, index) => (
              <SocietyCard
                key={society.id}
                society={society}
                index={index}
              />
            ))}
          </div>
        ) : (
          /* Empty Shortlist State */
          <div
            id="shortlist-empty-state"
            className="
              max-w-md mx-auto
              my-12 sm:my-20 p-8 sm:p-10
              text-center
              bg-[var(--color-surface)]
              border border-dashed border-[var(--color-border-strong)]
              rounded-2xl
              shadow-xs
            "
          >
            <div className="w-14 h-14 rounded-full bg-[var(--color-surface-secondary)] text-[var(--color-accent)] flex items-center justify-center mx-auto mb-4 border border-[var(--color-border-light)]">
              <Bookmark size={24} strokeWidth={1.75} />
            </div>

            <h2 className="font-display text-2xl text-[var(--color-text-primary)] tracking-tight mb-2">
              Your shortlist is empty
            </h2>

            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Save societies while exploring and they&rsquo;ll appear here. Bookmark the clubs you want to audition for or compare.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/#societies"
                id="shortlist-explore-cta"
                className="
                  w-full sm:w-auto inline-flex items-center justify-center gap-2
                  px-5 py-2.5 rounded-lg
                  text-xs font-semibold
                  bg-[var(--color-accent)] text-[var(--color-accent-text)]
                  hover:bg-[var(--color-accent-hover)]
                  transition-all duration-150 shadow-xs
                "
              >
                <span>Explore societies</span>
                <ArrowRight size={13} strokeWidth={2} />
              </Link>

              <Link
                to="/find-my-society"
                className="
                  w-full sm:w-auto inline-flex items-center justify-center gap-2
                  px-4 py-2.5 rounded-lg
                  text-xs font-medium
                  text-[var(--color-text-primary)]
                  bg-[var(--color-surface-secondary)]
                  border border-[var(--color-border)]
                  hover:bg-[var(--color-surface-hover)]
                  transition-colors
                "
              >
                <Compass size={13} />
                <span>Take Discovery Quiz</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
