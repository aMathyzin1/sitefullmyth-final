import { Metadata } from 'next';
import { Footer } from '../../../../components/Footer';
import { MainNav } from '../../../../components/MainNav';
import { LegalPage } from '../../../../components/legal/LegalPage';
import { homeContentEn, legalEn } from '../../../../src/content/locales/en';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description:
    'Understand how we collect, store and protect your personal data while you use the solutions inside the aMathyzin ecosystem.',
  alternates: {
    canonical: '/en/legal/privacy',
    languages: {
      'pt-BR': '/legal/privacy',
      'en-US': '/en/legal/privacy'
    }
  }
};

export default function PrivacyEnPage() {
  const { privacy } = legalEn;

  return (
    <div className="relative">
      <MainNav items={homeContentEn.navigation} locale="en" />
      <main>
        <LegalPage
          title="Privacy Policy"
          description="Full transparency about the data we collect, how each information is used and the rights available to you."
          updatedAt={privacy.updatedAt}
          sections={privacy.sections}
          locale="en"
          type="privacy"
          relatedLink={{ label: 'View Terms of Service', href: '/en/legal/terms' }}
        />
      </main>
      <Footer locale="en" />
    </div>
  );
}
