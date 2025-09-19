'use client';

import { List, X } from 'phosphor-react';
import Link from 'next/link';
import { useState } from 'react';
import type { NavItem } from '../src/content/types';

interface MainNavProps {
  items: NavItem[];
  locale?: 'pt' | 'en';
}

export function MainNav({ items, locale = 'pt' }: MainNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-gradient-to-b from-dark/95 via-dark/85 to-transparent backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5">
        <Link
          href={locale === 'en' ? '/en' : '/'}
          className="relative flex items-center gap-3 text-lg font-semibold text-white"
        >
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold uppercase tracking-[0.3em] text-white/90 shadow-glow">
            AM
          </span>
          <div className="flex flex-col leading-tight">
            <span className="text-base font-semibold text-white">aMathyzin</span>
            <span className="text-xs text-slate-300">
              {locale === 'en' ? 'Performance Lab' : 'Laboratório de Performance'}
            </span>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group relative text-sm font-medium text-slate-200 transition hover:text-white"
            >
              {item.label}
              <span className="absolute left-1/2 top-full mt-1 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary to-transparent transition-all duration-300 group-hover:w-10" />
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            href={locale === 'en' ? '/' : '/en'}
            className="hidden rounded-full border border-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-slate-200 transition hover:border-primary/60 hover:text-white md:inline-flex"
          >
            {locale === 'en' ? 'PT-BR' : 'EN-US'}
          </Link>
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-white/10 p-2 text-slate-200 transition hover:border-primary/50 hover:text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          >
            {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
          </button>
        </div>
      </div>
      {open ? (
        <div className="border-t border-white/5 bg-dark/95 px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-xl border border-white/5 bg-white/5 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-primary/40 hover:bg-primary/10"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href={locale === 'en' ? '/' : '/en'}
              onClick={() => setOpen(false)}
              className="rounded-xl border border-primary/40 bg-primary/10 px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {locale === 'en' ? 'Versão em Português' : 'Switch to English'}
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
