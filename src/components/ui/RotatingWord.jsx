import { useState, useEffect, useRef } from 'react';

/**
 * RotatingWord — NSUT Society Domains.
 *
 * Cycles through the 6 core pillars of the NSUT society ecosystem:
 * technical, cultural, literary, consulting, creative, sports.
 *
 * Engineered for editorial precision:
 * - Simultaneous crossfade + slide (incoming glides in as outgoing glides out).
 * - Fixed line-box metrics to guarantee ZERO vertical displacement in the headline.
 * - Warm, desaturated palette matching the cream/charcoal theme.
 * - Full prefers-reduced-motion compliance.
 */
const WORDS = [
  { text: 'technical',  color: 'var(--color-dusty-blue)' },
  { text: 'cultural',   color: 'var(--color-peach)' },
  { text: 'literary',   color: 'var(--color-pale-yellow)' },
  { text: 'consulting', color: 'var(--color-accent)' },
  { text: 'creative',   color: 'var(--color-lavender)' },
  { text: 'sports',     color: 'var(--color-warm-red)' },
];

const INTERVAL_MS = 2400; // Time each word remains active
const DURATION_MS = 450;  // Transition duration

export default function RotatingWord({ className = '' }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const transitionTimerRef = useRef(null);

  // Check user preference for reduced motion
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mq.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Main rotation loop
  useEffect(() => {
    const timer = setInterval(() => {
      if (prefersReducedMotion) {
        setCurrentIndex((prev) => (prev + 1) % WORDS.length);
        return;
      }

      setCurrentIndex((prev) => {
        setPrevIndex(prev);
        setIsTransitioning(true);
        return (prev + 1) % WORDS.length;
      });

      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
      transitionTimerRef.current = setTimeout(() => {
        setIsTransitioning(false);
        setPrevIndex(null);
      }, DURATION_MS);
    }, INTERVAL_MS);

    return () => {
      clearInterval(timer);
      if (transitionTimerRef.current) clearTimeout(transitionTimerRef.current);
    };
  }, [prefersReducedMotion]);

  const currentWord = WORDS[currentIndex];
  const prevWord = prevIndex !== null ? WORDS[prevIndex] : null;

  if (prefersReducedMotion) {
    return (
      <span
        className={`inline-block italic ${className}`}
        style={{ color: currentWord.color }}
        aria-live="polite"
      >
        {currentWord.text}
      </span>
    );
  }

  return (
    <span
      className={`inline-grid grid-cols-1 grid-rows-1 align-baseline overflow-hidden ${className}`}
      style={{
        // Maintain consistent line-box alignment
        verticalAlign: 'baseline',
      }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Outgoing word (if transitioning) */}
      {isTransitioning && prevWord && (
        <span
          key={`prev-${prevWord.text}`}
          className="col-start-1 row-start-1 italic pointer-events-none select-none"
          style={{
            color: prevWord.color,
            opacity: 0,
            transform: 'translateY(-20%)',
            transition: `opacity ${DURATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${DURATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1), color ${DURATION_MS}ms ease`,
          }}
          aria-hidden="true"
        >
          {prevWord.text}
        </span>
      )}

      {/* Incoming / Active word */}
      <span
        key={`curr-${currentWord.text}`}
        className="col-start-1 row-start-1 italic"
        style={{
          color: currentWord.color,
          opacity: 1,
          transform: 'translateY(0)',
          animation: isTransitioning
            ? `rotatingWordEnter ${DURATION_MS}ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
            : undefined,
          transition: `color ${DURATION_MS}ms ease`,
        }}
      >
        {currentWord.text}
      </span>
    </span>
  );
}
