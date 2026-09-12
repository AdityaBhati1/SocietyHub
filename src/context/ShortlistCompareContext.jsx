import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react';
import { societies } from '../data/societies';

const SHORTLIST_STORAGE_KEY = 'societyhub-shortlist';
const COMPARE_STORAGE_KEY = 'societyhub-compare';
const MAX_COMPARE_LIMIT = 3;

const ShortlistCompareContext = createContext(null);

function getStoredArray(key) {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      // Validate that stored IDs actually exist in the 54 societies dataset
      return parsed.filter((id) => typeof id === 'string' && societies.some((s) => s.id === id));
    }
    return [];
  } catch (err) {
    console.warn(`Failed to parse localStorage key "${key}":`, err);
    return [];
  }
}

export function ShortlistCompareProvider({ children }) {
  const [shortlist, setShortlist] = useState(() => getStoredArray(SHORTLIST_STORAGE_KEY));
  const [compareList, setCompareList] = useState(() => getStoredArray(COMPARE_STORAGE_KEY));
  const [compareNotice, setCompareNotice] = useState(null);

  // Sync shortlist to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(SHORTLIST_STORAGE_KEY, JSON.stringify(shortlist));
    } catch (err) {
      console.warn('Failed to save shortlist to localStorage:', err);
    }
  }, [shortlist]);

  // Sync compareList to localStorage
  useEffect(() => {
    try {
      localStorage.setItem(COMPARE_STORAGE_KEY, JSON.stringify(compareList));
    } catch (err) {
      console.warn('Failed to save compareList to localStorage:', err);
    }
  }, [compareList]);

  // Auto-dismiss compare notice after 3.5 seconds
  useEffect(() => {
    if (!compareNotice) return;
    const timer = setTimeout(() => {
      setCompareNotice(null);
    }, 3500);
    return () => clearTimeout(timer);
  }, [compareNotice]);

  // ── Shortlist Helpers ─────────────────────────────────────────────
  const isShortlisted = useCallback(
    (id) => shortlist.includes(id),
    [shortlist]
  );

  const toggleShortlist = useCallback((id) => {
    if (!id) return;
    setShortlist((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      return [...prev, id];
    });
  }, []);

  const removeFromShortlist = useCallback((id) => {
    if (!id) return;
    setShortlist((prev) => prev.filter((item) => item !== id));
  }, []);

  const clearShortlist = useCallback(() => {
    setShortlist([]);
  }, []);

  // ── Compare Helpers ───────────────────────────────────────────────
  const isInCompare = useCallback(
    (id) => compareList.includes(id),
    [compareList]
  );

  const toggleCompare = useCallback((id) => {
    if (!id) return;
    setCompareList((prev) => {
      if (prev.includes(id)) {
        return prev.filter((item) => item !== id);
      }
      if (prev.length >= MAX_COMPARE_LIMIT) {
        setCompareNotice(`Maximum of ${MAX_COMPARE_LIMIT} societies can be compared at once.`);
        return prev;
      }
      setCompareNotice(null);
      return [...prev, id];
    });
  }, []);

  const addToCompare = useCallback((id) => {
    if (!id) return false;
    let added = false;
    setCompareList((prev) => {
      if (prev.includes(id)) return prev;
      if (prev.length >= MAX_COMPARE_LIMIT) {
        setCompareNotice(`Maximum of ${MAX_COMPARE_LIMIT} societies can be compared at once.`);
        return prev;
      }
      added = true;
      setCompareNotice(null);
      return [...prev, id];
    });
    return added;
  }, []);

  const removeFromCompare = useCallback((id) => {
    if (!id) return;
    setCompareList((prev) => prev.filter((item) => item !== id));
  }, []);

  const clearCompare = useCallback(() => {
    setCompareList([]);
    setCompareNotice(null);
  }, []);

  const dismissCompareNotice = useCallback(() => {
    setCompareNotice(null);
  }, []);

  const value = useMemo(
    () => ({
      // Shortlist
      shortlist,
      shortlistCount: shortlist.length,
      isShortlisted,
      toggleShortlist,
      removeFromShortlist,
      clearShortlist,

      // Compare
      compareList,
      compareCount: compareList.length,
      maxCompareLimit: MAX_COMPARE_LIMIT,
      isInCompare,
      toggleCompare,
      addToCompare,
      removeFromCompare,
      clearCompare,
      compareNotice,
      dismissCompareNotice,
    }),
    [
      shortlist,
      isShortlisted,
      toggleShortlist,
      removeFromShortlist,
      clearShortlist,
      compareList,
      isInCompare,
      toggleCompare,
      addToCompare,
      removeFromCompare,
      clearCompare,
      compareNotice,
      dismissCompareNotice,
    ]
  );

  return (
    <ShortlistCompareContext.Provider value={value}>
      {children}
    </ShortlistCompareContext.Provider>
  );
}

export function useShortlist() {
  const ctx = useContext(ShortlistCompareContext);
  if (!ctx) {
    throw new Error('useShortlist must be used within a ShortlistCompareProvider');
  }
  return {
    shortlist: ctx.shortlist,
    shortlistCount: ctx.shortlistCount,
    isShortlisted: ctx.isShortlisted,
    toggleShortlist: ctx.toggleShortlist,
    removeFromShortlist: ctx.removeFromShortlist,
    clearShortlist: ctx.clearShortlist,
  };
}

export function useCompare() {
  const ctx = useContext(ShortlistCompareContext);
  if (!ctx) {
    throw new Error('useCompare must be used within a ShortlistCompareProvider');
  }
  return {
    compareList: ctx.compareList,
    compareCount: ctx.compareCount,
    maxCompareLimit: ctx.maxCompareLimit,
    isInCompare: ctx.isInCompare,
    toggleCompare: ctx.toggleCompare,
    addToCompare: ctx.addToCompare,
    removeFromCompare: ctx.removeFromCompare,
    clearCompare: ctx.clearCompare,
    compareNotice: ctx.compareNotice,
    dismissCompareNotice: ctx.dismissCompareNotice,
  };
}
