import { Facebook, Instagram, Youtube } from 'lucide-react';
import { SCHOOL } from '@/lib/constants';

// TikTok has no Lucide icon — small inline SVG
function TikTok({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.1 3h-3.1v12.4a2.6 2.6 0 0 1-2.6 2.5 2.6 2.6 0 0 1-.2-5.18V9.5a5.7 5.7 0 1 0 5.9 5.7V9.01a7.3 7.3 0 0 0 4.3 1.39V7.3a4.28 4.28 0 0 1-2.8-1.48Z" />
    </svg>
  );
}

export default function SocialIcons({ className = '', iconClass = 'h-5 w-5' }: { className?: string; iconClass?: string }) {
  const items = [
    { href: SCHOOL.social.facebook, label: 'Facebook', Icon: Facebook },
    { href: SCHOOL.social.instagram, label: 'Instagram', Icon: Instagram },
    { href: SCHOOL.social.tiktok, label: 'TikTok', Icon: TikTok },
    { href: SCHOOL.social.youtube, label: 'YouTube', Icon: Youtube },
  ];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {items.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${SCHOOL.shortName} sur ${label}`}
          className="transition-opacity hover:opacity-70"
        >
          <Icon className={iconClass} />
        </a>
      ))}
    </div>
  );
}
