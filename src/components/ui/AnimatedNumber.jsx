import { useState, useEffect } from 'react';

/**
 * AnimatedNumber — Smooth, restrained count-up for editorial metrics.
 *
 * Requirements:
 * - Runs once on initial mount or when value changes.
 * - Does not re-run endlessly on re-renders.
 * - Instantly displays final value if prefers-reduced-motion is active.
 * - Uses requestAnimationFrame with an ease-out curve.
 * - Restrained duration (~400-500ms).
 */
export default function AnimatedNumber({ value, duration = 450, className = '' }) {
  const target = typeof value === 'number' ? value : parseInt(value, 10) || 0;
  const [display, setDisplay] = useState(target);

  useEffect(() => {
    // Check prefers-reduced-motion
    if (typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(target);
      return;
    }

    if (target === 0) {
      setDisplay(0);
      return;
    }

    let startTimestamp = null;
    let animationFrameId;

    const startValue = 0;

    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Ease out cubic
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(startValue + (target - startValue) * easeOut);

      setDisplay(current);

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, [target, duration]);

  return <span className={className}>{display}</span>;
}
