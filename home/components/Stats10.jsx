const services = [
  {
    name: "Classic Haircut",
    desc: "Scissor or clipper cut tailored to your head shape, finished with a hot towel neck clean.",
    price: "$35",
    duration: "30 min",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 mb-5">
        <path d="M8 10 Q18 6 28 10" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 16 Q18 11 30 16" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 22 Q18 17 28 22" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 28 Q18 25 24 28" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Beard Trim",
    desc: "Shaped, lined, and conditioned. We work with your natural growth to frame your face.",
    price: "$25",
    duration: "20 min",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 mb-5">
        <rect x="10" y="8" width="16" height="4" rx="2" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M13 12 L11 28" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M23 12 L25 28" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M11 28 Q18 26 25 28" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Cut & Beard Combo",
    desc: "The full package — haircut plus beard sculpt for a polished, put-together look.",
    price: "$55",
    duration: "50 min",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 mb-5">
        <circle cx="18" cy="14" r="7" stroke="#D4AF37" strokeWidth="1.5" />
        <path d="M11 14 Q18 10 25 14" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 28 Q18 24 23 28" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M18 21 L18 28" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Hot Towel Shave",
    desc: "Old-school straight razor shave with pre-shave oil, hot towel, and cooling aftershave.",
    price: "$45",
    duration: "40 min",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 mb-5">
        <path d="M10 22 Q14 12 18 10 Q22 12 26 22" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M9 24 Q18 30 27 24" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M14 26 L14 30 M22 26 L22 30" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Kids Cut",
    desc: "Patient, relaxed cuts for the little ones. We make it fun and stress-free for everyone.",
    price: "$22",
    duration: "25 min",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 mb-5">
        <path d="M10 8 L26 8" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M10 8 L8 28 L18 24 L28 28 L26 8" stroke="#D4AF37" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M13 16 Q18 14 23 16" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Hair & Scalp Treatment",
    desc: "Deep conditioning mask and scalp massage. Restores shine, reduces dryness and buildup.",
    price: "$40",
    duration: "35 min",
    icon: (
      <svg viewBox="0 0 36 36" fill="none" className="w-9 h-9 mb-5">
        <path d="M10 18 Q10 10 18 8 Q26 10 26 18" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 20 Q8 28 18 30 Q28 28 28 20" stroke="#D4AF37" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="19" r="3" stroke="#D4AF37" strokeWidth="1.5" />
      </svg>
    ),
  },
];

export default function ServicesSection() {
  return (
    <section className="bg-[#111] text-[#f0ebe3] py-20 px-6 md:px-10">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[11px] tracking-[0.3em] text-[#D4AF37] uppercase font-medium mb-3">
          What we offer
        </p>
        <h2 className="font-serif text-4xl md:text-[42px] font-bold text-[#f0ebe3] leading-tight mb-4">
          The Full Treatment
        </h2>
        <p className="text-[15px] text-[#888] font-light max-w-sm mx-auto leading-relaxed">
          Every cut is a craft. Every visit, an experience.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto border border-[#2a2a2a] gap-px">
        {services.map((service) => (
          <div
            key={service.name}
            className="group relative bg-[#161616] p-8 md:p-9 border-r border-[#2a2a2a] overflow-hidden hover:bg-[#1d1d1d] transition-colors duration-200"
          >
            {/* Gold top bar on hover */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#D4AF37] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

            {service.icon}

            <p className="font-serif text-lg font-bold text-[#f0ebe3] mb-2">{service.name}</p>
            <p className="text-[13px] text-[#666] font-light leading-relaxed mb-5">{service.desc}</p>

            <span className="text-[22px] font-medium text-[#D4AF37]">{service.price}</span>
            <span className="text-xs text-[#555] font-light ml-1.5">· {service.duration}</span>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-12">
        <button className="
          relative top-0
          bg-[#D4AF37] text-[#1a1206] text-[11px]
          px-10 py-4 uppercase font-bold tracking-[0.15em]
          rounded-full shadow-[0_5px_0_#8f6e10]
          hover:bg-[#e0bc45] hover:shadow-[0_7px_0_#8f6e10] hover:-top-0.5
          active:shadow-[0_1px_0_#8f6e10] active:top-1
          transition-all duration-[120ms]
        ">
          Book Your Appointment
        </button>
      </div>
    </section>
  );
}