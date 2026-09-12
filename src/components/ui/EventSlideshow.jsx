import { useState, useEffect } from 'react';
import { eventImages } from '../../data/eventImages';

const INTERVAL = 5500; // ms between slides — deliberate and unhurried

/**
 * EventSlideshow — Full-bleed, cinematic society photography.
 *
 * Editorial polish:
 * - Natural dissolve into the cream background on the left and bottom.
 * - Slower, cinematic crossfade (1.6s) without abrupt cuts or constant motion.
 * - Unboxed, restrained typography caption (EVENT NAME / Society · Year).
 * - Pause on hover; full prefers-reduced-motion support.
 */
export default function EventSlideshow({ className = '' }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const hasImages = eventImages && eventImages.length > 0;

  // Reduced motion detection
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  useEffect(() => {
    if (!hasImages || eventImages.length <= 1 || isPaused || prefersReducedMotion) return;

    let timer = null;

    const startTimer = () => {
      if (!timer && !document.hidden && !isPaused && !prefersReducedMotion) {
        timer = setInterval(() => {
          setCurrent((prev) => (prev + 1) % eventImages.length);
        }, INTERVAL);
      }
    };

    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopTimer();
      } else {
        startTimer();
      }
    };

    startTimer();
    document.addEventListener('visibilitychange', handleVisibilityChange);

    return () => {
      stopTimer();
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [hasImages, isPaused, prefersReducedMotion]);

  // ── Fallback: no images yet ───────────────────────────────
  if (!hasImages) {
    return (
      <div className={`relative overflow-hidden ${className}`}>
        <div
          className="w-full h-full"
          style={{
            background: `linear-gradient(
              135deg,
              var(--color-surface-secondary) 0%,
              var(--color-bg-alt) 60%,
              var(--color-surface) 100%
            )`,
          }}
        >
          <div className="absolute inset-0 flex items-end justify-end p-6 md:p-8">
            <p className="text-[var(--text-xs)] text-[var(--color-text-tertiary)] italic max-w-[24ch] text-right leading-relaxed">
              NSUT society photographs coming soon
            </p>
          </div>
        </div>
      </div>
    );
  }

  // ── Slideshow ────────────────────────────────────────────
  const image = eventImages[current];

  return (
    <div
      className={`relative overflow-hidden select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="NSUT campus event photographs"
    >
      {/* ── Seamless Dissolve Masks ─────────────────────────── */}
      {/* Left-edge gradient mask: long, luxurious multi-stop melt into cream/charcoal page background */}
      <div
        className="absolute inset-y-0 left-0 w-3/4 sm:w-2/3 lg:w-[68%] xl:w-[62%] max-w-[660px] z-10 pointer-events-none"
        style={{
          background: `linear-gradient(
            to right,
            var(--color-bg) 0%,
            var(--color-bg) 14%,
            color-mix(in srgb, var(--color-bg) 93%, transparent) 28%,
            color-mix(in srgb, var(--color-bg) 80%, transparent) 42%,
            color-mix(in srgb, var(--color-bg) 58%, transparent) 58%,
            color-mix(in srgb, var(--color-bg) 34%, transparent) 72%,
            color-mix(in srgb, var(--color-bg) 14%, transparent) 86%,
            color-mix(in srgb, var(--color-bg) 4%, transparent) 94%,
            transparent 100%
          )`,
        }}
      />

      {/* Bottom gradient mask: soft, multi-stop melt into section divider */}
      <div
        className="absolute inset-x-0 bottom-0 h-16 sm:h-20 lg:h-24 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(
            to top,
            var(--color-bg) 0%,
            color-mix(in srgb, var(--color-bg) 85%, transparent) 22%,
            color-mix(in srgb, var(--color-bg) 50%, transparent) 50%,
            color-mix(in srgb, var(--color-bg) 18%, transparent) 78%,
            transparent 100%
          )`,
        }}
      />

      {/* Top subtle vignette for ambient integration (especially on mobile stacked layout) */}
      <div
        className="absolute inset-x-0 top-0 h-12 sm:h-14 lg:h-10 z-10 pointer-events-none opacity-40 lg:opacity-20"
        style={{
          background: `linear-gradient(
            to bottom,
            var(--color-bg) 0%,
            transparent 100%
          )`,
        }}
      />

      {/* Images — cinematic crossfade stack */}
      {eventImages.map((img, i) => (
        <img
          key={img.src}
          src={img.src}
          alt={img.label || img.event || 'NSUT society event'}
          className="absolute inset-0 w-full h-full object-cover object-[center_35%]"
          style={{
            opacity: i === current ? 1 : 0,
            transition: prefersReducedMotion ? 'none' : 'opacity 1.6s ease-in-out',
          }}
          loading={i === 0 ? 'eager' : 'lazy'}
          fetchPriority={i === 0 ? 'high' : 'auto'}
          decoding={i === 0 ? 'sync' : 'async'}
        />
      ))}

      {/* ── Editorial Caption (Secondary, Unboxed) ──────────── */}
      <div
        className="
          absolute bottom-5 right-6 sm:bottom-7 sm:right-8 lg:bottom-8 lg:right-10 z-20
          text-right pointer-events-none select-none
          max-w-[280px]
        "
      >
        <p className="text-[11px] font-medium tracking-[0.14em] uppercase text-white/90 drop-shadow-[0_1px_3px_rgba(0,0,0,0.7)] font-sans leading-tight">
          {image.label || image.event}
        </p>
        {(image.society || image.year) && (
          <p className="text-[11px] text-white/70 mt-1 tracking-wide drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] font-sans">
            {[image.society, image.year].filter(Boolean).join(' · ')}
          </p>
        )}
      </div>
    </div>
  );
}
