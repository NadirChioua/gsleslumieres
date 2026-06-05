import { GOOGLE_MAPS_EMBED } from '@/lib/constants';

export default function GoogleMap({ height = 400 }: { height?: number }) {
  return (
    <div className="overflow-hidden rounded-xl border border-black/5 shadow-sm">
      <iframe
        src={GOOGLE_MAPS_EMBED}
        title="Localisation du Groupe Scolaire Les Lumières — Val Fleuri, Tanger"
        width="100%"
        height={height}
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allowFullScreen
      />
    </div>
  );
}
