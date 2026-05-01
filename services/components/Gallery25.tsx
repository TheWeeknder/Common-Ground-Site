import { cn } from "@/lib/utils";

const data = {
  heading: "Price Range",
  services: [
    { name: "Hair Cut",       price: "$36" },
    { name: "Crew Cut",       price: "$36" },
    { name: "Beard Trim",     price: "$36" },
    { name: "Beard Trim",     price: "$36" },
    { name: "Short Hair Dye", price: "$36" },
    { name: "Clipper Cut",    price: "$36" },
    { name: "Side Cut",       price: "$36" },
    { name: "Hot Towel Shave",price: "$36" },
    { name: "Moustaches Trim",price: "$36" },
    { name: "Long Hair Dye",  price: "$36" },
  ],
};

interface ServicesSectionProps {
  className?: string;
}

const Gallery25 = ({ className }: ServicesSectionProps) => {
  // Split services into two columns
  const half = Math.ceil(data.services.length / 2);
  const leftCol  = data.services.slice(0, half);
  const rightCol = data.services.slice(half);

  return (
    <section
      className={cn(
        "bg-cover bg-center bg-no-repeat py-16 px-[5%]",
        className
      )}
      style={{
      backgroundImage:
      "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/assets/chaps-co-chTK1JJfok0-unsplash.jpg')",
      }}
      aria-label="Services and pricing"
    >
      <div className="container">
        <div className="mx-auto max-w-6xl rounded-md bg-white p-12 shadow-lg md:p-20">

          {/* Heading */}
          <h2 className="mb-4 font-serif text-3xl italic text-gray-900">
            {data.heading}
          </h2>

          <hr className="mb-8 border-gray-200" />

          {/* Two-column service grid */}
          <div className="grid grid-cols-1 gap-x-12 md:grid-cols-2 md:divide-y-0">

            {/* Left column */}
            <ul className="space-y-5 pt-8 md:pt-0">
              {leftCol.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-800 whitespace-nowrap">
                    {service.name}
                  </span>
                  <span className="flex-1 border-b border-dotted border-gray-300 mb-[3px]" />
                  <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>

            {/* Right column */}
            <ul className="space-y-5 pt-4 md:pt-0">
              {rightCol.map((service, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-800 whitespace-nowrap">
                    {service.name}
                  </span>
                  <span className="flex-1 border-b border-dotted border-gray-300 mb-[3px]" />
                  <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">
                    {service.price}
                  </span>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>
    </section>
  );
};

export { Gallery25 };



