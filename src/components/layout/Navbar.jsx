import { useState, useEffect } from 'react';
import { Link, NavLink, useNavigate, useLocation } from 'react-router-dom';
import { Search, Compass, Menu, X } from 'lucide-react';
import ThemeToggle from '../ui/ThemeToggle';
import IconButton from '../ui/IconButton';
import { useShortlist } from '../../context/ShortlistCompareContext';

const NAV_LINKS = [
  { to: '/#societies', label: 'All Societies (54)' },
  { to: '/recruitment', label: 'Recruitment Radar' },
];

/**
 * Navbar
 *
 * Desktop: logo · nav links · actions (theme, quiz CTA)
 * Mobile:  logo · actions · hamburger → slide-down panel
 */
export default function Navbar({ theme, onToggleTheme }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { shortlistCount } = useShortlist();
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearchClick = (e) => {
    e.preventDefault();
    if (location.pathname === '/') {
      const input = document.getElementById('society-search-input') || document.getElementById('search-input');
      if (input) {
        input.scrollIntoView({ behavior: 'smooth', block: 'center' });
        input.focus();
      }
    } else {
      navigate('/#societies');
      setTimeout(() => {
        const input = document.getElementById('society-search-input') || document.getElementById('search-input');
        if (input) {
          input.scrollIntoView({ behavior: 'smooth', block: 'center' });
          input.focus();
        }
      }, 150);
    }
  };

  // Close mobile menu on Escape key press
  useEffect(() => {
    if (!mobileOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen]);

  return (
    <nav
      id="main-nav"
      className="
        sticky top-0 z-50
        bg-[var(--color-bg)]/95 backdrop-blur-md
        border-b border-[var(--color-border)]
        transition-colors duration-300
      "
    >
      <div className="page-container flex items-center justify-between h-[var(--nav-height)]">

        {/* ── Logo ─────────────────────────────── */}
        <Link
          to="/"
          id="nav-logo"
          className="flex items-center gap-2.5 shrink-0"
        >
          <span className="font-display text-[1.4rem] tracking-tight text-[var(--color-text-primary)]">
            SocietyHub
          </span>
          <span className="text-[10px] uppercase font-semibold tracking-widest px-1.5 py-0.5 rounded bg-[var(--color-surface-secondary)] border border-[var(--color-border)] text-[var(--color-text-tertiary)]">
            NSUT
          </span>
        </Link>

        {/* ── Desktop Links ────────────────────── */}
        <div className="hidden md:flex items-center gap-1 ml-10">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              className="px-3 py-1.5 text-[var(--text-sm)] text-[var(--color-text-secondary)]
                         hover:text-[var(--color-text-primary)]
                         transition-colors duration-200 rounded-md
                         hover:bg-[var(--color-surface-hover)]"
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/shortlist"
            id="nav-shortlist-link"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-[var(--text-sm)] text-[var(--color-text-secondary)]
                       hover:text-[var(--color-text-primary)]
                       transition-colors duration-200 rounded-md
                       hover:bg-[var(--color-surface-hover)]"
          >
            <span>Shortlist</span>
            {shortlistCount > 0 && (
              <span id="nav-shortlist-count" className="px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                {shortlistCount}
              </span>
            )}
          </NavLink>
        </div>

        {/* ── Desktop Actions ──────────────────── */}
        <div className="hidden md:flex items-center gap-1.5 ml-auto">
          <button
            type="button"
            id="nav-search-btn"
            onClick={handleSearchClick}
            className="p-2 text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-md hover:bg-[var(--color-surface-hover)] transition-colors cursor-pointer"
            aria-label="Search societies"
            title="Search societies"
          >
            <Search size={17} strokeWidth={1.5} />
          </button>

          <ThemeToggle theme={theme} onToggle={onToggleTheme} />

          <Link
            to="/find-my-society"
            id="nav-quiz-cta"
            className="
              ml-2 inline-flex items-center gap-2
              px-3.5 py-1.5
              text-[var(--text-sm)] font-medium
              text-[var(--color-accent)]
              bg-[var(--color-accent-subtle)]
              border border-[var(--color-accent)]/30
              rounded-full
              transition-all duration-200
              hover:bg-[var(--color-accent)]
              hover:text-[var(--color-accent-text)]
              shadow-2xs
            "
          >
            <Compass size={15} strokeWidth={1.5} />
            Find My Society
          </Link>
        </div>

        {/* ── Mobile Actions ───────────────────── */}
        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <IconButton
            id="mobile-menu-toggle"
            label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav-panel"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="min-w-[44px] min-h-[44px]"
          >
            {mobileOpen ? (
              <X size={20} strokeWidth={1.5} />
            ) : (
              <Menu size={20} strokeWidth={1.5} />
            )}
          </IconButton>
        </div>
      </div>

      {/* ── Mobile Panel ───────────────────────── */}
      <div
        id="mobile-nav-panel"
        aria-hidden={!mobileOpen}
        className={`
          md:hidden overflow-hidden
          transition-all duration-300 ease-out
          border-t border-[var(--color-border-light)]
          bg-[var(--color-bg)]
          ${mobileOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0 border-t-0'}
        `}
      >
        <div className="page-container py-5 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-3 text-[var(--text-base)] text-[var(--color-text-secondary)]
                         hover:text-[var(--color-text-primary)]
                         rounded-md hover:bg-[var(--color-surface-hover)]
                         transition-colors duration-200"
            >
              {link.label}
            </NavLink>
          ))}

          <NavLink
            to="/shortlist"
            id="mobile-nav-shortlist-link"
            onClick={() => setMobileOpen(false)}
            className="flex items-center justify-between px-3 py-3 text-[var(--text-base)] text-[var(--color-text-secondary)]
                       hover:text-[var(--color-text-primary)]
                       rounded-md hover:bg-[var(--color-surface-hover)]
                       transition-colors duration-200"
          >
            <span>Shortlist</span>
            {shortlistCount > 0 && (
              <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-[var(--color-accent-soft)] text-[var(--color-accent)] border border-[var(--color-accent)]/30">
                {shortlistCount}
              </span>
            )}
          </NavLink>

          <hr className="border-[var(--color-border-light)] my-2" />

          <Link
            to="/find-my-society"
            onClick={() => setMobileOpen(false)}
            className="
              flex items-center gap-2 px-3 py-3
              text-[var(--text-base)] text-[var(--color-accent)]
              rounded-md hover:bg-[var(--color-accent-subtle)]
              transition-colors duration-200
            "
          >
            <Compass size={18} strokeWidth={1.5} />
            Find My Society
          </Link>
        </div>
      </div>
    </nav>
  );
}
