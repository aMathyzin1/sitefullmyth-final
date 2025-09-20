'use client';

import { GithubLogo, YoutubeLogo, DiscordLogo, Globe } from 'phosphor-react';
import Link from 'next/link';

interface FooterProps {
  locale?: 'pt' | 'en';
}

export function Footer({ locale = 'pt' }: FooterProps) {
  return (
    <footer className="mt-24 border-t border-white/5 bg-dark/70 py-12 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-6">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="flex items-center gap-3 text-lg font-semibold text-white">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-sm font-bold uppercase tracking-[0.3em] text-white/90">
                AM
              </span>
              <div className="flex flex-col leading-tight">
                <span>aMathyzin</span>
                <span className="text-xs text-slate-400">
                  {locale === 'en'
                    ? 'Performance & optimization'
                    : 'Otimização e performance digital'}
                </span>
              </div>
            </div>
            <p className="mt-4 max-w-xl text-sm text-slate-400">
              {locale === 'en'
                ? 'Downloads, automations and safe tweaks to keep your PC fast and reliable.'
                : 'Downloads, automações e ajustes seguros para manter seu PC rápido e confiável.'}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <FooterLink href="https://github.com/amathyzin" icon={<GithubLogo size={18} weight="bold" />}>GitHub</FooterLink>
            <FooterLink href="https://www.youtube.com/@aMathyzin" icon={<YoutubeLogo size={18} weight="bold" />}>YouTube</FooterLink>
            <FooterLink href="/discord" icon={<DiscordLogo size={18} weight="bold" />}>Discord</FooterLink>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-4 text-sm text-slate-400">
            <Link href={locale === 'en' ? '/en/legal/terms' : '/legal/terms'} className="transition hover:text-white">
              {locale === 'en' ? 'Terms of Service' : 'Termos de Serviço'}
            </Link>
            <span className="hidden text-slate-600 md:inline">•</span>
            <Link href={locale === 'en' ? '/en/legal/privacy' : '/legal/privacy'} className="transition hover:text-white">
              {locale === 'en' ? 'Privacy Policy' : 'Política de Privacidade'}
            </Link>
            <span className="hidden text-slate-600 md:inline">•</span>
            <Link href={locale === 'en' ? '/' : '/en'} className="inline-flex items-center gap-1 transition hover:text-white">
              <Globe size={16} weight="bold" />
              {locale === 'en' ? 'Português (Brasil)' : 'English version'}
            </Link>
          </div>
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} aMathyzin. {locale === 'en' ? 'All rights reserved.' : 'Todos os direitos reservados.'}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({
  href,
  icon,
  children
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-primary/40 hover:bg-primary/10"
    >
      {icon}
      {children}
    </Link>
  );
}
