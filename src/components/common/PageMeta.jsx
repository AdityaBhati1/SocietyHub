import { useEffect } from 'react';

/**
 * usePageMeta — lightweight route-specific document metadata hook.
 *
 * Efficiently manages:
 * - document.title
 * - meta[name="description"]
 * - meta[property="og:title"]
 * - meta[property="og:description"]
 * - meta[property="og:type"]
 *
 * Works with client-side routing, direct URL visits, and browser history transitions.
 */
export function usePageMeta({ title, description, type = 'website' }) {
  useEffect(() => {
    // 1. Update Document Title
    if (title) {
      document.title = title;
    }

    // 2. Helper to set or create meta tags
    const setMetaTag = (attrName, attrValue, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // 3. Update description and lightweight Open Graph tags
    if (description) {
      setMetaTag('name', 'description', description);
      setMetaTag('property', 'og:description', description);
    }

    if (title) {
      setMetaTag('property', 'og:title', title);
    }

    setMetaTag('property', 'og:type', type);
  }, [title, description, type]);
}

/**
 * PageMeta component wrapper for JSX usage
 */
export default function PageMeta({ title, description, type = 'website' }) {
  usePageMeta({ title, description, type });
  return null;
}
