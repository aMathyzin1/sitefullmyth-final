'use client';

import { YoutubeLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import type { HomeContent } from '../src/content/types';

interface ChannelHighlightProps {
  content: HomeContent['channel'];
  locale?: 'pt' | 'en';
}

export function ChannelHighlight({ content, locale = 'pt' }: ChannelHighlightProps) {
  return (
    <section className="py-24">
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-12 px-6 lg:flex-row">
        <motion.div
          className="flex-1 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="badge mb-2 inline-flex items-center gap-2">
            <YoutubeLogo size={18} weight="fill" />
            {locale === 'en' ? 'Featured channel' : 'Canal em destaque'}
          </span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{content.title}</h2>
          <p className="text-slate-300">{content.description}</p>
          <Link href={content.subscribeCta.href} className="btn-primary inline-flex w-fit items-center">
            <YoutubeLogo size={18} weight="bold" />
            {content.subscribeCta.label}
          </Link>
          <div className="flex flex-wrap gap-3 text-sm text-slate-300">
            <a
              href="https://www.youtube.com/@aMathyzin"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-primary/50 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <YoutubeLogo size={16} weight="bold" /> YouTube
            </a>
            <a
              href="https://www.instagram.com/amathyzin"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-primary/50 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramLogo size={16} weight="bold" /> Instagram
            </a>
            <a
              href="https://twitter.com/amathyzin"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 transition hover:border-primary/50 hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TwitterLogo size={16} weight="bold" /> Twitter
            </a>
          </div>
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <div className="section-shell overflow-hidden">
            <Image
              src={content.image}
              alt={locale === 'en' ? 'YouTube channel preview' : 'Prévia do canal no YouTube'}
              width={1280}
              height={720}
              className="h-auto w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
