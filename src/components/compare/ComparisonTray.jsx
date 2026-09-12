import { useLocation, Link } from 'react-router-dom';
import { Layers, ArrowRight, X, AlertCircle } from 'lucide-react';
import { useCompare } from '../../context/ShortlistCompareContext';
import { societies } from '../../data/societies';

export default function ComparisonTray() {
  const { compareList, compareCount, maxCompareLimit, removeFromCompare, clearCompare, compareNotice, dismissCompareNotice } = useCompare();
  const location = useLocation();

  // Hide the floating tray when already on the /compare page
  if (compareCount === 0 || location.pathname === '/compare') {
    return null;
  }

  const selectedSocieties = compareList
    .map((id) => societies.find((s) => s.id === id))
    .filter(Boolean);

  const canCompare = compareCount >= 2;

  return (
    <div
      id="comparison-tray"
      role="region"
      aria-label="Society comparison bar"
      className="
        fixed bottom-0 left-0 right-0 z-40
        bg-[var(--color-surface)]/95 backdrop-blur-md
        border-t border-[var(--color-border)]
        shadow-[0_-4px_16px_rgba(0,0,0,0.06)]
        tray-entrance
      "
    >
      {/* Notice bar if limit reached */}
      {compareNotice && (
        <div
          id="compare-limit-toast"
          role="alert"
          className="w-full bg-[var(--color-warm-red-subtle)] border-b border-[var(--color-warm-red)]/20 px-4 py-1.5 text-xs text-[var(--color-warm-red)] flex items-center justify-between gap-2"
        >
          <div className="flex items-center gap-1.5">
            <AlertCircle size={13} className="shrink-0" />
            <span>{compareNotice}</span>
          </div>
          <button
            type="button"
            onClick={dismissCompareNotice}
            className="p-1 hover:opacity-75 cursor-pointer text-xs"
            aria-label="Dismiss notice"
          >
            <X size={12} />
          </button>
        </div>
      )}

      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 py-3 sm:py-3.5 flex flex-wrap items-center justify-between gap-3">
        {/* Left: Indicator & Chips */}
        <div className="flex items-center gap-3 sm:gap-4 flex-wrap min-w-0">
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 rounded-lg bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center shrink-0">
              <Layers size={14} strokeWidth={2} />
            </span>
            <div className="hidden xs:block">
              <span className="text-xs font-semibold text-[var(--color-text-primary)] block">
                Compare
              </span>
              <span className="text-[10px] text-[var(--color-text-tertiary)] block">
                {compareCount} of {maxCompareLimit} selected
              </span>
            </div>
          </div>

          {/* Selected Society Chips */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap" id="compare-tray-chips">
            {selectedSocieties.map((society) => (
              <div
                key={society.id}
                id={`compare-chip-${society.id}`}
                className="
                  chip-entrance
                  inline-flex items-center gap-1.5
                  pl-1.5 pr-2 py-1
                  rounded-lg
                  bg-[var(--color-surface-secondary)]
                  border border-[var(--color-border-light)]
                  text-xs font-medium text-[var(--color-text-primary)]
                  shadow-2xs
                "
              >
                {/* Micro logo or monogram */}
                <div className="w-5 h-5 rounded shrink-0 bg-[var(--color-surface)] border border-[var(--color-border-light)] flex items-center justify-center overflow-hidden p-0.5">
                  {society.logo ? (
                    <img
                      src={society.logo}
                      alt=""
                      className="w-full h-full object-contain"
                    />
                  ) : (
                    <span className="text-[8px] font-bold text-[var(--color-accent)]">
                      {society.name.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                </div>

                <span className="truncate max-w-[90px] sm:max-w-[120px]">
                  {society.name}
                </span>

                <button
                  type="button"
                  id={`remove-compare-chip-${society.id}`}
                  onClick={() => removeFromCompare(society.id)}
                  className="
                    p-0.5 rounded
                    text-[var(--color-text-tertiary)]
                    hover:text-[var(--color-warm-red)]
                    hover:bg-[var(--color-surface-hover)]
                    transition-colors cursor-pointer
                    active:scale-90
                  "
                  aria-label={`Remove ${society.name} from comparison`}
                >
                  <X size={11} strokeWidth={2} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2 sm:gap-3 ml-auto shrink-0">
          <button
            type="button"
            id="clear-compare-tray-btn"
            onClick={clearCompare}
            className="
              btn-press
              px-2.5 py-1.5 rounded-lg
              text-xs font-medium
              text-[var(--color-text-tertiary)]
              hover:text-[var(--color-text-primary)]
              hover:bg-[var(--color-surface-hover)]
              transition-colors cursor-pointer
            "
          >
            Clear
          </button>

          <Link
            to="/compare"
            id="launch-compare-btn"
            className={`
              btn-press
              inline-flex items-center gap-1.5
              px-4 py-2 rounded-lg
              text-xs font-semibold
              transition-all duration-150 shadow-xs
              ${
                canCompare
                  ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)] hover:shadow-sm active:scale-[0.98]'
                  : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-tertiary)] border border-[var(--color-border)] hover:text-[var(--color-text-secondary)]'
              }
            `}
          >
            <span>{canCompare ? `Compare (${compareCount})` : 'Select 2 to Compare'}</span>
            <ArrowRight size={13} strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  );
}
