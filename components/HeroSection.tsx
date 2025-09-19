'use client';

import { ArrowRight, Play } from 'phosphor-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { HeroContent } from '../src/content/types';

interface HeroSectionProps {
  content: HeroContent;
  locale?: 'pt' | 'en';
}

export function HeroSection({ content, locale = 'pt' }: HeroSectionProps) {
  return (
    <section id="home" className="relative overflow-hidden pt-24">
      <div className="absolute inset-0 -z-10 opacity-40">
        <GridBackground />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16 px-6 py-20 md:flex-row md:items-center">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge mb-6 inline-flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-secondary" />
            {content.eyebrow}
          </span>
          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {content.title}
          </h1>
          <p className="mt-6 max-w-xl text-lg text-slate-300">
            {content.subtitle}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href={content.primaryCta.href} className="btn-primary">
              {content.primaryCta.label}
              <ArrowRight size={18} weight="bold" />
            </Link>
            {content.secondaryCta ? (
              <Link
                href={content.secondaryCta.href}
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Play size={18} weight="fill" />
                {content.secondaryCta.label}
              </Link>
            ) : null}
          </div>
          <dl className="mt-12 grid gap-6 text-slate-200 sm:grid-cols-3">
            {content.stats.map((stat) => (
              <div key={stat.label} className="rounded-2xl border border-white/5 bg-white/5 p-4 shadow-lg shadow-black/10">
                <dt className="text-xs uppercase tracking-wide text-slate-400">{stat.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">{stat.value}</dd>
              </div>
            ))}
          </dl>
        </motion.div>
        <motion.div
          className="relative flex-1"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <Visualizer locale={locale} />
        </motion.div>
      </div>
    </section>
  );
}

function GridBackground() {
  return (
    <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(148, 163, 184, 0.12)" strokeWidth="1" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
      <rect width="100%" height="100%" fill="url(#grid)" transform="translate(20, 20)" opacity="0.5" />
    </svg>
  );
}

function Visualizer({ locale }: { locale: 'pt' | 'en' }) {
  return (
    <div className="section-shell grid-overlay relative flex h-full min-h-[420px] items-center justify-center overflow-hidden">
      <motion.div
        className="absolute -left-16 top-12 h-40 w-40 rounded-full bg-primary/20 blur-3xl"
        animate={{ opacity: [0.4, 0.8, 0.4], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute -right-16 bottom-12 h-48 w-48 rounded-full bg-secondary/20 blur-3xl"
        animate={{ opacity: [0.6, 0.3, 0.6], scale: [1, 0.95, 1] }}
        transition={{ duration: 7, repeat: Infinity }}
      />
      <motion.div
        className="relative flex w-full max-w-sm flex-col gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-glow"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <span className="text-xs uppercase tracking-widest text-primary">
          {locale === 'en' ? 'Live metrics' : 'Métricas em tempo real'}
        </span>
        <div className="space-y-4">
          {[45, 72, 38].map((value, index) => (
            <motion.div
              key={value}
              className="flex items-center justify-between rounded-2xl border border-white/5 bg-dark/80 px-4 py-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
            >
              <div>
                <p className="text-xs uppercase tracking-wide text-slate-400">
                  {['CPU boost', 'FPS gain', 'Ping control'][index]}
                </p>
                <p className="text-lg font-semibold text-white">{value}%</p>
              </div>
              <motion.span
                className="h-10 w-10 rounded-full border border-primary/40 bg-primary/15 text-center text-sm font-semibold leading-10 text-primary"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
              >
                +
              </motion.span>
            </motion.div>
          ))}
        </div>
        <div className="rounded-2xl border border-white/5 bg-white/5 p-4 text-xs text-slate-300">
          {locale === 'en'
            ? 'Telemetry dashboards monitor latency, CPU usage and FPS peaks to suggest the safest adjustments.'
            : 'Painéis de telemetria monitoram latência, uso de CPU e picos de FPS para sugerir ajustes seguros.'}
        </div>
      </motion.div>
    </div>
  );
}
