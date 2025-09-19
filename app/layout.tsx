import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';
import { poppins } from './fonts';

const siteUrl = 'https://amathyzin.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'aMathyzin — Otimizações Gratuitas para PC',
    template: '%s | aMathyzin'
  },
  description:
    'aMathyzin oferece otimizações gratuitas, downloads e projetos que elevam o desempenho do seu PC em jogos e produtividade.',
  keywords: [
    'aMathyzin',
    'otimização de pc',
    'downloads gratuitos',
    'roblox booster',
    'fps',
    'performance'
  ],
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    siteName: 'aMathyzin',
    url: siteUrl,
    images: [
      {
        url: '/images/projects/thumb.png',
        width: 1280,
        height: 720,
        alt: 'aMathyzin - Otimizações gratuitas para PC'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    creator: '@amathyzin',
    site: '@amathyzin',
    images: ['/images/projects/thumb.png']
  },
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/en'
    }
  },
  icons: {
    icon: '/branding/logo.png',
    apple: '/branding/logo.png'
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="pt" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="relative">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)]" />
          <div className="gradient-blur left-[-10%] top-[-10%] h-[40rem] w-[40rem] bg-primary/30" />
          <div className="gradient-blur right-[-10%] top-[20%] h-[40rem] w-[40rem] bg-secondary/20" />
          <div className="gradient-blur bottom-[-10%] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 bg-primary/10" />
        </div>
        {children}
      </body>
    </html>
  );
}
