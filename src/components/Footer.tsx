import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1FC6C7]">
      <div className="max-w-7xl mx-auto px-4 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Col 1: Logo + tagline + socials */}
          <div>
            <Image
              src="/logo.png"
              alt="Clear Point Window Cleaning"
              width={160}
              height={50}
              className="h-12 w-auto object-contain mb-4"
            />
            <p className="text-[#1A1E32] font-medium text-sm leading-relaxed mb-6">
              Crystal clear windows. Zero hassle.
              <br />
              Serving Pinellas &amp; Pasco County, Florida.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#1A1E32]/15 flex items-center justify-center hover:bg-[#1A1E32]/30 transition-colors duration-150"
              >
                <svg className="w-4 h-4 text-[#1A1E32]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#1A1E32]/15 flex items-center justify-center hover:bg-[#1A1E32]/30 transition-colors duration-150"
              >
                <svg className="w-4 h-4 text-[#1A1E32]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
                </svg>
              </a>
              <a
                href="#"
                aria-label="Google"
                className="w-9 h-9 rounded-full bg-[#1A1E32]/15 flex items-center justify-center hover:bg-[#1A1E32]/30 transition-colors duration-150"
              >
                <svg className="w-4 h-4 text-[#1A1E32]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-[#1A1E32] font-bold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <nav className="flex flex-col gap-2 mb-6">
              {[
                { label: "Home", href: "/" },
                { label: "Services", href: "/#services" },
                { label: "About", href: "/#about" },
                { label: "Our Work", href: "/our-work" },
                { label: "Contact", href: "/#contact" },
              ].map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#1A1E32]/80 hover:text-[#1A1E32] text-sm transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <h4 className="text-[#1A1E32] font-bold text-sm uppercase tracking-wider mb-3">Services</h4>
            <ul className="flex flex-col gap-1.5">
              {["Window Cleaning", "Gutter Cleaning", "Pressure Washing", "Paver Sealing", "Solar Panel Cleaning"].map((s) => (
                <li key={s} className="text-[#1A1E32]/70 text-sm">
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact info */}
          <div>
            <h4 className="text-[#1A1E32] font-bold text-sm uppercase tracking-wider mb-4">Contact</h4>
            <div className="flex flex-col gap-3">
              <a
                href="tel:9804353637"
                className="flex items-center gap-2 text-[#1A1E32] font-bold text-lg hover:opacity-80 transition-opacity"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                (980) 435-3637
              </a>
              <div className="text-[#1A1E32]/80 text-sm space-y-1">
                <p className="font-medium">Mon–Fri: 8am–7pm</p>
                <p className="font-medium">Saturday: 9am–6pm</p>
                <p className="opacity-60">Sunday: Closed</p>
              </div>
              <p className="text-[#1A1E32]/70 text-sm mt-2">
                Serving Pinellas &amp; Pasco County, Florida
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-[#1A1E32] py-4 px-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          <p className="text-white/60">
            &copy; 2025 Clear Point Window Cleaning. All rights reserved.
          </p>
          <p className="text-white/60">
            Built by{" "}
            <a
              href="https://onpointfl.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#1FC6C7] hover:text-[#18b0b1] font-medium transition-colors duration-150"
            >
              On Point
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
