import Image from "next/image";
import Link from "next/link";

const photos = [
  { src: "/images/IMG_0034-scaled.jpeg", alt: "Window cleaning result" },
  { src: "/images/IMG_0036-scaled.jpeg", alt: "Clean windows after service" },
  { src: "/images/IMG_0037-scaled.jpeg", alt: "Professional window cleaning" },
  { src: "/images/IMG_0041-scaled.jpeg", alt: "Gutter cleaning service" },
  { src: "/images/IMG_0042-scaled.jpeg", alt: "Pressure washing results" },
  { src: "/images/IMG_0020-scaled.jpeg", alt: "Solar panel cleaning" },
];

export default function GalleryTeaser() {
  return (
    <section id="gallery" className="bg-[#F5F5F5] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3 inline-block border-b-2 border-[#FF662A] pb-1">
          Our Work
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1E32] mb-12">
          See the Results
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4 mb-10">
          {photos.map((photo, i) => (
            <div
              key={i}
              className="group relative overflow-hidden rounded-xl aspect-square shadow-md"
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              {/* Teal overlay on hover */}
              <div className="absolute inset-0 bg-[#1FC6C7]/0 group-hover:bg-[#1FC6C7]/60 transition-all duration-300 flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg
                    className="w-10 h-10 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/our-work"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#1FC6C7] text-[#1A1E32] font-bold rounded-md hover:bg-[#18b0b1] transition-colors duration-150 shadow-md"
          >
            View Full Gallery
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
