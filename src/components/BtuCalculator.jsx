import React, { useState } from 'react';
import { Calculator, Zap, ThermometerSnowflake, ShieldCheck, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export default function BtuCalculator({ onBookWithPlan }) {
  const [length, setLength] = useState(14);
  const [width, setWidth] = useState(12);
  const [sunlight, setSunlight] = useState('moderate');
  const [people, setPeople] = useState(2);

  const sqft = length * width;
  let baseBtu = sqft * 65;
  if (sunlight === 'high') baseBtu *= 1.25;
  if (sunlight === 'low') baseBtu *= 0.95;
  baseBtu += (people - 1) * 600;

  let recommendedBtu = 9000;
  let tonRating = "0.75 Ton";
  let recommendedBrand = "Panasonic 9,000 BTU Aero Inverter / LG 9K";
  let nonInverterUnitsKwh = 180;
  let inverterUnitsKwh = 75;

  if (baseBtu <= 10000) {
    recommendedBtu = 9000;
    tonRating = "0.75 Ton";
    recommendedBrand = "Panasonic CS-RU9 / LG Dual Inverter 9K";
    nonInverterUnitsKwh = 160;
    inverterUnitsKwh = 68;
  } else if (baseBtu <= 15000) {
    recommendedBtu = 12000;
    tonRating = "1.0 Ton (Most Popular)";
    recommendedBrand = "LG Dual Inverter Smart 12K / Gree Fairy 12K";
    nonInverterUnitsKwh = 220;
    inverterUnitsKwh = 95;
  } else if (baseBtu <= 21000) {
    recommendedBtu = 18000;
    tonRating = "1.5 Ton";
    recommendedBrand = "Daikin FTKF50 / Panasonic Inverter 18K";
    nonInverterUnitsKwh = 320;
    inverterUnitsKwh = 140;
  } else {
    recommendedBtu = 24000;
    tonRating = "2.0 Ton Heavy Duty";
    recommendedBrand = "Mitsubishi Heavy 24K / LG Dual Inverter 24K";
    nonInverterUnitsKwh = 440;
    inverterUnitsKwh = 190;
  }

  const nonInverterBill = nonInverterUnitsKwh * 55;
  const inverterBill = inverterUnitsKwh * 55;
  const monthlySavings = nonInverterBill - inverterBill;

  return (
    <section id="calculator" className="py-24 relative bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold">
            <Calculator className="w-3.5 h-3.5" />
            <span>INTERACTIVE SIZING & ENERGY CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Find the Exact AC Capacity for Your Room
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Never pay for an oversized unit or suffer with an underpowered AC. Calculate your exact BTU requirement and see your monthly electricity savings with Dual Inverter technology.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Controls Column */}
          <div className="lg:col-span-7 glass-card-light p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            
            {/* Room Dimensions */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  Room Dimensions (Feet)
                </label>
                <span className="text-xs font-black text-sky-700 bg-sky-50 px-3 py-1 rounded-xl border border-sky-200">
                  {length} ft × {width} ft = {sqft} Sq. Ft
                </span>
              </div>

              <div className="space-y-4 pt-2">
                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span>Length: {length} ft</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="30"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full accent-sky-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold text-slate-500 mb-1">
                    <span>Width: {width} ft</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="30"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-sky-600 bg-slate-200 h-2 rounded-lg cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Sunlight & Floor Position */}
            <div>
              <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700 block mb-2">
                Sunlight Exposure & Ceiling
              </label>
              <div className="grid grid-cols-3 gap-2.5">
                {[
                  { id: 'low', label: 'Shaded Room', sub: 'Ground floor / Min sun' },
                  { id: 'moderate', label: 'Normal Room', sub: 'Morning sun / Standard' },
                  { id: 'high', label: 'Top Floor / Direct Sun', sub: 'Hot afternoon slab / Roof' }
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSunlight(item.id)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      sunlight === item.id
                        ? 'bg-sky-50 border-sky-500 text-sky-900 shadow-sm font-bold'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:border-slate-300'
                    }`}
                  >
                    <div className="text-xs font-bold">{item.label}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* People Occupancy */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-extrabold uppercase tracking-wider text-slate-700">
                  Typical People in Room
                </label>
                <span className="text-xs font-bold text-slate-700">{people} Persons</span>
              </div>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 6].map((num) => (
                  <button
                    key={num}
                    type="button"
                    onClick={() => setPeople(num)}
                    className={`flex-1 py-2 rounded-xl text-xs font-bold border transition-all ${
                      people === num
                        ? 'bg-sky-600 text-white border-sky-600 font-extrabold shadow-sm'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {num}{num === 6 ? '+' : ''}
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Result Card Column */}
          <div className="lg:col-span-5 relative">
            <div className="h-full rounded-3xl p-6 sm:p-8 bg-white border-2 border-sky-500/40 flex flex-col justify-between shadow-xl relative overflow-hidden">
              
              <div className="absolute top-0 right-0 w-48 h-48 bg-sky-100/50 rounded-full blur-3xl pointer-events-none" />

              <div>
                <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                  <span className="text-xs uppercase font-extrabold tracking-widest text-sky-600">
                    Recommended Spec
                  </span>
                  <span className="text-xs bg-emerald-100 text-emerald-800 px-2.5 py-0.5 rounded-full border border-emerald-200 font-bold">
                    Optimal Cooling
                  </span>
                </div>

                {/* Big BTU display */}
                <div className="my-6">
                  <div className="text-5xl font-black text-slate-900 font-heading tracking-tight flex items-baseline gap-2">
                    <span>{recommendedBtu.toLocaleString()}</span>
                    <span className="text-2xl font-bold text-sky-600">BTU/h</span>
                  </div>
                  <div className="text-sm font-bold text-slate-600 mt-1">
                    Equivalent Capacity: <strong className="text-slate-900">{tonRating}</strong>
                  </div>
                </div>

                {/* Recommended Brand Series */}
                <div className="p-3.5 rounded-2xl bg-sky-50 border border-sky-200 mb-6">
                  <div className="text-[11px] font-extrabold uppercase tracking-wider text-sky-800 mb-1 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-sky-600" />
                    Recommended Sri Lankan Models
                  </div>
                  <div className="text-xs font-bold text-slate-900">
                    {recommendedBrand}
                  </div>
                </div>

                {/* Energy Savings Breakdown */}
                <div className="space-y-3 pt-1">
                  <div className="text-xs font-extrabold text-slate-700 uppercase tracking-wider">
                    Estimated Monthly CEB Electricity Bill
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                      <div className="text-slate-500 text-[11px] font-medium">Conventional AC</div>
                      <div className="text-base font-extrabold text-rose-600 mt-0.5">
                        ~Rs. {nonInverterBill.toLocaleString()}
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200">
                      <div className="text-emerald-800 text-[11px] font-bold">Dual Inverter AC</div>
                      <div className="text-base font-extrabold text-emerald-700 mt-0.5">
                        ~Rs. {inverterBill.toLocaleString()}
                      </div>
                    </div>
                  </div>

                  <div className="text-xs text-emerald-700 font-bold flex items-center gap-1.5 pt-1">
                    <Zap className="w-4 h-4 shrink-0" />
                    <span>Saves up to <strong>Rs. {monthlySavings.toLocaleString()}</strong> every month!</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onBookWithPlan({ service: 'installation', notes: `${recommendedBtu} BTU recommended for ${sqft} sq.ft` })}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02]"
                >
                  <span>Request Free Site Inspection & Quote</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
