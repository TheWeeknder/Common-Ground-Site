import { SiteNav } from "@/components/SiteNav";

export function PageHeader({ title, subtitle }) {
  return (
    <div className="relative overflow-hidden h-[340px] md:h-[400px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/chaps-co-chTK1JJfok0-unsplash.jpg"
          alt="Barber cutting hair"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      <SiteNav />

      {/* Page Title */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 md:px-12 max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl text-white font-medium tracking-wide text-center">
          {title}
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-sm sm:text-base mt-2 tracking-widest uppercase text-center">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
