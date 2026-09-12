import { useState, useMemo, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  RotateCcw,
  Check,
  Compass,
  Sparkles,
  ChevronRight,
  Layers,
  Bookmark,
} from 'lucide-react';
import { societies, CATEGORY_STYLES } from '../data/societies';
import {
  INTEREST_OPTIONS,
  GOAL_OPTIONS,
  COMMUNITY_OPTIONS,
  calculateRecommendations,
} from '../utils/recommendationEngine';
import { useShortlist } from '../context/ShortlistCompareContext';
import PageMeta from '../components/common/PageMeta';

export default function FindMySociety() {
  // Step 0: Landing
  // Step 1: Question 1 (Interests)
  // Step 2: Question 2 (Goals / Experience)
  // Step 3: Question 3 (Community environment)
  // Step 4: Results
  const [step, setStep] = useState(0);

  const { isShortlisted, toggleShortlist } = useShortlist();

  const [selectedInterests, setSelectedInterests] = useState([]);
  const [selectedGoals, setSelectedGoals] = useState([]);
  const [selectedCommunity, setSelectedCommunity] = useState('');

  // Scroll to top on step transition
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [step]);

  // Toggle helpers
  const toggleInterest = (id) => {
    setSelectedInterests((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const toggleGoal = (id) => {
    setSelectedGoals((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCommunitySelect = (id) => {
    setSelectedCommunity((prev) => (prev === id ? '' : id));
  };

  const handleReset = () => {
    setSelectedInterests([]);
    setSelectedGoals([]);
    setSelectedCommunity('');
    setStep(1);
  };

  // Recommendations memoized
  const results = useMemo(() => {
    if (step !== 4) return [];
    return calculateRecommendations(
      {
        interests: selectedInterests,
        goals: selectedGoals,
        community: selectedCommunity,
      },
      societies
    );
  }, [step, selectedInterests, selectedGoals, selectedCommunity]);

  // Check if any results were found directly
  const hasDirectMatches = useMemo(() => {
    return results.some((r) => r.matchScore >= 15);
  }, [results]);

  return (
    <main className="min-h-[calc(100vh-var(--nav-height))] bg-[var(--color-bg)] py-12 md:py-20">
      <PageMeta
        title="Find Your Society — SocietyHub"
        description="Answer a few questions and discover NSUT societies that match your interests and goals."
      />
      <div className="max-w-[840px] mx-auto px-5 sm:px-8">
        {/* Top Navigation bar for quiz */}
        <div className="flex items-center justify-between gap-4 mb-8 sm:mb-12">
          {step > 0 && step < 4 ? (
            <button
              type="button"
              onClick={() => setStep((prev) => Math.max(0, prev - 1))}
              className="inline-flex items-center gap-1.5 text-[var(--text-xs)] sm:text-[var(--text-sm)] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-1.5 px-2.5 -ml-2.5 rounded-md hover:bg-[var(--color-surface-hover)] border border-transparent hover:border-[var(--color-border-light)]"
            >
              <ArrowLeft size={15} strokeWidth={1.75} />
              <span>Back</span>
            </button>
          ) : step === 4 ? (
            <button
              type="button"
              onClick={handleReset}
              className="inline-flex items-center gap-1.5 text-[var(--text-xs)] sm:text-[var(--text-sm)] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-1.5 px-2.5 -ml-2.5 rounded-md hover:bg-[var(--color-surface-hover)] border border-transparent hover:border-[var(--color-border-light)]"
            >
              <RotateCcw size={14} strokeWidth={1.75} />
              <span>Retake Questionnaire</span>
            </button>
          ) : (
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-[var(--text-xs)] sm:text-[var(--text-sm)] font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] transition-colors py-1.5 px-2.5 -ml-2.5 rounded-md hover:bg-[var(--color-surface-hover)] border border-transparent hover:border-[var(--color-border-light)]"
            >
              <ArrowLeft size={15} strokeWidth={1.75} />
              <span>Home</span>
            </Link>
          )}

          {/* Progress Indicator */}
          {step >= 1 && step <= 3 && (
            <div className="flex items-center gap-3">
              <span className="text-[11px] sm:text-xs font-mono font-semibold text-[var(--color-text-tertiary)] tracking-wider">
                0{step} / 03
              </span>
              <div className="w-16 sm:w-24 h-1.5 bg-[var(--color-surface-secondary)] border border-[var(--color-border-light)] rounded-full overflow-hidden">
                <div
                  className="h-full bg-[var(--color-accent)] transition-all duration-300 ease-out rounded-full"
                  style={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            </div>
          )}
        </div>

        {/* ═══════════════════════════════════════════════════════
            STEP 0: INTRO / LANDING
            ═══════════════════════════════════════════════════════ */}
        {step === 0 && (
          <div className="question-fade max-w-[640px]">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--color-accent-subtle)] border border-[var(--color-accent)]/30 rounded-full text-[11px] font-medium tracking-wide uppercase text-[var(--color-accent)] mb-6">
              <Compass size={13} strokeWidth={2} />
              <span>Student Discovery Tool</span>
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-[3.25rem] text-[var(--color-text-primary)] leading-[1.08] tracking-tight">
              Find your society.
            </h1>

            <p className="mt-4 text-[var(--text-lg)] text-[var(--color-text-secondary)] leading-relaxed">
              Not sure where you belong at NSUT? Answer three focused questions
              about your interests, goals, and working style. We will recommend
              the societies you should actually explore.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button
                type="button"
                id="start-quiz-btn"
                onClick={() => setStep(1)}
                className="
                  inline-flex items-center justify-center gap-2.5
                  px-7 py-3.5
                  bg-[var(--color-accent)] text-[var(--color-accent-text)]
                  text-[var(--text-sm)] font-medium
                  rounded-lg
                  shadow-xs
                  transition-all duration-200
                  hover:bg-[var(--color-accent-hover)]
                  hover:shadow-sm
                  active:scale-[0.98]
                  w-full sm:w-auto
                "
              >
                <span>Find my societies</span>
                <ArrowRight size={16} strokeWidth={2} />
              </button>

              <Link
                to="/#societies"
                className="
                  inline-flex items-center justify-center gap-2
                  px-5 py-3.5
                  text-[var(--text-sm)] font-medium
                  text-[var(--color-text-secondary)]
                  hover:text-[var(--color-text-primary)]
                  transition-colors
                "
              >
                <span>Or browse all 54 directly</span>
              </Link>
            </div>

            {/* Subtext info cards */}
            <div className="mt-12 pt-8 border-t border-[var(--color-border-light)] grid grid-cols-1 sm:grid-cols-3 gap-4 text-[var(--text-xs)]">
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-light)] shadow-xs">
                <span className="font-semibold text-[var(--color-text-primary)] block mb-1 text-sm">
                  54 Verified Societies
                </span>
                <span className="text-[var(--color-text-secondary)] leading-relaxed block">
                  Every recommendation maps strictly to official campus teams.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-light)] shadow-xs">
                <span className="font-semibold text-[var(--color-text-primary)] block mb-1 text-sm">
                  Transparent Scoring
                </span>
                <span className="text-[var(--color-text-secondary)] leading-relaxed block">
                  Explainable logic based on categories, skills, and activities.
                </span>
              </div>
              <div className="p-4 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border-light)] shadow-xs">
                <span className="font-semibold text-[var(--color-text-primary)] block mb-1 text-sm">
                  30–60 Seconds
                </span>
                <span className="text-[var(--color-text-secondary)] leading-relaxed block">
                  No account required, 100% private and client-side.
                </span>
              </div>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
            STEP 1: QUESTION 1 — WHAT ARE YOU INTO?
            ═══════════════════════════════════════════════════════ */}
        {step === 1 && (
          <div className="question-fade">
            <div className="mb-8">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] block mb-2 font-medium">
                Question 01 of 03
              </span>
              <h2 className="font-display text-[2rem] sm:text-[2.5rem] text-[var(--color-text-primary)] leading-[1.12] tracking-tight">
                What are you into?
              </h2>
              <p className="mt-2 text-[var(--text-sm)] sm:text-[var(--text-base)] text-[var(--color-text-secondary)]">
                Select topics or disciplines you are drawn toward. Select as many
                as you like.
              </p>
            </div>

            {/* Interest Selection Grid */}
            <div
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2.5 sm:gap-3"
              role="group"
              aria-label="Interest options"
            >
              {INTEREST_OPTIONS.map((option) => {
                const isSelected = selectedInterests.includes(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="checkbox"
                    aria-checked={isSelected}
                    onClick={() => toggleInterest(option.id)}
                    className={`
                      relative text-left p-3 sm:p-3.5 rounded-lg border text-sm font-medium
                      transition-all duration-150 flex items-center justify-between gap-2 min-h-[48px]
                      btn-press active:scale-[0.98]
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]
                      ${
                        isSelected
                          ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] border-[var(--color-accent)] shadow-xs font-semibold ring-1 ring-[var(--color-accent)]'
                          : 'bg-[var(--color-surface)] text-[var(--color-text-primary)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]'
                      }
                    `}
                  >
                    <span className="leading-snug">{option.label}</span>
                    <span
                      className={`
                        w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200
                        ${
                          isSelected
                            ? 'bg-[var(--color-check-bg)] text-[var(--color-check-fg)] shadow-xs scale-105'
                            : 'border border-[var(--color-border)] text-transparent bg-[var(--color-surface-secondary)]/50 scale-95'
                        }
                      `}
                    >
                      <Check size={12} strokeWidth={3.5} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Footer action */}
            <div className="mt-10 pt-6 border-t border-[var(--color-border-light)] flex items-center justify-between">
              <span className="text-[var(--text-xs)] text-[var(--color-text-secondary)] font-medium">
                {selectedInterests.length === 0
                  ? 'Pick at least one to continue'
                  : `${selectedInterests.length} selected`}
              </span>

              <button
                type="button"
                id="step-1-continue-btn"
                disabled={selectedInterests.length === 0}
                onClick={() => setStep(2)}
                className={`
                  inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-lg text-sm font-medium
                  transition-all duration-200
                  ${
                    selectedInterests.length > 0
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-xs hover:bg-[var(--color-accent-hover)] active:scale-[0.98]'
                      : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-tertiary)] border border-[var(--color-border)] cursor-not-allowed opacity-70'
                  }
                `}
              >
                <span>Continue</span>
                <ArrowRight size={15} strokeWidth={2} />
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
            STEP 2: QUESTION 2 — WHAT DO YOU WANT TO DO?
            ═══════════════════════════════════════════════════════ */}
        {step === 2 && (
          <div className="question-fade">
            <div className="mb-8">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] block mb-2 font-medium">
                Question 02 of 03
              </span>
              <h2 className="font-display text-[2rem] sm:text-[2.5rem] text-[var(--color-text-primary)] leading-[1.12] tracking-tight">
                What kind of experience are you looking for?
              </h2>
              <p className="mt-2 text-[var(--text-sm)] sm:text-[var(--text-base)] text-[var(--color-text-secondary)]">
                How do you envision spending your active hours outside the lecture
                hall? Choose all that apply.
              </p>
            </div>

            {/* Goals Grid */}
            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-3"
              role="group"
              aria-label="Experience goals"
            >
              {GOAL_OPTIONS.map((option) => {
                const isSelected = selectedGoals.includes(option.id);
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="checkbox"
                    aria-checked={isSelected}
                    onClick={() => toggleGoal(option.id)}
                    className={`
                      text-left p-4 rounded-lg border text-sm font-medium
                      transition-all duration-150 flex items-center justify-between gap-3 min-h-[54px]
                      btn-press active:scale-[0.98]
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]
                      ${
                        isSelected
                          ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] border-[var(--color-accent)] shadow-xs font-semibold ring-1 ring-[var(--color-accent)]'
                          : 'bg-[var(--color-surface)] text-[var(--color-text-primary)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]'
                      }
                    `}
                  >
                    <span className="leading-snug">{option.label}</span>
                    <span
                      className={`
                        w-5 h-5 rounded-md flex items-center justify-center shrink-0 transition-transform duration-200
                        ${
                          isSelected
                            ? 'bg-[var(--color-check-bg)] text-[var(--color-check-fg)] shadow-xs scale-105'
                            : 'border border-[var(--color-border)] text-transparent bg-[var(--color-surface-secondary)]/50 scale-95'
                        }
                      `}
                    >
                      <Check size={12} strokeWidth={3.5} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Footer action */}
            <div className="mt-10 pt-6 border-t border-[var(--color-border-light)] flex items-center justify-between">
              <span className="text-[var(--text-xs)] text-[var(--color-text-secondary)] font-medium">
                {selectedGoals.length === 0
                  ? 'Pick at least one to continue'
                  : `${selectedGoals.length} selected`}
              </span>

              <button
                type="button"
                id="step-2-continue-btn"
                disabled={selectedGoals.length === 0}
                onClick={() => setStep(3)}
                className={`
                  inline-flex items-center gap-2 px-6 py-2.5 sm:py-3 rounded-lg text-sm font-medium
                  transition-all duration-200 btn-press
                  ${
                    selectedGoals.length > 0
                      ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-xs hover:bg-[var(--color-accent-hover)]'
                      : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-tertiary)] border border-[var(--color-border)] cursor-not-allowed opacity-70'
                  }
                `}
              >
                <span>Continue</span>
                <ArrowRight size={15} strokeWidth={2} />
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
            STEP 3: QUESTION 3 — COMMUNITY & CULTURE
            ═══════════════════════════════════════════════════════ */}
        {step === 3 && (
          <div className="question-fade">
            <div className="mb-8">
              <span className="text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] block mb-2 font-medium">
                Question 03 of 03
              </span>
              <h2 className="font-display text-[2rem] sm:text-[2.5rem] text-[var(--color-text-primary)] leading-[1.12] tracking-tight">
                What kind of community are you looking for?
              </h2>
              <p className="mt-2 text-[var(--text-sm)] sm:text-[var(--text-base)] text-[var(--color-text-secondary)]">
                Choose the team dynamic where you see yourself thriving most.
              </p>
            </div>

            {/* Community Options */}
            <div
              className="space-y-3"
              role="radiogroup"
              aria-label="Community culture preferences"
            >
              {COMMUNITY_OPTIONS.map((option) => {
                const isSelected = selectedCommunity === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    onClick={() => handleCommunitySelect(option.id)}
                    className={`
                      w-full text-left p-4 rounded-lg border text-sm font-medium
                      transition-all duration-150 flex items-center justify-between gap-4
                      btn-press active:scale-[0.98]
                      focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]
                      ${
                        isSelected
                          ? 'bg-[var(--color-accent)] text-[var(--color-accent-text)] border-[var(--color-accent)] shadow-xs font-semibold ring-1 ring-[var(--color-accent)]'
                          : 'bg-[var(--color-surface)] text-[var(--color-text-primary)] border-[var(--color-border)] hover:border-[var(--color-border-strong)] hover:bg-[var(--color-surface-hover)]'
                      }
                    `}
                  >
                    <div>
                      <div className="font-medium leading-snug">
                        {option.label}
                      </div>
                    </div>
                    <span
                      className={`
                        w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200
                        ${
                          isSelected
                            ? 'bg-[var(--color-check-bg)] text-[var(--color-check-fg)] shadow-xs scale-105'
                            : 'border border-[var(--color-border)] text-transparent bg-[var(--color-surface-secondary)]/50 scale-95'
                        }
                      `}
                    >
                      <Check size={12} strokeWidth={3.5} />
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Footer action */}
            <div className="mt-10 pt-6 border-t border-[var(--color-border-light)] flex items-center justify-between">
              <span className="text-[var(--text-xs)] text-[var(--color-text-secondary)] font-medium">
                {selectedCommunity ? '1 selected' : 'Optional selection'}
              </span>

              <button
                type="button"
                id="see-matches-btn"
                onClick={() => setStep(4)}
                className="
                  inline-flex items-center gap-2 px-7 py-3 rounded-lg text-[var(--text-sm)] font-medium
                  bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-xs
                  hover:bg-[var(--color-accent-hover)] transition-all duration-200
                  btn-press
                "
              >
                <span>See My Matches</span>
                <Sparkles size={15} strokeWidth={2} />
              </button>
            </div>
          </div>
        )}

        {/* ═══════════════════════════════════════════════════════
            STEP 4: RESULTS VIEW
            ═══════════════════════════════════════════════════════ */}
        {step === 4 && (
          <div className="question-fade">
            {/* Header */}
            <div className="mb-8 sm:mb-10 pb-6 border-b border-[var(--color-border-light)]">
              <div className="inline-flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-widest text-[var(--color-text-tertiary)] mb-2 font-medium">
                <Sparkles size={13} strokeWidth={2} className="text-[var(--color-accent)]" />
                <span>Your Society Matches</span>
              </div>
              <h1 className="font-display text-[2.25rem] sm:text-[2.75rem] text-[var(--color-text-primary)] leading-[1.08] tracking-tight">
                {hasDirectMatches
                  ? 'Based on what you selected'
                  : 'Societies worth exploring'}
              </h1>

              {!hasDirectMatches && (
                <p className="mt-2 text-[var(--text-sm)] sm:text-[var(--text-base)] text-[var(--color-text-secondary)]">
                  Nothing is a perfect match yet — here are a few flagship
                  societies worth exploring based on your preferences.
                </p>
              )}

              {/* Selected Pills Summary */}
              <div className="mt-4 flex flex-wrap items-center gap-1.5 text-[11px] sm:text-xs">
                <span className="text-[var(--color-text-tertiary)] mr-1 font-medium">
                  Filters applied:
                </span>
                {selectedInterests.map((id) => {
                  const opt = INTEREST_OPTIONS.find((o) => o.id === id);
                  return (
                    <span
                      key={id}
                      className="px-2.5 py-0.5 rounded-md bg-[var(--color-surface-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium"
                    >
                      {opt ? opt.label : id}
                    </span>
                  );
                })}
                {selectedGoals.map((id) => {
                  const opt = GOAL_OPTIONS.find((o) => o.id === id);
                  return (
                    <span
                      key={id}
                      className="px-2.5 py-0.5 rounded-md bg-[var(--color-surface-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium"
                    >
                      {opt ? opt.label : id}
                    </span>
                  );
                })}
                {selectedCommunity && (
                  <span className="px-2.5 py-0.5 rounded-md bg-[var(--color-surface-secondary)] border border-[var(--color-border)] text-[var(--color-text-secondary)] font-medium">
                    {COMMUNITY_OPTIONS.find((c) => c.id === selectedCommunity)?.label ||
                      selectedCommunity}
                  </span>
                )}
              </div>
            </div>

            {/* Results Grid */}
            <div className="space-y-4 sm:space-y-5" id="match-results-list">
              {results.map(({ society, matchStrength, matchExplanation }, idx) => {
                const catStyle = CATEGORY_STYLES[society.category] || {
                  color: 'var(--color-accent)',
                  bg: 'var(--color-accent-subtle)',
                };

                return (
                  <article
                    key={society.id}
                    className={`
                      p-5 sm:p-6 rounded-xl
                      bg-[var(--color-surface)]
                      card-entrance
                      transition-all duration-200
                      hover:border-[var(--color-border-strong)]
                      hover:shadow-xs
                      ${idx === 0 ? 'border border-[var(--color-accent)]/50 ring-1 ring-[var(--color-accent)]/20 shadow-xs' : 'border border-[var(--color-border)]'}
                    `}
                    style={{
                      animationDelay: `${Math.min(idx * 50, 200)}ms`,
                    }}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start gap-4 sm:gap-5">
                      {/* Society Logo Container (thematic, not stark white in dark mode) */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 shrink-0 rounded-lg border border-[var(--color-border-light)] p-2 bg-[var(--color-surface-secondary)] flex items-center justify-center overflow-hidden">
                        {society.logo ? (
                          <img
                            src={society.logo}
                            alt={`${society.name} logo`}
                            className="w-full h-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              if (e.target.parentElement) {
                                e.target.parentElement.innerHTML = `<span class="font-display font-bold text-sm text-[var(--color-text-tertiary)]">${society.name.slice(0, 2).toUpperCase()}</span>`;
                              }
                            }}
                          />
                        ) : (
                          <span className="font-display font-bold text-sm text-[var(--color-text-tertiary)]">
                            {society.name.slice(0, 2).toUpperCase()}
                          </span>
                        )}
                      </div>

                      {/* Info & Details */}
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2 mb-1.5">
                          {/* Category Badge */}
                          <span
                            className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md text-[11px] font-medium tracking-wide uppercase border"
                            style={{
                              backgroundColor: catStyle.bg,
                              color: catStyle.color,
                              borderColor: `color-mix(in srgb, ${catStyle.color} 25%, transparent)`,
                            }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: catStyle.color }}
                            />
                            {society.category}
                          </span>

                          {/* Match Strength Badge */}
                          <span
                            className={`
                              inline-flex items-center px-2 py-0.5 rounded text-[11px] font-medium border
                              ${
                                matchStrength === 'Strong match'
                                  ? 'bg-[var(--color-accent-subtle)] text-[var(--color-accent)] border-[var(--color-accent)]/30'
                                  : matchStrength === 'Good match'
                                  ? 'bg-[var(--color-dusty-blue-subtle)] text-[var(--color-dusty-blue)] border-[var(--color-dusty-blue-border)]'
                                  : 'bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] border-[var(--color-border)]'
                              }
                            `}
                          >
                            {matchStrength}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="font-display text-[1.25rem] sm:text-[1.35rem] text-[var(--color-text-primary)] font-medium leading-tight">
                          {society.name}
                        </h3>

                        {/* Tagline */}
                        {society.tagline && (
                          <p className="mt-1 text-[var(--text-sm)] text-[var(--color-text-secondary)] line-clamp-2 leading-relaxed">
                            {society.tagline}
                          </p>
                        )}

                        {/* Match Reason Box */}
                        <div className="mt-3.5 p-3 rounded-lg bg-[var(--color-surface-secondary)]/70 border border-[var(--color-border-light)] text-[var(--text-xs)] sm:text-[13px] text-[var(--color-text-secondary)] flex items-start gap-2.5 leading-relaxed">
                          <span className="text-[var(--color-accent)] font-semibold shrink-0 mt-0.5">
                            Why it matched:
                          </span>
                          <span className="text-[var(--color-text-primary)]">{matchExplanation}</span>
                        </div>

                        {/* Action Link */}
                        <div className="mt-4 flex items-center justify-between pt-3 border-t border-[var(--color-border-light)]">
                          <span className="text-[11px] font-mono text-[var(--color-text-tertiary)]">
                            Fest: {society.annualEvent || 'Annual Campus Fest'}
                          </span>

                          <div className="flex items-center gap-2.5">
                            <button
                              type="button"
                              id={`quiz-shortlist-btn-${society.id}`}
                              onClick={() => toggleShortlist(society.id)}
                              aria-label={isShortlisted(society.id) ? `Remove ${society.name} from shortlist` : `Save ${society.name} to shortlist`}
                              aria-pressed={isShortlisted(society.id)}
                              className={`
                                inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border text-xs font-semibold
                                btn-press cursor-pointer shadow-2xs
                                ${
                                  isShortlisted(society.id)
                                    ? 'bg-[var(--color-accent-soft)] border-[var(--color-accent)] text-[var(--color-accent)]'
                                    : 'bg-[var(--color-surface)] border-[var(--color-border)] text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] hover:border-[var(--color-border-strong)]'
                                }
                              `}
                            >
                              <Bookmark size={13} className={`transition-all duration-200 ${isShortlisted(society.id) ? 'fill-current stroke-current scale-105' : ''}`} />
                              <span>{isShortlisted(society.id) ? 'Saved' : 'Save'}</span>
                            </button>

                            <Link
                              to={`/society/${society.id}`}
                              className="
                                inline-flex items-center gap-1 text-[var(--text-xs)] sm:text-[var(--text-sm)] font-medium
                                text-[var(--color-accent)] hover:text-[var(--color-accent-hover)] transition-colors
                              "
                            >
                              <span>Explore</span>
                              <ChevronRight size={14} strokeWidth={2} />
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Bottom Actions */}
            <div className="mt-10 sm:mt-12 pt-8 border-t border-[var(--color-border-light)] flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                type="button"
                id="retake-quiz-bottom-btn"
                onClick={handleReset}
                className="
                  inline-flex items-center justify-center gap-2
                  px-5 py-2.5
                  rounded-lg border border-[var(--color-border)]
                  bg-[var(--color-surface)] text-[var(--color-text-primary)]
                  text-[var(--text-sm)] font-medium
                  hover:bg-[var(--color-surface-hover)]
                  transition-colors
                  w-full sm:w-auto
                "
              >
                <RotateCcw size={14} strokeWidth={2} />
                <span>Retake quiz</span>
              </button>

              <Link
                to="/#societies"
                className="
                  inline-flex items-center justify-center gap-2
                  px-6 py-2.5
                  rounded-lg
                  bg-[var(--color-accent)] text-[var(--color-accent-text)]
                  text-[var(--text-sm)] font-medium
                  hover:bg-[var(--color-accent-hover)]
                  transition-colors
                  w-full sm:w-auto
                "
              >
                <Layers size={14} strokeWidth={2} />
                <span>Browse all 54 societies</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
