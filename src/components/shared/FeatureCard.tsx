import Icon from './Icon';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="card card-hover h-full p-6">
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-800">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <h3 className="mb-2 text-lg font-bold text-ink">{title}</h3>
      <p className="text-sm leading-relaxed text-ink/70">{description}</p>
    </div>
  );
}
