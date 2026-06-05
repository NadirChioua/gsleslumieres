import { Phone, Mail } from 'lucide-react';
import { SCHOOL, telLink } from '@/lib/constants';
import SocialIcons from './SocialIcons';

export default function TopBar() {
  return (
    <div className="hidden bg-primary-800 text-white md:block">
      <div className="container-page flex h-9 items-center justify-between text-xs">
        <div className="flex items-center gap-5">
          <a href={telLink(SCHOOL.phone1Intl)} className="flex items-center gap-1.5 hover:text-gold-300">
            <Phone className="h-3.5 w-3.5" />
            <span>{SCHOOL.phone1}</span>
          </a>
          <a href={`mailto:${SCHOOL.email}`} className="flex items-center gap-1.5 hover:text-gold-300">
            <Mail className="h-3.5 w-3.5" />
            <span>{SCHOOL.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden text-white/70 lg:inline">{SCHOOL.sloganFr}</span>
          <SocialIcons iconClass="h-4 w-4" />
        </div>
      </div>
    </div>
  );
}
