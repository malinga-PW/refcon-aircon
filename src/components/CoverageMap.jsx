import React from 'react';
import { MapPin, Navigation, Clock, ShieldCheck, CheckCircle2, PhoneCall } from 'lucide-react';

export default function CoverageMap() {
  const zones = [
    { name: 'Colombo 01 – 15', desc: 'Fort, Kollupitiya, Bambalapitiya, Havelock, Borella, Maradana', time: '30-45 Mins' },
    { name: 'Colombo 06 Hub', desc: 'Pamankada Road, W.A. Silva Mawatha, Wellawatte', time: '15-25 Mins' },
    { name: 'Dehiwala & Kalubowila', desc: 'Sri Sunandarama Rd, Hospital Rd, Galle Road strip', time: '15-30 Mins' },
    { name: 'Nugegoda & Kohuwala', desc: 'High-Level Road, Jubilee Post, Dutugemunu St', time: '30-40 Mins' },
    { name: 'Mount Lavinia & Ratmalana', desc: 'Hotel Road, Attidiya, Templers Road, Airport Rd', time: '35-50 Mins' },
    { name: 'Rajagiriya & Battaramulla', desc: 'Kotte, Pelawatta, Parliament corridor, Koswatta', time: '40-55 Mins' }
  ];

  return (
    <section id="coverage" className="py-24 relative overflow-hidden bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-sky-100 border border-sky-300 text-sky-800 text-xs font-bold">
            <Navigation className="w-3.5 h-3.5" />
            <span>EXPRESS DISPATCH RADIUS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-heading">
            Serving Colombo & Western Province
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Our mobile technician vans are strategically dispatched from our Colombo 06 and Kalubowila service hubs to guarantee prompt emergency arrivals.
          </p>
        </div>

        {/* Coverage Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left: Interactive Zone List */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {zones.map((z, idx) => (
              <div 
                key={idx}
                className="glass-card-light p-5 rounded-2xl border border-slate-200 space-y-2 hover:border-sky-400 shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-4 h-4 text-sky-600" />
                    <h4 className="text-sm font-extrabold text-slate-900 font-heading">{z.name}</h4>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-700 border border-sky-200 flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {z.time}
                  </span>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {z.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Hub Details & Hotline Box in Light Theme */}
          <div className="lg:col-span-5 glass-panel-light p-8 rounded-3xl border border-sky-200 space-y-6 bg-white shadow-xl">
            
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-center text-sky-600">
                <Navigation className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-black text-slate-900 font-heading">Refcon Primary Service Hubs</h3>
                <p className="text-xs text-emerald-600 font-bold">● Technicians on active standby</p>
              </div>
            </div>

            <div className="space-y-3 text-xs text-slate-700 divide-y divide-slate-100">
              <div className="pt-2">
                <strong className="text-slate-900 block mb-0.5">Central Colombo Hub:</strong>
                <p className="text-slate-500">No. 645, Havelock Road (Pamankada Road), Colombo 06 & No. 194/1, W. A. Silva Mawatha, Wellawatte</p>
              </div>
              <div className="pt-3">
                <strong className="text-slate-900 block mb-0.5">Dehiwala / Suburb Station:</strong>
                <p className="text-slate-500">Sri Sunandarama Road, Kalubowila, Dehiwala</p>
              </div>
            </div>

            {/* Emergency Hotline Banner */}
            <div className="p-4 rounded-2xl bg-sky-50 border border-sky-200 flex items-center justify-between">
              <div>
                <span className="text-[10px] uppercase font-extrabold tracking-wider text-sky-700">Emergency Breakdown Hotline</span>
                <div className="text-base font-black text-slate-900 font-heading">070 470 2040</div>
              </div>
              <a
                href="tel:+94704702040"
                className="p-3 rounded-xl bg-sky-600 hover:bg-sky-700 text-white font-bold transition-all shadow-md"
              >
                <PhoneCall className="w-5 h-5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
