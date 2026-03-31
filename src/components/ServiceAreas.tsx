"use client";

import { useState } from "react";

const areas = [
  {
    county: "Pasco County",
    cities: [
      "New Port Richey",
      "Port Richey",
      "Holiday",
      "Seven Springs",
      "Land O Lakes",
      "Trinity",
      "Odessa",
      "Bayonet Point",
      "River Edge",
    ],
  },
  {
    county: "Pinellas County",
    cities: [
      "Tarpon Springs",
      "Palm Harbor",
      "Dunedin",
      "Clearwater",
      "Largo",
      "East Lake",
      "Boot Ranch",
      "St. Petersburg",
    ],
  },
];

function Accordion({
  county,
  cities,
}: {
  county: string;
  cities: string[];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-white/20 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left cursor-pointer hover:bg-white/5 transition-colors duration-150"
        aria-expanded={open}
      >
        <span className="text-white font-semibold text-lg">{county}</span>
        <svg
          className={`w-5 h-5 text-[#1FC6C7] transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
        </svg>
      </button>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 flex flex-wrap gap-2">
          {cities.map((city) => (
            <span
              key={city}
              className="px-3 py-1.5 border border-[#1FC6C7] text-[#1FC6C7] text-sm rounded-full font-medium hover:bg-[#1FC6C7] hover:text-[#1A1E32] transition-colors duration-150"
            >
              {city}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ServiceAreas() {
  return (
    <section id="areas" className="bg-[#1A1E32] py-20 px-4">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3 inline-block border-b-2 border-[#FF662A] pb-1">
          Where We Work
        </p>
        <h2 className="text-3xl lg:text-4xl font-extrabold text-white mb-4">
          Areas We Serve
        </h2>
        <p className="text-white/60 mb-10">
          Click a county to see the cities we cover.
        </p>

        {/* Accordions */}
        <div className="flex flex-col gap-4 mb-8 text-left">
          {areas.map((area) => (
            <Accordion key={area.county} county={area.county} cities={area.cities} />
          ))}
        </div>

        {/* Tampa standalone badge */}
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-[#1FC6C7]/10 border border-[#1FC6C7]/40 rounded-full mb-6">
          <svg className="w-4 h-4 text-[#1FC6C7]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <span className="text-[#1FC6C7] font-semibold">Tampa &amp; Surrounding Areas</span>
        </div>

        <p className="text-white/50 text-sm mb-8">
          Don&apos;t see your city? Give us a call — we may still be able to help.
        </p>

        <a
          href="tel:9804353637"
          className="inline-block px-8 py-3.5 bg-[#FF662A] text-white font-bold rounded-md hover:bg-[#e5551f] transition-colors duration-150 shadow-lg shadow-[#FF662A]/20"
        >
          Call (980) 435-3637
        </a>
      </div>
    </section>
  );
}
