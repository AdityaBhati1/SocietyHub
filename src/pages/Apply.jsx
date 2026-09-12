import { useParams, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { getSocietyById } from '../data/societies';
import PageMeta from '../components/common/PageMeta';
import NotFound from './NotFound';

/**
 * Apply — application form page for a society.
 */
export default function Apply() {
  const { societyId } = useParams();
  const society = getSocietyById(societyId);

  if (!society) {
    return (
      <NotFound
        message={`We couldn't locate a society matching "${societyId}" to apply to.`}
      />
    );
  }

  return (
    <main className="page-container py-16 md:py-24">
      <PageMeta
        title={`Apply to ${society.name} — SocietyHub`}
        description={`Application form and registration information for ${society.name} at NSUT.`}
      />
      <Link
        to={`/society/${society.id}`}
        className="inline-flex items-center gap-2 text-[var(--text-sm)] text-[var(--color-text-secondary)]
                   hover:text-[var(--color-text-primary)] transition-colors mb-8"
      >
        <ArrowLeft size={14} strokeWidth={1.5} />
        Back to {society.name}
      </Link>

      <h1 className="font-display text-[var(--text-4xl)] leading-[1.1] text-[var(--color-text-primary)]">
        Apply to {society.name}
      </h1>

      <div className="mt-10 p-6 bg-[var(--color-surface)] border border-[var(--color-border-light)] rounded-lg max-w-md">
        <p className="text-[var(--text-sm)] text-[var(--color-text-tertiary)]">
          Online applications are tracked through the recruitment radar. Check the recruitment timeline for official form links.
        </p>
      </div>
    </main>
  );
}
