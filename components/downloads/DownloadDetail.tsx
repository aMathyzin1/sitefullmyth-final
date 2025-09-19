'use client';

import { ArrowSquareOut, CheckCircle, DownloadSimple, Info } from 'phosphor-react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import type { DownloadProject } from '../../src/content/types';

interface DownloadDetailProps {
  project: DownloadProject;
  locale?: 'pt' | 'en';
}

const analyticsEndpoint = 'https://probable-entertaining-chess.glitch.me';

type DownloadState = 'idle' | 'waiting' | 'downloading' | 'complete' | 'error';

export function DownloadDetail({ project, locale = 'pt' }: DownloadDetailProps) {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [downloadState, setDownloadState] = useState<DownloadState>('idle');
  const [progress, setProgress] = useState(0);
  const [sizeText, setSizeText] = useState('0 MB');
  const [downloadCount, setDownloadCount] = useState<number | null>(null);
  const needsTerms = Boolean(project.file);

  useEffect(() => {
    if (!project.file?.analyticsId) return;
    fetch(`${analyticsEndpoint}/api/downloads/${project.file.analyticsId}`)
      .then((response) => response.json())
      .then((data) => setDownloadCount(data.count))
      .catch(() => setDownloadCount(null));
  }, [project.file?.analyticsId]);

  const hasPrimaryDownload = useMemo(() => {
    return project.downloads.some((link) => link.type === 'primary');
  }, [project.downloads]);

  async function handleDownload() {
    if (!project.file) return;
    if (!acceptedTerms && needsTerms) {
      setDownloadState('error');
      return;
    }

    const { path, name, analyticsId } = project.file;
    setDownloadState('waiting');
    setProgress(0);
    setSizeText('0 MB');

    try {
      const response = await fetch(path);
      if (!response.ok || !response.body) {
        window.open(path, '_blank');
        setDownloadState('complete');
        if (analyticsId) {
          incrementCounter(analyticsId);
        }
        return;
      }

      const reader = response.body.getReader();
      const contentLength = Number(response.headers.get('Content-Length')) || 0;
      const chunks: Uint8Array[] = [];
      let receivedLength = 0;

      setDownloadState('downloading');

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        if (value) {
          chunks.push(value);
          receivedLength += value.length;
          const percentage = contentLength ? (receivedLength / contentLength) * 100 : 0;
          setProgress(Number(percentage.toFixed(2)));
          setSizeText(`${formatSize(receivedLength)}${contentLength ? ` / ${formatSize(contentLength)}` : ''}`);
        }
      }

      const blob = new Blob(chunks);
      const downloadUrl = URL.createObjectURL(blob);
      const anchor = document.createElement('a');
      anchor.href = downloadUrl;
      anchor.download = name;
      document.body.appendChild(anchor);
      anchor.click();
      document.body.removeChild(anchor);
      URL.revokeObjectURL(downloadUrl);

      setDownloadState('complete');
      setProgress(100);
      if (analyticsId) {
        incrementCounter(analyticsId);
      }
    } catch (error) {
      console.error(error);
      setDownloadState('error');
      window.open(path, '_blank');
    }
  }

  function incrementCounter(id: string) {
    fetch(`${analyticsEndpoint}/api/downloads/${id}`, { method: 'POST' })
      .then((response) => response.json())
      .then((data) => setDownloadCount(data.count))
      .catch(() => void 0);
  }

  return (
    <section className="py-16">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6">
        <header className="section-shell overflow-hidden">
          <div className="grid gap-10 p-10 md:grid-cols-2">
            <div className="space-y-5">
              <span className="badge inline-flex items-center gap-2">
                <Info size={16} weight="bold" /> {project.category}
              </span>
              <h1 className="text-3xl font-semibold text-white sm:text-4xl">{project.summary.title}</h1>
              <p className="text-slate-300">{project.summary.shortDescription}</p>
              <ul className="space-y-2 text-sm text-slate-200">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <CheckCircle size={16} weight="bold" className="mt-1 text-secondary" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              {project.tutorial ? (
                <Link
                  href={project.tutorial.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex w-fit"
                >
                  <ArrowSquareOut size={16} weight="bold" />
                  {project.tutorial.label}
                </Link>
              ) : null}
            </div>
            <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <p className="text-sm text-slate-400">{locale === 'en' ? 'File' : 'Arquivo'}</p>
                  <p className="text-base font-semibold text-white">{project.file?.name ?? project.summary.title}</p>
                </div>
                {project.file?.size ? (
                  <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                    {project.file.size}
                  </span>
                ) : null}
              </div>
              {needsTerms ? (
                <label className="flex items-center gap-3 text-xs text-slate-300">
                  <input
                    type="checkbox"
                    checked={acceptedTerms}
                    onChange={(event) => setAcceptedTerms(event.target.checked)}
                    className="h-4 w-4 rounded border border-white/10 bg-white/5 text-primary focus:ring-primary"
                  />
                  {locale === 'en'
                    ? 'I accept the Terms of Service before downloading.'
                    : 'Eu aceito os Termos de Serviço antes de realizar o download.'}
                </label>
              ) : null}
              <button
                type="button"
                onClick={handleDownload}
                disabled={downloadState === 'downloading' || (needsTerms && !acceptedTerms)}
                className="btn-primary inline-flex w-full items-center justify-center"
              >
                <DownloadSimple size={18} weight="bold" />
                {locale === 'en' ? 'Download now' : 'Baixar agora'}
              </button>
              <div className="space-y-2 text-xs text-slate-300">
                <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-primary via-pink-500 to-secondary"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <div className="flex items-center justify-between text-[11px]">
                  <span>{sizeText}</span>
                  <span>
                    {downloadState === 'downloading'
                      ? locale === 'en'
                        ? 'Downloading...'
                        : 'Baixando...'
                      : downloadState === 'complete'
                        ? locale === 'en'
                          ? 'Download complete'
                          : 'Download concluído'
                        : ''}
                  </span>
                </div>
                {downloadCount !== null ? (
                  <p className="text-right text-[11px] text-slate-400">
                    {locale === 'en' ? 'Downloads' : 'Downloads'}: {downloadCount}
                  </p>
                ) : null}
              </div>
            </div>
          </div>
        </header>

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-10">
            <div className="video-iframe">
              <iframe
                src={project.video.embedUrl}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={project.video.title}
              />
            </div>
            <section className="space-y-6">
              <h2 className="text-2xl font-semibold text-white">{project.body.heading}</h2>
              <div className="space-y-8">
                {project.body.sections.map((section) => (
                  <motion.div key={section.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                    <h3 className="text-lg font-semibold text-white">{section.title}</h3>
                    <div className="prose prose-invert max-w-none text-sm text-slate-300">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>
          </div>
          <aside className="space-y-8">
            <section className="section-shell p-6">
              <h3 className="text-sm font-semibold text-white">
                {locale === 'en' ? 'Download links' : 'Links de download'}
              </h3>
              <ul className="mt-4 space-y-3 text-sm">
                {project.downloads.map((link) => (
                  <li key={link.label}>
                    {link.url.startsWith('/') ? (
                      <Link
                        href={link.url}
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-primary/50 hover:bg-primary/10"
                      >
                        <span>{link.label}</span>
                        <ArrowSquareOut size={16} weight="bold" />
                      </Link>
                    ) : (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-primary/50 hover:bg-primary/10"
                      >
                        <span>{link.label}</span>
                        <ArrowSquareOut size={16} weight="bold" />
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </section>
            {project.supportLinks?.length ? (
              <section className="section-shell p-6">
                <h3 className="text-sm font-semibold text-white">
                  {locale === 'en' ? 'Support and documentation' : 'Suporte e documentação'}
                </h3>
                <ul className="mt-4 space-y-3 text-sm">
                  {project.supportLinks.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white transition hover:border-primary/40 hover:bg-primary/10"
                      >
                        <span>{link.label}</span>
                        <ArrowSquareOut size={16} weight="bold" />
                      </a>
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}
          </aside>
        </div>
      </div>
    </section>
  );
}

function formatSize(bytes: number) {
  if (!bytes) return '0 MB';
  const mb = bytes / (1024 * 1024);
  if (mb < 1) {
    return `${(bytes / 1024).toFixed(1)} KB`;
  }
  return `${mb.toFixed(2)} MB`;
}
