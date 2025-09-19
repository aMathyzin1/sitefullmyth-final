import { Metadata } from 'next';
import Script from 'next/script';
import { AboutSection } from '../../components/AboutSection';
import { ChannelHighlight } from '../../components/ChannelHighlight';
import { CommunitySection } from '../../components/CommunitySection';
import { Footer } from '../../components/Footer';
import { HeroSection } from '../../components/HeroSection';
import { InnovationSection } from '../../components/InnovationSection';
import { MainNav } from '../../components/MainNav';
import { ProjectHighlights } from '../../components/ProjectHighlights';
import { VideoCarousel } from '../../components/VideoCarousel';
import { homeContentEn } from '../../src/content/locales/en';

export const metadata: Metadata = {
  title: 'Free PC optimizations',
  description: 'Free downloads, automations and guides to transform the performance of your computer.',
  keywords: ['pc optimization', 'free download', 'roblox booster', 'fps'],
  alternates: {
    canonical: '/en',
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
    'aMathyzin provides free downloads and tools to improve PC performance and enhance gaming experiences.'
};

export default function HomePageEn() {
  return (
    <div className="relative">
      <MainNav items={homeContentEn.navigation} locale="en" />
      <main className="space-y-6">
        <HeroSection content={homeContentEn.hero} locale="en" />
        <ProjectHighlights
          heading={homeContentEn.featuredProjectsHeading}
          description={homeContentEn.featuredProjectsDescription}
          projects={homeContentEn.featuredProjects}
          locale="en"
        />
        <AboutSection content={homeContentEn.about} locale="en" />
        <InnovationSection content={homeContentEn.innovations} locale="en" />
        <VideoCarousel heading={homeContentEn.videos.heading} videos={homeContentEn.videos.items} locale="en" />
        <ChannelHighlight content={homeContentEn.channel} locale="en" />
        <CommunitySection content={homeContentEn.community} locale="en" />
      </main>
      <Footer locale="en" />
      <Script id="organization-jsonld-en" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify(organizationSchema)}
      </Script>
    </div>
  );
}
