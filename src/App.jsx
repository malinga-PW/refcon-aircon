import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ServicesSection from './components/ServicesSection';
import PricingPackages from './components/PricingPackages';
import CoverageMap from './components/CoverageMap';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import AiAssistantDrawer from './components/AiAssistantDrawer';
import ShopPage from './pages/ShopPage';
import AdminPage from './pages/AdminPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PageBanner from './components/PageBanner';
import { Sparkles, Wrench } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [aiChatOpen, setAiChatOpen] = useState(false);
  const [bookingInitialData, setBookingInitialData] = useState(null);

  const handleOpenBooking = (data = null) => {
    setBookingInitialData(data);
    setBookingModalOpen(true);
  };

  const handleSelectPlan = (planData) => {
    setBookingInitialData({
      service: planData.plan,
      notes: `Selected plan: ${planData.title} (Rs. ${planData.price})`
    });
    setBookingModalOpen(true);
  };

  const navigateToHome = () => {
    setActiveTab('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 flex flex-col font-sans selection:bg-sky-500 selection:text-white">
      
      {/* Top Navigation */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        
        {/* VIEW 1: HOME */}
        {activeTab === 'home' && (
          <>
            <HeroSection
              onOpenBooking={handleOpenBooking}
              onOpenAiChat={() => setAiChatOpen(true)}
            />
            <ServicesSection
              onBookService={(s) => handleOpenBooking({ service: s.service, notes: s.title })}
            />
            <PricingPackages
              onSelectPlan={handleSelectPlan}
            />
            <CoverageMap />
          </>
        )}

        {/* VIEW 2: SERVICES DETAIL */}
        {activeTab === 'services' && (
          <div>
            <PageBanner
              badge="ENGINEERING EXCELLENCE & WORKMANSHIP"
              badgeIcon={Wrench}
              title="Specialized Air Conditioning Solutions"
              subtitle="From residential split inverter units to multi-zone commercial VRF cooling plants, Refcon delivers manufacturer-grade precision across Colombo."
              bgImage="/assets/banner-services.jpg"
              breadcrumbCurrent="Services"
              onNavigateHome={navigateToHome}
            />
            <ServicesSection
              isStandalonePage={true}
              hideHeader={true}
              onBookService={(s) => handleOpenBooking({ service: s.service, notes: s.title })}
            />
            <PricingPackages
              onSelectPlan={handleSelectPlan}
            />
          </div>
        )}

        {/* VIEW 3: SHOP / AC STORE & SMART BTU SIZING */}
        {activeTab === 'shop' && (
          <ShopPage
            onOrderAc={(itemData) => handleOpenBooking(itemData)}
            onNavigateHome={navigateToHome}
          />
        )}

        {/* VIEW 4: ABOUT US */}
        {activeTab === 'about' && (
          <AboutPage
            onOpenBooking={() => handleOpenBooking()}
            onNavigateHome={navigateToHome}
          />
        )}

        {/* VIEW 5: CONTACT & HUBS */}
        {activeTab === 'contact' && (
          <ContactPage 
            onNavigateHome={navigateToHome}
          />
        )}

        {/* VIEW 6: OPERATIONS ADMIN PANEL */}
        {activeTab === 'admin' && (
          <AdminPage 
            onNavigateHome={navigateToHome}
          />
        )}

      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => handleOpenBooking()}
        onOpenAiChat={() => setAiChatOpen(true)}
      />

      {/* Floating Action Pill for AI Cooling Assistant */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end space-y-3">
        <button
          onClick={() => setAiChatOpen(true)}
          className="group relative px-4 py-3 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-black text-xs uppercase tracking-wider flex items-center space-x-2.5 shadow-xl shadow-sky-500/30 hover:scale-105 active:scale-95 transition-all"
        >
          <span className="flex h-2.5 w-2.5 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-90"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
          </span>
          <Sparkles className="w-4 h-4 text-white animate-bounce" />
          <span className="font-extrabold font-heading">AI Cooling Assistant</span>
        </button>
      </div>

      {/* Booking Modal */}
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        initialData={bookingInitialData}
      />

      {/* AI Assistant Chat Drawer */}
      <AiAssistantDrawer
        isOpen={aiChatOpen}
        onClose={() => setAiChatOpen(false)}
        onBookWithDetails={(details) => {
          setAiChatOpen(false);
          handleOpenBooking(details);
        }}
      />

    </div>
  );
}
