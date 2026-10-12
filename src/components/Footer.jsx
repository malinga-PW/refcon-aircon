import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart, Sparkles } from 'lucide-react';

export default function Footer({ onOpenBooking, onOpenAiChat }) {
  return (
    <footer id="about" className="bg-slate-900 text-slate-300 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          
          {/* Brand Info with Official Logo */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center space-x-3.5">
              <img
                src="/assets/refcon-official-logo.png"
                alt="Refcon Official Logo"
                className="w-11 h-11 object-contain shrink-0"
              />
              <div>
                <span className="text-xl font-black font-heading tracking-wide">
                  <span className="text-[#EF4444]">REF</span>
                  <span className="text-[#38BDF8]">CON</span>
                  <span className="text-sky-400">.</span>
                </span>
                <p className="text-[10px] text-sky-400 font-bold uppercase tracking-widest">
                  AIR CONDITION (PVT) LTD • SINCE 1989
                </p>
              </div>
            </div>
            
            <p className="text-slate-400 leading-relaxed pr-4">
              Premier HVAC & Air Conditioning engineering company based in Colombo 06, Sri Lanka. Delivering certified residential chemical washes, precision inverter PCB electronics repairs, and commercial multi-zone cooling systems for over 35 years.
            </p>

            <div className="flex items-center space-x-3 pt-2">
              <a
                href="https://web.facebook.com/profile.php?id=61569138687202"
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:text-sky-400 hover:border-sky-500/40 transition-all"
                title="Refcon Air Condition Facebook Page"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <button
                onClick={onOpenAiChat}
                className="px-3 py-1.5 rounded-xl bg-sky-950 border border-sky-800 text-sky-300 text-[11px] font-semibold flex items-center gap-1.5"
              >
                <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                <span>AI Cooling Assistant</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Services
            </h4>
            <ul className="space-y-2">
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Chemical Foam Wash</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Inverter Diagnostics</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">R32 / R410A Gas Refill</a></li>
              <li><a href="#services" className="hover:text-sky-400 transition-colors">Commercial VRV/VRF</a></li>
              <li><a href="#packages" className="hover:text-sky-400 transition-colors">Annual AMC Contract</a></li>
            </ul>
          </div>

          {/* Sizing & Tools */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Smart Tools
            </h4>
            <ul className="space-y-2">
              <li><a href="#calculator" className="hover:text-sky-400 transition-colors">BTU Sizing Tool</a></li>
              <li><a href="#calculator" className="hover:text-sky-400 transition-colors">CEB Bill Estimator</a></li>
              <li><a href="#coverage" className="hover:text-sky-400 transition-colors">Colombo Coverage Map</a></li>
              <li><button onClick={onOpenBooking} className="text-sky-400 hover:underline">Instant Booking</button></li>
            </ul>
          </div>

          {/* Contact Details from Google Maps & FB */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider font-heading">
              Contact & Locations
            </h4>

            <div className="space-y-2.5">
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>No. 645, Havelock Road (Pamankada Road), Colombo 06 & W. A. Silva Mawatha, Wellawatte</span>
              </div>
              <div className="flex items-start space-x-2.5">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>Sri Sunandarama Road, Kalubowila, Dehiwala</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span className="text-white font-bold">070 470 2040 / 077 806 4308</span>
              </div>
              <div className="flex items-center space-x-2.5">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Landline: +94 11 236 5046</span>
              </div>
            </div>

            <div className="pt-2">
              <a
                href="https://maps.app.goo.gl/xfhDC4eTn1tGYDds7"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center space-x-1.5 text-[11px] font-bold text-sky-400 hover:underline"
              >
                <span>Open in Google Maps</span>
                <span>→</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Signature */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-400">
          <div>
            © 1989 - {new Date().getFullYear()} Refcon Air Condition (Pvt) Ltd. All Rights Reserved.
          </div>

          <div className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-slate-800 border border-slate-700">
            <span>Architected & Powered by</span>
            <span className="text-sky-400 font-bold tracking-wide">PixelWave AI Solutions</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
