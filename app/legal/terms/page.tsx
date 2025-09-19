import { Metadata } from 'next';
import { Footer } from '../../../components/Footer';
import { MainNav } from '../../../components/MainNav';
import { LegalPage } from '../../../components/legal/LegalPage';
import { homeContentPt, legalPt } from '../../../src/content/locales/pt';

export const metadata: Metadata = {
  title: 'Termos de Serviço',
  description:
    'Leia os Termos de Serviço oficiais da aMathyzin para entender direitos, responsabilidades e boas práticas de uso.',
  alternates: {
    canonical: '/legal/terms',
    languages: {
      'pt-BR': '/legal/terms',
      'en-US': '/en/legal/terms'
    }
  }
};

export default function TermsPtPage() {
  const { terms } = legalPt;

  return (
    <div className="relative">
      <MainNav items={homeContentPt.navigation} locale="pt" />
      <main>
        <LegalPage
          title="Termos de Serviço"
          description="Diretrizes que garantem um ecossistema seguro, transparente e colaborativo para a comunidade."
          updatedAt={terms.updatedAt}
          version={terms.version}
          sections={terms.sections}
          locale="pt"
          type="terms"
          relatedLink={{ label: 'Ler Política de Privacidade', href: '/legal/privacy' }}
        />
      </main>
      <Footer locale="pt" />
    </div>
  );
}
