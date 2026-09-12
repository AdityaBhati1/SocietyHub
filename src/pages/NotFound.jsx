import { Link } from 'react-router-dom';
import { Compass, AlertCircle, Home } from 'lucide-react';
import PageMeta from '../components/common/PageMeta';

export default function NotFound({ message }) {
  return (
    <main className="min-h-[calc(100vh-var(--nav-height)-10rem)] flex items-center justify-center py-16 sm:py-24 px-5 sm:px-8">
      <PageMeta
        title="Page Not Found — SocietyHub"
        description="This page doesn't exist. Return to SocietyHub to explore NSUT societies."
      />

      <div className="max-w-lg w-full text-center card-entrance">
        {/* Editorial Pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase bg-[var(--color-peach-subtle)] text-[var(--color-peach)] border border-[var(--color-peach-border)] mb-6 shadow-2xs">
          <AlertCircle size={13} strokeWidth={2} />
          <span>Error 404 · Page Not Found</span>
        </div>

        {/* Large Editorial 404 */}
        <div className="font-display text-7xl sm:text-8xl text-[var(--color-accent)] leading-none select-none mb-2 tracking-tight">
          404
        </div>

        {/* Headline */}
        <h1 className="font-display text-3xl sm:text-4xl text-[var(--color-text-primary)] leading-tight tracking-tight mb-3">
          This page doesn&rsquo;t exist.
        </h1>

        {/* Descriptive Body */}
        <p className="text-[var(--text-base)] text-[var(--color-text-secondary)] leading-relaxed max-w-md mx-auto mb-8">
          {message || "Looks like you've wandered outside SocietyHub. The society or page you requested cannot be found in the NSUT campus directory."}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            id="not-found-home-btn"
            className="
              btn-press
              inline-flex items-center justify-center gap-2
              w-full sm:w-auto
              px-6 py-3 rounded-lg
              bg-[var(--color-accent)] text-[var(--color-accent-text)]
              text-xs font-semibold
              hover:bg-[var(--color-accent-hover)]
              transition-all duration-150 shadow-xs
              active:scale-[0.98]
            "
          >
            <Home size={14} />
            <span>Back to SocietyHub</span>
          </Link>

          <Link
            to="/find-my-society"
            id="not-found-finder-btn"
            className="
              btn-press
              inline-flex items-center justify-center gap-2
              w-full sm:w-auto
              px-5 py-3 rounded-lg
              bg-[var(--color-surface)] text-[var(--color-text-primary)]
              border border-[var(--color-border)]
              text-xs font-semibold
              hover:bg-[var(--color-surface-hover)] hover:border-[var(--color-border-strong)]
              transition-all duration-150 shadow-2xs
              active:scale-[0.98]
            "
          >
            <Compass size={14} className="text-[var(--color-accent)]" />
            <span>Find My Society</span>
          </Link>
        </div>

        {/* Helpful navigation footer */}
        <div className="mt-12 pt-6 border-t border-[var(--color-border-light)] text-xs text-[var(--color-text-tertiary)]">
          <span>Need to check recruitment? </span>
          <Link to="/recruitment" className="text-[var(--color-accent)] font-medium hover:underline">
            View Recruitment Radar →
          </Link>
        </div>
      </div>
    </main>
  );
}
