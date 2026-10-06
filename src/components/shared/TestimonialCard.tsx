import { Star, Quote } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  cycle: string;
  quote: string;
  rating: number;
}

export default function TestimonialCard({ name, cycle, quote, rating }: TestimonialCardProps) {
  return (
    <figure className="card flex h-full flex-col p-6">
      <Quote className="mb-3 h-7 w-7 text-gold-400" aria-hidden="true" />
      <blockquote className="flex-1 text-ink/80">“{quote}”</blockquote>
      <div className="mt-4 flex items-center justify-between border-t border-black/5 pt-4">
        <figcaption>
          <span className="block font-semibold text-primary-800">{name}</span>
          <span className="text-xs text-ink/70">Parent — {cycle}</span>
        </figcaption>
        <div className="flex gap-0.5" role="img" aria-label={`Note : ${rating} sur 5`}>
          {Array.from({ length: rating }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-gold-500 text-gold-500" />
          ))}
        </div>
      </div>
    </figure>
  );
}
