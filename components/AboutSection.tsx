'use client';

import { UsersThree, DiscordLogo, ArrowRight } from 'phosphor-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { HomeContent } from '../src/content/types';

interface AboutSectionProps {
  content: HomeContent['about'];
  locale?: 'pt' | 'en';
}

export function AboutSection({ content, locale = 'pt' }: AboutSectionProps) {
  return (
    <section id="about" className="relative py-24">
      <div className="absolute inset-0 -z-10 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 800 400" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 200 Q150 120 300 200 T600 200 T900 200"
            stroke="rgba(255, 255, 255, 0.15)"
            strokeWidth="1"
            fill="none"
            className="svg-dash"
          />
        </svg>
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="badge inline-flex items-center gap-2">
            <UsersThree size={16} weight="bold" />
            {locale === 'en' ? 'Community-driven' : 'Movido pela comunidade'}
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{content.heading}</h2>
          <div className="space-y-4 text-sm leading-relaxed text-slate-300">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href={content.cta.href} className="btn-primary inline-flex w-fit items-center">
              <DiscordLogo size={18} weight="fill" />
              {content.cta.label}
            </Link>
            <Link
              href={locale === 'en' ? '/en/info/about' : '/info/about'}
              className="btn-secondary inline-flex w-fit items-center"
            >
              <ArrowRight size={18} weight="bold" />
              {locale === 'en' ? 'Meet the team' : 'Conheça a equipe'}
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          <div className="section-shell section-grid h-full rounded-3xl border border-white/5 p-8">
            <h3 className="text-lg font-semibold text-white">
              {locale === 'en' ? 'Our promise' : 'Nosso compromisso'}
            </h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-200">
              {(locale === 'en'
                ? [
                    'Safe adjustments with rollback checkpoints.',
                    'Open-source repositories with transparent changes.',
                    'Support available in Portuguese and English.'
                  ]
                : [
                    'Ajustes seguros com pontos de restauração.',
                    'Repositórios open-source com mudanças transparentes.',
                    'Suporte ativo em português e inglês.'
                  ]
              ).map((item) => (
                <motion.li
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/5 bg-white/5 px-4 py-3"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <span className="mt-1 h-2 w-2 rounded-full bg-primary shadow-glow" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
