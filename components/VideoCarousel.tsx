'use client';

import { YoutubeLogo } from 'phosphor-react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import type { VideoItem } from '../src/content/types';

interface VideoCarouselProps {
  heading: string;
  videos: VideoItem[];
  locale?: 'pt' | 'en';
}

export function VideoCarousel({ heading, videos, locale = 'pt' }: VideoCarouselProps) {
  return (
    <section id="videos" className="py-24">
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="mb-12 flex items-center justify-between gap-4">
          <div>
            <span className="badge mb-3">YouTube</span>
            <h2 className="text-3xl font-semibold text-white sm:text-4xl">{heading}</h2>
          </div>
          <a
            href="https://www.youtube.com/@aMathyzin"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-200 transition hover:border-primary/50 hover:text-white md:inline-flex"
          >
            <YoutubeLogo size={18} weight="bold" />
            {locale === 'en' ? 'Open channel' : 'Abrir canal'}
          </a>
        </div>
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 }
          }}
          className="!pb-12"
        >
          {videos.map((video) => (
            <SwiperSlide key={video.title}>
              <article className="card-surface flex h-full flex-col overflow-hidden">
                <div className="video-iframe">
                  <iframe src={video.embedUrl} loading="lazy" title={video.title} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  <p className="text-sm text-slate-300">{video.description}</p>
                  <a
                    href={video.watchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-secondary"
                  >
                    <YoutubeLogo size={16} weight="bold" />
                    {locale === 'en' ? 'Watch' : 'Assistir'}
                  </a>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
