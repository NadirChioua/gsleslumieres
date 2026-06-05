import SectionTitle from '@/components/shared/SectionTitle';

export default function VideoSection() {
  return (
    <section className="section-padding">
      <div className="container-page">
        <SectionTitle
          eyebrow="En vidéo"
          title="Découvrez notre établissement"
          subtitle="Une école où chaque élève grandit avec confiance, ambition et accompagnement personnalisé."
        />
        <div className="mx-auto max-w-4xl overflow-hidden rounded-2xl border border-black/5 shadow-lg">
          <div className="relative aspect-video">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed/videoseries?list=UU"
              title="Présentation du Groupe Scolaire Les Lumières à Tanger"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
