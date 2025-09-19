import { Metadata } from 'next';
import { Footer } from '../../../../components/Footer';
import { MainNav } from '../../../../components/MainNav';
import { AboutPage } from '../../../../components/about/AboutPage';
import { aboutContentEn, homeContentEn } from '../../../../src/content/locales/en';

export const metadata: Metadata = {
  title: 'About aMathyzin',
  description:
    'Discover the mission, values and multidisciplinary team behind aMathyzin’s free performance optimization projects.',
  alternates: {
    canonical: '/en/info/about',
    languages: {
      'pt-BR': '/info/about',
      'en-US': '/en/info/about'
    }
  }
};

export default function AboutEnPage() {
  return (
    <div className="relative">
      <MainNav items={homeContentEn.navigation} locale="en" />
      <main>
        <AboutPage content={aboutContentEn} locale="en" />
      </main>
      <Footer locale="en" />
    </div>
  );
}
