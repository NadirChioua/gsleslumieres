import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Award, Globe2, GraduationCap } from 'lucide-react';
import CambridgeBadge from '@/components/shared/CambridgeBadge';
import SectionTitle from '@/components/shared/SectionTitle';

const benefits = [
  {
    icon: Globe2,
    title: 'Reconnaissance internationale',
    text: 'Les Cambridge English Qualifications valorisent le niveau d’anglais des élèves dans un cadre reconnu.',
  },
  {
    icon: GraduationCap,
    title: 'Parcours progressif',
    text: 'L’anglais commence dès la Grande Section, puis se renforce progressivement jusqu’au lycée.',
  },
  {
    icon: Award,
    title: 'Confiance en anglais',
    text: 'Les élèves gagnent en aisance orale, en vocabulaire et en méthodologie pour les examens.',
  },
];

export default function CambridgeSection() {
  return (
    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="International"
          title="Préparation Cambridge English Qualifications"
          subtitle="Un marqueur fort de l’ouverture internationale de l’école et un repère de confiance pour les parents."
        />
        <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="rounded-2xl bg-primary-900 p-6 text-white shadow-xl md:p-8">
            <CambridgeBadge className="mb-6" />
            <h3 className="font-heading text-3xl text-white">Un anglais structuré, utile et ambitieux</h3>
            <p className="mt-4 text-white/80">
              La préparation Cambridge n’est pas un simple badge : elle organise un véritable parcours
              linguistique, avec un apprentissage régulier, des objectifs lisibles et une progression suivie.
            </p>
            <div className="mt-6 grid gap-4">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="flex gap-3 rounded-xl bg-white/8 p-4 ring-1 ring-white/10">
                  <benefit.icon className="mt-1 h-5 w-5 shrink-0 text-gold-400" />
                  <div>
                    <h4 className="font-bold text-white">{benefit.title}</h4>
                    <p className="mt-1 text-sm text-white/75">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/college-prive-tanger" className="btn-gold mt-7">
              Découvrir le parcours Cambridge <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative min-h-[420px] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src="/images/campaign/college-inscriptions-2026.jpg"
              alt="Préparation Cambridge English au Groupe Scolaire Les Lumières"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
