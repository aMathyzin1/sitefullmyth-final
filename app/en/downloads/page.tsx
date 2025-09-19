import { Metadata } from 'next';
import { Footer } from '../../../components/Footer';
import { MainNav } from '../../../components/MainNav';
import { DownloadsListing } from '../../../components/downloads/DownloadsListing';
import { homeContentEn } from '../../../src/content/locales/en';
import { downloadListingEn } from '../../../src/content/downloads-listing';

export const metadata: Metadata = {
  title: 'Downloads and projects',
  description: 'Access every project, tool and optimization guide maintained by the aMathyzin community.'
};

export default function DownloadsPageEn() {
  return (
    <div className="relative">
      <MainNav items={homeContentEn.navigation} locale="en" />
      <DownloadsListing items={downloadListingEn} locale="en" />
      <Footer locale="en" />
    </div>
  );
}
