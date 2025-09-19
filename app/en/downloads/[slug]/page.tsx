import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../../../components/Footer';
import { MainNav } from '../../../../components/MainNav';
import { DownloadDetail } from '../../../../components/downloads/DownloadDetail';
import { getDownloadProject } from '../../../../src/content/downloads';
import { downloadProjectsEn } from '../../../../src/content/projects-en';
import { homeContentEn } from '../../../../src/content/locales/en';

type Params = { slug: string };

export function generateStaticParams() {
  return downloadProjectsEn.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  { params }: { params: Params },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const project = getDownloadProject(params.slug, 'en');
  if (!project) {
    return {
      title: 'Project not found',
      description: 'The requested content could not be located.'
    };
  }
  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords
  };
}

export default function DownloadProjectPageEn({ params }: { params: Params }) {
  const project = getDownloadProject(params.slug, 'en');
  if (!project) notFound();

  return (
    <div className="relative">
      <MainNav items={homeContentEn.navigation} locale="en" />
      <DownloadDetail project={project} locale="en" />
      <Footer locale="en" />
    </div>
  );
}
