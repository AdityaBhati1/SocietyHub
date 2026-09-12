import { Check } from 'lucide-react';

const STAGES = [
  { id: 'apps', name: 'Applications', short: 'Apps' },
  { id: 'r1', name: 'Round 1', short: 'R1' },
  { id: 'r2', name: 'Round 2', short: 'R2' },
  { id: 'interview', name: 'Interview', short: 'Interview' },
  { id: 'results', name: 'Results', short: 'Results' },
];

/**
 * Maps recruitment status to active stage index:
 * upcoming: -1 (all pending)
 * open / closing_soon: 0 (Applications active)
 * round_1: 1 (Round 1 active)
 * round_2: 2 (Round 2 active)
 * interviews: 3 (Interview active)
 * results: 4 (Results active)
 * closed: 5 (All completed)
 */
function getActiveStageIndex(status) {
  switch (status) {
    case 'upcoming': return -1;
    case 'open':
    case 'closing_soon': return 0;
    case 'round_1': return 1;
    case 'round_2': return 2;
    case 'interviews': return 3;
    case 'results': return 4;
    case 'closed': return 5;
    default: return -1;
  }
}

/**
 * RecruitmentTimeline — Adaptive 5-stage campus recruitment lifecycle.
 */
export default function RecruitmentTimeline({ status, compact = false }) {
  const activeIndex = getActiveStageIndex(status);

  return (
    <div className="w-full">
      <div className="relative flex items-center justify-between">
        {/* Continuous progress track line */}
        <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 h-[2px] bg-[var(--color-border-light)] z-0">
          <div
            className="h-full bg-[var(--color-accent)] transition-all duration-500 ease-out"
            style={{
              width: `${
                activeIndex < 0
                  ? 0
                  : activeIndex >= STAGES.length - 1
                  ? 100
                  : (activeIndex / (STAGES.length - 1)) * 100
              }%`,
            }}
          />
        </div>

        {STAGES.map((stage, idx) => {
          const isCompleted = activeIndex > idx;
          const isActive = activeIndex === idx;

          return (
            <div
              key={stage.id}
              className="relative z-10 flex flex-col items-center group select-none card-entrance"
              style={{ animationDelay: `${idx * 40}ms` }}
            >
              {/* Node indicator */}
              <div
                className={`
                  flex items-center justify-center
                  ${compact ? 'w-6 h-6' : 'w-7 h-7 sm:w-8 sm:h-8'}
                  rounded-full font-medium text-xs
                  transition-all duration-300
                  ${
                    isCompleted
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-xs ring-4 ring-[var(--color-bg)]'
                      : isActive
                      ? 'bg-[var(--color-surface)] text-[var(--color-accent)] border-2 border-[var(--color-accent)] ring-4 ring-[var(--color-accent-soft)] shadow-sm'
                      : 'bg-[var(--color-surface)] text-[var(--color-text-tertiary)] border border-[var(--color-border)] ring-4 ring-[var(--color-bg)]'
                  }
                `}
                title={`${stage.name}: ${isCompleted ? 'Completed' : isActive ? 'Current Stage' : 'Upcoming'}`}
              >
                {isCompleted ? (
                  <Check size={compact ? 12 : 14} strokeWidth={2.5} />
                ) : isActive ? (
                  <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] status-pulse" />
                ) : (
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border-strong)]" />
                )}
              </div>

              {/* Stage label */}
              {!compact && (
                <div className="mt-2 text-center">
                  <span
                    className={`
                      block text-[11px] sm:text-xs font-medium tracking-tight
                      ${
                        isActive
                          ? 'text-[var(--color-accent)] font-semibold'
                          : isCompleted
                          ? 'text-[var(--color-text-primary)]'
                          : 'text-[var(--color-text-tertiary)]'
                      }
                    `}
                  >
                    <span className="hidden sm:inline">{stage.name}</span>
                    <span className="sm:hidden">{stage.short}</span>
                  </span>
                  {isActive && (
                    <span className="hidden sm:inline-block text-[9px] uppercase tracking-wider px-1.5 py-0.2 rounded bg-[var(--color-accent-soft)] text-[var(--color-accent)] font-semibold mt-0.5">
                      Current
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
