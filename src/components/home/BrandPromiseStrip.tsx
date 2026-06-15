import BrandIcon from '@/components/shared/BrandIcon';

const promises = [
  { icon: 'Globe', label: 'École trilingue' },
  { icon: 'Monitor', label: 'Méthodes pédagogiques modernes' },
  { icon: 'HeartHandshake', label: 'Suivi pédagogique régulier' },
  { icon: 'GraduationCap', label: 'Encadrement de qualité' },
  { icon: 'Award', label: 'Éducation d’excellence' },
];

export default function BrandPromiseStrip() {
  return (
    <section className="relative z-20 -mt-8">
      <div className="container-page">
        <div className="grid gap-3 rounded-2xl border border-gold-200 bg-white p-4 shadow-xl sm:grid-cols-2 lg:grid-cols-5">
          {promises.map((promise) => (
            <div key={promise.label} className="flex items-center gap-3 rounded-xl bg-cream p-3">
              <BrandIcon name={promise.icon} className="h-12 w-12 rounded-xl" />
              <span className="text-sm font-bold leading-snug text-primary-900">{promise.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
