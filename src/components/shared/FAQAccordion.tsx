import { ChevronDown } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  return (
    <div className="mx-auto max-w-3xl divide-y divide-black/5 overflow-hidden rounded-xl border border-black/5 bg-white">
      {items.map((item, i) => {
        return (
          <details key={i} open={i === 0} className="group">
              <summary
                className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-5 py-4 text-start font-semibold text-ink transition-colors hover:bg-cream [&::-webkit-details-marker]:hidden"
              >
                <span>{item.question}</span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-primary-700 transition-transform group-open:rotate-180"
                />
              </summary>
              <div className="px-5 pb-5 text-ink/75">
                <p>{item.answer}</p>
              </div>
          </details>
        );
      })}
    </div>
  );
}
