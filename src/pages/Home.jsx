import { useState, useMemo } from 'react';
import { ArrowRight, Compass, Sparkles, Check, ArrowUpDown, ChevronDown, RotateCcw } from 'lucide-react';
import { Link } from 'react-router-dom';
import RotatingWord from '../components/ui/RotatingWord';
import EventSlideshow from '../components/ui/EventSlideshow';
import SocietyCard from '../components/society/SocietyCard';
import SearchInput from '../components/ui/SearchInput';
import EmptyState from '../components/ui/EmptyState';
import AnimatedNumber from '../components/ui/AnimatedNumber';
import { societies, FILTER_GROUPS, matchSocietyGroup } from '../data/societies';
import { filterAndSortSocieties } from '../utils/search';
import PageMeta from '../components/common/PageMeta';

/**
 * Home — SocietyHub NSUT Societies Discovery Platform.
 *
 * Search + Filter 2.0:
 *   - Instant client-side search across 6 fields with partial matching & typo tolerance.
 *   - Category groups with active status and keyboard accessibility.
 *   - Reliable sorting: Default (relevance/deck), A–Z, and Z–A.
 *   - Communicative results count and unified Clear Filters action.
 *   - Responsive horizontal scrolling category row on mobile.
 */
export default function Home() {
  const [selectedGroup, setSelectedGroup] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOrder, setSortOrder] = useState('default');

  // Filter and sort societies
  const filteredSocieties = useMemo(() => {
    return filterAndSortSocieties(
      societies,
      searchQuery,
      selectedGroup,
      sortOrder,
      matchSocietyGroup
    );
  }, [selectedGroup, searchQuery, sortOrder]);

  const activeGroupMeta = FILTER_GROUPS.find((g) => g.id === selectedGroup);
  const isFiltered = selectedGroup !== 'all' || searchQuery.trim() !== '' || sortOrder !== 'default';

  const handleClearFilters = () => {
    setSelectedGroup('all');
    setSearchQuery('');
    setSortOrder('default');
  };

  return (
    <main className="w-full overflow-x-hidden">
      <PageMeta
        title="SocietyHub — Explore NSUT Societies"
        description="Explore NSUT's societies, discover communities that match your interests, and find your place on campus."
      />
      {/* ═══════════════════════════════════════════════════════
          1. HERO SECTION — Full first viewport editorial layout
          ═══════════════════════════════════════════════════════ */}
      <section
        className="
          relative
          w-full
          min-h-[calc(100vh-var(--nav-height))]
          lg:max-h-[840px]
          flex flex-col justify-center
          overflow-hidden
        "
        aria-label="Welcome to SocietyHub"
      >
        <div className="w-full h-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center min-h-[calc(100vh-var(--nav-height))] lg:max-h-[840px]">

            {/* ── Left Column: Typographic statement & CTAs ── */}
            <div
              className="
                lg:col-span-6 xl:col-span-6
                pt-10 pb-8 sm:py-12 lg:py-14
                pl-5 sm:pl-8 md:pl-12 lg:pl-14 xl:pl-20 2xl:pl-24
                pr-5 sm:pr-8 lg:pr-8 xl:pr-12
                z-20 flex flex-col justify-center
              "
            >
              {/* Subtle university badge (Hero Stagger 1) */}
              <div className="inline-flex items-center gap-2 mb-4 md:mb-5 hero-stagger-1">
                <span
                  className="
                    inline-flex items-center gap-1.5
                    px-3 py-1 rounded-full
                    text-[11px] font-medium tracking-wide uppercase
                    bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)]
                    border border-[var(--color-border-light)]
                  "
                >
                  <Sparkles size={12} className="text-[var(--color-accent)]" />
                  NSUT Societies Guide · 2026
                </span>
              </div>

              {/* Refined editorial headline (Hero Stagger 2) */}
              <h1
                className="
                  font-display
                  leading-[1.02]
                  tracking-[-0.02em]
                  text-[var(--color-text-primary)]
                  hero-stagger-2
                "
                style={{
                  fontSize: 'clamp(2.5rem, 4.6vw, 5.2rem)',
                }}
              >
                Discover the{' '}
                <span className="inline-block hero-stagger-3">
                  <RotatingWord />
                </span>{' '}
                <br className="hidden sm:inline" />
                side of NSUT.
              </h1>

              {/* Editorial subhead (Hero Stagger 4) */}
              <p
                className="
                  mt-4 sm:mt-5 md:mt-6
                  text-[var(--text-base)] sm:text-[var(--text-lg)]
                  text-[var(--color-text-secondary)]
                  leading-relaxed
                  max-w-[45ch]
                  hero-stagger-4
                "
              >
                Explore 54 technical, cultural, and student-led societies
                across Netaji Subhas University of Technology. Find your
                community, meet seniors, and get involved.
              </p>

              {/* Action Buttons (Hero Stagger 5) */}
              <div className="mt-6 sm:mt-8 flex flex-wrap items-center gap-3.5 hero-stagger-5">
                <a
                  href="#societies"
                  id="hero-browse-cta"
                  className="
                    inline-flex items-center gap-2
                    px-6 py-2.5 sm:py-3
                    bg-[var(--color-accent)] text-[var(--color-accent-text)]
                    text-[var(--text-sm)] font-medium
                    rounded-lg
                    shadow-xs
                    btn-press
                    hover:bg-[var(--color-accent-hover)]
                    hover:shadow-sm
                  "
                >
                  Explore <AnimatedNumber value={54} /> Societies
                  <ArrowRight size={15} strokeWidth={2} />
                </a>

                <Link
                  to="/find-my-society"
                  id="hero-quiz-cta"
                  className="
                    inline-flex items-center gap-2
                    px-5 py-2.5 sm:py-3
                    text-[var(--text-sm)] font-medium
                    text-[var(--color-text-primary)]
                    bg-[var(--color-surface)]
                    border border-[var(--color-border)]
                    rounded-lg
                    btn-press
                    hover:bg-[var(--color-surface-hover)]
                    hover:border-[var(--color-text-secondary)]
                  "
                >
                  <Compass size={15} strokeWidth={1.75} className="text-[var(--color-accent)]" />
                  Find My Society
                </Link>
              </div>

              {/* Quick stats micro-bar (Hero Stagger 6) */}
              <div className="mt-7 pt-5 border-t border-[var(--color-border-light)] max-w-[45ch] flex items-center justify-between text-xs text-[var(--color-text-tertiary)] hero-stagger-6">
                <span>✦ <AnimatedNumber value={54} /> Societies</span>
                <span>✦ <AnimatedNumber value={27} /> Unique Domains</span>
                <span>✦ Main &amp; East Campuses</span>
              </div>
            </div>

            {/* ── Right Column: Large photo slideshow bleeding to edge (Hero Stagger 7) ── */}
            <div
              className="
                lg:col-span-6 xl:col-span-6
                lg:-ml-16 xl:-ml-28 2xl:-ml-36
                lg:w-[calc(100%+4rem)] xl:w-[calc(100%+7rem)] 2xl:w-[calc(100%+9rem)]
                w-full
                h-[320px] xs:h-[380px] sm:h-[440px] md:h-[480px] lg:h-full
                min-h-full
                relative
                hero-stagger-7
              "
            >
              <EventSlideshow
                className="
                  w-full h-full
                  min-h-[320px] xs:min-h-[380px] sm:min-h-[440px] md:min-h-[480px]
                  lg:min-h-[calc(100vh-var(--nav-height))] lg:max-h-[840px]
                "
              />
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          2. HERO SECTION BREAK — Refined divider & status ticker
          ═══════════════════════════════════════════════════════ */}
      <section
        className="
          w-full
          border-y border-[var(--color-border)]
          bg-[var(--color-bg-alt)]
          py-3 sm:py-3.5
          px-5 sm:px-8 md:px-12
        "
        aria-label="Campus directory summary"
      >
        <div className="max-w-[1480px] mx-auto flex flex-wrap items-center justify-between gap-3 text-[11px] sm:text-xs font-medium tracking-wider text-[var(--color-text-secondary)] uppercase">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] status-pulse" />
            <span>NSUT Societies Directory</span>
          </div>
          <div className="hidden md:flex items-center gap-6 text-[var(--color-text-tertiary)]">
            <span>Tech &amp; Coding</span>
            <span>·</span>
            <span>Dramatics &amp; Music</span>
            <span>·</span>
            <span>Debate &amp; Literature</span>
            <span>·</span>
            <span>Motorsports &amp; Robotics</span>
            <span>·</span>
            <span>Finance &amp; Consulting</span>
          </div>
          <div className="text-[var(--color-text-tertiary)]">
            Campus Directory · 54 Societies
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════
          3. SOCIETY DISCOVERY SECTION — The core of the product
          ═══════════════════════════════════════════════════════ */}
      <section
        id="societies"
        className="
          w-full
          max-w-[1480px]
          mx-auto
          px-5 sm:px-8 md:px-12 lg:px-16
          pt-12 sm:pt-16 md:pt-20
          pb-20 sm:pb-28
        "
      >
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-[var(--color-border-light)]">
          <div>
            <h2 className="font-display text-[2.2rem] sm:text-[2.75rem] text-[var(--color-text-primary)] leading-[1.05] tracking-tight">
              Explore Societies
            </h2>
            <p className="mt-2 text-[var(--text-base)] text-[var(--color-text-secondary)] max-w-[55ch]">
              Browse through technical clubs, cultural teams, sports leagues, and student
              initiatives officially recognized at NSUT.
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-[var(--text-sm)] text-[var(--color-text-secondary)]">
              <div className="flex items-center gap-1.5">
                <span>Not sure where to start?</span>
                <Link
                  to="/find-my-society"
                  className="inline-flex items-center gap-1 font-medium text-[var(--color-accent)] hover:underline"
                >
                  <span>Find your society</span>
                  <ArrowRight size={13} strokeWidth={2} />
                </Link>
              </div>
              <span className="text-[var(--color-border)] hidden sm:inline">|</span>
              <div className="flex items-center gap-1.5">
                <span>Active campus drives?</span>
                <Link
                  to="/recruitment"
                  className="inline-flex items-center gap-1 font-medium text-[var(--color-accent)] hover:underline"
                >
                  <span>Recruitment Radar</span>
                  <ArrowRight size={13} strokeWidth={2} />
                </Link>
              </div>
            </div>
          </div>

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 w-full md:w-auto shrink-0">
            <div className="w-full sm:w-72 md:w-80">
              <SearchInput
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onClear={() => setSearchQuery('')}
                placeholder="Search by name, fest, or domain…"
                resultCount={searchQuery.trim() ? filteredSocieties.length : undefined}
                totalCount={societies.length}
              />
            </div>

            <div className="relative inline-flex items-center shrink-0">
              <label htmlFor="society-sort-select" className="sr-only">Sort societies</label>
              <ArrowUpDown size={13} className="absolute left-3 text-[var(--color-text-tertiary)] pointer-events-none" aria-hidden="true" />
              <select
                id="society-sort-select"
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                aria-label="Sort societies"
                className="
                  appearance-none
                  w-full sm:w-auto
                  pl-8 pr-7 py-2.5
                  bg-[var(--color-surface-input)] text-[var(--color-text-primary)]
                  border border-[var(--color-border)] rounded-lg
                  text-[var(--text-xs)] font-medium
                  cursor-pointer outline-none
                  transition-all duration-150
                  focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20
                  hover:border-[var(--color-border-strong)]
                  shadow-2xs
                "
              >
                <option value="default">Default Order</option>
                <option value="name-asc">Alphabetical (A–Z)</option>
                <option value="name-desc">Alphabetical (Z–A)</option>
              </select>
              <ChevronDown size={12} className="absolute right-2.5 text-[var(--color-text-tertiary)] pointer-events-none" aria-hidden="true" />
            </div>
          </div>
        </div>

        {/* ── Category Filter Pills ────────────────────────── */}
        <div className="mt-6 mb-8">
          <div
            className="
              flex items-center gap-2
              overflow-x-auto
              pb-2
              scrollbar-none
              -mx-5 px-5 sm:mx-0 sm:px-0
            "
            role="group"
            aria-label="Category filters"
          >
            {FILTER_GROUPS.map((group) => {
              const isActive = selectedGroup === group.id;
              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setSelectedGroup(group.id)}
                  aria-pressed={isActive}
                  className={`
                    inline-flex items-center gap-1.5
                    px-3.5 py-1.5
                    rounded-lg
                    text-xs font-medium
                    whitespace-nowrap
                    tab-press
                    cursor-pointer select-none
                    ${
                      isActive
                        ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] border border-[var(--color-accent)] shadow-xs'
                        : 'bg-[var(--color-surface)] text-[var(--color-text-secondary)] border border-[var(--color-border)] hover:bg-[var(--color-surface-hover)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]'
                    }
                  `}
                >
                  {isActive && <Check size={12} strokeWidth={2.5} />}
                  <span>{group.label}</span>
                  <span
                    className={`
                      text-[10px] px-1.5 py-0.2 rounded-full ml-0.5 font-semibold
                      ${
                        isActive
                          ? 'bg-[var(--color-check-bg)] text-[var(--color-check-fg)]'
                          : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-tertiary)]'
                      }
                    `}
                  >
                    {group.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Results Count & Clear Filter Action Line */}
          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-[var(--color-text-tertiary)]">
            <div className="flex items-center gap-1.5 flex-wrap">
              <span className="font-semibold text-[var(--color-text-primary)]">
                {isFiltered ? `${filteredSocieties.length} of 54 societies` : '54 societies'}
              </span>
              {selectedGroup !== 'all' && (
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
              {sortOrder !== 'default' && (
                <>
                  <span>·</span>
                  <span className="text-[var(--color-text-tertiary)]">
                    sorted {sortOrder === 'name-asc' ? 'A–Z' : 'Z–A'}
                  </span>
                </>
              )}
            </div>

            {isFiltered && (
              <button
                type="button"
                id="clear-filters-btn"
                onClick={handleClearFilters}
                className="
                  inline-flex items-center gap-1.5
                  text-[var(--color-accent)] hover:underline
                  font-medium cursor-pointer transition-colors
                "
                aria-label="Clear all active search, category, and sort filters"
              >
                <RotateCcw size={12} strokeWidth={2} />
                <span>Clear filters</span>
              </button>
            )}
          </div>
        </div>

        {/* ── Society Cards Grid ─────────────────────────────── */}
        {filteredSocieties.length > 0 ? (
          <div
            id="societies-grid"
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              2xl:grid-cols-4
              gap-5 sm:gap-6
            "
          >
            {filteredSocieties.map((society, idx) => (
              <SocietyCard key={society.id} society={society} index={idx} />
            ))}
          </div>
        ) : (
          <EmptyState
            title="No societies found"
            message={`No NSUT societies matched your search for "${searchQuery}"${
              selectedGroup !== 'all' ? ` in ${activeGroupMeta?.label}` : ''
            }. Try a different search or clear your filters.`}
            actionLabel="Clear filters"
            onAction={handleClearFilters}
          />
        )}
      </section>
    </main>
  );
}
