import React from 'react';
import { Check, Star, Shield, Zap, Sparkles, ArrowRight } from 'lucide-react';

export default function PricingPackages({ onSelectPlan }) {
  const plans = [
    {
      name: 'Essential Routine Service',
      tag: 'Regular Checkup',
      price: '4,500',
      period: 'per unit',
      desc: 'Ideal for ACs cleaned within the last 3 months that only need a light dust clean and inspection.',
      features: [
        'Air intake filter removal & wash',
        'Front evaporator coil surface rinse',
        'Basic drain line gravity check',
        'Remote control & thermostat sensor test',
        'Outdoor unit fan blow-out',
        'Standard 7-Day workmanship warranty'
      ],
      popular: false,
      btnText: 'Book General Clean',
      actionKey: 'general_service'
    },
    {
      name: 'Deep Chemical Master Wash',
      tag: 'Most Recommended ⭐',
      price: '7,500',
      period: 'per unit',
      desc: 'Complete restoration. Eradicates foul odors, heavy mold buildup, and restores 100% factory cooling airflow.',
      features: [
        'Full casing & blower fan wheel disassembly',
        'Non-acidic biodegradable chemical foam soak',
        'High-pressure rotary wash of evaporator fins',
        'Drain pan deep scrub & vacuum line purge',
        'Outdoor condenser chemical wash & fin straightening',
        'Current draw (Amperes) & gas pressure test',
        'Full 30-Day Zero-Water-Leak Guarantee'
      ],
      popular: true,
      btnText: 'Book Master Wash',
      actionKey: 'chemical_wash'
    },
    {
      name: 'Annual AMC Care Plan',
      tag: 'Full Year Peace of Mind',
      price: '18,000',
      period: 'per unit / year',
      desc: 'Automated 3 services per year (every 4 months) with priority emergency breakdown response.',
      features: [
        '3 Comprehensive Services per year (1 Chemical + 2 General)',
        'Automated SMS / WhatsApp service scheduling',
        'Emergency breakdown response within 4 hours',
        'Complimentary refrigerant top-up (up to 15 PSI)',
        '15% discount on all spare parts and PCB repairs',
        'Digital maintenance report archive'
      ],
      popular: false,
      btnText: 'Subscribe to AMC',
      actionKey: 'amc_plan'
    }
  ];

  return (
    <section id="packages" className="py-24 relative bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold">
            <Shield className="w-3.5 h-3.5" />
            <span>TRANSPARENT & HONEST PRICING</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Clear Pricing. Zero Hidden Fees.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Choose between one-time restorative cleaning or our popular Annual Maintenance Contract (AMC) to keep your cooling crisp and electric bills low all year round.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {plans.map((p, idx) => (
            <div
              key={idx}
              className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 ${
                p.popular
                  ? 'bg-gradient-to-b from-sky-50/80 via-white to-blue-50/50 border-2 border-sky-500 shadow-xl shadow-sky-500/10 scale-105 z-10'
                  : 'glass-card-light border border-slate-200 hover:border-slate-300 bg-white shadow-sm'
              }`}
            >
              {p.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-black uppercase tracking-wider shadow-md">
                  Most Popular Choice
                </div>
              )}

              <div>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-lg font-black text-slate-900 font-heading">{p.name}</h3>
                    <span className="text-xs font-bold text-sky-600">{p.tag}</span>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                  {p.desc}
                </p>

                {/* Price Display */}
                <div className="mb-6 pb-6 border-b border-slate-100">
                  <div className="flex items-baseline gap-1">
                    <span className="text-xs font-bold text-slate-500">Rs.</span>
                    <span className="text-4xl font-black text-slate-900 font-heading tracking-tight">{p.price}</span>
                    <span className="text-xs text-slate-500 font-medium">/{p.period}</span>
                  </div>
                </div>

                {/* Feature List */}
                <div className="space-y-3 mb-8">
                  {p.features.map((f, i) => (
                    <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-700">
                      <Check className={`w-4 h-4 shrink-0 mt-0.5 ${p.popular ? 'text-sky-600 font-bold' : 'text-slate-500'}`} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                type="button"
                onClick={() => onSelectPlan({ plan: p.actionKey, title: p.name, price: p.price })}
                className={`w-full py-3.5 rounded-xl font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 transition-all ${
                  p.popular
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white shadow-md shadow-sky-500/25'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200'
                }`}
              >
                <span>{p.btnText}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
