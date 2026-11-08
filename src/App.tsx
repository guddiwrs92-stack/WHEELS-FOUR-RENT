import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IndiaBookingSection } from './components/IndiaBookingSection';
import { EditorialFleet } from './components/EditorialFleet';
import { EditorialServices } from './components/EditorialServices';
import { WhyWheelsFourRent } from './components/WhyWheelsFourRent';
import { AboutBrand } from './components/AboutBrand';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileActionBar } from './components/MobileActionBar';
import { BookingModal } from './components/BookingModal';
import { Vehicle, RentalPurpose } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedCategoryForModal, setSelectedCategoryForModal] =
    useState<string>('Luxury');
  const [selectedVehicleForModal, setSelectedVehicleForModal] =
    useState<string>('');

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenGeneralQuote = () => {
    setSelectedCategoryForModal('Luxury');
    setSelectedVehicleForModal('');
    setIsQuoteModalOpen(true);
  };

  const handleRequestQuoteForVehicle = (vehicle: Vehicle) => {
    // Scroll directly to the in-page India-wide booking engine with pre-filled category
    setSelectedCategoryForModal(vehicle.category);
    setSelectedVehicleForModal(vehicle.name);
    scrollToSection('booking');
  };

  const handleSelectService = (purpose: RentalPurpose, defaultCategory: string) => {
    setSelectedCategoryForModal(defaultCategory);
    setSelectedVehicleForModal(`${purpose} Package`);
    scrollToSection('booking');
  };

  return (
    <div className="min-h-screen bg-[#090A0C] text-[#F4F2ED] flex flex-col font-sans selection:bg-[#C7F36B] selection:text-[#090A0C]">
      {/* Sticky Top Navigation Bar */}
      <Navbar onCheckAvailabilityClick={handleOpenGeneralQuote} />

      {/* Main Content Sections */}
      <main className="flex-1 pb-16 sm:pb-0">
        {/* 1. Cinematic Hero Section */}
        <Hero
          onExploreFleet={() => scrollToSection('fleet')}
          onCheckAvailability={() => scrollToSection('booking')}
        />

        {/* 2. India-Wide Booking Experience (All 28 States & 8 UTs) */}
        <IndiaBookingSection
          initialVehicleCategory={selectedCategoryForModal}
          initialVehicleName={selectedVehicleForModal}
        />

        {/* 3. The Fleet – Editorial Automotive Showcase */}
        <EditorialFleet
          onRequestQuoteForVehicle={handleRequestQuoteForVehicle}
        />

        {/* 4. Services – Visual Storytelling */}
        <EditorialServices onSelectService={handleSelectService} />

        {/* 5. Why Wheels Four Rent – Five Numbered Pillars */}
        <WhyWheelsFourRent
          onCheckAvailability={() => scrollToSection('booking')}
        />

        {/* 6. About the Brand – Manifesto & Hyderabad Heritage */}
        <AboutBrand
          onCheckAvailability={() => scrollToSection('booking')}
        />

        {/* 7. Contact Experience – Ready When You Are */}
        <ContactSection onGetQuoteClick={handleOpenGeneralQuote} />
      </main>

      {/* Sophisticated Editorial Footer */}
      <Footer />

      {/* Fixed Mobile Action Bar (Call, WhatsApp, Get Quote) */}
      <MobileActionBar onQuoteClick={handleOpenGeneralQuote} />

      {/* India-Wide Quote Modal */}
      <BookingModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        preselectedCategory={selectedCategoryForModal}
        preselectedVehicleName={selectedVehicleForModal}
      />
    </div>
  );
}
