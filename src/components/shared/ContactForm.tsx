'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, CheckCircle2, Loader2 } from 'lucide-react';
import { FORMSPREE_ENDPOINT } from '@/lib/constants';

interface FormValues {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormValues>();
  const [done, setDone] = useState(false);

  const onSubmit = async (data: FormValues) => {
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: 'form_submit', form: 'contact' });
    }
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify({ _subject: 'Nouveau message de contact — Les Lumières', ...data }),
      });
    } catch {
      /* fail silently */
    }
    setDone(true);
  };

  if (done) {
    return (
      <div className="rounded-xl border border-whatsapp/30 bg-green-50 p-8 text-center">
        <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-whatsapp" />
        <h3 className="mb-2 text-xl font-bold text-ink">Message envoyé !</h3>
        <p className="text-ink/70">Merci de nous avoir contactés. Nous vous répondrons très rapidement.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 rounded-xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="c-name" className="mb-1.5 block text-sm font-medium text-ink">Nom complet <span className="text-primary-700">*</span></label>
          <input id="c-name" type="text" {...register('name', { required: 'Requis' })}
            className="w-full rounded-lg border border-black/10 px-4 py-3 focus:border-primary-700 focus:outline-none" placeholder="Votre nom" />
          {errors.name && <p className="mt-1 text-sm text-primary-700">{errors.name.message}</p>}
        </div>
        <div>
          <label htmlFor="c-phone" className="mb-1.5 block text-sm font-medium text-ink">Téléphone <span className="text-primary-700">*</span></label>
          <input id="c-phone" type="tel" {...register('phone', { required: 'Requis' })}
            className="w-full rounded-lg border border-black/10 px-4 py-3 focus:border-primary-700 focus:outline-none" placeholder="06XX XX XX XX" />
          {errors.phone && <p className="mt-1 text-sm text-primary-700">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <label htmlFor="c-email" className="mb-1.5 block text-sm font-medium text-ink">Email</label>
        <input id="c-email" type="email" {...register('email')}
          className="w-full rounded-lg border border-black/10 px-4 py-3 focus:border-primary-700 focus:outline-none" placeholder="vous@exemple.com" />
      </div>
      <div>
        <label htmlFor="c-message" className="mb-1.5 block text-sm font-medium text-ink">Message <span className="text-primary-700">*</span></label>
        <textarea id="c-message" rows={5} {...register('message', { required: 'Requis' })}
          className="w-full rounded-lg border border-black/10 px-4 py-3 focus:border-primary-700 focus:outline-none" placeholder="Comment pouvons-nous vous aider ?" />
        {errors.message && <p className="mt-1 text-sm text-primary-700">{errors.message.message}</p>}
      </div>
      <button type="submit" disabled={isSubmitting} className="btn-primary w-full">
        {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5" />}
        Envoyer le message
      </button>
    </form>
  );
}
