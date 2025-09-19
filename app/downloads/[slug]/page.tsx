import type { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { Footer } from '../../../components/Footer';
import { MainNav } from '../../../components/MainNav';
import { DownloadDetail } from '../../../components/downloads/DownloadDetail';
import { getDownloadProject } from '../../../src/content/downloads';
import { downloadProjectsPt } from '../../../src/content/projects-pt';
import { homeContentPt } from '../../../src/content/locales/pt';

type Params = { slug: string };

export function generateStaticParams() {
  return downloadProjectsPt.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  { params }: { params: Params },
  _parent: ResolvingMetadata
): Promise<Metadata> {
  const project = getDownloadProject(params.slug, 'pt');
  if (!project) {
    return {
      title: 'Projeto não encontrado',
      description: 'O conteúdo solicitado não foi localizado.'
    };
  }
  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords
  };
}

export default function DownloadProjectPage({ params }: { params: Params }) {
  const project = getDownloadProject(params.slug, 'pt');
  if (!project) notFound();

  return (
    <div className="relative">
      <MainNav items={homeContentPt.navigation} locale="pt" />
      <DownloadDetail project={project} locale="pt" />
      <Footer locale="pt" />
    </div>
  );
}
