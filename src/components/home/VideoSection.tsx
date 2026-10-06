import Link from 'next/link';
import { ArrowRight, PlayCircle } from 'lucide-react';
import SectionTitle from '@/components/shared/SectionTitle';
import MediaVideo from '@/components/shared/MediaVideo';
import { SCHOOL_MEDIA } from '@/lib/media';

const videos = [
  {
    title: "Sport et esprit d'équipe",
    text: "Des activités encadrées pour développer énergie, discipline et coopération.",
    media: SCHOOL_MEDIA.sport,
    aspect: 'aspect-video',
  },
  {
    title: 'Cambridge sur le campus',
    text: "Un aperçu de la visite Cambridge et des échanges autour du parcours d'anglais.",
    media: SCHOOL_MEDIA.college,
    aspect: 'aspect-[4/5]',
  },
  {
    title: 'Message de direction',
    text: "Une parole institutionnelle pour partager la vision et les réussites de l'année.",
    media: SCHOOL_MEDIA.director,
    aspect: 'aspect-[4/5]',
  },
];

export default function VideoSection() {
  return (
    <section className="section-y bg-white">
      <div className="container-page">
        <SectionTitle
          eyebrow="Vie scolaire"
          title="Découvrez l'atmosphère Les Lumières en vidéo"
          subtitle="Des moments réels du campus, des activités et de la vision pédagogique, présentés avec un chargement maîtrisé."
        />

        <div className="grid gap-6 lg:grid-cols-[1.18fr_0.82fr]">
          <figure className="space-y-4">
            <MediaVideo
              src={SCHOOL_MEDIA.uniform.src}
              poster={SCHOOL_MEDIA.uniform.poster}
              description={SCHOOL_MEDIA.uniform.description}
              mode="feature"
              autoPlayOnView
              loop
              className="aspect-video w-full rounded-lg shadow-xl"
              buttonLabel="Lire la video de l uniforme"
            />
            <figcaption className="text-sm text-ink/70">
              L'identité Les Lumières se voit aussi dans les détails du quotidien scolaire.
            </figcaption>
          </figure>

          <div className="grid gap-4">
            {videos.map((item) => (
              <article
                key={item.title}
                className="grid gap-4 rounded-lg border border-black/5 bg-cream p-3 shadow-sm sm:grid-cols-[0.86fr_1.14fr] lg:grid-cols-1 xl:grid-cols-[0.86fr_1.14fr]"
              >
                <MediaVideo
                  src={item.media.src}
                  poster={item.media.poster}
                  description={item.media.description}
                  mode="feature"
                  autoPlayOnView
                  loop
                  className={`${item.aspect} min-h-40 w-full rounded-lg`}
                  buttonLabel={`Lire la video : ${item.title}`}
                />
                <div className="flex flex-col justify-center p-2">
                  <span className="mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-gold-700">
                    <PlayCircle className="h-4 w-4" aria-hidden="true" />
                    Vidéo
                  </span>
                  <h3 className="text-lg font-bold text-primary-800">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink/70">{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link href="/galerie" className="btn-outline">
            Voir la galerie complète <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
