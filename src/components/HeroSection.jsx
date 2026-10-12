import React, { useState } from 'react';
import { ShieldCheck, Zap, Sparkles, CheckCircle2, ChevronRight, Wind } from 'lucide-react';

export default function HeroSection({ onOpenBooking, onOpenAiChat }) {
  const [quickService, setQuickService] = useState('chemical_wash');
  const [quickPhone, setQuickPhone] = useState('');
  const [quickLocation, setQuickLocation] = useState('Colombo 06');

  const handleQuickSubmit = (e) => {
    e.preventDefault();
    onOpenBooking({ service: quickService, phone: quickPhone, location: quickLocation });
  };

  const brands = [
    { name: 'Panasonic', tag: 'Aero Inverter', logo: 'PANASONIC' },
    { name: 'LG Dual Inverter', tag: 'Smart ThinQ', logo: 'LG' },
    { name: 'Daikin', tag: 'Japanese Quality', logo: 'DAIKIN' },
    { name: 'Gree', tag: 'Fairy Series', logo: 'GREE' },
    { name: 'Mitsubishi Electric', tag: 'Heavy Duty', logo: 'MITSUBISHI' },
    { name: 'Singer Inverter', tag: 'Sri Lanka Eco', logo: 'SINGER' },
    { name: 'Abans AC', tag: 'Certified Tech', logo: 'ABANS' },
    { name: 'TCL Smart AC', tag: 'Golden Fin', logo: 'TCL' },
    { name: 'Haier', tag: 'Triple Inverter', logo: 'HAIER' },
    { name: 'Carrier', tag: 'Climate Pro', logo: 'CARRIER' },
    { name: 'Samsung', tag: 'WindFree™ Inverter', logo: 'SAMSUNG' }
  ];

  return (
    <section className="relative min-h-screen lg:h-screen w-full flex flex-col justify-between overflow-hidden border-b border-slate-200 pt-28 lg:pt-32">
      
      {/* 🖼️ Crisp Full-Screen Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero-ac.jpg"
          alt="Refcon Luxury Air Conditioning Background"
          className="w-full h-full object-cover object-center filter brightness-[0.98] contrast-[1.05]"
        />
        {/* Soft Left Vignette Gradient - Keeps Background AC & Sunlight completely clear and bright */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-slate-950/45 to-transparent lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 via-transparent to-transparent" />
      </div>

      {/* Main Content Area - Centered / Balanced without Right Card */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full my-auto py-6">
        <div className="max-w-2xl space-y-5">
          
          {/* Badge */}
          <div className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-white/95 border border-sky-300 text-sky-900 text-xs font-black backdrop-blur-md shadow-md">
            <span className="flex h-2.5 w-2.5 rounded-full bg-sky-500 animate-pulse" />
            <span>COLOMBO'S TRUSTED COOLING SPECIALIST • SINCE 1989</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white font-heading drop-shadow-md">
            Intelligent Cooling & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-blue-400">
              Precision Climate Care
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-slate-100 max-w-xl font-medium leading-relaxed drop-shadow-sm">
            Certified Sri Lankan HVAC engineering for homes, offices, and commercial establishments. 
            Deep chemical foam washes, precision inverter PCB electronics diagnostics, and 24/7 breakdown assistance across Colombo.
          </p>

          {/* Feature Highlights */}
          <div className="flex flex-wrap gap-2.5 pt-1">
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 bg-white/95 px-3 py-2 rounded-xl border border-white shadow-sm backdrop-blur-md">
              <ShieldCheck className="w-4 h-4 text-sky-600 shrink-0" />
              <span>30-Day Zero Leak Warranty</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 bg-white/95 px-3 py-2 rounded-xl border border-white shadow-sm backdrop-blur-md">
              <Wind className="w-4 h-4 text-sky-600 shrink-0" />
              <span>Non-Acidic Chemical Foam</span>
            </div>
            <div className="flex items-center space-x-2 text-xs font-bold text-slate-900 bg-white/95 px-3 py-2 rounded-xl border border-white shadow-sm backdrop-blur-md">
              <Zap className="w-4 h-4 text-sky-600 shrink-0" />
              <span>100% Genuine R32 / R410A</span>
            </div>
          </div>

          {/* Quick Fast-Booking Bar */}
          <form onSubmit={handleQuickSubmit} className="glass-panel-light p-3 rounded-2xl border border-sky-300 shadow-2xl space-y-2 sm:space-y-0 sm:flex sm:items-center sm:gap-2 bg-white/95 max-w-xl">
            <div className="flex-1">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-600 mb-0.5 px-1">Select Service</label>
              <select 
                value={quickService}
                onChange={(e) => setQuickService(e.target.value)}
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 text-xs font-bold rounded-xl px-3 py-2 focus:outline-none focus:border-sky-500"
              >
                <option value="chemical_wash">Full Chemical Foam Wash (Rs. 7,500)</option>
                <option value="general_service">General Routine Service (Rs. 4,500)</option>
                <option value="repair_breakdown">Emergency Repair / Gas Top-up</option>
                <option value="installation">New AC Installation / Relocation</option>
                <option value="commercial">Commercial VRV/VRF Sizing & Fleet</option>
              </select>
            </div>

            <div className="w-full sm:w-40">
              <label className="block text-[10px] font-extrabold uppercase tracking-wider text-slate-600 mb-0.5 px-1">Mobile / WhatsApp</label>
              <input 
                type="tel"
                placeholder="07X XXX XXXX"
                value={quickPhone}
                onChange={(e) => setQuickPhone(e.target.value)}
                required
                className="w-full bg-slate-50 border border-slate-300 text-slate-900 placeholder-slate-400 text-xs font-bold rounded-xl px-3 py-2 focus:outline-none focus:border-sky-500"
              />
            </div>

            <div className="sm:self-end">
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black text-xs tracking-wider uppercase flex items-center justify-center space-x-1.5 shadow-md shadow-sky-500/25 transition-all shrink-0 hover:scale-[1.02]"
              >
                <span>Book Now</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-3 text-xs text-white pt-1">
            <span className="flex items-center gap-1.5 text-emerald-300 font-extrabold bg-slate-950/60 px-3 py-1 rounded-full backdrop-blur-md">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Instant WhatsApp Confirmation
            </span>
            <span>•</span>
            <button 
              type="button"
              onClick={onOpenAiChat}
              className="text-cyan-300 hover:text-white font-extrabold flex items-center gap-1 underline underline-offset-4"
            >
              <Sparkles className="w-3.5 h-3.5" /> Ask Refcon AI Assistant
            </button>
          </div>

        </div>
      </div>

      {/* 🔄 Infinite Edge-to-Edge Brand Marquee - Moved to Bottom Edge of Window */}
      <div className="w-full relative z-20 overflow-hidden bg-white/95 backdrop-blur-md py-4 border-t border-slate-200/90 shadow-sm mt-auto">
        <p className="text-center text-[11px] uppercase tracking-widest text-slate-600 font-extrabold mb-2.5 px-4">
          Authorized Service & Engineering Expertise for Sri Lanka's Leading Brands
        </p>

        {/* Marquee Track Container with Edge Gradient Fades */}
        <div className="relative w-full overflow-hidden">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          {/* Marquee Content - Continuous Infinite Loop */}
          <div className="animate-marquee flex items-center space-x-6">
            {[...brands, ...brands].map((b, idx) => (
              <div 
                key={idx}
                className="flex items-center space-x-3 px-4 py-2 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-sky-400 hover:shadow-sm transition-all shrink-0 cursor-pointer group"
              >
                <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center text-[9px] font-black tracking-tighter">
                  {b.logo.slice(0, 3)}
                </div>
                <div>
                  <div className="text-xs font-black text-slate-900 group-hover:text-sky-600 transition-colors">
                    {b.name}
                  </div>
                  <div className="text-[10px] text-slate-500 font-semibold">
                    {b.tag}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
