import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Send, X, Bot, User, CheckCircle, ArrowRight, MessageSquare, Flame, AlertTriangle, Wind, Zap, Phone, RotateCcw } from 'lucide-react';

export default function AiAssistantDrawer({ isOpen, onClose, onBookWithDetails }) {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "ආයුබෝවන්! මම **Refcon AI Smart Cooling Assistant**. ඔබගේ AC එකේ තියෙන ඕනෑම ප්‍රශ්නයක් (Water leak, Not cooling, Noisy) මට කියන්න, නැත්නම් කාමරේට හරියන BTU එක & හොඳම Brands තෝරාගන්න මම උදව් කරන්නම්. How can I help you today? ❄️",
      time: 'Just now',
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const quickPrompts = [
    { label: "💧 AC එකෙන් වතුර වැක්කෙරෙනවා", text: "මගේ AC එකේ ඇතුළත indoor unit එකෙන් වතුර බේරෙනවා. මේකට මොකක්ද කරන්න ඕන?" },
    { label: "❄️ කාමරේට හරියන BTU එක කීයද?", text: "මගේ කාමරේ 12 x 14 feet. මේකට හරියන BTU එක සහ හොඳ AC brands මොනවද?" },
    { label: "⚡ කරන්ට් බිල අඩු Inverter Brands මොනවද?", text: "ශ්‍රී ලංකාවේ කරන්ට් බිල අඩුවෙන් යන හොඳම Inverter AC brands මොනවද?" },
    { label: "🛠️ Chemical Wash එකක ගාන කීයද?", text: "Refcon එකේ Full Chemical Wash එකට මොනවද කරන්නේ? Price එක කීයද?" },
    { label: "🚨 හුළං ආවට Cool වෙන්නේ නෑ", text: "AC එක on කළාට හුළං විතරයි එන්නේ, කිසිම cool එකක් නෑ. Gas ඉවර වෙලාද?" }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isTyping]);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    const userMsg = {
      sender: 'user',
      text: query,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      let botResponse = "";
      const lower = query.toLowerCase();

      if (lower.includes('වතුර') || lower.includes('water') || lower.includes('leak') || lower.includes('dripping')) {
        botResponse = `⚠️ **Indoor Water Leak Diagnostic:**\n\nAC එකෙන් වතුර බේරෙන්න ප්‍රධාන හේතු 3ක් තියෙනවා:\n1. **Drain Line Clog:** දූවිලි සහ mold බැඳී වතුර බටය හිරවීම (90% කටම වෙන්නේ මේක).\n2. **Ice Formation (Coil Freeze):** Filter අපිරිසිදු වීම නිසා හෝ Gas අඩුවීම නිසා Coils වල ice බැඳී දියවීම.\n3. **Indoor Unit Tilted:** Unit එකේ level එක වෙනස් වීම.\n\n💡 **ක්ෂණික විසඳුම:** දැනට AC එක ක්‍රියා විරහිත කර තබන්න. අපගේ **Full Chemical Foam Wash (Rs. 7,500)** සේවාව මගින් සම්පූර්ණ drain line එක high-pressure flush කර දිනක් ඇතුළත ගැටලුව 100% විසඳිය හැක. \n\nදැන්ම Technician කෙනෙක් වෙන්කරවා ගනිමුද?`;
      } 
      else if (lower.includes('btu') || lower.includes('feet') || lower.includes('කාමර') || lower.includes('room') || lower.includes('size')) {
        botResponse = `📐 **Smart BTU Capacity Recommendation:**\n\nසාමාන්‍යයෙන් ශ්‍රී ලංකාවේ දේශගුණය අනුව:\n• **10 x 10 ft (100 sq.ft):** 9,000 BTU\n• **12 x 14 ft (150-180 sq.ft):** 12,000 BTU Inverter (ප්‍රශස්තම තේරීම)\n• **15 x 18 ft (250-300 sq.ft):** 18,000 BTU Inverter\n• **20 x 20 ft+ (Living Area):** 24,000 BTU Inverter\n\n🌟 **ශ්‍රී ලංකාවට වඩාත්ම ගැළපෙන Brands:**\n1. **Panasonic Aero Inverter** (විදුලි බිල අවම, ඉහළ විශ්වසනීයත්වය)\n2. **LG Dual Inverter** (Smart Energy Saver)\n3. **Daikin** (ජපන් තාක්ෂණය, අතිශය නිහඬයි)\n4. **Gree Fairy Series** (Hard water/Coastal durability)\n\nඔබගේ කාමරයට Free Inspection & Installation Quotation එකක් ලබා ගැනීමට කැමතිද?`;
      }
      else if (lower.includes('brands') || lower.includes('කරන්ට්') || lower.includes('bill') || lower.includes('inverter') || lower.includes('electric')) {
        botResponse = `⚡ **ශ්‍රී ලංකාවේ විදුලි බිල අඩුවෙන් වැයවන Inverter ACs:**\n\nConventional AC එකකට වඩා **Inverter AC** එකකින් 50% - 65% ක විදුලි ඉතිරියක් ලැබේ.\n\n🏆 **Top Recommended Inverter Brands in Sri Lanka:**\n• **Panasonic Inverter:** T1/T3 compressor සහිත බැවින් Colombo වල රස්නයට වඩාත්ම සුදුසුයි.\n• **LG Dual Inverter:** Active Energy Control මගින් 40%, 60%, 80% ලෙස power limit කළ හැක.\n• **Daikin Inverter:** R32 eco-friendly refrigerant, දිගු කල්පැවැත්ම.\n• **Gree Inverter:** Budget-friendly සහ spare parts ඉතා පහසුවෙන් ලබාගත හැක.\n\nRefcon අපි මෙම සියලුම brands සඳහා **Genuine Factory Installation & 1-Year Workmanship Warranty** ලබා දෙන්නෙමු.`;
      }
      else if (lower.includes('chemical') || lower.includes('wash') || lower.includes('මිල') || lower.includes('price') || lower.includes('cost') || lower.includes('rate')) {
        botResponse = `🏷️ **Refcon Official Service Packages (Transparent Pricing):**\n\n1. **General Service (Rs. 4,500):**\n   - Filter cleaning, indoor coil blower wash, drain tray clean, basic electrical check.\n\n2. **Deep Chemical Foam Master Wash (Rs. 7,500) - Most Popular ⭐:**\n   - Non-acidic deep foaming wash, indoor blower wheel dismantling, drain pipe high-pressure flush, outdoor condenser wash, electrical ampere check, 30-Day Guarantee.\n\n3. **Gas Top-up:**\n   - Genuine R32 / R410A / R22 gas refilling (Per PSI basis).\n\nඔබගේ නම සහ දුරකථන අංකය ලබා දුනහොත් අපගේ team එකට direct booking එකක් යොමු කළ හැක!`;
      }
      else if (lower.includes('cool') || lower.includes('ගෑස්') || lower.includes('gas') || lower.includes('warm') || lower.includes('සීතල')) {
        botResponse = `❄️ **AC එක Cool නොවීමට හේතු:**\n\n• **Refrigerant (Gas) Leak:** පයිප්ප වල flare nuts හෝ coils දිරායාමෙන් Gas අඩුවීම.\n• **Choked Condenser (Outdoor):** එළියේ තියෙන unit එක දූවිල්ලෙන් වැසී තාපය පිටකිරීමට නොහැකි වීම.\n• **Capacitor / Inverter PCB Fault:** Compressor එක start නොවී හුළං පමණක් විසිවීම.\n\n🔧 **Refcon Action:** අපගේ Technician පැමිණ Digital Manifold Gauge මගින් Gas Pressure එක සහ Compressor Amps ක්ෂණිකව පරික්ෂා කර, ගැටලුව ඇති ස්ථානය නිවැරදිව පෙන්වා දෙයි.\n\nඅදම Service Technician කෙනෙක් schedule කරමුද?`;
      }
      else {
        botResponse = `ස්තූතියි ඔබගේ විමසීමට! Refcon Air Condition (Pvt) Ltd හි අප Colombo 06, Dehiwala සහ බස්නාහිර පළාත පුරා **Residential, Commercial සහ Corporate AC Services** සපයන්නෙමු.\n\nඔබගේ අවශ්‍යතාවය සටහන් කරගෙන අපගේ Technical Team එකෙන් ක්ෂණික WhatsApp සම්බන්ධතාවයක් ලබා ගැනීමට පහත **'Book on WhatsApp'** බොත්තම ඔබන්න. නැතහොත් **070 470 2040** අමතන්න. 📞`;
      }

      setMessages(prev => [
        ...prev,
        {
          sender: 'bot',
          text: botResponse,
          time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
      setIsTyping(false);
    }, 700);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent("ආයුබෝවන් Refcon Team! මම Website එකේ AI Cooling Assistant හරහා සම්බන්ධ වන්නේ. මට AC සේවාවක් වෙන්කරවා ගැනීමට අවශ්‍යයි.");
    window.open(`https://wa.me/94704702040?text=${text}`, '_blank');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-slate-900/50 backdrop-blur-sm flex justify-end transition-opacity">
      <div className="w-full max-w-md h-full bg-white border-l border-slate-200 flex flex-col shadow-2xl animate-in slide-in-from-right duration-300">
        
        {/* Header with Official Logo */}
        <div className="p-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-sky-400 bg-white p-1 flex items-center justify-center">
                <img
                  src="/assets/refcon-official-logo.png"
                  alt="Refcon Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-emerald-500 border-2 border-white rounded-full"></span>
            </div>
            <div>
              <div className="flex items-center space-x-1.5">
                <h3 className="text-sm font-black text-slate-900 font-heading">Refcon AI Cooling Assistant</h3>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-sky-100 text-sky-800 border border-sky-300 font-bold">Gemini AI</span>
              </div>
              <p className="text-[11px] text-emerald-700 font-semibold">● 24/7 Online • Sinhala & English Support</p>
            </div>
          </div>

          <button 
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-slate-800 hover:bg-slate-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Chat Messages Body in Light Theme */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs bg-[#F8FAFC]">
          {messages.map((m, idx) => (
            <div
              key={idx}
              className={`flex flex-col ${m.sender === 'user' ? 'items-end' : 'items-start'}`}
            >
              <div
                className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed shadow-sm ${
                  m.sender === 'user'
                    ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-br-none'
                    : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
                }`}
              >
                <div className="whitespace-pre-wrap">{m.text}</div>
              </div>
              <span className="text-[10px] text-slate-400 mt-1 px-1">{m.time}</span>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-center space-x-2 text-slate-500 text-xs bg-white p-2.5 rounded-xl w-32 border border-slate-200 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-sky-600 animate-spin" />
              <span>Analyzing...</span>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Quick Topic Prompts */}
        <div className="px-4 py-2 border-t border-slate-200 bg-white overflow-x-auto">
          <div className="flex space-x-2 py-1">
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => handleSend(p.text)}
                className="whitespace-nowrap px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-sky-50 border border-slate-200 hover:border-sky-300 text-[11px] font-bold text-slate-700 hover:text-sky-700 transition-all shrink-0"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Input Bar */}
        <div className="p-3 bg-white border-t border-slate-200 flex items-center space-x-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Type in Sinhala, Singlish, or English..."
            className="flex-1 bg-slate-50 border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 font-medium"
          />
          <button
            onClick={() => handleSend()}
            disabled={!input.trim()}
            className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold disabled:opacity-40 disabled:cursor-not-allowed transition-all hover:scale-105 shadow-md shadow-sky-500/20"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>

        {/* Bottom CTA to WhatsApp */}
        <div className="p-3 bg-slate-50 flex items-center justify-between border-t border-slate-200">
          <span className="text-[11px] text-slate-600 font-medium">Ready to book technician?</span>
          <button
            onClick={handleWhatsAppDirect}
            className="px-3.5 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold flex items-center space-x-1.5 shadow-sm"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Send to WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
}
