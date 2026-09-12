import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * ScrollToTop
 *
 * Automatically resets window scroll position to (0, 0)
 * whenever the route pathname changes.
 * Uses instantaneous scroll so new pages open cleanly at the top
 * without jarring smooth scroll animations.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
  }, [pathname]);

  return null;
}
