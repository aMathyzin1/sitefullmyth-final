import { Metadata } from 'next';
import Script from 'next/script';
import { AboutSection } from '../components/AboutSection';
import { ChannelHighlight } from '../components/ChannelHighlight';
import { CommunitySection } from '../components/CommunitySection';
import { Footer } from '../components/Footer';
import { HeroSection } from '../components/HeroSection';
import { InnovationSection } from '../components/InnovationSection';
import { MainNav } from '../components/MainNav';
import { ProjectHighlights } from '../components/ProjectHighlights';
import { VideoCarousel } from '../components/VideoCarousel';
import { homeContentPt } from '../src/content/locales/pt';

export const metadata: Metadata = {
  title: 'Otimizações gratuitas para PC',
  description:
    'Downloads gratuitos, automações e guias de performance para transformar o desempenho do seu computador.',
  keywords: ['otimização de PC', 'download gratuito', 'roblox booster', 'fps'],
  alternates: {
    canonical: '/',
    languages: {
      'pt-BR': '/',
      'en-US': '/en'
    }
  }
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'aMathyzin',
  url: 'https://amathyzin.com',
  logo: 'https://amathyzin.com/branding/logo.png',
  sameAs: ['https://www.youtube.com/@aMathyzin', 'https://discord.gg/WYbPYDhQ8y'],
  description:
    'aMathyzin oferece downloads e ferramentas gratuitas para melhorar desempenho de PCs e otimizar experiências em jogos.'
};

export default function HomePage() {
  return (
    <div className="relative">
      <MainNav items={homeContentPt.navigation} locale="pt" />
      <main className="space-y-6">
        <HeroSection content={homeContentPt.hero} locale="pt" />
        <ProjectHighlights
          heading={homeContentPt.featuredProjectsHeading}
          description={homeContentPt.featuredProjectsDescription}
          projects={homeContentPt.featuredProjects}
          locale="pt"
        />
        <AboutSection content={homeContentPt.about} locale="pt" />
        <InnovationSection content={homeContentPt.innovations} locale="pt" />
        <VideoCarousel heading={homeContentPt.videos.heading} videos={homeContentPt.videos.items} locale="pt" />
        <ChannelHighlight content={homeContentPt.channel} locale="pt" />
        <CommunitySection content={homeContentPt.community} locale="pt" />
      </main>
      <Footer locale="pt" />
      <Script id="organization-jsonld" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationSchema)}
      </Script>
    </div>
  );
}
