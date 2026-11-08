import React, { useState, useEffect } from 'react';
import { ArrowDown, ArrowUpRight, Phone, ShieldCheck, Zap } from 'lucide-react';
import { PRIMARY_PHONE } from '../utils/whatsapp';

interface HeroProps {
  onExploreFleet: () => void;
  onCheckAvailability: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreFleet,
  onCheckAvailability
}) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 20; // -10 to +10 px
      const y = (e.clientY / innerHeight - 0.5) * 20;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 overflow-hidden bg-[#090A0C]"
    >
      {/* Cinematic Layered Vehicle Backdrop with Mouse Parallax Depth */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
        {/* Subtle radial beam of light behind the vehicle */}
        <div
          className="absolute top-1/3 right-1/4 w-[600px] h-[600px] rounded-full blur-[140px] opacity-25"
          style={{
            background: 'radial-gradient(circle, #C7F36B 0%, #15171B 70%, transparent 100%)',
            transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)`
          }}
        />

        {/* Large Cinematic Asymmetrical Vehicle Photograph */}
        <div
          className="absolute inset-0 transition-transform duration-700 ease-out"
          style={{
            transform: `scale(1.05) translate(${mousePos.x * -0.6}px, ${mousePos.y * -0.6}px)`
          }}
        >
          <img
            src="/src/assets/images/hero_luxury_car_1794141123471.jpg"
            alt="Wheels Four Rent - Premium Luxury Fleet Hyderabad"
            referrerPolicy="no-referrer"
            onLoad={() => setImgLoaded(true)}
            className={`w-full h-full object-cover object-center lg:object-[65%_center] filter brightness-[0.72] contrast-[1.15] transition-opacity duration-1000 ${
              imgLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          />
        </div>

        {/* Studio Lighting & Vignette Scrims */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#090A0C] via-[#090A0C]/85 to-transparent lg:w-[65%]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#090A0C] via-transparent to-[#090A0C]/60" />
        <div className="absolute inset-0 bg-grain opacity-40 mix-blend-overlay" />
      </div>

      {/* Top Editorial Metadata Banner (Small Technical Labels) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-hairline pb-4 text-[11px] font-tech uppercase tracking-[0.22em] text-[#A8ADB5]">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#C7F36B] shadow-[0_0_8px_#C7F36B]" />
            <span className="text-[#F4F2ED] font-semibold">HYDERABAD / INDIA</span>
            <span className="text-neutral-700">|</span>
            <span>SHAIKPET FLYOVER &middot; GACHIBOWLI</span>
          </div>

          <div className="hidden sm:flex items-center gap-6">
            <span>AVAILABLE 24/7 NATIONWIDE ENQUIRIES</span>
            <span className="text-neutral-700">|</span>
            <span className="text-[#C7F36B]">PREMIUM CAR RENTALS</span>
          </div>
        </div>
      </div>

      {/* Main Editorial Hero Composition */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full my-auto py-10 lg:py-16">
        <div className="max-w-3xl">
          {/* Subtitle / Brand Mission Tag */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-sm bg-[#15171B] border border-hairline text-xs font-tech tracking-wider uppercase text-[#C7F36B] mb-6">
            <Zap className="w-3.5 h-3.5 text-[#C7F36B]" />
            <span>Pinnacle Fleet Mobility &middot; Self-Drive &middot; Weddings &middot; Shoots</span>
          </div>

          {/* Oversized Editorial Typography */}
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-[7rem] leading-[0.88] text-[#F4F2ED] uppercase tracking-[-0.03em] mb-8">
            YOUR NEXT <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F2ED] via-[#A8ADB5] to-[#717680]">
              JOURNEY
            </span> <br />
            <span className="text-[#C7F36B] italic font-extrabold">STARTS HERE.</span>
          </h1>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-[#A8ADB5] font-light max-w-xl leading-relaxed mb-10">
            "Find the right wheels for every road, every occasion and every unforgettable moment."
          </p>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={onExploreFleet}
              className="group relative inline-flex items-center gap-3 px-8 py-4 bg-[#C7F36B] hover:bg-[#D4F788] text-[#090A0C] font-tech font-bold text-xs uppercase tracking-[0.16em] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 shadow-lg shadow-[#C7F36B]/20"
            >
              <span>EXPLORE THE FLEET</span>
              <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            <button
              onClick={onCheckAvailability}
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#15171B] hover:bg-[#1F2228] text-[#F4F2ED] border border-hairline-light hover:border-[#C7F36B]/60 font-tech font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-300"
            >
              <span>CHECK AVAILABILITY</span>
            </button>

            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="inline-flex items-center gap-2 px-5 py-4 text-xs font-tech uppercase tracking-wider text-[#A8ADB5] hover:text-[#C7F36B] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7F36B]" />
              <span>DIRECT DISPATCH</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar of Hero */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="pt-6 border-t border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#A8ADB5]">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#C7F36B]" />
              <span className="font-tech uppercase tracking-wider text-[11px]">
                ALL INDIA LOCATION QUOTES
              </span>
            </div>
            <span className="text-neutral-700 hidden sm:inline">&middot;</span>
            <span className="text-[11px] text-[#A8ADB5] hidden sm:inline">
              NO ADVANCE CHARGES ON ENQUIRY
            </span>
          </div>

          {/* Interactive Scroll Down */}
          <button
            onClick={onExploreFleet}
            className="flex items-center gap-2 text-[11px] font-tech uppercase tracking-widest text-[#A8ADB5] hover:text-[#C7F36B] transition-colors"
          >
            <span>SCROLL TO DISCOVER</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C7F36B] animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};
