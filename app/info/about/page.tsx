import { Metadata } from 'next';
import { Footer } from '../../../components/Footer';
import { MainNav } from '../../../components/MainNav';
import { AboutPage } from '../../../components/about/AboutPage';
import { aboutContentPt, homeContentPt } from '../../../src/content/locales/pt';

export const metadata: Metadata = {
  title: 'Sobre a aMathyzin',
  description:
    'Conheça a missão, os valores e a equipe multidisciplinar que lidera os projetos de otimização gratuitos da aMathyzin.',
  alternates: {
    canonical: '/info/about',
    languages: {
      'pt-BR': '/info/about',
      'en-US': '/en/info/about'
    }
  }
};

export default function AboutPtPage() {
  return (
    <div className="relative">
      <MainNav items={homeContentPt.navigation} locale="pt" />
      <main>
        <AboutPage content={aboutContentPt} locale="pt" />
      </main>
      <Footer locale="pt" />
    </div>
  );
}
