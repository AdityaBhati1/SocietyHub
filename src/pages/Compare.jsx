import { Link } from 'react-router-dom';
import {
  Layers,
  ArrowRight,
  ArrowLeft,
  X,
  Radio,
} from 'lucide-react';
import { useCompare } from '../context/ShortlistCompareContext';
import { societies, getCategoryColor } from '../data/societies';
import { getRecruitmentById, RECRUITMENT_STATUSES } from '../data/recruitment';
import PageMeta from '../components/common/PageMeta';

export default function Compare() {
  const { compareList, compareCount, maxCompareLimit, removeFromCompare, clearCompare } = useCompare();

  // Look up society objects
  const selectedSocieties = compareList
    .map((id) => societies.find((s) => s.id === id))
    .filter(Boolean);

  const canCompare = selectedSocieties.length >= 2;

  return (
    <main className="w-full pb-24 sm:pb-32">
      <PageMeta
        title="Compare Societies — SocietyHub"
        description="Compare NSUT societies side by side and find the communities that fit you best."
      />
      <div className="max-w-[1480px] mx-auto px-4 sm:px-8 md:px-12 lg:px-16 pt-10 sm:pt-14">
        {/* ── Header ──────────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--color-border-light)]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[var(--color-lavender-subtle)] text-[var(--color-lavender)] border border-[var(--color-lavender)]/30">
                <Layers size={12} />
                Decision Studio · Max {maxCompareLimit} Societies
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] text-[var(--color-text-primary)] leading-[1.04] tracking-tight">
              Society Comparison
            </h1>

            <p className="mt-2.5 text-[var(--text-base)] sm:text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-[55ch] leading-relaxed">
              Side-by-side analysis of roles, eligibility, culture, and recruitment timelines across selected NSUT societies.
            </p>
          </div>

          {/* Header Action Buttons */}
          <div className="flex items-center gap-3 shrink-0">
            <Link
              to="/#societies"
              className="
                btn-press
                inline-flex items-center gap-1.5
                px-4 py-2.5 rounded-lg
                text-xs font-medium
                bg-[var(--color-surface)]
                border border-[var(--color-border)]
                text-[var(--color-text-secondary)]
                hover:text-[var(--color-text-primary)]
                hover:border-[var(--color-border-strong)]
                transition-all duration-150 shadow-2xs
                active:scale-[0.98]
              "
            >
              <ArrowLeft size={13} />
              <span>Browse Catalog</span>
            </Link>

            {compareCount > 0 && (
              <button
                type="button"
                id="clear-comparison-page-btn"
                onClick={clearCompare}
                className="
                  btn-press
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
                Clear all
              </button>
            )}
          </div>
        </div>

        {/* ── Subtitle Status ─────────────────────────────────────── */}
        <div className="mt-4 mb-8 flex items-center justify-between text-xs text-[var(--color-text-tertiary)]">
          <span id="compare-total-count" className="font-semibold text-[var(--color-text-primary)]">
            {selectedSocieties.length} of {maxCompareLimit} societies selected
          </span>

          <span className="hidden sm:inline">
            Factual university data combined with active recruitment timelines
          </span>
          <span className="sm:hidden text-[11px] font-medium text-[var(--color-accent)] inline-flex items-center gap-1">
            <span>Scroll table horizontally →</span>
          </span>
        </div>

        {/* ── Main Content: Table or Insufficient State ───────────── */}
        {canCompare ? (
          <div className="space-y-10" id="comparison-content">
            {/* Responsive Scrollable Container */}
            <div className="overflow-x-auto pb-4 rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] shadow-xs">
              <table className="w-full border-collapse text-left min-w-[720px] sm:min-w-[840px]">
                {/* ── Table Header: Societies Identity ── */}
                <thead>
                  <tr className="border-b border-[var(--color-border)] bg-[var(--color-surface-secondary)]/50">
                    <th scope="col" className="w-1/4 min-w-[180px] p-5 sm:p-6 align-top">
                      <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                        Comparing
                      </span>
                      <p className="text-xs text-[var(--color-text-secondary)] mt-1 font-normal">
                        Select up to 3 societies from the directory or shortlist to compare here.
                      </p>
                    </th>

                    {selectedSocieties.map((society) => {
                      const categoryColor = getCategoryColor(society.category);
                      return (
                        <th
                          key={society.id}
                          scope="col"
                          id={`compare-col-${society.id}`}
                          className="w-1/3 min-w-[240px] p-5 sm:p-6 align-top border-l border-[var(--color-border-light)] relative"
                        >
                          {/* Remove button */}
                          <button
                            type="button"
                            id={`remove-compare-${society.id}`}
                            onClick={() => removeFromCompare(society.id)}
                            className="
                              absolute top-4 right-4
                              p-2 rounded-lg
                              min-w-[36px] min-h-[36px] flex items-center justify-center
                              text-[var(--color-text-tertiary)]
                              hover:text-[var(--color-warm-red)]
                              hover:bg-[var(--color-surface-hover)]
                              transition-colors cursor-pointer
                            "
                            aria-label={`Remove ${society.name} from comparison`}
                            title="Remove from comparison"
                          >
                            <X size={14} strokeWidth={2} />
                          </button>

                          <div className="flex items-start gap-3.5 pr-8">
                            {/* Logo / Initials */}
                            <div className="w-12 h-12 rounded-lg bg-[var(--color-surface)] border border-[var(--color-border)] p-1.5 flex items-center justify-center shrink-0 overflow-hidden shadow-2xs">
                              {society.logo ? (
                                <img
                                  src={society.logo}
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              ) : (
                                <span className="font-display font-bold text-xs text-[var(--color-accent)]">
                                  {society.name.slice(0, 3).toUpperCase()}
                                </span>
                              )}
                            </div>

                            <div>
                              <div className="flex items-center gap-1.5 mb-1">
                                <span
                                  className="w-1.5 h-1.5 rounded-full shrink-0"
                                  style={{ backgroundColor: categoryColor }}
                                />
                                <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                                  {society.category}
                                </span>
                              </div>

                              <h3 className="font-display text-lg text-[var(--color-text-primary)] font-medium leading-snug">
                                {society.name}
                              </h3>
                            </div>
                          </div>

                          {/* Profile Link */}
                          <div className="mt-4 pt-3 border-t border-[var(--color-border-light)] flex items-center justify-between">
                            <Link
                              to={`/society/${society.id}`}
                              className="text-xs font-medium text-[var(--color-accent)] hover:underline inline-flex items-center gap-1"
                            >
                              <span>View Profile</span>
                              <ArrowRight size={11} strokeWidth={2} />
                            </Link>

                            <Link
                              to={`/recruitment/${society.id}`}
                              className="text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] inline-flex items-center gap-1"
                            >
                              <Radio size={11} className="text-[var(--color-accent)]" />
                              <span>Radar</span>
                            </Link>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                </thead>

                <tbody className="divide-y divide-[var(--color-border-light)] text-xs text-[var(--color-text-secondary)]">
                  {/* ── SECTION: RECRUITMENT RADAR INTEGRATION ── */}
                  <tr className="bg-[var(--color-surface-secondary)]/30">
                    <th
                      colSpan={selectedSocieties.length + 1}
                      className="px-5 sm:px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-accent)] border-y border-[var(--color-border-light)]"
                    >
                      <div className="flex items-center gap-1.5">
                        <Radio size={12} className="animate-pulse" />
                        <span>Recruitment Radar Insights</span>
                      </div>
                    </th>
                  </tr>

                  {/* Recruitment Status */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Recruitment Status
                    </th>
                    {selectedSocieties.map((s) => {
                      const r = getRecruitmentById(s.id);
                      const meta = r ? RECRUITMENT_STATUSES[r.status] : null;
                      return (
                        <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)]">
                          {meta ? (
                            <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold ${meta.badgeClass}`}>
                              <span className={`w-1.5 h-1.5 rounded-full ${meta.dotClass}`} />
                              <span>{meta.label}</span>
                            </span>
                          ) : (
                            <span className="text-[var(--color-text-tertiary)]">Closed</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Current Recruitment Stage */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Current Stage
                    </th>
                    {selectedSocieties.map((s) => {
                      const r = getRecruitmentById(s.id);
                      return (
                        <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)] font-medium text-[var(--color-text-primary)]">
                          {r?.currentStage || 'Not actively recruiting'}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Deadline & Relative Note */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Application Deadline
                    </th>
                    {selectedSocieties.map((s) => {
                      const r = getRecruitmentById(s.id);
                      return (
                        <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)]">
                          {r?.relativeDeadline ? (
                            <div>
                              <span className="font-semibold text-[var(--color-accent)] block">
                                {r.relativeDeadline}
                              </span>
                              {r.deadline && (
                                <span className="text-[11px] text-[var(--color-text-tertiary)] block mt-0.5">
                                  {r.deadline}
                                </span>
                              )}
                            </div>
                          ) : (
                            <span className="text-[var(--color-text-tertiary)]">—</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Open Roles */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Open Roles
                    </th>
                    {selectedSocieties.map((s) => {
                      const r = getRecruitmentById(s.id);
                      const roles = r?.roles || [];
                      return (
                        <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)]">
                          {roles.length > 0 ? (
                            <div className="flex flex-wrap gap-1.5">
                              {roles.map((role, i) => (
                                <span
                                  key={i}
                                  className="px-2 py-0.5 rounded text-[10px] font-medium bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)]"
                                >
                                  {role}
                                </span>
                              ))}
                            </div>
                          ) : (
                            <span className="text-[var(--color-text-tertiary)]">No current roles listed</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Eligibility Criteria */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Eligibility
                    </th>
                    {selectedSocieties.map((s) => {
                      const r = getRecruitmentById(s.id);
                      return (
                        <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)] leading-relaxed">
                          {r?.eligibility || 'Open to all enrolled NSUT undergraduate students.'}
                        </td>
                      );
                    })}
                  </tr>

                  {/* Dedicated Recruitment CTA */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Recruitment Action
                    </th>
                    {selectedSocieties.map((s) => (
                      <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)]">
                        <Link
                          to={`/recruitment/${s.id}`}
                          id={`view-recruitment-compare-${s.id}`}
                          className="
                            inline-flex items-center gap-1.5
                            px-3 py-1.5 rounded-md
                            text-xs font-medium
                            bg-[var(--color-accent)] text-[var(--color-accent-text)]
                            hover:bg-[var(--color-accent-hover)]
                            transition-colors shadow-2xs
                          "
                        >
                          <span>View recruitment →</span>
                        </Link>
                      </td>
                    ))}
                  </tr>

                  {/* ── SECTION: SOCIETY PROFILE OVERVIEW ── */}
                  <tr className="bg-[var(--color-surface-secondary)]/30">
                    <th
                      colSpan={selectedSocieties.length + 1}
                      className="px-5 sm:px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-tertiary)] border-y border-[var(--color-border-light)]"
                    >
                      Society Profile &amp; Mission
                    </th>
                  </tr>

                  {/* Tagline */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Motto / Tagline
                    </th>
                    {selectedSocieties.map((s) => (
                      <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)] italic text-[var(--color-text-secondary)] leading-relaxed">
                        &ldquo;{s.tagline || 'NSUT Student Organization'}&rdquo;
                      </td>
                    ))}
                  </tr>

                  {/* About Summary */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      About
                    </th>
                    {selectedSocieties.map((s) => (
                      <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)] leading-relaxed line-clamp-6">
                        {s.about}
                      </td>
                    ))}
                  </tr>

                  {/* Why Join */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Why Join
                    </th>
                    {selectedSocieties.map((s) => (
                      <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)] leading-relaxed">
                        {s.whyJoin}
                      </td>
                    ))}
                  </tr>

                  {/* Flagship Annual Fest */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Flagship Event
                    </th>
                    {selectedSocieties.map((s) => (
                      <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)] font-medium text-[var(--color-text-primary)]">
                        {s.annualEvent || 'Annual Campus Orientation & Showcase'}
                      </td>
                    ))}
                  </tr>

                  {/* ── SECTION: LEADERSHIP & CONTACTS ── */}
                  <tr className="bg-[var(--color-surface-secondary)]/30">
                    <th
                      colSpan={selectedSocieties.length + 1}
                      className="px-5 sm:px-6 py-2.5 text-[11px] font-bold uppercase tracking-wider text-[var(--color-text-tertiary)] border-y border-[var(--color-border-light)]"
                    >
                      Mentorship &amp; Point of Contact
                    </th>
                  </tr>

                  {/* Faculty Advisors */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Faculty Advisor
                    </th>
                    {selectedSocieties.map((s) => (
                      <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)]">
                        {s.faculty && s.faculty.length > 0 ? (
                          <div className="space-y-1">
                            {s.faculty.map((f, i) => (
                              <div key={i} className="text-xs">
                                <span className="font-medium text-[var(--color-text-primary)]">{f.name}</span>
                                {f.designation && (
                                  <span className="text-[10px] text-[var(--color-text-tertiary)] block">
                                    {f.designation}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-[var(--color-text-tertiary)]">Department Patron</span>
                        )}
                      </td>
                    ))}
                  </tr>

                  {/* Student POCs */}
                  <tr>
                    <th scope="row" className="p-4 sm:p-5 font-semibold text-[var(--color-text-primary)] align-top">
                      Student Leads (POC)
                    </th>
                    {selectedSocieties.map((s) => (
                      <td key={s.id} className="p-4 sm:p-5 align-top border-l border-[var(--color-border-light)]">
                        {s.poc && s.poc.length > 0 ? (
                          <div className="space-y-1.5">
                            {s.poc.slice(0, 2).map((p, i) => (
                              <div key={i} className="text-xs">
                                <span className="font-medium text-[var(--color-text-primary)]">{p.name}</span>
                                {p.role && (
                                  <span className="text-[10px] text-[var(--color-text-tertiary)] block">
                                    {p.role}
                                  </span>
                                )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-[var(--color-text-tertiary)]">Executive Council</span>
                        )}
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          /* Empty / Insufficient Comparison State (< 2 societies) */
          <div
            id="compare-empty-state"
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
            <div className="w-14 h-14 rounded-full bg-[var(--color-surface-secondary)] text-[var(--color-lavender)] flex items-center justify-center mx-auto mb-4 border border-[var(--color-border-light)]">
              <Layers size={24} strokeWidth={1.75} />
            </div>

            <h2 className="font-display text-2xl text-[var(--color-text-primary)] tracking-tight mb-2">
              Choose at least 2 societies to compare
            </h2>

            {selectedSocieties.length === 1 && (
              <div className="my-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[var(--color-surface-secondary)] border border-[var(--color-border)] text-xs text-[var(--color-text-secondary)]">
                <span>Selected:</span>
                <span className="font-semibold text-[var(--color-text-primary)]">{selectedSocieties[0].name}</span>
                <button
                  type="button"
                  onClick={() => removeFromCompare(selectedSocieties[0].id)}
                  className="text-[var(--color-text-tertiary)] hover:text-[var(--color-warm-red)] cursor-pointer ml-1"
                  aria-label={`Remove ${selectedSocieties[0].name}`}
                >
                  <X size={12} />
                </button>
              </div>
            )}

            <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] leading-relaxed mb-6">
              Select 2 to 3 societies while browsing the catalog or your shortlist. You can analyze their domains, work culture, and recruitment deadlines side by side.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/#societies"
                id="compare-explore-cta"
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
                to="/shortlist"
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
                <span>View Shortlist</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
