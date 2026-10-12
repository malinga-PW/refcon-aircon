import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageSquare, Send, CheckCircle2, ChevronRight } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function ContactPage({ onNavigateHome }) {
  const [formData, setFormData] = useState({ name: '', phone: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `*REFCON WEBSITE INQUIRY*\n` +
      `Name: ${formData.name}\n` +
      `Phone: ${formData.phone}\n` +
      `Message: ${formData.message}`
    );
    window.open(`https://wa.me/94704702040?text=${msg}`, '_blank');
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* 🌟 Top Banner with Breadcrumb & Colombo Dispatch Photo */}
      <PageBanner
        badge="DISPATCH CENTERS & SERVICE HUBS"
        badgeIcon={Phone}
        title="Contact Refcon Air Condition"
        subtitle="Have an emergency breakdown or need a commercial quote? Connect with our Colombo dispatch team directly."
        bgImage="/assets/banner-contact.jpg"
        breadcrumbCurrent="Contact & Hubs"
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="glass-card-light p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h3 className="text-base font-black text-slate-900 font-heading">Direct Hotlines</h3>
              
              <div className="space-y-3 text-xs">
                <a href="tel:+94704702040" className="flex items-center space-x-3 p-3 bg-sky-50 rounded-2xl border border-sky-200 text-sky-900 font-bold hover:bg-sky-100 transition-colors">
                  <Phone className="w-4 h-4 text-sky-600" />
                  <div>
                    <div className="text-[10px] text-sky-600 uppercase">Emergency Dispatch Desk</div>
                    <div className="text-sm font-black">070 470 2040</div>
                  </div>
                </a>

                <a href="tel:+94778064308" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 text-slate-800 font-bold hover:bg-slate-100 transition-colors">
                  <Phone className="w-4 h-4 text-slate-600" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Technical Hotline #2</div>
                    <div className="text-sm font-black">077 806 4308</div>
                  </div>
                </a>

                <a href="tel:+94112365046" className="flex items-center space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200 text-slate-800 font-bold hover:bg-slate-100 transition-colors">
                  <Phone className="w-4 h-4 text-slate-600" />
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase">Landline Office</div>
                    <div className="text-sm font-black">+94 11 236 5046</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Locations */}
            <div className="glass-card-light p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 text-xs">
              <h3 className="text-base font-black text-slate-900 font-heading">Physical Locations</h3>

              <div className="space-y-3">
                <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-heading">Colombo 06 Hub:</strong>
                    <p className="text-slate-600 text-[11px]">No. 645, Havelock Road (Pamankada Road), Colombo 06 & W. A. Silva Mawatha, Wellawatte</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <MapPin className="w-4 h-4 text-sky-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900 block font-heading">Dehiwala Center:</strong>
                    <p className="text-slate-600 text-[11px]">Sri Sunandarama Road, Kalubowila, Dehiwala</p>
                  </div>
                </div>
              </div>

              <a
                href="https://maps.app.goo.gl/xfhDC4eTn1tGYDds7"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs uppercase flex items-center justify-center space-x-2 transition-all mt-2"
              >
                <span>Open in Google Maps</span>
                <ChevronRight className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Direct Inquiry Form */}
          <div className="lg:col-span-7 glass-card-light p-8 rounded-3xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-sky-600 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Quick Message Desk
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-heading mt-2">
                Send Us a Direct Message
              </h3>
              <p className="text-xs text-slate-500 mt-1 mb-6">
                Our support team typically responds within 15 minutes during operating hours (Mon-Sat: 08:30 AM - 07:00 PM).
              </p>

              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dilshan Wickramasinghe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-bold mb-1">Mobile / WhatsApp Number *</label>
                    <input
                      type="tel"
                      required
                      placeholder="07X XXX XXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-sky-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-1">Message / Service Description *</label>
                  <textarea
                    rows="4"
                    required
                    placeholder="Describe your inquiry, AC issue, or corporate requirements..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md shadow-sky-500/25 transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp Support</span>
                </button>
              </form>
            </div>

            <div className="pt-6 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mt-6">
              <span className="flex items-center gap-1.5 text-emerald-700 font-bold">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" /> Same-day site visits in Colombo
              </span>
              <span>Closed on Poya Days</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
