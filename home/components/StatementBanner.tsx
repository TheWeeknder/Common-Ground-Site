"use client";
 
import { useState, useRef } from "react";
 
interface Service {
  id: number;
  category: string;
  title: string;
  image: string; // replace with your actual image paths
}
 
const services: Service[] = [
  {
    id: 1,
    category: "Treatments",
    title: "Beard Treatment",
    image: "/images/services/beard-treatment.jpg",
  },
  {
    id: 2,
    category: "Beard Services",
    title: "Beard Trim & Shape",
    image: "/images/services/beard-trim.jpg",
  },
  {
    id: 3,
    category: "Haircuts",
    title: "Classic Haircut",
    image: "/images/services/classic-haircut.jpg",
  },
  {
    id: 4,
    category: "Beard Services",
    title: "Hot Towel Shave",
    image: "/images/services/hot-towel-shave.jpg",
  },
  {
    id: 5,
    category: "Treatments",
    title: "Scalp Massage",
    image: "/images/services/scalp-massage.jpg",
  },
];
 
export default function StatementBanner() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const startX = useRef<number | null>(null);
 
  const goTo = (index: number) => {
    setActiveIndex(Math.max(0, Math.min(services.length - 1, index)));
  };
 
  // Touch / drag support
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const delta = startX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) goTo(activeIndex + (delta > 0 ? 1 : -1));
    startX.current = null;
  };
 
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Jost:wght@300;400;500&display=swap');
 
        .services-section {
          background-color: #f0ebe0;
          padding: 80px 0 60px;
          overflow: hidden;
          font-family: 'Jost', sans-serif;
        }
 
        .services-section h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 500;
          text-align: center;
          color: #1a1a1a;
          letter-spacing: 0.02em;
          margin: 0 0 12px;
        }
 
        .services-section .subtitle {
          text-align: center;
          font-size: 0.78rem;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          color: #8a7a5a;
          margin-bottom: 52px;
        }
 
        /* ── Track ── */
        .carousel-track {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          padding: 30px 0 40px;
          user-select: none;
        }
 
        /* ── Card ── */
        .service-card {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
          cursor: pointer;
          flex-shrink: 0;
          transition:
            width 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            height 0.5s cubic-bezier(0.4, 0, 0.2, 1),
            transform 0.4s cubic-bezier(0.4, 0, 0.2, 1),
            box-shadow 0.4s ease;
        }
 
        /* side cards */
        .service-card.side {
          width: 200px;
          height: 320px;
          transform: scale(0.92);
          box-shadow: 0 8px 30px rgba(0,0,0,0.12);
        }
 
        /* center (active) card */
        .service-card.active {
          width: 260px;
          height: 400px;
          transform: scale(1);
          box-shadow: 0 24px 60px rgba(0,0,0,0.28);
          z-index: 10;
        }
 
        /* hover lifts any card */
        .service-card:hover {
          transform: scale(1.04) translateY(-6px);
          box-shadow: 0 30px 70px rgba(0,0,0,0.32);
          z-index: 20;
        }
 
        /* outermost cards are slightly smaller */
        .service-card.far-side {
          width: 170px;
          height: 290px;
          transform: scale(0.86);
          opacity: 0.75;
        }
 
        .service-card.far-side:hover {
          transform: scale(0.92) translateY(-4px);
          opacity: 1;
        }
 
        /* image fills card, greyscale */
        .card-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(100%);
          transition: filter 0.4s ease;
          display: block;
        }
 
        .service-card:hover .card-image {
          filter: grayscale(60%);
        }
 
        /* gradient overlay */
        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to top,
            rgba(0,0,0,0.75) 0%,
            rgba(0,0,0,0.15) 50%,
            transparent 100%
          );
        }
 
        /* text content */
        .card-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 20px 18px 22px;
        }
 
        .card-category {
          display: block;
          font-size: 0.65rem;
          font-weight: 400;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 6px;
        }
 
        .card-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.35rem;
          font-weight: 500;
          color: #fff;
          line-height: 1.2;
          margin: 0 0 14px;
        }
 
        /* "VIEW DETAILS" button — only visible on active card */
        .card-btn {
          display: inline-block;
          padding: 8px 18px;
          border-radius: 999px;
          background: #fff;
          color: #1a1a1a;
          font-family: 'Jost', sans-serif;
          font-size: 0.65rem;
          font-weight: 500;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          border: none;
          cursor: pointer;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.3s ease, transform 0.3s ease, background 0.2s;
          pointer-events: none;
        }
 
        .service-card.active .card-btn,
        .service-card:hover .card-btn {
          opacity: 1;
          transform: translateY(0);
          pointer-events: auto;
        }
 
        .card-btn:hover {
          background: #c9a84c;
          color: #fff;
        }
 
        /* ── Dots ── */
        .carousel-dots {
          display: flex;
          justify-content: center;
          gap: 8px;
          margin-top: 8px;
        }
 
        .dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #c2b89a;
          border: none;
          padding: 0;
          cursor: pointer;
          transition: background 0.3s, transform 0.3s;
        }
 
        .dot.active {
          background: #1a1a1a;
          transform: scale(1.3);
        }
      `}</style>
 
      <section className="services-section">
        <p className="subtitle">What we offer</p>
        <h2>Our Services</h2>
 
        <div
          className="carousel-track"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {services.map((service, i) => {
            const distance = Math.abs(i - activeIndex);
            let cardClass = "service-card";
            if (i === activeIndex) cardClass += " active";
            else if (distance === 1) cardClass += " side";
            else cardClass += " far-side";
 
            return (
              <div
                key={service.id}
                className={cardClass}
                onClick={() => goTo(i)}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Replace with next/image for production */}
                <img
                  src={service.image}
                  alt={service.title}
                  className="card-image"
                  draggable={false}
                />
                <div className="card-overlay" />
                <div className="card-content">
                  <span className="card-category">{service.category}</span>
                  <p className="card-title">{service.title}</p>
                  <button className="card-btn">View Details</button>
                </div>
              </div>
            );
          })}
        </div>
 
        {/* Dot navigation */}
        <div className="carousel-dots">
          {services.map((_, i) => (
            <button
              key={i}
              className={`dot${i === activeIndex ? " active" : ""}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  );
}