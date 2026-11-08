import React, { useState } from 'react';
import {
  Users,
  Gauge,
  Fuel,
  Zap,
  ArrowRight,
  Eye,
  SlidersHorizontal,
  Edit2,
  Check,
  X,
  Search
} from 'lucide-react';
import { Vehicle, VehicleCategory } from '../types';
import { INITIAL_VEHICLES } from '../data/vehicles';
import { PerspectiveTilt } from './PerspectiveTilt';
import { VehicleDetailModal } from './VehicleDetailModal';

interface EditorialFleetProps {
  onRequestQuoteForVehicle: (vehicle: Vehicle) => void;
}

export const EditorialFleet: React.FC<EditorialFleetProps> = ({
  onRequestQuoteForVehicle
}) => {
  const [vehicles, setVehicles] = useState<Vehicle[]>(INITIAL_VEHICLES);
  const [activeCategory, setActiveCategory] = useState<VehicleCategory>('All');
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  // Business Owner Quick Spec Editor
  const [editingVehicleId, setEditingVehicleId] = useState<string | null>(null);
  const [editForm, setEditForm] = useState<{
    name: string;
    seatingCapacity: number;
    transmission: 'Automatic' | 'Manual';
    fuelType: 'Petrol' | 'Diesel' | 'Electric' | 'Hybrid';
    rentalPrice: string;
  }>({
    name: '',
    seatingCapacity: 5,
    transmission: 'Automatic',
    fuelType: 'Diesel',
    rentalPrice: ''
  });

  const categories: VehicleCategory[] = [
    'All',
    'Luxury Vehicles',
    'Premium Vehicles',
    'SUVs',
    'Sedans',
    'Hatchbacks'
  ];

  const filteredVehicles = vehicles.filter((v) => {
    const matchesCat =
      activeCategory === 'All' ? true : v.category === activeCategory;
    const matchesSearch =
      searchQuery.trim() === ''
        ? true
        : v.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.fuelType.toLowerCase().includes(searchQuery.toLowerCase()) ||
          v.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  const startEdit = (car: Vehicle) => {
    setEditingVehicleId(car.id);
    setEditForm({
      name: car.name,
      seatingCapacity: car.seatingCapacity,
      transmission: car.transmission,
      fuelType: car.fuelType,
      rentalPrice: car.rentalPrice
    });
  };

  const saveEdit = (id: string) => {
    setVehicles((prev) =>
      prev.map((v) => (v.id === id ? { ...v, ...editForm } : v))
    );
    setEditingVehicleId(null);
  };

  return (
    <section id="fleet" className="py-24 lg:py-32 bg-[#090A0C] border-b border-hairline">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14 pb-8 border-b border-hairline">
          <div>
            <div className="flex items-center gap-2.5 text-xs font-tech uppercase tracking-[0.2em] text-[#C7F36B] mb-3">
              <span className="w-2 h-2 rounded-full bg-[#C7F36B]" />
              <span>AUTOMOTIVE ARCHIVE &middot; HYDERABAD BASE</span>
            </div>
            <h2 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl text-[#F4F2ED] uppercase tracking-[-0.03em] leading-none">
              THE FLEET.
            </h2>
            <p className="text-lg text-[#A8ADB5] mt-3 font-light max-w-xl">
              "Different roads. Different personalities. One perfect ride."
            </p>
          </div>

          {/* Search & Category Filter Navigation */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <div className="relative">
              <Search className="w-3.5 h-3.5 text-[#A8ADB5] absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search models, fuel, specs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full sm:w-64 bg-[#15171B] border border-hairline pl-9 pr-3.5 py-2.5 text-xs text-[#F4F2ED] placeholder:text-[#717680] focus:outline-none focus:border-[#C7F36B]"
              />
            </div>
          </div>
        </div>

        {/* Category Filters: Modern Minimalist Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-12 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs font-tech uppercase tracking-wider transition-all duration-200 whitespace-nowrap shrink-0 border ${
                  isActive
                    ? 'bg-[#C7F36B] text-[#090A0C] font-bold border-[#C7F36B] shadow-[0_0_14px_rgba(199,243,107,0.2)]'
                    : 'bg-[#15171B] text-[#A8ADB5] hover:text-[#F4F2ED] hover:bg-[#1F2228] border-hairline'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Owner Inventory Customization Bar */}
        <div className="mb-10 p-3.5 bg-[#15171B] border border-hairline flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#A8ADB5]">
          <div className="flex items-center gap-2 font-tech">
            <SlidersHorizontal className="w-3.5 h-3.5 text-[#C7F36B]" />
            <span>
              <strong className="text-[#F4F2ED]">FLEET INVENTORY SPEC:</strong> Sample entries shown. Click the pencil icon on any vehicle to adjust specs for your quote.
            </span>
          </div>
          <span className="font-tech text-[#C7F36B]">
            {filteredVehicles.length} Models Displayed
          </span>
        </div>

        {/* Editorial Vehicle Showcases (Asymmetrical Full-Width & Large Cards) */}
        {filteredVehicles.length === 0 ? (
          <div className="text-center py-24 bg-[#15171B] border border-hairline">
            <p className="text-sm font-tech text-[#A8ADB5]">No matching vehicles found.</p>
            <button
              onClick={() => {
                setActiveCategory('All');
                setSearchQuery('');
              }}
              className="mt-3 text-xs font-tech uppercase tracking-wider text-[#C7F36B] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="space-y-12">
            {filteredVehicles.map((car, idx) => {
              const isEditing = editingVehicleId === car.id;
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={car.id}
                  className="group relative bg-[#15171B] border border-hairline hover:border-hairline-light transition-all duration-300 overflow-hidden"
                >
                  <div
                    className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${
                      isEven ? '' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Large Vehicle Photography with 3D Tilt */}
                    <div
                      className={`lg:col-span-7 relative min-h-[340px] sm:min-h-[420px] bg-[#090A0C] overflow-hidden ${
                        isEven ? '' : 'lg:order-2'
                      }`}
                    >
                      <PerspectiveTilt className="w-full h-full" maxTilt={6}>
                        <img
                          src={car.image}
                          alt={`${car.name} Wheels Four Rent`}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover object-center filter brightness-95 contrast-110 group-hover:scale-105 transition-transform duration-700"
                        />
                      </PerspectiveTilt>

                      <div className="absolute inset-0 bg-gradient-to-t from-[#15171B] via-transparent to-black/30 pointer-events-none" />

                      {/* Editorial Kicker */}
                      <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                        <span className="px-3 py-1 bg-[#090A0C]/90 backdrop-blur-md text-[10px] font-tech font-bold uppercase tracking-[0.2em] text-[#C7F36B] border border-hairline">
                          {car.categoryTag || car.category}
                        </span>
                        {car.power && (
                          <span className="hidden sm:inline-block px-2.5 py-1 bg-[#15171B]/90 backdrop-blur-md text-[10px] font-tech text-[#A8ADB5] border border-hairline">
                            {car.power}
                          </span>
                        )}
                      </div>

                      {/* Rental Rate Overlay */}
                      <div className="absolute bottom-4 right-4 z-10 px-4 py-2 bg-[#090A0C]/90 backdrop-blur-md text-xs font-tech font-bold text-[#F4F2ED] border border-hairline">
                        {car.rentalPrice}
                      </div>

                      {/* Quick Edit Trigger */}
                      <button
                        onClick={() => (isEditing ? setEditingVehicleId(null) : startEdit(car))}
                        className="absolute top-4 right-4 z-10 p-2 bg-[#090A0C]/90 text-[#A8ADB5] hover:text-[#C7F36B] border border-hairline transition-colors"
                        title="Edit specifications"
                      >
                        {isEditing ? <X className="w-3.5 h-3.5" /> : <Edit2 className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    {/* Editorial Information Column */}
                    <div
                      className={`lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6 ${
                        isEven ? '' : 'lg:order-1'
                      }`}
                    >
                      {isEditing ? (
                        /* Inline Spec Editor */
                        <div className="space-y-3 bg-[#090A0C] p-4 border border-[#C7F36B]/50 text-xs">
                          <div>
                            <label className="text-[10px] font-tech text-[#A8ADB5] block mb-1">
                              Model Name
                            </label>
                            <input
                              type="text"
                              value={editForm.name}
                              onChange={(e) =>
                                setEditForm({ ...editForm, name: e.target.value })
                              }
                              className="w-full bg-[#15171B] border border-hairline px-3 py-1.5 text-[#F4F2ED]"
                            />
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <div>
                              <label className="text-[10px] font-tech text-[#A8ADB5] block mb-1">
                                Seats
                              </label>
                              <input
                                type="number"
                                value={editForm.seatingCapacity}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    seatingCapacity: Number(e.target.value)
                                  })
                                }
                                className="w-full bg-[#15171B] border border-hairline px-3 py-1.5 text-[#F4F2ED]"
                              />
                            </div>
                            <div>
                              <label className="text-[10px] font-tech text-[#A8ADB5] block mb-1">
                                Price Tag
                              </label>
                              <input
                                type="text"
                                value={editForm.rentalPrice}
                                onChange={(e) =>
                                  setEditForm({
                                    ...editForm,
                                    rentalPrice: e.target.value
                                  })
                                }
                                className="w-full bg-[#15171B] border border-hairline px-3 py-1.5 text-[#F4F2ED]"
                              />
                            </div>
                          </div>

                          <div className="flex justify-end gap-2 pt-2">
                            <button
                              type="button"
                              onClick={() => setEditingVehicleId(null)}
                              className="px-3 py-1 text-[11px] text-[#A8ADB5] hover:text-[#F4F2ED]"
                            >
                              Cancel
                            </button>
                            <button
                              type="button"
                              onClick={() => saveEdit(car.id)}
                              className="px-4 py-1 bg-[#C7F36B] text-[#090A0C] font-bold text-[11px]"
                            >
                              Save Spec
                            </button>
                          </div>
                        </div>
                      ) : (
                        <div>
                          <div className="text-[11px] font-tech uppercase tracking-[0.2em] text-[#C7F36B] mb-1">
                            0{idx + 1} &middot; {car.category}
                          </div>

                          <h3 className="font-display font-black text-3xl sm:text-4xl text-[#F4F2ED] uppercase tracking-tight leading-none group-hover:text-[#C7F36B] transition-colors">
                            {car.name}
                          </h3>

                          <p className="text-xs text-[#A8ADB5] mt-2 font-tech">
                            {car.tagline}
                          </p>

                          <p className="text-sm text-[#F4F2ED] font-light mt-4 leading-relaxed line-clamp-3">
                            {car.description}
                          </p>
                        </div>
                      )}

                      {/* Technical Specifications Bar (Zero Pills, Hairline Divider Layout) */}
                      <div className="grid grid-cols-3 gap-2 py-4 border-y border-hairline text-xs">
                        <div>
                          <span className="text-[10px] font-tech uppercase text-[#A8ADB5] block">
                            SEATING
                          </span>
                          <span className="font-tech font-bold text-[#F4F2ED] flex items-center gap-1 mt-0.5">
                            <Users className="w-3 h-3 text-[#C7F36B]" />
                            <span>{car.seatingCapacity} Passengers</span>
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-tech uppercase text-[#A8ADB5] block">
                            GEARBOX
                          </span>
                          <span className="font-tech font-bold text-[#F4F2ED] flex items-center gap-1 mt-0.5">
                            <Gauge className="w-3 h-3 text-[#C7F36B]" />
                            <span>{car.transmission}</span>
                          </span>
                        </div>

                        <div>
                          <span className="text-[10px] font-tech uppercase text-[#A8ADB5] block">
                            DRIVETRAIN
                          </span>
                          <span className="font-tech font-bold text-[#F4F2ED] flex items-center gap-1 mt-0.5">
                            <Fuel className="w-3 h-3 text-[#C7F36B]" />
                            <span>{car.fuelType}</span>
                          </span>
                        </div>
                      </div>

                      {/* Vehicle Action CTAs */}
                      <div className="flex items-center gap-3 pt-2">
                        <button
                          onClick={() => setSelectedVehicle(car)}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#090A0C] hover:bg-[#1F2228] text-xs font-tech uppercase tracking-wider text-[#F4F2ED] border border-hairline transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5 text-[#C7F36B]" />
                          <span>EXPLORE VEHICLE</span>
                        </button>

                        <button
                          onClick={() => onRequestQuoteForVehicle(car)}
                          className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3.5 bg-[#C7F36B] hover:bg-[#D4F788] text-xs font-tech font-bold uppercase tracking-wider text-[#090A0C] transition-all shadow-md shadow-[#C7F36B]/15"
                        >
                          <span>REQUEST A QUOTE</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Detail Modal */}
      <VehicleDetailModal
        vehicle={selectedVehicle}
        onClose={() => setSelectedVehicle(null)}
        onRequestQuote={(v) => {
          setSelectedVehicle(null);
          onRequestQuoteForVehicle(v);
        }}
      />
    </section>
  );
};
