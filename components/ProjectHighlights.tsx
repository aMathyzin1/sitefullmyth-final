'use client';

import { ArrowUpRight } from 'phosphor-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import type { FeaturedProjectCard } from '../src/content/types';

interface ProjectHighlightsProps {
  heading: string;
  description: string;
  projects: FeaturedProjectCard[];
  locale?: 'pt' | 'en';
}

export function ProjectHighlights({ heading, description, projects, locale = 'pt' }: ProjectHighlightsProps) {
  return (
    <section id="projects" className="relative py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6">
        <div className="max-w-3xl">
          <span className="badge mb-4">{locale === 'en' ? 'Featured releases' : 'Lançamentos em destaque'}</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{heading}</h2>
          <p className="mt-4 text-slate-300">{description}</p>
        </div>
        <div className="relative">
          <div className="grid gap-8 md:grid-cols-3">
            {projects.map((project, index) => (
              <motion.div
                key={project.slug}
                className="card-surface flex flex-col gap-6 p-6"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="video-iframe">
                  <iframe src={project.videoEmbed} loading="lazy" title={project.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <div className="flex flex-1 flex-col justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{project.description}</p>
                  </div>
                  <Link
                    href={`/downloads/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
                  >
                    {locale === 'en' ? 'View project' : 'Ver projeto'}
                    <ArrowUpRight size={16} weight="bold" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          <ConnectorSvg />
          <div className="mt-16 flex justify-center">
            <Link href={locale === 'en' ? '/en/downloads' : '/downloads'} className="btn-primary">
              {locale === 'en' ? 'See all downloads' : 'Ver todos os downloads'}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function ConnectorSvg() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -bottom-10 hidden justify-center md:flex">
      <svg width="720" height="140" viewBox="0 0 720 140" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-glow">
        <motion.path
          d="M30 20 C 120 20 140 80 220 80 S 320 140 360 140 S 420 100 500 80 S 600 20 690 20"
          stroke="url(#connectorGradient)"
          strokeWidth="4"
          strokeLinecap="round"
          className="svg-dash"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: 'easeInOut' }}
        />
        <defs>
          <linearGradient id="connectorGradient" x1="0" y1="0" x2="720" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#4ecdc4" />
            <stop offset="50%" stopColor="#ff6b6b" />
            <stop offset="100%" stopColor="#ffe66d" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
