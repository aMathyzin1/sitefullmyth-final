'use client';

import {
  ArrowRight,
  CalendarBlank,
  ListChecks,
  Scroll,
  ShieldCheck
} from 'phosphor-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { LegalSection } from '../../src/content/types';

interface LegalPageProps {
  title: string;
  description: string;
  updatedAt: string;
  sections: LegalSection[];
  locale?: 'pt' | 'en';
  version?: string;
  type: 'terms' | 'privacy';
  relatedLink?: { label: string; href: string };
}

const dictionary = {
  pt: {
    updatedLabel: 'Atualizado em',
    versionLabel: 'Versão',
    listLabel: 'Detalhes',
    readMore: 'Ver documento relacionado',
    contact: 'Precisa de suporte? Envie um e-mail para',
    contactEmail: 'contato@amathyzin.com'
  },
  en: {
    updatedLabel: 'Updated on',
    versionLabel: 'Version',
    listLabel: 'Details',
    readMore: 'View related document',
    contact: 'Need support? Send an email to',
    contactEmail: 'contato@amathyzin.com'
  }
};

export function LegalPage({
  title,
  description,
  updatedAt,
  sections,
  version,
  locale = 'pt',
  type,
  relatedLink
}: LegalPageProps) {
  const copy = dictionary[locale];
  const HeroIcon = type === 'privacy' ? ShieldCheck : Scroll;
  const badgeLabel =
    type === 'privacy'
      ? locale === 'en'
        ? 'Privacy policy'
        : 'Política de privacidade'
      : locale === 'en'
        ? 'Terms of service'
        : 'Termos de serviço';

  return (
    <div className="relative space-y-16 py-16">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 -z-10">
          <svg className="h-full w-full" viewBox="0 0 1200 320" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M0 200 C 180 80 260 80 420 140 S 700 260 920 200 S 1100 40 1200 120"
              stroke="rgba(255, 107, 107, 0.35)"
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
              className="svg-dash"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 1.6, ease: 'easeInOut' }}
            />
          </svg>
        </div>
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-6 text-center">
          <motion.span
            className="badge mx-auto"
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <HeroIcon size={18} weight="bold" /> {badgeLabel}
          </motion.span>
          <motion.h1
            className="text-4xl font-semibold text-white sm:text-5xl"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mx-auto max-w-2xl text-base text-slate-300"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {description}
          </motion.p>
          <motion.div
            className="mx-auto flex flex-wrap items-center justify-center gap-4 rounded-full border border-white/10 bg-white/5 px-6 py-3 text-xs uppercase tracking-[0.3em] text-slate-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-2">
              <CalendarBlank size={14} weight="bold" /> {copy.updatedLabel}: {updatedAt}
            </span>
            {version ? (
              <>
                <span className="text-slate-600">•</span>
                <span>
                  {copy.versionLabel}: {version}
                </span>
              </>
            ) : null}
          </motion.div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6">
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <motion.article
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-glow"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
            >
              <header className="flex flex-col gap-2">
                <h2 className="text-lg font-semibold text-white">{section.title}</h2>
                {section.body ? <p className="text-sm text-slate-300">{section.body}</p> : null}
              </header>
              {section.list ? (
                <>
                  <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                    {copy.listLabel}
                  </p>
                  <ul className="mt-2 space-y-2 text-sm text-slate-200">
                  {section.list.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <ListChecks size={18} weight="bold" className="mt-1 text-secondary" />
                      <span>{item}</span>
                    </li>
                  ))}
                  </ul>
                </>
              ) : null}
            </motion.article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-6">
        <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-8 text-sm text-slate-300">
          <p>
            {copy.contact}{' '}
            <a href={`mailto:${copy.contactEmail}`} className="font-semibold text-primary">
              {copy.contactEmail}
            </a>
            .
          </p>
          {relatedLink ? (
            <Link href={relatedLink.href} className="btn-secondary inline-flex w-fit items-center text-xs">
              <ArrowRight size={16} weight="bold" /> {relatedLink.label}
            </Link>
          ) : null}
        </div>
      </section>
    </div>
  );
}
