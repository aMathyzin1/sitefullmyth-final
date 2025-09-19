'use client';

import { DiscordLogo } from 'phosphor-react';
import { motion } from 'framer-motion';
import type { HomeContent } from '../src/content/types';

interface CommunitySectionProps {
  content: HomeContent['community'];
  locale?: 'pt' | 'en';
}

export function CommunitySection({ content, locale = 'pt' }: CommunitySectionProps) {
  return (
    <section id="community" className="py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-12 px-6 lg:flex-row">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge inline-flex items-center gap-2">
            <DiscordLogo size={18} weight="fill" />
            {locale === 'en' ? 'Join the community' : 'Junte-se à comunidade'}
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{content.title}</h2>
          <p className="text-slate-300">{content.description}</p>
          <a
            href={content.cta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex w-fit items-center"
          >
            <DiscordLogo size={18} weight="fill" />
            {content.cta.label}
          </a>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-shell overflow-hidden">
            <iframe
              src={content.widgetUrl}
              width="100%"
              height="480"
              allowTransparency
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              className="w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
