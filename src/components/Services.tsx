const services = [
  {
    name: "Window Cleaning",
    image: "/images/service-windows.png",
    description:
      "Streak-free shine every time — residential and commercial windows cleaned to perfection.",
  },
  {
    name: "Gutter Cleaning",
    image: "/images/service-gutters.png",
    description:
      "Protect your home from water damage with our thorough gutter cleaning service.",
  },
  {
    name: "Pressure Washing",
    image: "/images/service-pressure.png",
    description:
      "Blast away dirt and grime from driveways, decks, and walkways.",
  },
  {
    name: "Paver Sealing",
    image: "/images/service-pavers.png",
    description:
      "Preserve and protect your pavers with professional sealing that extends their lifespan.",
  },
  {
    name: "Solar Panel Cleaning",
    image: "/images/service-solar.png",
    description:
      "Maximize energy efficiency — clean panels perform up to 30% better.",
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Section label */}
        <p className="text-[#1FC6C7] font-semibold text-xs uppercase tracking-widest mb-3 inline-block border-b-2 border-[#FF662A] pb-1">
          What We Do
        </p>
        <div className="flex items-center gap-4 mb-12">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-[#1A1E32]">
            Our Services
          </h2>
          <div className="flex-1 h-1 bg-gradient-to-r from-[#1FC6C7] to-transparent rounded-full" />
        </div>

        {/* Top row: 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>

        {/* Bottom row: 2 cards centered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:w-2/3 lg:mx-auto">
          {services.slice(3).map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="/#contact"
            className="inline-block px-8 py-3.5 bg-[#1FC6C7] text-[#1A1E32] font-bold rounded-md hover:bg-[#18b0b1] transition-colors duration-150 shadow-md"
          >
            Request a Free Estimate
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: typeof services[0] }) {
  return (
    <div className="group relative overflow-hidden rounded-xl shadow-lg h-72 cursor-pointer border-4 border-[#1A1E32] transition-all duration-300 hover:shadow-2xl hover:shadow-[#1FC6C7]/20">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${service.image})` }}
      />

      {/* Default dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

      {/* Teal hover overlay */}
      <div className="absolute inset-0 bg-[#1FC6C7]/0 group-hover:bg-[#1FC6C7]/70 transition-all duration-300" />

      {/* Shine effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/0 to-transparent group-hover:via-white/20 transition-all duration-700" />

      {/* Orange accent bar */}
      <div className="absolute top-0 left-0 w-1 h-12 bg-[#FF662A] transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6">
        <h3 className="text-white font-bold text-xl mb-0 group-hover:mb-3 transition-all duration-200">
          {service.name}
        </h3>
        <div className="overflow-hidden max-h-0 group-hover:max-h-24 transition-all duration-300 ease-in-out">
          <p className="text-white/90 text-sm leading-relaxed pt-1">
            {service.description}
          </p>
        </div>
      </div>
    </div>
  );
}
