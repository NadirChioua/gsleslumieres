import { ExternalLink, MapPin } from 'lucide-react';
import { GOOGLE_MAPS_DIRECTIONS, SCHOOL } from '@/lib/constants';

export default function GoogleMap({ height = 400 }: { height?: number }) {
  return (
    <div
      className="relative overflow-hidden rounded-lg border border-black/5 bg-ink shadow-sm"
      style={{ minHeight: height }}
    >
      <div
        className="absolute inset-0 opacity-35"
        aria-hidden="true"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,rgba(211,168,38,0.32),transparent_32%),linear-gradient(135deg,rgba(115,22,22,0.7),rgba(26,26,46,0.96))]"
        aria-hidden="true"
      />
      <div className="absolute inset-x-0 bottom-0 p-5 text-white">
        <div className="flex items-start gap-3">
          <span className="mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold-500 text-ink">
            <MapPin className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <p className="font-bold">{SCHOOL.address.full}</p>
            <a
              href={GOOGLE_MAPS_DIRECTIONS}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex min-h-11 items-center gap-2 rounded-lg bg-white px-4 py-2 text-sm font-semibold text-primary-900 transition hover:bg-gold-500"
            >
              Ouvrir dans Maps <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
