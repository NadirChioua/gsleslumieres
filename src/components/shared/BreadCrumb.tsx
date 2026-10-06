import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import JsonLd from '@/components/seo/JsonLd';
import { breadcrumbSchema } from '@/lib/schema';

export interface Crumb {
  name: string;
  path: string;
}

export default function BreadCrumb({ items }: { items: Crumb[] }) {
  const full: Crumb[] = [{ name: 'Accueil', path: '/' }, ...items];

  return (
    <>
      <JsonLd data={breadcrumbSchema(full)} />
      <nav aria-label="Fil d’Ariane" className="container-page py-3 text-sm">
        <ol className="flex flex-wrap items-center gap-1.5 text-ink/70">
          {full.map((c, i) => {
            const last = i === full.length - 1;
            return (
              <li key={c.path} className="flex items-center gap-1.5">
                {last ? (
                  <span className="font-medium text-primary-800" aria-current="page">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.path} className="hover:text-primary-800">
                    {c.name}
                  </Link>
                )}
                {!last && <ChevronRight className="h-3.5 w-3.5" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
