import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useTheme } from './hooks/useTheme';
import { ShortlistCompareProvider } from './context/ShortlistCompareContext';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import ComparisonTray from './components/compare/ComparisonTray';
import Home from './pages/Home';

// Route-level code splitting for non-home routes
const FindMySociety = lazy(() => import('./pages/FindMySociety'));
const RecruitmentRadar = lazy(() => import('./pages/RecruitmentRadar'));
const RecruitmentDetail = lazy(() => import('./pages/RecruitmentDetail'));
const SocietyDetail = lazy(() => import('./pages/SocietyDetail'));
const Shortlist = lazy(() => import('./pages/Shortlist'));
const Compare = lazy(() => import('./pages/Compare'));
const Apply = lazy(() => import('./pages/Apply'));
const NotFound = lazy(() => import('./pages/NotFound'));

function PageFallback() {
  return (
    <div
      className="flex-1 min-h-[50vh] flex items-center justify-center py-24 select-none"
      aria-busy="true"
      aria-live="polite"
    >
      <div className="flex flex-col items-center gap-3">
        <div className="w-7 h-7 rounded-full border-2 border-[var(--color-border-light)] border-t-[var(--color-accent)] animate-spin" />
        <span className="text-xs font-medium uppercase tracking-widest text-[var(--color-text-tertiary)] font-sans">
          Loading SocietyHub…
        </span>
      </div>
    </div>
  );
}

function AppContent({ theme, toggleTheme }) {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <div key={location.pathname} className="flex-1 flex flex-col page-transition">
        <Suspense fallback={<PageFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recruitment" element={<RecruitmentRadar />} />
            <Route path="/recruitment/:societyId" element={<RecruitmentDetail />} />
            <Route path="/society/:id" element={<SocietyDetail />} />
            <Route path="/apply/:societyId" element={<Apply />} />
            <Route path="/find-my-society" element={<FindMySociety />} />
            <Route path="/shortlist" element={<Shortlist />} />
            <Route path="/compare" element={<Compare />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>

      <ComparisonTray />
      <Footer />
    </div>
  );
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <BrowserRouter>
      <ShortlistCompareProvider>
        <ScrollToTop />
        <AppContent theme={theme} toggleTheme={toggleTheme} />
      </ShortlistCompareProvider>
    </BrowserRouter>
  );
}
