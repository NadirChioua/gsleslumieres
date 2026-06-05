'use client';

import { useState } from 'react';
import { whatsappLink } from '@/lib/constants';

/**
 * Floating WhatsApp button — THE primary conversion element.
 * Fixed bottom-right, always visible, pulsing ring to draw attention.
 */
export default function WhatsAppButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    // Fire GTM/GA event if available
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({ event: 'whatsapp_click', location: 'floating_button' });
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-[9999] md:bottom-8 md:right-8">
      <div className="relative flex items-center">
        {/* Desktop tooltip */}
        <span
          className={`pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-lg bg-ink px-3 py-2 text-sm font-medium text-white shadow-lg transition-opacity duration-200 md:block ${
            showTooltip ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Contactez-nous sur WhatsApp
        </span>

        <a
          href={whatsappLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleClick}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          aria-label="Contactez-nous sur WhatsApp"
          className="relative flex h-[60px] w-[60px] items-center justify-center rounded-full bg-whatsapp shadow-[0_4px_12px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:scale-110 hover:brightness-95 md:h-16 md:w-16"
        >
          {/* Pulsing ring */}
          <span className="absolute inset-0 animate-pulse-ring rounded-full bg-whatsapp" aria-hidden="true" />
          {/* WhatsApp glyph */}
          <svg
            viewBox="0 0 32 32"
            className="relative h-8 w-8 fill-white md:h-9 md:w-9"
            aria-hidden="true"
          >
            <path d="M16.04 4C9.48 4 4.16 9.32 4.16 15.88c0 2.1.55 4.14 1.6 5.94L4 28l6.36-1.67a11.8 11.8 0 0 0 5.67 1.45h.01c6.56 0 11.88-5.32 11.88-11.88C27.92 9.32 22.6 4 16.04 4Zm0 21.78h-.01a9.86 9.86 0 0 1-5.02-1.38l-.36-.21-3.78.99 1.01-3.68-.24-.38a9.84 9.84 0 0 1-1.51-5.25c0-5.45 4.44-9.88 9.91-9.88 2.65 0 5.13 1.03 7 2.9a9.82 9.82 0 0 1 2.9 6.99c0 5.45-4.44 9.88-9.9 9.88Zm5.43-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.69.25-1.28.17-1.41-.07-.13-.27-.2-.57-.35Z" />
          </svg>
        </a>
      </div>
    </div>
  );
}
