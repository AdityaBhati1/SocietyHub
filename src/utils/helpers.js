/**
 * Utility functions for SocietyHub.
 * Add shared helpers here as the project grows.
 */

/**
 * Format a date string (YYYY-MM-DD) to a readable format.
 * e.g. "2026-10-15" → "Oct 15, 2026"
 */
export function formatDate(dateStr) {
  if (!dateStr) return '';
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Pluralize a word simply.
 * e.g. pluralize(3, 'spot') → '3 spots'
 */
export function pluralize(count, singular, plural) {
  const p = plural ?? singular + 's';
  return `${count} ${count === 1 ? singular : p}`;
}
