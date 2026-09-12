import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, CheckCircle2, AlertCircle, Send } from 'lucide-react';

export default function DemoApplicationModal({ isOpen, onClose, society, recruitmentItem }) {
  const [selectedRole, setSelectedRole] = useState('');
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantStatement, setApplicantStatement] = useState('');
  const [applicantYear, setApplicantYear] = useState('1st Year (Batch of 2030)');
  const [applicantCampus, setApplicantCampus] = useState('Main Campus (Dwarka)');
  const [submitted, setSubmitted] = useState(false);

  const modalRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      previouslyFocusedRef.current = document.activeElement;
      setSubmitted(false);
      setSelectedRole(recruitmentItem?.roles?.[0] || '');

      // Prevent background scrolling while preserving prior overflow style
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Set initial focus to close button or first interactive control
      const timer = setTimeout(() => {
        const firstFocusable = modalRef.current?.querySelector(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        if (firstFocusable) {
          firstFocusable.focus();
        }
      }, 50);

      return () => {
        document.body.style.overflow = prevOverflow || '';
        clearTimeout(timer);
        if (previouslyFocusedRef.current && typeof previouslyFocusedRef.current.focus === 'function') {
          previouslyFocusedRef.current.focus();
        }
      };
    }
  }, [isOpen, recruitmentItem]);

  // Handle Escape key and focus trap
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
        return;
      }

      if (e.key === 'Tab') {
        if (!modalRef.current) return;
        const focusableElements = modalRef.current.querySelectorAll(
          'button:not([disabled]), [href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
        );
        if (focusableElements.length === 0) return;

        const firstEl = focusableElements[0];
        const lastEl = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const modalContent = (
    <div
      id="demo-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 md:p-6 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        id="demo-app-modal"
        role="document"
        className="
          relative w-full max-w-lg
          flex flex-col
          bg-[var(--color-surface)]
          border border-[var(--color-border)]
          rounded-2xl shadow-2xl
          overflow-hidden
          animate-in zoom-in-95 duration-150
        "
        style={{
          maxHeight: 'min(calc(100dvh - 2rem), 720px)',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── Modal Header: Fixed at top ── */}
        <div className="shrink-0 p-5 sm:p-6 pb-3 sm:pb-4 border-b border-[var(--color-border-light)] relative bg-[var(--color-surface)]">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-semibold uppercase tracking-wider bg-[var(--color-pale-yellow-subtle)] text-[var(--color-text-primary)] border border-[var(--color-pale-yellow)]/30 mb-2">
            <AlertCircle size={11} className="text-[var(--color-accent)]" />
            <span>Prototype Demo Form</span>
          </div>
          <h3 id="modal-title" className="font-display text-xl sm:text-2xl text-[var(--color-text-primary)] tracking-tight pr-8">
            Apply to {society?.name || recruitmentItem?.societyName}
          </h3>
          <p className="text-xs text-[var(--color-text-secondary)] mt-1">
            Experience the recruitment application workflow designed for SocietyHub.
          </p>

          {/* Close button */}
          <button
            type="button"
            id="close-demo-modal-x"
            onClick={onClose}
            className="
              btn-press
              absolute top-5 right-5
              p-1.5 rounded-lg
              text-[var(--color-text-tertiary)]
              hover:text-[var(--color-text-primary)]
              hover:bg-[var(--color-surface-hover)]
              transition-colors cursor-pointer
            "
            aria-label="Close dialog"
          >
            <X size={18} strokeWidth={2} />
          </button>
        </div>

        {/* ── Modal Body: Scrollable Internal Container ── */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex-1 flex flex-col min-h-0">
            <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-4">
              {/* Role Selection */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-2">
                  Select Preferred Role
                </label>
                <div className="space-y-2 max-h-40 overflow-y-auto pr-1">
                  {(recruitmentItem?.roles || []).map((role, idx) => (
                    <label
                      key={idx}
                      className={`
                        flex items-center gap-3 p-3 rounded-lg border text-xs font-medium cursor-pointer transition-all
                        ${
                          selectedRole === role
                            ? 'border-[var(--color-accent)] bg-[var(--color-accent-soft)] text-[var(--color-accent)]'
                            : 'border-[var(--color-border)] bg-[var(--color-surface-secondary)] text-[var(--color-text-secondary)] hover:border-[var(--color-border-strong)]'
                        }
                      `}
                    >
                      <input
                        type="radio"
                        name="role"
                        value={role}
                        checked={selectedRole === role}
                        onChange={() => setSelectedRole(role)}
                        className="sr-only"
                      />
                      <div
                        className={`
                          w-4 h-4 rounded-full border flex items-center justify-center shrink-0
                          ${selectedRole === role ? 'border-[var(--color-accent)] bg-[var(--color-accent)]' : 'border-[var(--color-border-strong)]'}
                        `}
                      >
                        {selectedRole === role && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                      </div>
                      <span>{role}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Applicant Name */}
              <div>
                <label htmlFor="applicant-name" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1.5">
                  Full Name
                </label>
                <input
                  id="applicant-name"
                  type="text"
                  required
                  value={applicantName}
                  onChange={(e) => setApplicantName(e.target.value)}
                  placeholder="e.g. Adit Sharma"
                  className="
                    w-full px-3.5 py-2.5 rounded-lg
                    bg-[var(--color-surface-input)]
                    border border-[var(--color-border)]
                    text-sm text-[var(--color-text-primary)]
                    outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20
                  "
                />
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="applicant-email" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1.5">
                  College Email ID
                </label>
                <input
                  id="applicant-email"
                  type="email"
                  value={applicantEmail}
                  onChange={(e) => setApplicantEmail(e.target.value)}
                  placeholder="e.g. name@nsut.ac.in"
                  className="
                    w-full px-3.5 py-2.5 rounded-lg
                    bg-[var(--color-surface-input)]
                    border border-[var(--color-border)]
                    text-sm text-[var(--color-text-primary)]
                    outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20
                  "
                />
              </div>

              {/* Statement of Interest */}
              <div>
                <label htmlFor="applicant-statement" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1.5">
                  Why do you want to join? (Brief Statement)
                </label>
                <textarea
                  id="applicant-statement"
                  rows={2}
                  value={applicantStatement}
                  onChange={(e) => setApplicantStatement(e.target.value)}
                  placeholder="Share your background, skills, or motivation..."
                  className="
                    w-full px-3.5 py-2.5 rounded-lg
                    bg-[var(--color-surface-input)]
                    border border-[var(--color-border)]
                    text-sm text-[var(--color-text-primary)]
                    outline-none focus:border-[var(--color-accent)] focus:ring-2 focus:ring-[var(--color-accent)]/20
                    resize-none
                  "
                />
              </div>

              {/* Campus / Year Info */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label htmlFor="applicant-year" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1.5">
                    Year of Study
                  </label>
                  <select
                    id="applicant-year"
                    value={applicantYear}
                    onChange={(e) => setApplicantYear(e.target.value)}
                    className="
                      w-full px-3 py-2.5 rounded-lg
                      bg-[var(--color-surface-input)]
                      border border-[var(--color-border)]
                      text-xs text-[var(--color-text-primary)]
                      outline-none focus:border-[var(--color-accent)]
                    "
                  >
                    <option>1st Year (Batch of 2030)</option>
                    <option>2nd Year (Batch of 2029)</option>
                    <option>3rd Year (Batch of 2028)</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="applicant-campus" className="block text-xs font-semibold uppercase tracking-wider text-[var(--color-text-tertiary)] mb-1.5">
                    Campus
                  </label>
                  <select
                    id="applicant-campus"
                    value={applicantCampus}
                    onChange={(e) => setApplicantCampus(e.target.value)}
                    className="
                      w-full px-3 py-2.5 rounded-lg
                      bg-[var(--color-surface-input)]
                      border border-[var(--color-border)]
                      text-xs text-[var(--color-text-primary)]
                      outline-none focus:border-[var(--color-accent)]
                    "
                  >
                    <option>Main Campus (Dwarka)</option>
                    <option>East Campus (Geeta Colony)</option>
                    <option>West Campus (Jaffarpur)</option>
                  </select>
                </div>
              </div>

              {/* Prototype notice */}
              <div className="p-3 rounded-lg bg-[var(--color-surface-secondary)] border border-[var(--color-border-light)] text-[11px] text-[var(--color-text-secondary)]">
                <strong>Notice:</strong> This is an interactive demo application form. Submissions will simulate an induction registration.
              </div>
            </div>

            {/* ── Modal Footer: Fixed at bottom ── */}
            <div className="shrink-0 p-4 sm:p-5 border-t border-[var(--color-border-light)] bg-[var(--color-surface)] flex items-center justify-end gap-3">
              <button
                type="button"
                id="cancel-demo-modal-btn"
                onClick={onClose}
                className="btn-press px-4 py-2 text-xs font-medium text-[var(--color-text-secondary)] hover:text-[var(--color-text-primary)] rounded-lg cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="submit"
                id="submit-demo-application"
                className="
                  btn-press
                  inline-flex items-center gap-2
                  px-5 py-2.5 rounded-lg
                  bg-[var(--color-accent)] text-[var(--color-accent-text)]
                  text-xs font-semibold
                  hover:bg-[var(--color-accent-hover)]
                  transition-colors cursor-pointer shadow-xs
                  active:scale-[0.98]
                "
              >
                <Send size={13} />
                <span>Submit Demo Application</span>
              </button>
            </div>
          </form>
        ) : (
          /* Submission Success Screen */
          <div className="flex-1 overflow-y-auto p-6 sm:p-8 text-center space-y-4 animate-in zoom-in-95 duration-150">
            <div className="w-14 h-14 rounded-full bg-[var(--color-accent-soft)] text-[var(--color-accent)] flex items-center justify-center mx-auto">
              <CheckCircle2 size={32} strokeWidth={2} />
            </div>

            <h3 className="font-display text-2xl text-[var(--color-text-primary)] tracking-tight">
              Demo Application Recorded!
            </h3>

            <p className="text-sm text-[var(--color-text-secondary)] max-w-sm mx-auto leading-relaxed">
              Thank you, <strong>{applicantName || 'Applicant'}</strong>. Your simulated application for <strong>{selectedRole}</strong> at <strong>{society?.name || recruitmentItem?.societyName}</strong> has been registered.
            </p>

            <div className="p-3 rounded-lg bg-[var(--color-surface-secondary)] border border-[var(--color-border-light)] text-xs text-[var(--color-text-tertiary)] max-w-sm mx-auto">
              In live deployment, applicants receive automated Slack/WhatsApp reminders for upcoming assessment rounds.
            </div>

            <div className="pt-2">
              <button
                type="button"
                id="close-demo-modal-btn"
                onClick={onClose}
                className="
                  btn-press
                  px-6 py-2.5 rounded-lg
                  bg-[var(--color-accent)] text-[var(--color-accent-text)]
                  text-xs font-semibold
                  hover:bg-[var(--color-accent-hover)]
                  transition-colors cursor-pointer shadow-xs
                  active:scale-[0.98]
                "
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  return typeof document !== 'undefined' ? createPortal(modalContent, document.body) : modalContent;
}
