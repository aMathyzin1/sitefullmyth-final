'use client';

import { ArrowRight, CheckCircle, ClipboardText, Sparkle, UsersThree } from 'phosphor-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import type { AboutContent } from '../../src/content/types';

interface AboutPageProps {
  content: AboutContent;
  locale?: 'pt' | 'en';
}

const labels = {
  pt: {
    badge: 'Experiência imersiva',
    storyHeading: 'Nossa jornada',
    missionHeading: 'Nossa missão',
    storyPrefix: 'Marcos que moldaram nosso laboratório de otimização.',
    missionCta: 'Explorar projetos',
    teamHeading: 'Equipe multidisciplinar',
    copy: 'Copiar e-mail',
    copied: 'Copiado!',
    unavailable: 'Indisponível',
    communityHeading: 'Comunidade oficial',
    stats: [
      { value: '4+ anos', label: 'Construindo experiências de performance' },
      { value: '70k+', label: 'Downloads validados pela comunidade' },
      { value: '3k+', label: 'Membros ativos em nossos canais' }
    ]
  },
  en: {
    badge: 'Immersive experience',
    storyHeading: 'Our journey',
    missionHeading: 'Our mission',
    storyPrefix: 'Milestones that shaped our optimization lab.',
    missionCta: 'Explore projects',
    teamHeading: 'Multidisciplinary team',
    copy: 'Copy email',
    copied: 'Copied!',
    unavailable: 'Unavailable',
    communityHeading: 'Official community',
    stats: [
      { value: '4+ years', label: 'Building performance experiences' },
      { value: '70k+', label: 'Community approved downloads' },
      { value: '3k+', label: 'Active members across our channels' }
    ]
  }
};

export function AboutPage({ content, locale = 'pt' }: AboutPageProps) {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);
  const dictionary = labels[locale];

  async function handleCopy(email?: string) {
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = email;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      document.body.removeChild(textarea);
    }

    setCopiedEmail(email);
    setTimeout(() => setCopiedEmail(null), 2000);
  }

  return (
    <div className="relative space-y-24 py-16">
      <HeroSection content={content} dictionary={dictionary} />
      <StorySection content={content} dictionary={dictionary} />
      <MissionSection content={content} dictionary={dictionary} locale={locale} />
      <TeamSection
        content={content}
        dictionary={dictionary}
        copiedEmail={copiedEmail}
        onCopyEmail={handleCopy}
      />
      <CommunitySection content={content} dictionary={dictionary} />
    </div>
  );
}

