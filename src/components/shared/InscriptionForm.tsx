'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { NIVEAUX, FORMSPREE_ENDPOINT, whatsappLink } from '@/lib/constants';

interface FormValues {
  parent: string;
  whatsapp: string;
  niveau: string;
  message?: string;
}

export default function InscriptionForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, getValues } = useForm<FormValues>();
  const [done, setDone] = useState(false);

  const onSubmit = async (data: FormValues) => {
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: 'form_submit', form: 'inscription' });
    }
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({
          _subject: 'Nouvelle demande d’inscription — Les Lumières',
          ...data,
        }),
      });
    } catch {
      /* fail silently — fallback message still shows */
    }
    setDone(true);
  };

  if (done) {
    const v = getValues();
    const waText = `Bonjour, je suis ${v.parent}. Je souhaite inscrire mon enfant en ${v.niveau} au Groupe Scolaire Les Lumières.`;
    return (
      <div className="rounded-xl border border-whatsapp/30 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-whatsapp" />
        <h3 className="mb-2 text-xl font-bold text-ink">Merci pour votre demande !</h3>
        <p className="mb-5 text-ink/70">
          Notre équipe vous contactera dans les plus brefs délais via WhatsApp.
        </p>
        <a href={whatsappLink(waText)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
          Confirmer maintenant sur WhatsApp
        </a>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <div>
        <label htmlFor="parent" className="mb-1.5 block text-sm font-medium text-ink">
          Nom complet du parent <span className="text-primary-700">*</span>
        </label>
        <input
          id="parent"
          type="text"
          {...register('parent', { required: 'Ce champ est requis' })}
          className="w-full rounded-lg border border-black/10 px-4 py-3 focus:border-primary-700 focus:outline-none"
          placeholder="Ex. Karim Bennani"
        />
        {errors.parent && <p className="mt-1 text-sm text-primary-700">{errors.parent.message}</p>}
      </div>

      <div>
        <label htmlFor="whatsapp" className="mb-1.5 block text-sm font-medium text-ink">
          Numéro WhatsApp <span className="text-primary-700">*</span>
        </label>
        <input
          id="whatsapp"
          type="tel"
          {...register('whatsapp', { required: 'Ce champ est requis' })}
          className="w-full rounded-lg border border-black/10 px-4 py-3 focus:border-primary-700 focus:outline-none"
          placeholder="06XX XX XX XX"
        />
        {errors.whatsapp && <p className="mt-1 text-sm text-primary-700">{errors.whatsapp.message}</p>}
      </div>

      <div>
        <label htmlFor="niveau" className="mb-1.5 block text-sm font-medium text-ink">
          Niveau demandé <span className="text-primary-700">*</span>
        </label>
        <select
          id="niveau"
          {...register('niveau', { required: 'Veuillez choisir un niveau' })}
          className="w-full rounded-lg border border-black/10 bg-white px-4 py-3 focus:border-primary-700 focus:outline-none"
          defaultValue=""
        >
          <option value="" disabled>Choisissez un niveau…</option>
          {NIVEAUX.map((n) => (
            <option key={n} value={n}>{n}</option>
          ))}
        </select>
        {errors.niveau && <p className="mt-1 text-sm text-primary-700">{errors.niveau.message}</p>}
      </div>

      <div>
        <label htmlFor="message" className="mb-1.5 block text-sm font-medium text-ink">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          rows={4}
          {...register('message')}
          className="w-full rounded-lg border border-black/10 px-4 py-3 focus:border-primary-700 focus:outline-none"
          placeholder="Votre question ou demande…"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        Envoyer ma demande d’inscription
      </button>
      <p className="text-center text-xs text-ink/50">
        Vos informations restent confidentielles et ne servent qu’au traitement de votre demande.
      </p>
    </form>
  );
}
