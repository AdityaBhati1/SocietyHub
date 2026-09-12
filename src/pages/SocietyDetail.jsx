import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  Users,
  GraduationCap,
  Phone,
  Mail,
  CheckCircle2,
  ArrowUpRight,
  Clock,
  Briefcase,
  AlertCircle,
  Radio,
  Bookmark,
  Layers
} from 'lucide-react';
import { getSocietyById, getCategoryColor } from '../data/societies';
import { getRecruitmentById, RECRUITMENT_STATUSES } from '../data/recruitment';
import { useShortlist, useCompare } from '../context/ShortlistCompareContext';
import PageMeta from '../components/common/PageMeta';
import NotFound from './NotFound';

// Custom inline SVG for Instagram to avoid missing icon package issues
function InstagramIcon({ size = 15, className = '' }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

/**
 * SocietyDetail — Full society profile page.
 *
 * Designed with editorial restraint:
 * - Prominent logo area preserving natural aspect ratios.
 * - Clear typographic hierarchy with Instrument Serif headings.
 * - Human-readable About & Why Join sections with subtle markers.
 * - Separate Faculty Advisors & Student Points of Contact with clickable links.
 * - Extensible recruitment architecture clearly distinguishing factual vs demo states.
 * - Zero references to internal data source provenance (Orientation Deck).
 */
export default function SocietyDetail() {
  const { id } = useParams();
  const society = getSocietyById(id);
  const [imgFailed, setImgFailed] = useState(false);
  const { isShortlisted, toggleShortlist } = useShortlist();
  const { isInCompare, toggleCompare } = useCompare();

  if (!society) {
    return (
      <NotFound
        message={`We couldn't locate a society matching "${id}" in the NSUT directory.`}
      />
    );
  }

  const {
    name,
    tagline,
    category,
    logo,
    about,
    whyJoin,
    annualEvent,
    instagram,
    faculty,
    poc,
  } = society;

  const saved = isShortlisted(society.id);
  const compared = isInCompare(society.id);

  const recruitment = getRecruitmentById(society?.id);
  const statusMeta = recruitment ? RECRUITMENT_STATUSES[recruitment.status] : null;

  const categoryColor = getCategoryColor(category);

  // Fallback monogram for null logo
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

  // Format whyJoin into distinct points if sentences exist
  const whyJoinPoints = whyJoin
    ? whyJoin
        .split(/(?<=[.!?])\s+/)
        .map((p) => p.trim())
        .filter(Boolean)
    : [];

  const metaDescription = `${name}, a ${category} society at NSUT.${tagline ? ` ${tagline}.` : ''}${about ? ` ${about.slice(0, 140)}` : ''}`.trim();

  return (
    <main className="w-full max-w-[1360px] mx-auto px-5 sm:px-8 md:px-12 py-8 sm:py-12">
      <PageMeta
        title={`${name} — SocietyHub`}
        description={metaDescription}
      />
      {/* ── Top Navigation / Back Affordance ────────────────── */}
      <div className="mb-6 sm:mb-8 staged-reveal-1">
        <Link
          to="/"
          className="
            btn-press
            inline-flex items-center gap-2
            text-xs sm:text-[var(--text-sm)]
            font-medium
            text-[var(--color-text-secondary)]
            hover:text-[var(--color-text-primary)]
            transition-colors duration-150
            group
          "
        >
          <ArrowLeft
            size={15}
            strokeWidth={2}
            className="transition-transform duration-200 group-hover:-translate-x-1"
          />
          Back to all societies
        </Link>
      </div>

      {/* ── Society Header / Hero ───────────────────────────── */}
      <header
        className="
          relative
          bg-[var(--color-surface)]
          border border-[var(--color-border)]
          rounded-2xl
          p-6 sm:p-8 md:p-10
          mb-8 sm:mb-10
          shadow-xs
        "
      >
        <div className="flex flex-col sm:flex-row items-start gap-6 sm:gap-8 md:gap-10">
          {/* Large Society Logo Container */}
          <div
            className="
              staged-reveal-2
              w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32
              rounded-xl
              border border-[var(--color-border)]
              bg-[var(--color-surface-secondary)]
              p-3 sm:p-3.5
              flex items-center justify-center
              shrink-0 overflow-hidden
              shadow-xs
            "
          >
            {logo && !imgFailed ? (
              <img
                src={logo}
                alt={`${name} logo`}
                className="max-w-full max-h-full w-auto h-auto object-contain"
                onError={() => setImgFailed(true)}
              />
            ) : (
              <span className="font-display font-semibold text-2xl sm:text-3xl text-[var(--color-accent)] select-none">
                {initials}
              </span>
            )}
          </div>

          {/* Identity & Headings */}
          <div className="flex-1 min-w-0">
            {/* Category tag */}
            <div className="staged-reveal-1 flex flex-wrap items-center gap-2.5 mb-2.5">
              <span
                className="
                  inline-flex items-center gap-1.5
                  text-xs font-medium tracking-wide
                  text-[var(--color-text-secondary)]
                  bg-[var(--color-surface-secondary)]
                  px-3 py-1 rounded-full
                  border border-[var(--color-border)]
                "
              >
                <span
                  className="w-2 h-2 rounded-full shrink-0"
                  style={{ backgroundColor: categoryColor }}
                />
                {category}
              </span>

              <span className="text-xs text-[var(--color-text-tertiary)]">
                NSUT Official Society
              </span>
            </div>

            {/* Society Name */}
            <h1
              className="
                staged-reveal-3
                font-display
                text-3xl sm:text-4xl md:text-5xl
                text-[var(--color-text-primary)]
                leading-[1.08]
                tracking-tight
                font-normal
              "
            >
              {name}
            </h1>

            {/* Tagline */}
            {tagline && (
              <p className="staged-reveal-3 mt-2.5 text-base sm:text-lg text-[var(--color-text-secondary)] italic leading-relaxed max-w-[55ch]">
                &ldquo;{tagline}&rdquo;
              </p>
            )}

            {/* Quick Actions */}
            <div className="staged-reveal-3 mt-5 sm:mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              {/* Shortlist Toggle Button */}
              <button
                type="button"
                id="detail-shortlist-btn"
                onClick={() => toggleShortlist(society.id)}
                className={`
                  btn-press
                  inline-flex items-center gap-2
                  px-4 py-2
                  text-xs font-semibold
                  rounded-lg border
                  transition-all duration-150 cursor-pointer shadow-2xs
                  active:scale-[0.98]
                  ${
                    saved
                      ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] text-[var(--color-accent)]'
                      : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]'
                  }
                `}
                aria-pressed={saved}
                title={saved ? 'Remove from shortlist' : 'Save to shortlist'}
              >
                <Bookmark size={14} className={saved ? 'fill-current stroke-current' : ''} />
                <span>{saved ? 'Saved in Shortlist' : 'Save to Shortlist'}</span>
              </button>

              {/* Compare Toggle Button */}
              <button
                type="button"
                id="detail-compare-btn"
                onClick={() => toggleCompare(society.id)}
                className={`
                  btn-press
                  inline-flex items-center gap-2
                  px-4 py-2
                  text-xs font-semibold
                  rounded-lg border
                  transition-all duration-150 cursor-pointer shadow-2xs
                  active:scale-[0.98]
                  ${
                    compared
                      ? 'bg-[var(--color-lavender-subtle)] border-[var(--color-lavender)] text-[var(--color-lavender)]'
                      : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]'
                  }
                `}
                aria-pressed={compared}
                title={compared ? 'Remove from comparison' : 'Add to comparison'}
              >
                <Layers size={14} strokeWidth={1.75} />
                <span>{compared ? 'In Comparison' : 'Compare'}</span>
              </button>
              {instagram && (
                <a
                  href={`https://instagram.com/${instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center gap-2
                    px-4 py-2
                    text-xs font-medium
                    bg-[var(--color-surface-secondary)]
                    text-[var(--color-text-primary)]
                    border border-[var(--color-border)]
                    rounded-lg
                    transition-all duration-150
                    hover:bg-[var(--color-surface-hover)]
                    hover:border-[var(--color-text-secondary)]
                  "
                >
                  <InstagramIcon size={14} />
                  <span>@{instagram}</span>
                  <ArrowUpRight size={13} strokeWidth={1.75} className="text-[var(--color-text-tertiary)]" />
                </a>
              )}

              <a
                href="#recruitment"
                className="
                  inline-flex items-center gap-1.5
                  px-4 py-2
                  text-xs font-medium
                  bg-[var(--color-accent)] text-[var(--color-accent-text)]
                  rounded-lg
                  transition-all duration-150
                  hover:bg-[var(--color-accent-hover)]
                "
              >
                <span>Recruitment Details</span>
              </a>

              {poc && poc.length > 0 && (
                <a
                  href="#contact"
                  className="
                    inline-flex items-center gap-1.5
                    px-4 py-2
                    text-xs font-medium
                    text-[var(--color-text-secondary)]
                    hover:text-[var(--color-text-primary)]
                    transition-colors
                  "
                >
                  <span>Meet Coordinators ↓</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── 2-Column Content Grid ────────────────────────────── */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10">

        {/* ── Left / Main Column: About & Why Join ──────────── */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-8">
          {/* About Section */}
          {about && (
            <section
              className="
                staged-reveal-4
                bg-[var(--color-surface)]
                border border-[var(--color-border)]
                rounded-2xl
                p-6 sm:p-8
                shadow-xs
              "
              aria-labelledby="about-heading"
            >
              <h2
                id="about-heading"
                className="
                  font-display
                  text-2xl sm:text-[1.75rem]
                  text-[var(--color-text-primary)]
                  tracking-tight
                  mb-4
                "
              >
                About the Society
              </h2>
              <p className="text-[var(--text-base)] sm:text-[1.03rem] text-[var(--color-text-primary)] leading-[1.75] max-w-[65ch]">
                {about}
              </p>
            </section>
          )}

          {/* Why Join Section */}
          {whyJoin && (
            <section
              className="
                staged-reveal-5
                bg-[var(--color-surface)]
                border border-[var(--color-border)]
                rounded-2xl
                p-6 sm:p-8
                shadow-xs
              "
              aria-labelledby="why-join-heading"
            >
              <h2
                id="why-join-heading"
                className="
                  font-display
                  text-2xl sm:text-[1.75rem]
                  text-[var(--color-text-primary)]
                  tracking-tight
                  mb-5
                  flex items-center gap-2.5
                "
              >
                <CheckCircle2 size={22} className="text-[var(--color-accent)] shrink-0" />
                <span>Why Join {name}?</span>
              </h2>

              {whyJoinPoints.length > 1 ? (
                <div className="space-y-3.5">
                  {whyJoinPoints.map((point, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] mt-2.5 shrink-0" />
                      <p className="text-[var(--text-base)] text-[var(--color-text-secondary)] leading-relaxed flex-1">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-[var(--text-base)] text-[var(--color-text-secondary)] leading-relaxed">
                  {whyJoin}
                </p>
              )}
            </section>
          )}

          {/* Flagship Event Section */}
          {annualEvent && (
            <section
              className="
                staged-reveal-6
                bg-[var(--color-surface)]
                border border-[var(--color-border)]
                rounded-2xl
                p-6 sm:p-8
                shadow-xs
              "
              aria-labelledby="flagship-event-heading"
            >
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[var(--color-peach)] mb-2">
                <Calendar size={15} />
                <span>Flagship Campus Event</span>
              </div>
              <h2
                id="flagship-event-heading"
                className="
                  font-display
                  text-2xl sm:text-3xl
                  text-[var(--color-text-primary)]
                  tracking-tight
                  mb-2
                "
              >
                {annualEvent}
              </h2>
              <p className="text-[var(--text-sm)] text-[var(--color-text-secondary)] leading-relaxed max-w-[55ch]">
                The premier annual festival, showcase, or signature competition hosted by {name} at Netaji Subhas University of Technology.
              </p>
            </section>
          )}
        </div>

        {/* ── Right / Secondary Column: Recruitment & People ── */}
        <div className="lg:col-span-5 xl:col-span-4 space-y-6">

          {/* Recruitment Section */}
          <section
            id="recruitment"
            className="
              staged-reveal-8
              bg-[var(--color-surface)]
              border border-[var(--color-border)]
              rounded-2xl
              p-6 sm:p-7
              shadow-xs
            "
            aria-labelledby="recruitment-heading"
          >
            {/* Header with status badge */}
            <div className="flex items-center justify-between gap-3 mb-4 pb-4 border-b border-[var(--color-border-light)]">
              <h2
                id="recruitment-heading"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] flex items-center gap-1.5"
              >
                <Clock size={14} />
                <span>Recruitment</span>
              </h2>

              {/* Dynamic Recruitment Status Pill */}
              {statusMeta ? (
                <span className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium ${statusMeta.badgeClass}`}>
                  <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dotClass} ${['open', 'closing_soon'].includes(recruitment?.status) ? 'status-pulse' : ''}`} />
                  {statusMeta.label}
                </span>
              ) : (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-text-tertiary)]" />
                  Recruitment Closed
                </span>
              )}
            </div>

            {/* Recruitment content */}
            <div className="space-y-4">
              {/* Sample / Demo Data Notice */}
              <div className="p-2.5 rounded-md bg-[var(--color-surface-secondary)] border border-[var(--color-border-light)] text-[11px] text-[var(--color-text-secondary)] flex items-start gap-2">
                <AlertCircle size={13} className="text-[var(--color-text-tertiary)] shrink-0 mt-0.5" />
                <span>
                  <strong className="font-semibold text-[var(--color-text-primary)]">Demo Preview:</strong> Recruitment dates and stages are simulated sample data.
                </span>
              </div>

              {recruitment?.currentStage && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                    Current Stage
                  </span>
                  <span className="text-sm font-medium text-[var(--color-text-primary)]">
                    {recruitment.currentStage}
                  </span>
                </div>
              )}

              {recruitment?.relativeDeadline && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                    Timeline Note
                  </span>
                  <span className="text-xs font-semibold text-[var(--color-accent)]">
                    {recruitment.relativeDeadline}
                  </span>
                  {recruitment.deadline && (
                    <span className="text-xs text-[var(--color-text-tertiary)] block mt-0.5">
                      Deadline: {recruitment.deadline}
                    </span>
                  )}
                </div>
              )}

              {recruitment?.eligibility && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                    Eligibility
                  </span>
                  <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                    {recruitment.eligibility}
                  </p>
                </div>
              )}

              {recruitment?.roles && recruitment.roles.length > 0 && (
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] block mb-1.5">
                    Open Roles ({recruitment.roles.length})
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {recruitment.roles.map((role, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 text-xs rounded bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)]"
                      >
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Dedicated link to the full Recruitment Radar detail page */}
              <Link
                to={`/recruitment/${society.id}`}
                id="society-detail-radar-link"
                className="
                  btn-press
                  w-full inline-flex items-center justify-center gap-2
                  px-4 py-2.5
                  bg-[var(--color-accent)] text-[var(--color-accent-text)]
                  text-xs font-medium
                  rounded-lg
                  transition-colors
                  hover:bg-[var(--color-accent-hover)]
                  active:scale-[0.98]
                  mt-2
                "
              >
                <Radio size={13} strokeWidth={2} />
                <span>View Full Recruitment Timeline →</span>
              </Link>
            </div>
          </section>

          {/* Student Points of Contact (POCs) */}
          {poc && poc.length > 0 && (
            <section
              id="contact"
              className="
                staged-reveal-7
                bg-[var(--color-surface)]
                border border-[var(--color-border)]
                rounded-2xl
                p-6 sm:p-7
                shadow-xs
              "
              aria-labelledby="coordinators-heading"
            >
              <h2
                id="coordinators-heading"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-4 flex items-center gap-1.5"
              >
                <Users size={14} />
                <span>Student Coordinators</span>
              </h2>

              <div className="space-y-3.5">
                {poc.map((person, idx) => (
                  <div
                    key={idx}
                    className="
                      text-xs
                      border-b border-[var(--color-border-light)]
                      last:border-0
                      pb-3.5 last:pb-0
                    "
                  >
                    <p className="font-medium text-[var(--color-text-primary)] text-sm mb-1">
                      {person.name}
                    </p>

                    <div className="flex flex-col gap-1 text-[var(--color-text-secondary)]">
                      {person.phone && (
                        <a
                          href={`tel:${person.phone.replace(/[^0-9+]/g, '')}`}
                          className="
                            inline-flex items-center gap-1.5
                            text-xs text-[var(--color-text-secondary)]
                            hover:text-[var(--color-accent)]
                            transition-colors
                          "
                          title="Call coordinator"
                        >
                          <Phone size={12} className="text-[var(--color-text-tertiary)]" />
                          <span>{person.phone}</span>
                        </a>
                      )}

                      {person.email && (
                        <a
                          href={`mailto:${person.email}`}
                          className="
                            inline-flex items-center gap-1.5
                            text-xs text-[var(--color-text-secondary)]
                            hover:text-[var(--color-accent)]
                            transition-colors
                            truncate
                          "
                          title="Email coordinator"
                        >
                          <Mail size={12} className="text-[var(--color-text-tertiary)] shrink-0" />
                          <span className="truncate">{person.email}</span>
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Faculty Advisors */}
          {faculty && faculty.length > 0 && (
            <section
              className="
                staged-reveal-7
                bg-[var(--color-surface)]
                border border-[var(--color-border-light)]
                rounded-2xl
                p-6 sm:p-7
              "
              aria-labelledby="faculty-heading"
            >
              <h2
                id="faculty-heading"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-3 flex items-center gap-1.5"
              >
                <GraduationCap size={15} />
                <span>Faculty Advisors</span>
              </h2>

              <ul className="space-y-2 text-xs text-[var(--color-text-secondary)]">
                {faculty.map((member, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-border)] mt-1.5 shrink-0" />
                    <span className="leading-snug text-[var(--color-text-primary)]">
                      {member}
                    </span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Official Social Channel Card */}
          {instagram && (
            <section
              className="
                staged-reveal-7
                bg-[var(--color-surface)]
                border border-[var(--color-border-light)]
                rounded-2xl
                p-6 sm:p-7
              "
              aria-labelledby="channels-heading"
            >
              <h2
                id="channels-heading"
                className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-3 flex items-center gap-1.5"
              >
                <Briefcase size={14} />
                <span>Official Channels</span>
              </h2>

              <a
                href={`https://instagram.com/${instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  flex items-center justify-between
                  p-3 rounded-xl
                  bg-[var(--color-surface-secondary)]/70
                  border border-[var(--color-border-light)]
                  transition-all duration-150
                  hover:bg-[var(--color-surface-hover)]
                  hover:border-[var(--color-text-secondary)]
                  group
                "
              >
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-[var(--color-surface)] flex items-center justify-center text-[var(--color-accent)]">
                    <InstagramIcon size={16} />
                  </div>
                  <div>
                    <span className="text-xs font-medium text-[var(--color-text-primary)] block">
                      @{instagram}
                    </span>
                    <span className="text-[11px] text-[var(--color-text-tertiary)]">
                      Instagram Official
                    </span>
                  </div>
                </div>
                <ArrowUpRight
                  size={15}
                  className="text-[var(--color-text-tertiary)] group-hover:text-[var(--color-accent)] transition-colors"
                />
              </a>
            </section>
          )}

        </div>
      </div>
    </main>
  );
}