function HeroSection({
  content,
  dictionary
}: {
  content: AboutContent;
  dictionary: (typeof labels)['pt'];
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <svg className="h-full w-full" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
          <motion.path
            d="M0 320 C 200 240 220 80 420 120 S 720 360 920 220 S 1100 80 1200 160"
            stroke="rgba(78, 205, 196, 0.35)"
            strokeWidth="4"
            strokeLinecap="round"
            fill="none"
            className="svg-dash"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </svg>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 text-center">
        <motion.span
          className="badge mx-auto"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Sparkle size={16} weight="bold" /> {dictionary.badge}
        </motion.span>
        <motion.h1
          className="text-4xl font-semibold text-white sm:text-5xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          {content.hero.title}
        </motion.h1>
        <motion.p
          className="mx-auto max-w-3xl text-base text-slate-300 sm:text-lg"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {content.hero.subtitle}
        </motion.p>
        <motion.div
          className="grid gap-4 sm:grid-cols-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {dictionary.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/5 px-6 py-6 shadow-glow"
            >
              <p className="text-2xl font-semibold text-white">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-widest text-slate-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function StorySection({
  content,
  dictionary
}: {
  content: AboutContent;
  dictionary: (typeof labels)['pt'];
}) {
  return (
    <section className="relative">
      <div className="absolute inset-0 -z-10 opacity-40">
        <svg viewBox="0 0 1200 400" className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="timelineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#4ecdc4" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#ff6b6b" stopOpacity="0.4" />
            </linearGradient>
          </defs>
          <motion.path
            d="M200 20 C 300 40 320 140 420 160 S 620 220 720 200 S 920 160 1000 200"
            stroke="url(#timelineGradient)"
            strokeWidth="6"
            fill="none"
            className="svg-dash"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>
      </div>
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="badge inline-flex items-center gap-2">
            <UsersThree size={16} weight="bold" />
            {dictionary.storyHeading}
          </span>
          <p className="max-w-3xl text-sm text-slate-300">{dictionary.storyPrefix}</p>
        </motion.div>
        <div className="relative flex flex-col gap-6">
          <span className="absolute left-3 top-2 h-full w-px bg-gradient-to-b from-primary via-pink-500 to-secondary opacity-70" />
          {content.story.map((paragraph, index) => (
            <motion.article
              key={paragraph}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative ml-10 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-glow"
            >
              <span className="absolute left-[-42px] top-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-dark text-sm font-semibold text-white">
                {index + 1}
              </span>
              <p className="text-sm text-slate-200">{paragraph}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

function MissionSection({
  content,
  dictionary,
  locale
}: {
  content: AboutContent;
  dictionary: (typeof labels)['pt'];
  locale: 'pt' | 'en';
}) {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6 md:flex-row">
        <motion.div
          className="card-surface flex-1 rounded-3xl border border-white/10 p-8 shadow-lg shadow-primary/20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            <Sparkle size={18} weight="bold" /> {dictionary.missionHeading}
          </div>
          <p className="mt-4 text-base text-slate-200">{content.mission}</p>
          <Link
            href={locale === 'en' ? '/en/downloads' : '/downloads'}
            className="btn-secondary mt-6 inline-flex w-fit items-center"
          >
            <ArrowRight size={18} weight="bold" /> {dictionary.missionCta}
          </Link>
        </motion.div>
        <motion.div
          className="flex-1 rounded-3xl border border-white/10 bg-white/5 p-8"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-white">
            {locale === 'en' ? 'Values that drive us' : 'Valores que nos impulsionam'}
          </h3>
          <ul className="mt-6 space-y-4 text-sm text-slate-200">
            {(locale === 'en'
              ? [
                  'Transparency in every script and automation.',
                  'Security-first workflows with validation checkpoints.',
                  'Continuous co-creation with the community.'
                ]
              : [
                  'Transparência em cada script e automação.',
                  'Fluxos com segurança em primeiro lugar e pontos de validação.',
                  'Cocriação contínua com a comunidade.'
                ]
            ).map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckCircle size={18} weight="bold" className="mt-1 text-secondary" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

function TeamSection({
  content,
  dictionary,
  copiedEmail,
  onCopyEmail
}: {
  content: AboutContent;
  dictionary: (typeof labels)['pt'];
  copiedEmail: string | null;
  onCopyEmail: (email?: string) => void;
}) {
  return (
    <section className="relative">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-8 px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-3"
        >
          <span className="badge inline-flex items-center gap-2">
            <UsersThree size={16} weight="bold" />
            {dictionary.teamHeading}
          </span>
          <p className="text-sm text-slate-300">{content.teamIntro}</p>
        </motion.div>
        <div className="grid gap-6 md:grid-cols-2">
          {content.team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-surface flex items-center gap-5 rounded-3xl border border-white/10 p-6"
            >
              <div className="relative h-20 w-20 overflow-hidden rounded-2xl border border-white/10">
                <Image src={member.avatar} alt={member.name} width={80} height={80} className="h-full w-full object-cover" />
              </div>
              <div className="flex-1 space-y-2">
                <div>
                  <h3 className="text-lg font-semibold text-white">{member.name}</h3>
                  <p className="text-sm text-slate-400">{member.role}</p>
                </div>
                {member.email ? (
                  <button
                    type="button"
                    onClick={() => onCopyEmail(member.email)}
                    className="btn-secondary inline-flex items-center gap-2 text-xs"
                  >
                    {copiedEmail === member.email ? (
                      <>
                        <CheckCircle size={16} weight="bold" /> {dictionary.copied}
                      </>
                    ) : (
                      <>
                        <ClipboardText size={16} weight="bold" /> {dictionary.copy}
                      </>
                    )}
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-xs text-slate-400">
                    <ClipboardText size={16} weight="bold" className="text-slate-500" />
                    {dictionary.unavailable}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CommunitySection({
  content,
  dictionary
}: {
  content: AboutContent;
  dictionary: (typeof labels)['pt'];
}) {
  return (
    <section className="relative pb-12">
      <div className="pointer-events-none absolute inset-x-0 -top-16 hidden justify-center md:flex">
        <svg width="720" height="140" viewBox="0 0 720 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-glow">
          <motion.path
            d="M30 120 C 120 120 140 60 220 60 S 320 0 360 0 S 420 40 500 60 S 600 120 690 120"
            stroke="url(#communityConnector)"
            strokeWidth="4"
            strokeLinecap="round"
            className="svg-dash"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
          />
          <defs>
            <linearGradient id="communityConnector" x1="0" y1="0" x2="720" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#4ecdc4" />
              <stop offset="50%" stopColor="#ff6b6b" />
              <stop offset="100%" stopColor="#ffe66d" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-white/5 px-8 py-12 text-center shadow-lg shadow-primary/10">
        <h2 className="text-3xl font-semibold text-white">{dictionary.communityHeading}</h2>
        <p className="max-w-2xl text-sm text-slate-300">{content.community.description}</p>
        <Link href={content.community.cta.href} className="btn-primary inline-flex items-center">
          <ArrowRight size={18} weight="bold" />
          {content.community.cta.label}
        </Link>
      </div>
    </section>
  );
}
