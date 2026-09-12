import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  Calendar,
  CheckCircle2,
  AlertCircle,
  ExternalLink,
  Send,
  Users,
  HelpCircle,
} from 'lucide-react';
import RecruitmentTimeline from '../components/recruitment/RecruitmentTimeline';
import DemoApplicationModal from '../components/recruitment/DemoApplicationModal';
import { getSocietyById, getCategoryColor } from '../data/societies';
import { getRecruitmentById, RECRUITMENT_STATUSES } from '../data/recruitment';
import PageMeta from '../components/common/PageMeta';
import NotFound from './NotFound';

export default function RecruitmentDetail() {
  const { societyId } = useParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [imgFailed, setImgFailed] = useState(false);

  const society = getSocietyById(societyId);
  const recruitmentItem = getRecruitmentById(societyId);

  if (!society || !recruitmentItem) {
    return (
      <NotFound
        message={`No recruitment record was found for "${societyId}".`}
      />
    );
  }

  const statusMeta = RECRUITMENT_STATUSES[recruitmentItem.status] || RECRUITMENT_STATUSES.open;
  const categoryColor = getCategoryColor(society.category);

  const isClosed = recruitmentItem.status === 'closed';
  const isUpcoming = recruitmentItem.status === 'upcoming';
  const canApply = recruitmentItem.status === 'open' || recruitmentItem.status === 'closing_soon';

  const initials = society.name
    ? society.name
        .replace(/[^a-zA-Z0-9 ]/g, '')
        .split(' ')
        .filter(Boolean)
        .slice(0, 3)
        .map((w) => w[0])
        .join('')
        .toUpperCase()
    : 'SOC';

  const metaDescription = `Explore the recruitment journey, roles, stages, and eligibility for ${society.name}.`;

  return (
    <main className="w-full pb-20 sm:pb-28">
      <PageMeta
        title={`${society.name} Recruitment — SocietyHub`}
        description={metaDescription}
      />
      {/* ── Demo Notice Bar ────────────────────────────────────── */}
      <div className="w-full bg-[var(--color-pale-yellow-subtle)] border-b border-[var(--color-pale-yellow-border)] py-2 px-5 text-center">
        <div className="max-w-[1200px] mx-auto flex items-center justify-center gap-2 text-xs font-medium text-[var(--color-text-primary)]">
          <AlertCircle size={13} className="text-[var(--color-accent)] shrink-0" />
          <span>
            <strong>DEMO DATA:</strong> All recruitment stages, dates, and role requirements for {society.name} are prototype simulations.
          </span>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-8 sm:pt-12">
        {/* ── Breadcrumb Navigation ────────────────────────────── */}
        <div className="flex items-center gap-3 text-xs text-[var(--color-text-tertiary)] mb-6">
          <Link
            to="/recruitment"
            className="inline-flex items-center gap-1.5 hover:text-[var(--color-text-primary)] transition-colors"
          >
            <ArrowLeft size={13} />
            <span>Recruitment Radar</span>
          </Link>
          <span>/</span>
          <span className="text-[var(--color-text-secondary)]">{society.name}</span>
          <span>/</span>
          <Link
            to={`/society/${society.id}`}
            id="back-to-society-profile"
            className="text-[var(--color-accent)] hover:underline inline-flex items-center gap-1"
          >
            <span>View Society Profile</span>
            <ExternalLink size={11} />
          </Link>
        </div>

        {/* ── Header Card ────────────────────────────────────────── */}
        <div className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex flex-col sm:flex-row items-start justify-between gap-6">
            <div className="flex items-start gap-4 sm:gap-5">
              {/* Logo */}
              <div
                className="
                  w-16 h-16 sm:w-20 sm:h-20 rounded-xl shrink-0
                  flex items-center justify-center
                  bg-[var(--color-surface-secondary)]
                  border border-[var(--color-border-light)]
                  overflow-hidden
                "
              >
                {society.logo && !imgFailed ? (
                  <img
                    src={society.logo}
                    alt={`${society.name} logo`}
                    className="w-full h-full object-contain p-2"
                    onError={() => setImgFailed(true)}
                  />
                ) : (
                  <span className="font-display font-semibold text-sm text-[var(--color-text-tertiary)]">
                    {initials}
                  </span>
                )}
              </div>

              <div>
                {/* Category & Status */}
                <div className="flex flex-wrap items-center gap-2 mb-1.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ backgroundColor: categoryColor }}
                  />
                  <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                    {society.category}
                  </span>
                  <span>·</span>
                  <span
                    className={`
                      inline-flex items-center gap-1.5
                      px-2.5 py-0.5 rounded-full
                      text-[11px] font-semibold tracking-tight
                      ${statusMeta.badgeClass}
                    `}
                  >
                    <span className={`w-1.5 h-1.5 rounded-full ${statusMeta.dotClass}`} />
                    <span>{statusMeta.label}</span>
                  </span>
                </div>

                <h1 className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] tracking-tight">
                  {society.name}
                </h1>
                <p className="text-xs sm:text-sm text-[var(--color-text-secondary)] mt-1 max-w-xl">
                  {society.tagline}
                </p>
              </div>
            </div>

            {/* Application CTA Button */}
            <div className="w-full sm:w-auto shrink-0 flex flex-col items-stretch sm:items-end gap-2">
              <button
                type="button"
                id="recruitment-apply-cta"
                onClick={() => setModalOpen(true)}
                disabled={isClosed}
                className={`
                  inline-flex items-center justify-center gap-2
                  px-6 py-3 rounded-lg
                  text-xs font-semibold
                  transition-all duration-150 cursor-pointer shadow-xs
                  ${
                    canApply
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)] hover:shadow-sm active:scale-[0.98]'
                      : isUpcoming
                      ? 'bg-[var(--color-dusty-blue-subtle)] text-[var(--color-dusty-blue)] border border-[var(--color-dusty-blue-border)] hover:bg-[var(--color-surface-hover)]'
                      : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-tertiary)] border border-[var(--color-border)] cursor-not-allowed'
                  }
                `}
              >
                <Send size={14} />
                <span>{canApply ? 'Apply Now (Demo Form)' : isUpcoming ? 'Notify When Open' : 'Recruitment Concluded'}</span>
              </button>

              <span className="text-[10px] text-[var(--color-text-tertiary)] text-center sm:text-right">
                {recruitmentItem.relativeDeadline}
              </span>
            </div>
          </div>
        </div>

        {/* ── Recruitment Stage Timeline Section ────────────────── */}
        <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 mb-8 shadow-xs">
          <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[var(--color-border-light)]">
            <div>
              <h2 className="font-display text-xl text-[var(--color-text-primary)]">
                Recruitment Timeline &amp; Progress
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] mt-0.5">
                Current active stage: <strong className="text-[var(--color-accent)]">{recruitmentItem.currentStage}</strong>
              </p>
            </div>
            <span className="text-[11px] font-medium px-2.5 py-1 rounded bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] border border-[var(--color-border-light)]">
              5 Stages
            </span>
          </div>

          <div id="recruitment-timeline" className="py-4">
            <RecruitmentTimeline status={recruitmentItem.status} />
          </div>
        </section>

        {/* ── 2-Column Content Grid ────────────────────────────── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Roles & Selection Process */}
          <div className="lg:col-span-8 space-y-8">
            {/* Open Roles */}
            <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="font-display text-xl text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                <Users size={18} className="text-[var(--color-accent)]" />
                <span>Available Roles &amp; Departments</span>
              </h2>
              <p className="text-xs text-[var(--color-text-secondary)] mb-6">
                Applicants may choose up to two domain preferences during induction screening.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {recruitmentItem.roles.map((role, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-xl bg-[var(--color-surface-secondary)] border border-[var(--color-border-light)] flex items-start gap-3"
                  >
                    <span className="w-6 h-6 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-semibold flex items-center justify-center text-[var(--color-accent)] shrink-0 mt-0.5">
                      0{i + 1}
                    </span>
                    <div>
                      <h4 className="text-xs font-semibold text-[var(--color-text-primary)]">
                        {role}
                      </h4>
                      <p className="text-[11px] text-[var(--color-text-secondary)] mt-1">
                        Involves active project leadership, mentorship sessions, and varsity representation.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Selection Rounds Breakdown */}
            <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 sm:p-8 shadow-xs">
              <h2 className="font-display text-xl text-[var(--color-text-primary)] mb-4">
                Selection Process Overview
              </h2>

              <div className="space-y-3.5">
                {recruitmentItem.rounds.map((round, idx) => (
                  <div
                    key={round.id}
                    className="flex items-start gap-4 p-3.5 rounded-xl border border-[var(--color-border-light)] bg-[var(--color-surface-secondary)]"
                  >
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-primary)] shrink-0">
                      Stage {idx + 1}
                    </span>
                    <div className="flex-1">
                      <h4 className="text-xs font-semibold text-[var(--color-text-primary)]">
                        {round.name}
                      </h4>
                      <p className="text-[11px] text-[var(--color-text-secondary)] mt-0.5">
                        {round.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column: Key Dates, Eligibility & Notes */}
          <div className="lg:col-span-4 space-y-6">
            {/* Key Dates Card */}
            <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs">
              <h3 className="font-display text-lg text-[var(--color-text-primary)] mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-[var(--color-accent)]" />
                <span>Important Dates</span>
              </h3>

              <div className="space-y-4">
                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                    Applications Open
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {recruitmentItem.openingDate}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                    Final Application Deadline
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-accent)]">
                    {recruitmentItem.deadline}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                    Interview Window
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {recruitmentItem.interviewInfo.split('.')[0]}
                  </span>
                </div>

                <div>
                  <span className="text-[11px] uppercase tracking-wider text-[var(--color-text-tertiary)] block">
                    Results Announcement
                  </span>
                  <span className="text-sm font-semibold text-[var(--color-text-primary)]">
                    {recruitmentItem.resultDate}
                  </span>
                </div>
              </div>
            </section>

            {/* Eligibility Card */}
            <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs">
              <h3 className="font-display text-lg text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                <CheckCircle2 size={16} className="text-[var(--color-accent)]" />
                <span>Eligibility</span>
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed">
                {recruitmentItem.eligibility}
              </p>
            </section>

            {/* Coordinator Notes */}
            <section className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-2xl p-6 shadow-xs">
              <h3 className="font-display text-lg text-[var(--color-text-primary)] mb-2 flex items-center gap-2">
                <HelpCircle size={16} className="text-[var(--color-peach)]" />
                <span>Guidance &amp; Advice</span>
              </h3>
              <p className="text-xs text-[var(--color-text-secondary)] leading-relaxed mb-3">
                {recruitmentItem.notes}
              </p>
              <div className="pt-3 border-t border-[var(--color-border-light)] text-[11px] text-[var(--color-text-tertiary)]">
                Direct questions can be addressed to society coordinators via their Instagram handle.
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* ── Demo Application Modal ─────────────────────────────── */}
      <DemoApplicationModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        society={society}
        recruitmentItem={recruitmentItem}
      />
    </main>
  );
}
