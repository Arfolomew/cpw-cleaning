export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/images/IMG_0018-scaled.jpeg"
      >
        <source src="/videos/IMG_0055.mp4" type="video/mp4" />
      </video>

      {/* Dark navy overlay */}
      <div className="absolute inset-0 bg-[#1A1E32]/65" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <p className="text-[#1FC6C7] font-semibold text-sm uppercase tracking-widest mb-4">
          Pinellas &amp; Pasco County, Florida
        </p>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
          See What You've{" "}
          <span className="text-[#1FC6C7]">Been Missing.</span>
        </h1>
        <p className="text-white/80 text-lg sm:text-xl max-w-2xl mx-auto mb-10">
          Serving Pinellas &amp; Pasco County — 5-star rated, locally owned, and
          ready to make your property shine.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="/#contact"
            className="w-full sm:w-auto px-8 py-4 bg-[#1FC6C7] text-[#1A1E32] font-bold text-lg rounded-md hover:bg-[#18b0b1] transition-all duration-150 shadow-lg shadow-[#1FC6C7]/30"
          >
            Get a Free Estimate
          </a>
          <a
            href="tel:9804353637"
            className="w-full sm:w-auto px-8 py-4 border-2 border-[#FF662A] text-white font-bold text-lg rounded-md hover:bg-[#FF662A] transition-all duration-150"
          >
            Call (980) 435-3637
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
          <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
            <span className="text-yellow-400 text-lg">★</span>
            5-Star Rated
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/30" />
          <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
            <svg className="w-4 h-4 text-[#1FC6C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
            </svg>
            Licensed &amp; Insured
          </div>
          <div className="hidden sm:block w-px h-5 bg-white/30" />
          <div className="flex items-center gap-2 text-white/90 text-sm font-medium">
            <svg className="w-4 h-4 text-[#FF662A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />
            </svg>
            Same-Day Quotes
          </div>
        </div>
      </div>

      {/* Scroll arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-arrow">
        <a href="/#services" aria-label="Scroll to services">
          <svg
            className="w-8 h-8 text-white/60 hover:text-[#1FC6C7] transition-colors duration-150"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
          </svg>
        </a>
      </div>
    </section>
  );
}
