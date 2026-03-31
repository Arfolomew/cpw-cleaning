"use client";

import { useState } from "react";
import Image from "next/image";

const allPhotos = [
  { src: "/images/image0-scaled.jpeg", alt: "Solar panel cleaning" },
  { src: "/images/image3-scaled.jpeg", alt: "Window cleaning service" },
  { src: "/images/image4-scaled.jpeg", alt: "Professional window cleaning" },
  { src: "/images/image5-scaled.jpeg", alt: "Gutter cleaning service" },
  { src: "/images/image6-scaled.jpeg", alt: "Paver sealing service" },
  { src: "/images/image7-scaled.jpeg", alt: "Pressure washing results" },
  { src: "/images/IMG_0014.jpeg", alt: "Window cleaning at work" },
  { src: "/images/IMG_0018-scaled.jpeg", alt: "Residential window cleaning" },
  { src: "/images/IMG_0020-scaled.jpeg", alt: "Clean windows result" },
  { src: "/images/IMG_0022-scaled.jpg", alt: "Pressure washing service" },
  { src: "/images/IMG_0034-scaled.jpeg", alt: "Window cleaning result" },
  { src: "/images/IMG_0036-scaled.jpeg", alt: "Clean windows after service" },
  { src: "/images/IMG_0037-scaled.jpeg", alt: "Professional results" },
  { src: "/images/IMG_0040-scaled.jpeg", alt: "Gutter cleaning" },
  { src: "/images/IMG_0041-scaled.jpeg", alt: "Service result" },
  { src: "/images/IMG_0042-scaled.jpeg", alt: "Professional cleaning" },
];

const videos = [
  { src: "/videos/IMG_0010-1.mp4", label: "Window Cleaning" },
  { src: "/videos/IMG_0019.mp4", label: "Service Showcase" },
  { src: "/videos/IMG_0021.mp4", label: "Gutter Cleaning" },
  { src: "/videos/IMG_0029.mp4", label: "Pressure Washing" },
  { src: "/videos/IMG_0033.mp4", label: "Solar Panel Cleaning" },
  { src: "/videos/IMG_0045.mp4", label: "Before & After" },
  { src: "/videos/IMG_0047.mp4", label: "Service in Action" },
  { src: "/videos/IMG_0055.mp4", label: "Clear Point Results" },
];

export default function OurWorkContent() {
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const openLightbox = (idx: number) => setLightboxIdx(idx);
  const closeLightbox = () => setLightboxIdx(null);
  const prevPhoto = () =>
    setLightboxIdx((i) => (i !== null ? (i - 1 + allPhotos.length) % allPhotos.length : 0));
  const nextPhoto = () =>
    setLightboxIdx((i) => (i !== null ? (i + 1) % allPhotos.length : 0));

  return (
    <>
      {/* Photos Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3 inline-block border-b-2 border-[#FF662A] pb-1">
            Gallery
          </p>
          <h2 className="text-3xl font-extrabold text-[#1A1E32] mb-10">Photos</h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {allPhotos.map((photo, i) => (
              <button
                key={i}
                onClick={() => openLightbox(i)}
                className="group relative overflow-hidden rounded-xl aspect-square shadow-md cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#1FC6C7] focus:ring-offset-2"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-[#1FC6C7]/0 group-hover:bg-[#1FC6C7]/50 transition-all duration-300 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607ZM10.5 7.5v6m3-3h-6" />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="bg-[#F5F5F5] py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3 inline-block border-b-2 border-[#FF662A] pb-1">
            In Action
          </p>
          <h2 className="text-3xl font-extrabold text-[#1A1E32] mb-10">Videos</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {videos.map((video, i) => (
              <div key={i} className="group relative rounded-xl overflow-hidden shadow-md bg-[#1A1E32]">
                <video
                  muted
                  loop
                  playsInline
                  className="w-full aspect-video object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-200"
                  onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                  onMouseLeave={(e) => {
                    const v = e.currentTarget as HTMLVideoElement;
                    v.pause();
                    v.currentTime = 0;
                  }}
                >
                  <source src={video.src} type="video/mp4" />
                </video>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <p className="text-white font-semibold text-sm">{video.label}</p>
                </div>
                {/* Play icon overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-100 group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1A1E32] py-16 px-4 text-center">
        <h2 className="text-2xl lg:text-3xl font-extrabold text-white mb-4">
          Ready for crystal clear results?
        </h2>
        <p className="text-white/60 mb-8">
          Get a free estimate — same-day quotes available.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#contact"
            className="px-8 py-3.5 bg-[#1FC6C7] text-[#1A1E32] font-bold rounded-md hover:bg-[#18b0b1] transition-colors duration-150"
          >
            Get a Free Estimate
          </a>
          <a
            href="tel:9804353637"
            className="px-8 py-3.5 border-2 border-[#FF662A] text-white font-bold rounded-md hover:bg-[#FF662A] transition-all duration-150"
          >
            Call (980) 435-3637
          </a>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIdx !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/70 hover:text-white text-3xl leading-none z-10 cursor-pointer"
            aria-label="Close lightbox"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prevPhoto(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 cursor-pointer p-2"
            aria-label="Previous photo"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image */}
          <div
            className="relative w-full max-w-4xl max-h-[85vh] mx-16"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={allPhotos[lightboxIdx].src}
              alt={allPhotos[lightboxIdx].alt}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
              priority
            />
            <p className="text-white/60 text-sm text-center mt-3">
              {lightboxIdx + 1} / {allPhotos.length} — {allPhotos[lightboxIdx].alt}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); nextPhoto(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10 cursor-pointer p-2"
            aria-label="Next photo"
          >
            <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
