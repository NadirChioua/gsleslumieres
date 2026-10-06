'use client';

import { useRef, useState } from 'react';
import Link from 'next/link';
import { MessageCircle, ArrowLeft } from 'lucide-react';
import { NIVEAUX, whatsappLink } from '@/lib/constants';

export default function EnquiryForm({ admission = false }: { admission?: boolean }) {
  const [message, setMessage] = useState('');
  const resultRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const prefix = admission ? 'admission' : 'contact';
  const fieldClass = 'w-full rounded-lg border border-black/20 bg-white px-4 py-3 focus:border-primary-700';

  return (
    <div className="rounded-xl border border-black/5 bg-white p-6 shadow-sm md:p-8">
      <form ref={formRef} hidden={Boolean(message)} className="space-y-5" onSubmit={(event) => {
        event.preventDefault();
        const values = new FormData(event.currentTarget);
        const value = (key: string) => String(values.get(key) || '').trim();
        const lines = [
          admission ? 'Bonjour, je souhaite des informations pour une inscription au Groupe Scolaire Les Lumières.' : 'Bonjour, je souhaite contacter le Groupe Scolaire Les Lumières.',
          `Nom du parent : ${value('name')}`,
          `Téléphone : ${value('phone')}`,
          ...(admission ? [`Prénom de l’élève : ${value('student')}`, `Niveau demandé : ${value('level')}`] : []),
          ...(value('email') ? [`Email : ${value('email')}`] : []),
          ...(value('details') ? [`Message : ${value('details')}`] : []),
        ];
        setMessage(lines.join('\n'));
        requestAnimationFrame(() => resultRef.current?.focus());
      }}>
        <p className="text-sm text-ink/75">Préparez votre demande, puis envoyez-la à notre équipe sur WhatsApp. Les champs marqués d’un * sont obligatoires.</p>
        <div>
          <label htmlFor={`${prefix}-name`} className="mb-1.5 block text-sm font-medium">Nom du parent *</label>
          <input id={`${prefix}-name`} name="name" autoComplete="name" required minLength={2} maxLength={100} pattern={'.*\\S.*'} className={fieldClass} />
        </div>
        <div>
          <label htmlFor={`${prefix}-phone`} className="mb-1.5 block text-sm font-medium">Téléphone / WhatsApp *</label>
          <input id={`${prefix}-phone`} name="phone" type="tel" autoComplete="tel" required pattern={'\\+?[0-9\\s\\(\\).\\-]{8,20}'} title="Saisissez un numéro de téléphone valide, avec son indicatif si nécessaire." maxLength={20} placeholder="Ex. 0666 63 69 74" className={fieldClass} />
        </div>
        {admission ? <>
          <div>
            <label htmlFor={`${prefix}-student`} className="mb-1.5 block text-sm font-medium">Prénom de l’élève *</label>
            <input id={`${prefix}-student`} name="student" required minLength={2} maxLength={100} pattern={'.*\\S.*'} className={fieldClass} />
          </div>
          <div>
            <label htmlFor={`${prefix}-level`} className="mb-1.5 block text-sm font-medium">Niveau demandé *</label>
            <select id={`${prefix}-level`} name="level" required defaultValue="" className={fieldClass}>
              <option value="" disabled>Choisissez un niveau…</option>
              {NIVEAUX.map((level) => <option key={level}>{level}</option>)}
            </select>
          </div>
        </> : <div>
          <label htmlFor={`${prefix}-email`} className="mb-1.5 block text-sm font-medium">Email (optionnel)</label>
          <input id={`${prefix}-email`} name="email" type="email" autoComplete="email" maxLength={150} className={fieldClass} />
        </div>}
        <div>
          <label htmlFor={`${prefix}-details`} className="mb-1.5 block text-sm font-medium">Message {admission ? '(optionnel)' : '*'}</label>
          <textarea id={`${prefix}-details`} name="details" rows={4} required={!admission} maxLength={1500} className={fieldClass} />
        </div>
        <button type="submit" className="btn-primary w-full"><MessageCircle className="h-5 w-5" aria-hidden="true" />Préparer mon message</button>
        <p className="text-sm text-ink/70">Aucune demande n’est envoyée à cette étape. <Link href="/mentions-legales#donnees-personnelles" className="underline underline-offset-2">Utilisation de vos données</Link>.</p>
      </form>
      {message && <div ref={resultRef} tabIndex={-1} className="space-y-5 focus:outline-none" aria-labelledby={`${prefix}-ready`}>
        <h3 id={`${prefix}-ready`} className="text-2xl text-primary-800">Votre message est prêt</h3>
        <p className="text-ink/80">Vérifiez votre demande, ouvrez WhatsApp, puis appuyez sur Envoyer pour la transmettre à notre équipe.</p>
        <p className="whitespace-pre-wrap break-words rounded-lg bg-cream p-4 text-sm text-ink">{message}</p>
        <a href={whatsappLink(message)} target="_blank" rel="noopener noreferrer" className="btn-whatsapp w-full"><MessageCircle className="h-5 w-5" aria-hidden="true" />Ouvrir WhatsApp</a>
        <button type="button" className="btn-outline w-full" onClick={() => {
          setMessage('');
          requestAnimationFrame(() => formRef.current?.querySelector('input')?.focus());
        }}><ArrowLeft className="h-4 w-4" aria-hidden="true" />Modifier ma demande</button>
        <p className="text-sm text-ink/70">Votre demande ne sera reçue qu’après son envoi dans WhatsApp.</p>
      </div>}
    </div>
  );
}
