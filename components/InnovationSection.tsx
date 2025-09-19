'use client';

import { Code, Cpu, Sparkle } from 'phosphor-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import type { HomeContent } from '../src/content/types';

interface InnovationSectionProps {
  content: HomeContent['innovations'];
  locale?: 'pt' | 'en';
}

const iconMap = [Sparkle, Cpu, Code];

export function InnovationSection({ content, locale = 'pt' }: InnovationSectionProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="relative py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <span className="badge mb-4">{content.heading}</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            {locale === 'en' ? 'Innovation and research' : 'Inovação e pesquisa'}
          </h2>
          <p className="mt-4 text-slate-300">{content.description}</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {content.cards.map((card, index) => {
            const Icon = iconMap[index % iconMap.length];
            return (
              <motion.button
                key={card.title}
                type="button"
                className="card-surface flex h-full flex-col gap-4 p-6 text-left"
                onClick={() => setActiveIndex(index)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10 text-primary">
                  <Icon size={26} weight="duotone" />
                </div>
                <h3 className="text-xl font-semibold text-white">{card.title}</h3>
                <p className="text-sm text-slate-300">{card.excerpt}</p>
                <span className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary">
                  {locale === 'en' ? 'Learn more' : 'Saiba mais'}
                </span>
              </motion.button>
            );
          })}
        </div>
        <div>
          <a
            href={content.githubCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary inline-flex"
          >
            {content.githubCta.label}
          </a>
        </div>
      </div>
      <AnimatePresence>
        {activeIndex !== null ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-6"
            onClick={() => setActiveIndex(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="section-shell max-w-lg rounded-3xl border border-white/10 bg-dark/90 p-8 text-left"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-start gap-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/30 bg-primary/15 text-primary">
                  {(() => {
                    const Icon = iconMap[activeIndex % iconMap.length];
                    return <Icon size={28} weight="duotone" />;
                  })()}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">
                    {content.cards[activeIndex].title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-200">
                    {content.cards[activeIndex].details}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setActiveIndex(null)}
                className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-primary/50 hover:text-white"
              >
                {locale === 'en' ? 'Close' : 'Fechar'}
              </button>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
