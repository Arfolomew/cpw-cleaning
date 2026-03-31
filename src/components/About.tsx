import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="bg-[#F5F5F5] py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Photo */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border-4 border-[#1FC6C7] shadow-xl max-w-md mx-auto lg:max-w-none">
              <Image
                src="/images/IMG_0014.jpeg"
                alt="Clear Point Window Cleaning team at work"
                width={600}
                height={500}
                className="w-full h-80 lg:h-96 object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Teal accent block */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#1FC6C7]/80 to-transparent p-6">
                <p className="text-white font-bold text-sm">Clear Point Window Cleaning</p>
                <p className="text-white/80 text-xs">Serving Pinellas &amp; Pasco County</p>
              </div>
            </div>
            {/* Decorative teal box behind photo */}
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-[#1FC6C7]/15 rounded-2xl -z-10 hidden lg:block" />
          </div>

          {/* Text */}
          <div>
            <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3 inline-block border-b-2 border-[#FF662A] pb-1">
              About Us
            </p>
            <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1E32] mb-6">
              Our Mission
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At Clear Point Window Cleaning, we are a dedicated small business
              committed to delivering top-tier window, gutter, and solar panel
              cleaning services. With years of experience serving satisfied
              clients, we bring that same level of excellence to the communities
              of Pinellas and Pasco County, Florida.
            </p>
            <p className="text-[#1A1E32] font-semibold italic mb-10">
              — Andrew Mroz, Owner &amp; Operator
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#1FC6C7]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1FC6C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#1A1E32] text-sm">Locally Owned</div>
                  <div className="text-gray-500 text-xs">Pinellas &amp; Pasco County</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#FF662A]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#FF662A]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#1A1E32] text-sm">Small Business</div>
                  <div className="text-gray-500 text-xs">Family-operated</div>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-gray-100">
                <div className="w-10 h-10 rounded-full bg-[#1FC6C7]/15 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-[#1FC6C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-[#1A1E32] text-sm">Satisfaction Guaranteed</div>
                  <div className="text-gray-500 text-xs">100% satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
