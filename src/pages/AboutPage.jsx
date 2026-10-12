import React from 'react';
import { ShieldCheck, Award, Users, History, Wrench, CheckCircle2, Phone, MapPin } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function AboutPage({ onOpenBooking, onNavigateHome }) {
  return (
    <div className="bg-[#F8FAFC]">
      {/* 🌟 Top Banner with Breadcrumb & Engineering Photo */}
      <PageBanner
        badge="OVER 35 YEARS OF ENGINEERING HERITAGE"
        badgeIcon={History}
        title="About Refcon Air Condition (Pvt) Ltd"
        subtitle="Established in 1989, Refcon has grown from a specialized refrigeration workshop in Colombo 06 into one of Western Province's most trusted HVAC engineering and climate control partners."
        bgImage="/assets/banner-about.jpg"
        breadcrumbCurrent="About Us"
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        {/* Story Grid with Official Logo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-white p-6 text-center space-y-6">
              <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-sky-500/20 shadow-lg p-2 bg-white flex items-center justify-center">
                <img
                  src="/assets/refcon-official-logo.png"
                  alt="Refcon Official Emblem Since 1989"
                  className="w-full h-full object-contain"
                />
              </div>

              <div>
                <span className="text-xs font-extrabold uppercase tracking-widest text-sky-600">
                  Government Registered • PVT LTD
                </span>
                <h3 className="text-xl font-black text-slate-900 font-heading mt-1">
                  Refcon Air Condition (Pvt) Ltd
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Registered Office: No. 645, Havelock Road, Colombo 06, Sri Lanka
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2 border-t border-slate-100 pt-4 text-center">
                <div>
                  <div className="text-xl font-black text-slate-900">1989</div>
                  <div className="text-[10px] text-slate-500 font-bold">Founded</div>
                </div>
                <div className="border-x border-slate-200">
                  <div className="text-xl font-black text-sky-600">15K+</div>
                  <div className="text-[10px] text-slate-500 font-bold">Satisfied Clients</div>
                </div>
                <div>
                  <div className="text-xl font-black text-emerald-600">100%</div>
                  <div className="text-[10px] text-slate-500 font-bold">Genuine Gas</div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 font-heading">
              Engineering Precision Without Shortcuts
            </h2>

            <p className="text-slate-700 text-sm leading-relaxed">
              In Sri Lanka's humid coastal climate, an air conditioner is not a luxury — it is essential for health, productivity, and sleep quality. Unfortunately, many service providers take shortcuts: washing units with acidic chemicals that corrode aluminium fins, or filling impure mixed gases that destroy inverter compressors.
            </p>

            <p className="text-slate-700 text-sm leading-relaxed">
              At <strong>Refcon</strong>, our philosophy has remained unchanged since 1989: <strong>Zero shortcuts</strong>. We use pH-neutral biodegradable chemical foams, pull deep vacuums with digital micron gauges, and employ factory-trained technicians who treat your home and office with absolute care.
            </p>

            {/* Core Values */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                { title: 'Certified Technical Fleet', desc: 'NAITA & City & Guilds qualified HVAC engineers.' },
                { title: '100% Virgin Refrigerants', desc: 'Pure Daikin/DuPont R32 & R410A cylinders only.' },
                { title: '30-Day Service Guarantee', desc: 'If water leaks recur within 30 days, we fix it free.' },
                { title: 'Transparent Pricing', desc: 'No hidden call-out charges or unexpected parts fees.' }
              ].map((val, i) => (
                <div key={i} className="p-4 rounded-2xl bg-white border border-slate-200 shadow-xs space-y-1">
                  <div className="flex items-center space-x-2 text-sky-700 font-bold text-xs">
                    <CheckCircle2 className="w-4 h-4 text-sky-600" />
                    <span>{val.title}</span>
                  </div>
                  <p className="text-[11px] text-slate-500">{val.desc}</p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="px-6 py-3 rounded-2xl bg-sky-600 hover:bg-sky-700 text-white font-black text-xs uppercase tracking-wider shadow-lg shadow-sky-600/20"
              >
                Experience the Refcon Difference
              </button>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
