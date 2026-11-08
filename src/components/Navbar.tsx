import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Zap } from 'lucide-react';
import { PRIMARY_PHONE, PRIMARY_PHONE_DISPLAY } from '../utils/whatsapp';

interface NavbarProps {
  onCheckAvailabilityClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onCheckAvailabilityClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'AVAILABILITY', href: '#booking' },
    { label: 'THE FLEET', href: '#fleet' },
    { label: 'SERVICES', href: '#services' },
    { label: 'WHY US', href: '#why-us' },
    { label: 'ABOUT', href: '#about' },
    { label: 'CONTACT', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#090A0C]/95 backdrop-blur-md border-b border-hairline py-3.5 shadow-2xl'
          : 'bg-gradient-to-b from-[#090A0C]/90 via-[#090A0C]/40 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark Zone */}
          <a
            href="#home"
            className="group flex items-center gap-3 text-[#F4F2ED] hover:text-[#C7F36B] transition-colors whitespace-nowrap shrink-0"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('#home');
            }}
          >
            <div className="w-8 h-8 rounded-none bg-[#C7F36B] flex items-center justify-center text-[#090A0C] group-hover:scale-105 transition-transform">
              <Zap className="w-4 h-4 fill-current" />
            </div>

            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight text-[#F4F2ED] uppercase">
                WHEELS <span className="text-[#C7F36B]">FOUR</span> RENT
              </span>
            </div>
          </a>

          {/* Navigation Links (Editorial Monospace/Tech Style) */}
          <nav className="hidden lg:flex items-center gap-7 text-xs font-tech uppercase tracking-[0.18em] text-[#A8ADB5]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="hover:text-[#C7F36B] transition-colors py-1 relative whitespace-nowrap shrink-0 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C7F36B] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Primary Action Zone */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="flex items-center gap-2 px-4 py-2.5 text-xs font-tech uppercase tracking-wider text-[#A8ADB5] hover:text-[#F4F2ED] bg-[#15171B] hover:bg-[#1F2228] border border-hairline transition-colors whitespace-nowrap"
            >
              <Phone className="w-3.5 h-3.5 text-[#C7F36B]" />
              <span>{PRIMARY_PHONE_DISPLAY}</span>
            </a>

            <button
              onClick={onCheckAvailabilityClick}
              className="px-6 py-2.5 text-xs font-tech font-bold uppercase tracking-[0.16em] text-[#090A0C] bg-[#C7F36B] hover:bg-[#D4F788] transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 shadow-md shadow-[#C7F36B]/20 whitespace-nowrap shrink-0"
            >
              GET A QUOTE
            </button>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onCheckAvailabilityClick}
              className="px-3 py-1.5 text-[11px] font-tech font-bold uppercase text-[#090A0C] bg-[#C7F36B] whitespace-nowrap"
            >
              QUOTE
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#A8ADB5] hover:text-[#F4F2ED] focus:outline-none bg-[#15171B] border border-hairline"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#C7F36B]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#090A0C]/98 border-b border-hairline px-4 pt-3 pb-6 mt-2 space-y-3 shadow-2xl animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="flex flex-col space-y-1 divide-y divide-white/[0.04]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="px-3 py-2.5 text-xs font-tech uppercase tracking-wider text-[#F4F2ED] hover:text-[#C7F36B] hover:bg-[#15171B]"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-hairline flex flex-col gap-2.5">
            <a
              href={`tel:${PRIMARY_PHONE}`}
              className="flex items-center justify-center gap-2 w-full py-2.5 text-xs font-tech uppercase tracking-wider text-[#F4F2ED] bg-[#15171B] border border-hairline"
            >
              <Phone className="w-4 h-4 text-[#C7F36B]" />
              <span>CALL HOTLINE: {PRIMARY_PHONE_DISPLAY}</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCheckAvailabilityClick();
              }}
              className="w-full py-3 text-xs font-tech font-bold uppercase tracking-wider text-[#090A0C] bg-[#C7F36B] hover:bg-[#D4F788] shadow-md"
            >
              CHECK AVAILABILITY &middot; GET QUOTE
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
