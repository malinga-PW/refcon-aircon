import React, { useState } from 'react';
import { Wrench, Sparkles, Wind, Gauge, Cpu, Building2, Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export default function ServicesSection({ onBookService, isStandalonePage = false, hideHeader = false }) {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      id: 'chemical',
      title: 'Deep Chemical Master Wash',
      tag: 'Best for 3-6 Month Intervals',
      desc: 'Our flagship restorative service. We safely dismantle the indoor casing and blower wheel, applying specialized non-corrosive chemical foam to eradicate stubborn mold, dust mats, and bacterial colonies from deep inside the evaporator coils.',
      features: [
        'High-pressure chemical coil foaming & soak',
        'Blower fan wheel degreasing & balancing',
        'Condensate drain line vacuum & anti-clog flush',
        'Outdoor condenser heat dissipation wash',
        'Current draw (Amperes) & gas pressure PSI audit',
        '30-Day Zero-Leakage & Cooling Guarantee'
      ],
      price: 'Rs. 7,500',
      action: 'chemical_wash'
    },
    {
      id: 'diagnostics',
      title: 'Precision Inverter PCB & Component Repairs',
      tag: 'Certified Electronics Tech',
      desc: 'Got error codes, communication faults, or sudden trip switches? Our factory-trained electronic engineers diagnose complex inverter PCBs, power surge modules, sensors, and electronic expansion valves without costly whole-board replacements.',
      features: [
        'Digital oscilloscope & multimeter signal diagnostics',
        'Inverter IPM power module & diode bridge repairs',
        'Capacitor & compressor overload relay replacement',
        'Blower DC motor & swing stepper motor repairs',
        'Original brand spare components with warranty'
      ],
      price: 'Inspection from Rs. 2,500',
      action: 'repair_breakdown'
    },
    {
      id: 'gas',
      title: 'Refrigerant Leak Detection & Gas Charging',
      tag: '100% Virgin Refrigerants',
      desc: 'Never let anyone just "top-up" your gas without checking for leaks. We perform nitrogen pressure leak tests, repair flare joints, pull a deep vacuum with two-stage vacuum pumps, and charge certified virgin R32 or R410A by precise weight.',
      features: [
        'Nitrogen pressure hold test to pinpoint microscopic leaks',
        'Precision copper flare reaming and brass nut renewal',
        'Two-stage deep vacuum evacuation below 500 microns',
        'Digital scale charging (Virgin DuPont / Daikin R32 & R410A)',
        'Sub-cooling and superheat thermal testing'
      ],
      price: 'From Rs. 4,500',
      action: 'gas_refill'
    },
    {
      id: 'commercial',
      title: 'Commercial VRV / VRF & Cassette Engineering',
      tag: 'Offices & Showrooms',
      desc: 'Heavy-duty climate control engineering for Colombo corporate offices, retail showrooms, restaurants, and luxury residences. Complete management of multi-split systems, ducted units, and VRV/VRF central plants.',
      features: [
        'Cassette ceiling unit deep chemical jet washing',
        'Central ducted airflow balancing & filter replacements',
        'VRV/VRF branch controller & master compressor maintenance',
        'Emergency breakdown 2-hour priority corporate SLA',
        'Customized monthly & quarterly corporate contracts'
      ],
      price: 'Custom Corporate Quote',
      action: 'commercial'
    }
  ];

  return (
    <section 
      id="services" 
      className={`${isStandalonePage ? (hideHeader ? 'py-14 bg-[#F8FAFC]' : 'pt-40 lg:pt-44 pb-24 bg-[#F8FAFC]') : 'py-24 bg-white'} relative overflow-hidden border-b border-slate-200`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        {!hideHeader && (
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold">
              <Wrench className="w-3.5 h-3.5" />
              <span>ENGINEERING EXCELLENCE & WORKMANSHIP</span>
            </div>
            {isStandalonePage ? (
              <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
                Specialized Air Conditioning Solutions
              </h1>
            ) : (
              <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight font-heading">
                Specialized Air Conditioning Solutions
              </h2>
            )}
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              From residential split inverter units to multi-zone commercial VRF cooling plants, Refcon delivers manufacturer-grade precision across Colombo.
            </p>
          </div>
        )}

        {/* Interactive Layout with Technician Image */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left Column: Visual Technician Showcase */}
          <div className="lg:col-span-5 relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100 group">
              
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="/assets/technician-service.jpg"
                  alt="Refcon Certified Air Condition Technician Colombo"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
              </div>

              {/* Float Overlay Details */}
              <div className="absolute bottom-6 left-6 right-6 glass-panel-light p-5 rounded-2xl border border-white/80 shadow-lg space-y-2 bg-white/95">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-700 flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-sky-600" />
                    Verified Refcon Techs
                  </span>
                  <span className="text-[10px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded-full font-bold">
                    Uniformed & Insured
                  </span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Equipped with digital manifold gauges, pressure washers, non-acidic chemical foam, and floor protection sheeting for every job.
                </p>
              </div>

            </div>
          </div>

          {/* Right Column: Service Tabs & Deep Content */}
          <div className="lg:col-span-7 space-y-4 order-1 lg:order-2">
            
            {/* Service Selection Tabs */}
            <div className="grid grid-cols-2 gap-2 p-1.5 bg-slate-100 rounded-2xl border border-slate-200">
              {services.map((s, idx) => (
                <button
                  key={s.id}
                  onClick={() => setActiveTab(idx)}
                  className={`py-3 px-4 rounded-xl text-left transition-all text-xs font-bold ${
                    activeTab === idx
                      ? 'bg-white text-sky-700 shadow-sm border border-slate-200'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/50'
                  }`}
                >
                  <div className="truncate">{s.title}</div>
                  <div className="text-[10px] text-slate-400 font-normal truncate mt-0.5">{s.tag}</div>
                </button>
              ))}
            </div>

            {/* Active Service Deep Dive Card */}
            <div className="glass-card-light p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 font-heading">
                    {services[activeTab].title}
                  </h3>
                  <span className="text-xs font-bold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                    {services[activeTab].tag}
                  </span>
                </div>
                <div className="text-right">
                  <div className="text-[11px] text-slate-400 uppercase font-bold">Standard Price</div>
                  <div className="text-xl font-black text-slate-900 font-heading">
                    {services[activeTab].price}
                  </div>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {services[activeTab].desc}
              </p>

              {/* Feature Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {services[activeTab].features.map((f, i) => (
                  <div key={i} className="flex items-start space-x-2 text-xs text-slate-700">
                    <Check className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Same-Day service slots available in Colombo</span>
                <button
                  type="button"
                  onClick={() => onBookService({ service: services[activeTab].action, title: services[activeTab].title })}
                  className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center space-x-1.5 shadow-md shadow-sky-500/25 transition-all hover:scale-105"
                >
                  <span>Schedule This Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
