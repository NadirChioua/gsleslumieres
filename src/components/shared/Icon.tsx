import {
  GraduationCap,
  Globe,
  Calculator,
  Award,
  Drama,
  HeartHandshake,
  Music,
  Palette,
  Trophy,
  Bus,
  PartyPopper,
  UtensilsCrossed,
  Clock,
  Monitor,
  type LucideIcon,
} from 'lucide-react';

const MAP: Record<string, LucideIcon> = {
  GraduationCap,
  Globe,
  Calculator,
  Award,
  Drama,
  HeartHandshake,
  Music,
  Palette,
  Trophy,
  Bus,
  PartyPopper,
  UtensilsCrossed,
  Clock,
  Monitor,
};

export default function Icon({ name, className }: { name: string; className?: string }) {
  const Cmp = MAP[name] ?? GraduationCap;
  return <Cmp className={className} aria-hidden="true" />;
}
