import BrandIcon from './BrandIcon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card card-hover h-full p-6">
      <BrandIcon name={icon} className="mb-5" />
      <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{description}</p>
    </div>
  );
}
