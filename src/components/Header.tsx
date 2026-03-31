"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "About", href: "/#about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Contact", href: "/#contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <>
      <header
        className={`sticky top-0 z-50 bg-[#1A1E32] transition-shadow duration-300 ${
          scrolled ? "shadow-lg shadow-black/30" : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center h-full py-1" onClick={handleNavClick}>
            <Image
              src="/logo-white.png"
              alt="Clear Point Window Cleaning"
              width={220}
              height={73}
              className="h-12 lg:h-16 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-white/85 hover:text-[#1FC6C7] font-medium text-sm transition-colors duration-150 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#1FC6C7] transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/#contact"
              className="px-5 py-2.5 bg-[#1FC6C7] text-[#1A1E32] font-semibold text-sm rounded-md hover:bg-[#18b0b1] transition-colors duration-150"
            >
              Free Estimate
            </a>
            <a
              href="tel:9804353637"
              className="px-5 py-2.5 bg-[#FF662A] text-white font-semibold text-sm rounded-md hover:bg-[#e5551f] transition-colors duration-150"
            >
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-80 max-w-full bg-[#1A1E32] z-50 flex flex-col pt-20 px-8 transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-5 right-5 text-white/70 hover:text-white text-2xl leading-none cursor-pointer"
          aria-label="Close menu"
        >
          ✕
        </button>

        <nav className="flex flex-col gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              onClick={handleNavClick}
              className="text-white text-lg font-semibold hover:text-[#1FC6C7] transition-colors duration-150 border-b border-white/10 pb-4"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-8 flex flex-col gap-3">
          <a
            href="/#contact"
            onClick={handleNavClick}
            className="w-full text-center px-5 py-3 bg-[#1FC6C7] text-[#1A1E32] font-semibold rounded-md hover:bg-[#18b0b1] transition-colors duration-150"
          >
            Free Estimate
          </a>
          <a
            href="tel:9804353637"
            className="w-full text-center px-5 py-3 bg-[#FF662A] text-white font-semibold rounded-md hover:bg-[#e5551f] transition-colors duration-150"
          >
            Call (980) 435-3637
          </a>
        </div>

        <div className="mt-auto mb-8 text-white/50 text-sm">
          <p>Mon–Fri 8am–7pm</p>
          <p>Sat 9am–6pm | Sun Closed</p>
        </div>
      </div>
    </>
  );
}
