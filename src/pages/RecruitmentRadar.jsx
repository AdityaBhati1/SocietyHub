import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowUpDown,
  ChevronDown,
  RotateCcw,
  AlertCircle,
  Radio,
  Clock,
  Layers,
  CheckCircle2,
} from 'lucide-react';
import SearchInput from '../components/ui/SearchInput';
import EmptyState from '../components/ui/EmptyState';
import RecruitmentCard from '../components/recruitment/RecruitmentCard';
import DemoApplicationModal from '../components/recruitment/DemoApplicationModal';
import AnimatedNumber from '../components/ui/AnimatedNumber';
import { societies, FILTER_GROUPS, matchSocietyGroup } from '../data/societies';
import {
  recruitment,
  RECRUITMENT_FILTER_TABS,
  getRecruitmentMetrics,
} from '../data/recruitment';
import PageMeta from '../components/common/PageMeta';

export default function RecruitmentRadar() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedCategoryGroup, setSelectedCategoryGroup] = useState('all');
  const [sortOrder, setSortOrder] = useState('default');
  const [activeModalItem, setActiveModalItem] = useState(null);

  // Dynamic campus overview metrics
  const metrics = useMemo(() => getRecruitmentMetrics(), []);

  // Filter and sort recruitment items
  const filteredItems = useMemo(() => {
    let list = recruitment.map((item) => {
      const soc = societies.find((s) => s.id === item.societyId);
      return {
        ...item,
        society: soc,
      };
    });

    // 1. Status filter
    if (selectedStatus !== 'all') {
      if (selectedStatus === 'recruiting_now') {
        list = list.filter((r) => r.status === 'open' || r.status === 'closing_soon');
      } else if (selectedStatus === 'opening_soon') {
        list = list.filter((r) => r.status === 'upcoming');
      } else if (selectedStatus === 'later_rounds') {
        list = list.filter((r) => r.status === 'round_1' || r.status === 'round_2' || r.status === 'interviews');
      } else if (selectedStatus === 'closed_completed') {
        list = list.filter((r) => r.status === 'results' || r.status === 'closed');
      } else {
        list = list.filter((r) => r.status === selectedStatus);
      }
    }

    // 2. Category group filter
    if (selectedCategoryGroup !== 'all') {
      list = list.filter((r) => matchSocietyGroup(r.society || { category: r.category }, selectedCategoryGroup));
    }

    // 3. Search filter
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter((r) => {
        const textToSearch = [
          r.societyName,
          r.category,
          r.currentStage,
          (r.roles || []).join(' '),
          r.eligibility,
          r.notes,
          r.interviewInfo,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();

        return textToSearch.includes(q);
      });
    }

    // 4. Sorting
    if (sortOrder === 'name-asc') {
      list.sort((a, b) => a.societyName.localeCompare(b.societyName, 'en', { sensitivity: 'base' }));
    } else if (sortOrder === 'deadline-asc') {
      list.sort((a, b) => {
        // Simple day priority comparison for demo dates
        const dayA = parseInt(a.deadline) || 99;
        const dayB = parseInt(b.deadline) || 99;
        return dayA - dayB;
      });
    } else if (sortOrder === 'opening-asc') {
      list.sort((a, b) => {
        const dayA = parseInt(a.openingDate) || 99;
        const dayB = parseInt(b.openingDate) || 99;
        return dayA - dayB;
      });
    } else {
      // Default: Active recruitments first, then upcoming, then later rounds, then closed
      const statusWeight = {
        closing_soon: 10,
        open: 9,
        round_1: 8,
        round_2: 7,
        interviews: 6,
        upcoming: 5,
        results: 4,
        closed: 1,
      };
      list.sort((a, b) => (statusWeight[b.status] || 0) - (statusWeight[a.status] || 0));
    }

    return list;
  }, [searchQuery, selectedStatus, selectedCategoryGroup, sortOrder]);

  const isFiltered =
    selectedStatus !== 'all' ||
    selectedCategoryGroup !== 'all' ||
    searchQuery.trim() !== '' ||
    sortOrder !== 'default';

  const handleClearFilters = () => {
    setSelectedStatus('all');
    setSelectedCategoryGroup('all');
    setSearchQuery('');
    setSortOrder('default');
  };

  const activeGroupMeta = FILTER_GROUPS.find((g) => g.id === selectedCategoryGroup);
  const activeStatusMeta = RECRUITMENT_FILTER_TABS.find((t) => t.id === selectedStatus);

  return (
    <main className="w-full pb-20 sm:pb-28">
      <PageMeta
        title="Recruitment Radar — SocietyHub"
        description="Explore society recruitment opportunities, stages, deadlines, and open roles across NSUT."
      />
      {/* ── Demo Mode Disclaimer Notice ────────────────────────── */}
      <div id="recruitment-demo-banner" className="w-full bg-[var(--color-pale-yellow-subtle)] border-b border-[var(--color-pale-yellow-border)] py-2 px-5 text-center">
        <div className="max-w-[1480px] mx-auto flex items-center justify-center gap-2 text-xs font-medium text-[var(--color-text-primary)]">
          <AlertCircle size={13} className="text-[var(--color-accent)] shrink-0" />
          <span>
            <strong>PROTOTYPE MODE:</strong> Recruitment schedules, rounds, and eligibility are high-fidelity sample data created for demonstration purposes.
          </span>
        </div>
      </div>

      <div className="max-w-[1480px] mx-auto px-5 sm:px-8 md:px-12 lg:px-16 pt-10 sm:pt-14">
        {/* ── Header Area ────────────────────────────────────────── */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--color-border-light)]">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                <Radio size={12} className="animate-pulse" />
                Live Campus Radar · 2026-27
              </span>
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] text-[var(--color-text-primary)] leading-[1.04] tracking-tight">
              Recruitment Radar
            </h1>

            <p className="mt-2.5 text-[var(--text-base)] sm:text-[var(--text-lg)] text-[var(--color-text-secondary)] max-w-[55ch] leading-relaxed">
              Find who&rsquo;s recruiting, see where you are in the process, and know what happens next across all 54 NSUT societies.
            </p>
          </div>

          {/* Quick Find My Society Bridge */}
          <div className="shrink-0">
            <Link
              to="/find-my-society"
              className="
                inline-flex items-center gap-2
                px-4 py-2.5 rounded-lg
                text-xs font-semibold
                bg-[var(--color-surface)] text-[var(--color-text-primary)]
                border border-[var(--color-border)]
                hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]
                transition-all duration-150 shadow-2xs
              "
            >
              <Sparkles size={13} className="text-[var(--color-accent)]" />
              <span>Unsure where to apply? Take the quiz →</span>
            </Link>
          </div>
        </div>

        {/* ── Dynamic Recruitment Overview Cards ────────────────── */}
        <div className="mt-8 mb-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-4">
            {/* Recruiting Now */}
            <button
              type="button"
              id="metric-btn-recruiting-now"
              onClick={() => setSelectedStatus(selectedStatus === 'recruiting_now' ? 'all' : 'recruiting_now')}
              aria-pressed={selectedStatus === 'recruiting_now'}
              aria-label={`Recruiting Now filter: ${metrics.recruitingNow} societies open or closing soon`}
              className={`
                text-left p-4 sm:p-5 rounded-xl border transition-all duration-150 cursor-pointer btn-press active:scale-[0.98]
                ${
                  selectedStatus === 'recruiting_now'
                    ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] ring-2 ring-[var(--color-accent)]/20 shadow-xs'
                    : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]'
                }
              `}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-accent)]">
                  Recruiting Now
                </span>
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] status-pulse" />
              </div>
              <span id="metric-recruiting-now" className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] font-medium">
                <AnimatedNumber value={metrics.recruitingNow} />
              </span>
              <p className="text-[11px] text-[var(--color-text-tertiary)] mt-1">
                Open or closing in 48 hours
              </p>
            </button>

            {/* Opening Soon */}
            <button
              type="button"
              id="metric-btn-opening-soon"
              onClick={() => setSelectedStatus(selectedStatus === 'opening_soon' ? 'all' : 'opening_soon')}
              aria-pressed={selectedStatus === 'opening_soon'}
              aria-label={`Opening Soon filter: ${metrics.openingSoon} societies launching soon`}
              className={`
                text-left p-4 sm:p-5 rounded-xl border transition-all duration-150 cursor-pointer btn-press active:scale-[0.98]
                ${
                  selectedStatus === 'opening_soon'
                    ? 'bg-[var(--color-dusty-blue-subtle)] border-[var(--color-dusty-blue)] ring-2 ring-[var(--color-dusty-blue)]/20 shadow-xs'
                    : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]'
                }
              `}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-dusty-blue)]">
                  Opening Soon
                </span>
                <Clock size={13} className="text-[var(--color-dusty-blue)]" />
              </div>
              <span id="metric-opening-soon" className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] font-medium">
                <AnimatedNumber value={metrics.openingSoon} />
              </span>
              <p className="text-[11px] text-[var(--color-text-tertiary)] mt-1">
                Launching within 7-10 days
              </p>
            </button>

            {/* In Later Rounds */}
            <button
              type="button"
              id="metric-btn-later-rounds"
              onClick={() => setSelectedStatus(selectedStatus === 'later_rounds' ? 'all' : 'later_rounds')}
              aria-pressed={selectedStatus === 'later_rounds'}
              aria-label={`In Later Rounds filter: ${metrics.inLaterRounds} societies in tasks, GD, or interviews`}
              className={`
                text-left p-4 sm:p-5 rounded-xl border transition-all duration-150 cursor-pointer btn-press active:scale-[0.98]
                ${
                  selectedStatus === 'later_rounds'
                    ? 'bg-[var(--color-lavender-subtle)] border-[var(--color-lavender)] ring-2 ring-[var(--color-lavender)]/20 shadow-xs'
                    : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]'
                }
              `}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-lavender)]">
                  In Later Rounds
                </span>
                <Layers size={13} className="text-[var(--color-lavender)]" />
              </div>
              <span id="metric-in-later-rounds" className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] font-medium">
                <AnimatedNumber value={metrics.inLaterRounds} />
              </span>
              <p className="text-[11px] text-[var(--color-text-tertiary)] mt-1">
                Tasks, GD, or Panel interviews
              </p>
            </button>

            {/* Closed / Completed */}
            <button
              type="button"
              id="metric-btn-closed-completed"
              onClick={() => setSelectedStatus(selectedStatus === 'closed_completed' ? 'all' : 'closed_completed')}
              aria-pressed={selectedStatus === 'closed_completed'}
              aria-label={`Concluded filter: ${metrics.closedOrResults} societies finished or releasing results`}
              className={`
                text-left p-4 sm:p-5 rounded-xl border transition-all duration-150 cursor-pointer btn-press active:scale-[0.98]
                ${
                  selectedStatus === 'closed_completed'
                    ? 'bg-[var(--color-surface-secondary)] border-[var(--color-border-strong)] ring-2 ring-[var(--color-border-strong)]/20 shadow-xs'
                    : 'bg-[var(--color-surface)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]'
                }
              `}
            >
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)]">
                  Completed
                </span>
                <CheckCircle2 size={13} className="text-[var(--color-text-tertiary)]" />
              </div>
              <span id="metric-closed-completed" className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] font-medium">
                <AnimatedNumber value={metrics.closedCompleted} />
              </span>
              <p className="text-[11px] text-[var(--color-text-tertiary)] mt-1">
                Results out or cohort filled
              </p>
            </button>
          </div>
        </div>

        {/* ── Search, Sort, and Category Bar ──────────────────────── */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 pb-6">
          {/* Search bar */}
          <div className="w-full md:w-80 shrink-0">
            <SearchInput
              id="recruitment-search-input"
              clearButtonId="clear-recruitment-search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onClear={() => setSearchQuery('')}
              placeholder="Search roles, skills, or societies…"
              resultCount={searchQuery.trim() ? filteredItems.length : undefined}
              totalCount={recruitment.length}
            />
          </div>

          {/* Secondary Controls: Category Filter + Sort Select */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Category Dropdown */}
            <div className="relative inline-flex items-center">
              <label htmlFor="recruitment-category-select" className="sr-only">Filter by Category</label>
              <select
                id="recruitment-category-select"
                value={selectedCategoryGroup}
                onChange={(e) => setSelectedCategoryGroup(e.target.value)}
                className="
                  appearance-none
                  pl-3.5 pr-8 py-2.5
                  bg-[var(--color-surface-input)] text-[var(--color-text-primary)]
                  border border-[var(--color-border)] rounded-lg
                  text-xs font-medium cursor-pointer outline-none
                  transition-all duration-150
                  focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20
                  shadow-2xs
                "
              >
                {FILTER_GROUPS.map((group) => (
                  <option key={group.id} value={group.id}>
                    {group.label} ({group.count})
                  </option>
                ))}
              </select>
              <ChevronDown size={12} className="absolute right-2.5 text-[var(--color-text-tertiary)] pointer-events-none" />
            </div>

            {/* Sort Select */}
            <div className="relative inline-flex items-center">
              <label htmlFor="recruitment-sort-select" className="sr-only">Sort recruitments</label>
              <ArrowUpDown size={13} className="absolute left-3 text-[var(--color-text-tertiary)] pointer-events-none" />
              <select
                id="recruitment-sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="
                  appearance-none
                  pl-8 pr-7 py-2.5
                  bg-[var(--color-surface-input)] text-[var(--color-text-primary)]
                  border border-[var(--color-border)] rounded-lg
                  text-xs font-medium cursor-pointer outline-none
                  transition-all duration-150
                  focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20
                  shadow-2xs
                "
              >
                <option value="default">Priority Order</option>
                <option value="deadline-asc">Deadline (Soonest first)</option>
                <option value="opening-asc">Opening (Soonest first)</option>
                <option value="name-asc">Alphabetical (A–Z)</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 text-[var(--color-text-tertiary)] pointer-events-none" />
            </div>
          </div>
        </div>

        {/* ── Status Tabs (Horizontal Scrollable) ─────────────────── */}
        <div className="mb-6">
          <div
            className="
              flex items-center gap-1.5
              overflow-x-auto pb-2 scrollbar-none
              -mx-5 px-5 sm:mx-0 sm:px-0
            "
            role="group"
            aria-label="Recruitment status filter"
          >
            {RECRUITMENT_FILTER_TABS.map((tab) => {
              const isActive = selectedStatus === tab.id;
              return (
                <button
                  key={tab.id}
                  id={`status-filter-${tab.id}`}
                  type="button"
                  onClick={() => setSelectedStatus(tab.id)}
                  aria-pressed={isActive}
                  className={`
                    tab-press inline-flex items-center gap-1.5
                    px-3 py-1.5 rounded-lg
                    text-xs font-medium whitespace-nowrap
                    transition-all duration-150 cursor-pointer select-none
                    ${
                      isActive
                        ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] border border-[var(--color-accent)] shadow-xs'
                        : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)]'
                    }
                  `}
                >
                  {tab.id !== 'all' && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isActive ? 'bg-[var(--color-check-bg)]' : 'bg-[var(--color-text-tertiary)]'
                      }`}
                    />
                  )}
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* Filter Status Summary & Clear Filter Link */}
          <div className="mt-2.5 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-text-tertiary)]">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-[var(--color-text-primary)]">
                {isFiltered ? `${filteredItems.length} of 54 societies` : '54 societies on radar'}
              </span>
              {selectedStatus !== 'all' && (
                <>
                  <span>·</span>
                  <span className="text-[var(--color-text-secondary)]">status: {activeStatusMeta?.label}</span>
                </>
              )}
              {selectedCategoryGroup !== 'all' && (
                <>
                  <span>·</span>
                  <span className="text-[var(--color-text-secondary)]">in {activeGroupMeta?.label}</span>
                </>
              )}
              {searchQuery.trim() && (
                <>
                  <span>·</span>
                  <span className="text-[var(--color-accent)]">matching &ldquo;{searchQuery}&rdquo;</span>
                </>
              )}
            </div>

            {isFiltered && (
              <button
                type="button"
                id="clear-recruitment-filters"
                onClick={handleClearFilters}
                className="
                  btn-press inline-flex items-center gap-1.5
                  text-[var(--color-accent)] hover:underline
                  font-medium cursor-pointer transition-colors
                "
              >
                <RotateCcw size={12} strokeWidth={2} />
                <span>Clear filters</span>
              </button>
            )}
          </div>
        </div>

        {/* ── Recruitment Card Grid ─────────────────────────────── */}
        {filteredItems.length > 0 ? (
          <div
            id="recruitment-grid"
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              2xl:grid-cols-4
              gap-5 sm:gap-6
            "
          >
            {filteredItems.map((item, idx) => (
              <RecruitmentCard
                key={item.societyId}
                recruitmentItem={item}
                society={item.society}
                index={idx}
                onApply={(recItem, soc) => setActiveModalItem({ recruitmentItem: recItem, society: soc })}
              />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No recruitment drives found"
            message={`No NSUT societies matched your recruitment filters${
              searchQuery ? ` for "${searchQuery}"` : ''
            }. Try resetting your status and category filters.`}
            actionLabel="Reset recruitment radar"
            onAction={handleClearFilters}
          />
        )}
      </div>

      {/* ── Demo Application Modal ─────────────────────────────── */}
      <DemoApplicationModal
        isOpen={Boolean(activeModalItem)}
        onClose={() => setActiveModalItem(null)}
        society={activeModalItem?.society}
        recruitmentItem={activeModalItem?.recruitmentItem}
      />
    </main>
  );
}
