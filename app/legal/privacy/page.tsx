import { Metadata } from 'next';
import { Footer } from '../../../components/Footer';
import { MainNav } from '../../../components/MainNav';
import { LegalPage } from '../../../components/legal/LegalPage';
import { homeContentPt, legalPt } from '../../../src/content/locales/pt';

export const metadata: Metadata = {
  title: 'Política de Privacidade',
  description:
    'Entenda como coletamos, armazenamos e protegemos seus dados pessoais ao utilizar as soluções do ecossistema aMathyzin.',
  alternates: {
    canonical: '/legal/privacy',
    languages: {
      'pt-BR': '/legal/privacy',
      'en-US': '/en/legal/privacy'
    }
  }
};

export default function PrivacyPtPage() {
  const { privacy } = legalPt;

  return (
    <div className="relative">
      <MainNav items={homeContentPt.navigation} locale="pt" />
      <main>
        <LegalPage
          title="Política de Privacidade"
          description="Transparência total sobre as informações que coletamos, como utilizamos cada dado e quais direitos você possui."
          updatedAt={privacy.updatedAt}
          sections={privacy.sections}
          locale="pt"
          type="privacy"
          relatedLink={{ label: 'Ver Termos de Serviço', href: '/legal/terms' }}
        />
      </main>
      <Footer locale="pt" />
    </div>
  );
}
