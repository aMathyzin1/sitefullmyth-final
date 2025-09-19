import { Metadata } from 'next';
import { Footer } from '../../../../components/Footer';
import { MainNav } from '../../../../components/MainNav';
import { LegalPage } from '../../../../components/legal/LegalPage';
import { homeContentEn, legalEn } from '../../../../src/content/locales/en';

export const metadata: Metadata = {
  title: 'Terms of Service',
  description:
    'Review the official aMathyzin Terms of Service to learn about rights, responsibilities and platform guidelines.',
  alternates: {
    canonical: '/en/legal/terms',
    languages: {
      'pt-BR': '/legal/terms',
      'en-US': '/en/legal/terms'
    }
  }
};

export default function TermsEnPage() {
  const { terms } = legalEn;

  return (
    <div className="relative">
      <MainNav items={homeContentEn.navigation} locale="en" />
      <main>
        <LegalPage
          title="Terms of Service"
          description="Guidelines that keep the ecosystem safe, transparent and collaborative for every community member."
          updatedAt={terms.updatedAt}
          version={terms.version}
          sections={terms.sections}
          locale="en"
          type="terms"
          relatedLink={{ label: 'Read the Privacy Policy', href: '/en/legal/privacy' }}
        />
      </main>
      <Footer locale="en" />
    </div>
  );
}
