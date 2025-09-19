import type { DownloadProject, Locale } from './types';
import { downloadProjectsEn } from './projects-en';
import { downloadProjectsPt } from './projects-pt';

const map: Record<Locale, DownloadProject[]> = {
  en: downloadProjectsEn,
  pt: downloadProjectsPt
};

export function getDownloadProjects(locale: Locale = 'pt'): DownloadProject[] {
  return map[locale];
}

export function getDownloadProject(slug: string, locale: Locale = 'pt'): DownloadProject | undefined {
  return map[locale].find((project) => project.slug === slug);
}
