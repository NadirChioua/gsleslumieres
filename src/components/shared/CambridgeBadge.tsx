import { Award } from 'lucide-react';

interface CambridgeBadgeProps {
  compact?: boolean;
  className?: string;
}

export default function CambridgeBadge({ compact = false, className = '' }: CambridgeBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-lg border border-[#d6e2f3] bg-white px-3 py-2 text-[#1f4e8c] shadow-sm ${className}`}
      aria-label="Préparation Cambridge English Qualifications"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-[#1f4e8c] text-white">
        <Award className="h-4 w-4" />
      </span>
      <span className="leading-tight">
        <span className="block text-xs font-bold uppercase tracking-wide">Cambridge</span>
        {!compact && <span className="block text-[11px] font-medium">English Qualifications</span>}
      </span>
    </div>
  );
}
