import React, { useState, useEffect } from 'react';
import { X, Calendar, CheckCircle2, Phone, MapPin, Wrench, Shield, MessageSquare, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function BookingModal({ isOpen, onClose, initialData }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    location: 'Colombo 06 (Wellawatte/Pamankada)',
    address: '',
    service: 'chemical_wash',
    acType: 'split_inverter',
    brand: 'Panasonic',
    date: '',
    timeSlot: 'Morning (09:00 AM - 01:00 PM)',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [bookingId, setBookingId] = useState('');

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        service: initialData.service || prev.service,
        phone: initialData.phone || prev.phone,
        location: initialData.location || prev.location,
        notes: initialData.notes || prev.notes
      }));
    }
  }, [initialData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = 'RC-' + Math.floor(10000 + Math.random() * 90000);
    setBookingId(id);
    setSubmitted(true);

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleWhatsAppForward = () => {
    const text = encodeURIComponent(
      `*NEW REFCON SERVICE BOOKING [${bookingId}]*\n\n` +
      `👤 *Customer:* ${formData.name}\n` +
      `📞 *Phone:* ${formData.phone}\n` +
      `📍 *Location:* ${formData.location} (${formData.address})\n` +
      `🔧 *Service:* ${formData.service}\n` +
      `❄️ *AC Unit:* ${formData.brand} (${formData.acType})\n` +
      `📅 *Preferred Slot:* ${formData.date} - ${formData.timeSlot}\n` +
      `📝 *Notes:* ${formData.notes || 'None'}\n\n` +
      `_Dispatched via Refcon Web System_`
    );
    window.open(`https://wa.me/94704702040?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-xl my-8 bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-[11px] font-bold uppercase tracking-wider text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">
                Direct Dispatch Request
              </span>
              <h3 className="text-2xl font-black text-slate-900 font-heading mt-2">
                Book a Certified AC Technician
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Fill in your details below for same-day priority dispatch across Colombo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              
              {/* Row 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Kasun Perera"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Mobile / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="07X XXX XXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Row 2: Location & Address */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Town / Area *</label>
                  <select
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-sky-500"
                  >
                    <option value="Colombo 06 (Wellawatte/Pamankada)">Colombo 06 (Wellawatte / Pamankada)</option>
                    <option value="Dehiwala / Kalubowila">Dehiwala / Kalubowila</option>
                    <option value="Colombo 01-05 (Fort/Kollupitiya/Bamba)">Colombo 01-05 (Fort / Kollupitiya / Bamba)</option>
                    <option value="Colombo 07-10 (Cinnamon Gardens/Borella)">Colombo 07-10 (Cinnamon Gardens / Borella)</option>
                    <option value="Nugegoda / Kohuwala">Nugegoda / Kohuwala</option>
                    <option value="Mount Lavinia / Ratmalana">Mount Lavinia / Ratmalana</option>
                    <option value="Rajagiriya / Battaramulla">Rajagiriya / Battaramulla</option>
                    <option value="Maharagama / Kottawa">Maharagama / Kottawa</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Street Address</label>
                  <input
                    type="text"
                    placeholder="e.g. No. 45, Galle Road"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                  />
                </div>
              </div>

              {/* Row 3: Service Type & AC Brand */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Service Required *</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-sky-500"
                  >
                    <option value="chemical_wash">Deep Chemical Foam Wash (Rs. 7,500)</option>
                    <option value="general_service">General Routine Clean (Rs. 4,500)</option>
                    <option value="repair_breakdown">Emergency Repair / Gas Refill</option>
                    <option value="installation">New AC Installation / Relocation</option>
                    <option value="amc_plan">Annual AMC Protection Contract</option>
                    <option value="commercial">Commercial / VRF Inspection</option>
                  </select>
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">AC Brand</label>
                  <select
                    value={formData.brand}
                    onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-sky-500"
                  >
                    <option value="Panasonic">Panasonic</option>
                    <option value="LG">LG Dual Inverter</option>
                    <option value="Gree">Gree</option>
                    <option value="Daikin">Daikin</option>
                    <option value="Mitsubishi">Mitsubishi</option>
                    <option value="Singer">Singer</option>
                    <option value="Abans">Abans</option>
                    <option value="TCL">TCL</option>
                    <option value="Other">Other Brand</option>
                  </select>
                </div>
              </div>

              {/* Row 4: Preferred Date & Time Slot */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Preferred Date</label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 focus:outline-none focus:border-sky-500"
                  />
                </div>
                <div>
                  <label className="block text-slate-700 font-bold mb-1">Preferred Time Slot</label>
                  <select
                    value={formData.timeSlot}
                    onChange={(e) => setFormData({ ...formData, timeSlot: e.target.value })}
                    className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-slate-900 focus:outline-none focus:border-sky-500"
                  >
                    <option value="Morning (09:00 AM - 01:00 PM)">Morning (09:00 AM - 01:00 PM)</option>
                    <option value="Afternoon (01:00 PM - 05:00 PM)">Afternoon (01:00 PM - 05:00 PM)</option>
                    <option value="Emergency (ASAP Today)">🚨 Emergency (ASAP Today)</option>
                  </select>
                </div>
              </div>

              {/* Row 5: Notes */}
              <div>
                <label className="block text-slate-700 font-bold mb-1">Additional Issue Notes (Optional)</label>
                <textarea
                  rows="2"
                  placeholder="e.g. Water is dripping from right side, or haven't serviced in 6 months"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2 text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-extrabold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.01]"
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Confirm Dispatch Request</span>
                </button>
              </div>

            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-5 animate-in zoom-in-95">
            <div className="w-16 h-16 rounded-full bg-emerald-100 border-2 border-emerald-400 flex items-center justify-center mx-auto text-emerald-600">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <span className="text-xs font-bold text-sky-600 uppercase tracking-widest">
                Booking Registered Successfully
              </span>
              <h3 className="text-3xl font-black text-slate-900 font-heading mt-1">
                Reference ID: <span className="text-sky-600">{bookingId}</span>
              </h3>
              <p className="text-xs text-slate-600 max-w-sm mx-auto mt-2 leading-relaxed">
                Thank you, <strong>{formData.name}</strong>! Our dispatch coordinator has received your request and will contact you on <strong>{formData.phone}</strong> shortly.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-left text-xs space-y-1.5 text-slate-700">
              <div className="flex justify-between">
                <span className="text-slate-500">Service:</span>
                <span className="font-semibold text-slate-900">{formData.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Location:</span>
                <span className="font-semibold text-slate-900">{formData.location}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Scheduled:</span>
                <span className="font-semibold text-emerald-700">{formData.timeSlot}</span>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleWhatsAppForward}
                className="flex-1 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center space-x-2 shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Open in WhatsApp</span>
              </button>

              <button
                onClick={() => { setSubmitted(false); onClose(); }}
                className="py-3 px-6 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs"
              >
                Done
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
