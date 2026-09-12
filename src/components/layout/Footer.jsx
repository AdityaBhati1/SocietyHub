import { Link } from 'react-router-dom';

/**
 * Footer — minimal, warm, editorial.
 * Matches the restrained aesthetic of the rest of the site.
 */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="site-footer"
      className="
        mt-auto
        border-t border-[var(--color-border)]
        bg-[var(--color-bg-alt)]
        transition-colors duration-300
      "
    >
      <div className="page-container py-10 md:py-14">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          {/* Left */}
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-[var(--text-xl)] text-[var(--color-text-primary)]">
                SocietyHub
              </span>
              <span className="text-[10px] uppercase font-semibold tracking-wider px-1.5 py-0.5 rounded bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-tertiary)]">
                NSUT
              </span>
            </div>
            <p className="mt-2 text-[var(--text-sm)] text-[var(--color-text-secondary)] max-w-[42ch] leading-relaxed">
              Netaji Subhas University of Technology student societies discovery platform.
            </p>
          </div>

          {/* Right links */}
          <div className="flex flex-wrap items-center gap-5 sm:gap-6 text-[var(--text-sm)] text-[var(--color-text-secondary)]">
            <Link to="/#societies" className="hover:text-[var(--color-text-primary)] transition-colors duration-200">
              All Societies
            </Link>
            <Link to="/find-my-society" className="hover:text-[var(--color-text-primary)] transition-colors duration-200">
              Find My Society
            </Link>
            <Link to="/recruitment" className="hover:text-[var(--color-text-primary)] transition-colors duration-200">
              Recruitment Radar
            </Link>
            <Link to="/shortlist" className="hover:text-[var(--color-text-primary)] transition-colors duration-200">
              Shortlist
            </Link>
            <Link to="/compare" className="hover:text-[var(--color-text-primary)] transition-colors duration-200">
              Compare
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-[var(--color-border)] flex flex-col sm:flex-row items-center justify-between gap-2 text-[var(--text-xs)] text-[var(--color-text-tertiary)]">
          <span>© {year} SocietyHub · Netaji Subhas University of Technology</span>
          <span>NSUT Student Societies Directory</span>
        </div>
      </div>
    </footer>
  );
}
