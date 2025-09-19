'use client';

import { Download, FilmSlate, MagnifyingGlass, SquaresFour } from 'phosphor-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { DownloadListingItem } from '../../src/content/types';

interface DownloadsListingProps {
  items: DownloadListingItem[];
  locale?: 'pt' | 'en';
}

export function DownloadsListing({ items, locale = 'pt' }: DownloadsListingProps) {
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    if (!term) return items;
    return items.filter((item) => {
      const haystack = [item.title, item.description, ...item.tags].join(' ').toLowerCase();
      return haystack.includes(term);
    });
  }, [items, query]);

  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-3">
            <span className="badge inline-flex items-center gap-2">
              <SquaresFour size={16} weight="bold" />
              {locale === 'en' ? 'Downloads hub' : 'Central de downloads'}
            </span>
            <h1 className="text-3xl font-semibold text-white sm:text-4xl">
              {locale === 'en'
                ? 'All optimization projects'
                : 'Todos os projetos de otimização'}
            </h1>
            <p className="max-w-2xl text-sm text-slate-300">
              {locale === 'en'
                ? 'Filter by name, category or tag and access videos, mirrors and source code for each solution.'
                : 'Filtre por nome, categoria ou tag e acesse vídeos, mirrors e código fonte de cada solução.'}
            </p>
          </div>
          <div className="relative w-full max-w-sm">
            <MagnifyingGlass
              size={18}
              weight="bold"
              className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"
            />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              className="w-full rounded-full border border-white/10 bg-white/5 px-12 py-3 text-sm text-white placeholder:text-slate-400 focus:border-primary/60 focus:outline-none"
              placeholder={locale === 'en' ? 'Search downloads...' : 'Pesquisar downloads...'}
            />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filtered.map((item, index) => (
            <motion.article
              key={item.id}
              className="card-surface flex flex-col overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <div className="video-iframe">
                <iframe
                  src={item.videoEmbed}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={item.title}
                />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-wide text-slate-400">
                  <span className="inline-flex items-center gap-1 rounded-full border border-white/5 bg-white/5 px-3 py-1">
                    <FilmSlate size={14} weight="bold" /> {item.category}
                  </span>
                  <span className="text-slate-500">•</span>
                  <span>{item.tags.slice(0, 2).join(', ')}</span>
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-white">{item.title}</h2>
                  <p className="mt-2 text-sm text-slate-300">{item.description}</p>
                  {item.highlight ? (
                    <p className="mt-3 text-xs font-semibold uppercase tracking-widest text-secondary">
                      {item.highlight}
                    </p>
                  ) : null}
                </div>
                <div className="mt-auto flex flex-wrap gap-2">
                  {item.actions.map((action) => {
                    const baseClass =
                      'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition';
                    const classes = action.disabled
                      ? `${baseClass} border-white/10 text-slate-500 cursor-not-allowed`
                      : `${baseClass} border-primary/50 text-white hover:bg-primary/15`;
                    const content = (
                      <span className="flex items-center gap-2">
                        <Download size={16} weight="bold" /> {action.label}
                      </span>
                    );
                    if (action.disabled) {
                      return (
                        <span key={action.label} className={classes} aria-disabled>
                          {content}
                        </span>
                      );
                    }
                    if (action.url.startsWith('/')) {
                      return (
                        <Link key={action.label} href={action.url} className={classes}>
                          {content}
                        </Link>
                      );
                    }
                    return (
                      <a
                        key={action.label}
                        href={action.url}
                        target={action.external ? '_blank' : undefined}
                        rel={action.external ? 'noopener noreferrer' : undefined}
                        className={classes}
                      >
                        {content}
                      </a>
                    );
                  })}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
        {filtered.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center text-sm text-slate-300">
            {locale === 'en'
              ? 'No downloads were found with the selected filters.'
              : 'Nenhum download encontrado para o filtro informado.'}
          </div>
        ) : null}
      </div>
    </section>
  );
}
