import { Metadata } from 'next';
import { Footer } from '../../components/Footer';
import { MainNav } from '../../components/MainNav';
import { DownloadsListing } from '../../components/downloads/DownloadsListing';
import { homeContentPt } from '../../src/content/locales/pt';
import { downloadListingPt } from '../../src/content/downloads-listing';

export const metadata: Metadata = {
  title: 'Downloads e projetos',
  description: 'Acesse todos os projetos, ferramentas e guias de otimização mantidos pela comunidade aMathyzin.'
};

export default function DownloadsPage() {
  return (
    <div className="relative">
      <MainNav items={homeContentPt.navigation} locale="pt" />
      <DownloadsListing items={downloadListingPt} locale="pt" />
      <Footer locale="pt" />
    </div>
  );
}
