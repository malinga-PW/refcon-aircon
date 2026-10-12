import React, { useState, useEffect } from 'react';
import { Phone, Calendar, LayoutDashboard, Menu, X, Clock } from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onOpenBooking }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'shop', label: 'AC Store', badge: 'Smart Sizing' },
    { id: 'about', label: 'About Us' },
    { id: 'contact', label: 'Contact & Hubs' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      
      {/* 🚀 Top Announcement Banner with Admin Access */}
      <div 
        className={`bg-slate-950 text-white text-[11px] font-semibold transition-all duration-300 ease-in-out ${
          scrolled 
            ? 'h-0 max-h-0 opacity-0 overflow-hidden py-0 border-0 pointer-events-none' 
            : 'h-auto max-h-12 opacity-100 py-1.5 border-b border-slate-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="flex items-center space-x-2 truncate">
            <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping shrink-0" />
            <span className="text-slate-400">Colombo Emergency AC Dispatch:</span>
            <span className="text-sky-300 font-bold truncate">Under 35-min response in Colombo 1-15 & Suburbs</span>
          </div>

          <div className="flex items-center space-x-4 shrink-0">
            <span className="hidden md:flex items-center gap-1 text-[11px] text-slate-400">
              <Clock className="w-3 h-3 text-sky-400" /> Mon - Sat: 8:30 AM - 7:00 PM
            </span>

            <a href="tel:+94704702040" className="text-white hover:text-sky-300 font-bold flex items-center gap-1 text-[11px]">
              <Phone className="w-3 h-3 text-emerald-400" /> 070 470 2040
            </a>

            {/* Moved Admin button to Top Bar */}
            <button
              onClick={() => {
                setActiveTab('admin');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`px-2.5 py-0.5 rounded-lg border transition-all text-[10px] font-black uppercase tracking-wider flex items-center gap-1 ${
                activeTab === 'admin'
                  ? 'bg-sky-500 text-white border-sky-400'
                  : 'bg-slate-900 border-slate-700 text-slate-300 hover:text-white hover:border-slate-500'
              }`}
            >
              <LayoutDashboard className="w-3 h-3 text-sky-400" />
              <span>Admin Portal</span>
            </button>
          </div>
        </div>
      </div>

      {/* 🌟 Main Navigation Bar - Super Clean & Spacious (No Top Border) */}
      <nav className="border-b border-slate-200/90 bg-white/95 backdrop-blur-xl shadow-sm transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            
            {/* Left: Official Circular Logo & Brand */}
            <div 
              className="flex items-center space-x-3 cursor-pointer select-none group shrink-0"
              onClick={() => { setActiveTab('home'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            >
              <img
                src="/assets/refcon-official-logo.png"
                alt="Refcon Air Condition Official Logo"
                className="w-11 h-11 object-contain shrink-0 group-hover:scale-105 transition-transform drop-shadow-xs"
              />
              <div className="leading-tight">
                <div className="flex items-center space-x-2">
                  <span className="text-2xl font-black tracking-tight font-heading">
                    <span className="text-[#DC2626]">REF</span>
                    <span className="text-[#1D4ED8]">CON</span>
                    <span className="text-sky-500">.</span>
                  </span>
                  <span className="text-[9px] uppercase font-black tracking-widest px-2 py-0.5 rounded-full bg-sky-100 text-sky-800 border border-sky-300">
                    SINCE 1989
                  </span>
                </div>
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                  Air Condition (Pvt) Ltd
                </p>
              </div>
            </div>

            {/* Center: Navigation Links */}
            <div className="hidden lg:flex items-center space-x-2 xl:space-x-4 text-sm font-bold text-slate-600">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`px-3.5 py-2 rounded-xl transition-all whitespace-nowrap flex items-center gap-1.5 ${
                    activeTab === item.id
                      ? 'text-sky-600 font-extrabold bg-sky-50'
                      : 'hover:text-sky-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1.5 py-0.2 bg-emerald-100 text-emerald-800 rounded-full font-black">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </div>

            {/* Right: ONLY Book Service CTA (Clean, Non-Cluttered) */}
            <div className="hidden md:flex items-center space-x-3 shrink-0">
              <button
                onClick={onOpenBooking}
                className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-sky-500/25 transition-all hover:scale-105 active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service</span>
              </button>
            </div>

            {/* Mobile Menu Trigger */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-xl bg-slate-100 border border-slate-300 text-slate-700"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-slate-200 px-6 py-5 space-y-3 shadow-xl">
            <div className="flex flex-col space-y-1 text-sm font-bold text-slate-700">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setActiveTab(item.id);
                    setMobileMenuOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`py-2 px-3 rounded-xl text-left flex items-center justify-between ${
                    activeTab === item.id ? 'bg-sky-50 text-sky-600 font-extrabold' : 'hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}

              <button
                onClick={() => {
                  setActiveTab('admin');
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="py-2.5 px-3 rounded-xl text-left flex items-center gap-2 bg-slate-900 text-white font-bold mt-2"
              >
                <LayoutDashboard className="w-4 h-4 text-sky-400" />
                <span>Operations Admin Panel</span>
              </button>
            </div>

            <div className="pt-3 border-t border-slate-200 flex flex-col space-y-2">
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Service Online</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
