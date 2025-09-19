import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import '../globals.css';
import { poppins } from '../fonts';

export const metadata: Metadata = {
  alternates: {
    canonical: '/en',
    languages: {
      'pt-BR': '/',
      'en-US': '/en'
    }
  }
};

export default function EnLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en" className={`${poppins.variable} scroll-smooth`} suppressHydrationWarning>
      <body className="relative">
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.06),_transparent_45%)]" />
          <div className="gradient-blur left-[-10%] top-[-10%] h-[40rem] w-[40rem] bg-primary/25" />
          <div className="gradient-blur right-[-10%] top-[20%] h-[40rem] w-[40rem] bg-secondary/25" />
          <div className="gradient-blur bottom-[-10%] left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 bg-primary/10" />
        </div>
        {children}
      </body>
    </html>
  );
}
