import React, { useState } from 'react';
import { ShoppingBag, Search, ShieldCheck, Zap, Star, MessageSquare, Check, ArrowRight, Calculator, RotateCcw, SlidersHorizontal } from 'lucide-react';
import PageBanner from '../components/PageBanner';

export default function ShopPage({ onOrderAc, onNavigateHome }) {
  // Default View: 2 Columns
  const [columns, setColumns] = useState(2);

  // Left Sidebar BTU Calculator State
  const [length, setLength] = useState(14);
  const [width, setWidth] = useState(12);
  const [sunlight, setSunlight] = useState('moderate');
  const [people, setPeople] = useState(2);
  const [autoFilterBtu, setAutoFilterBtu] = useState(false);

  // Standard Filters
  const [selectedBrand, setSelectedBrand] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all', 'brand_new', 'reconditioned'
  const [selectedBtu, setSelectedBtu] = useState('all');
  const [maxPrice, setMaxPrice] = useState(400000);
  const [searchQuery, setSearchQuery] = useState('');

  // BTU Calculation formula for tropical Sri Lanka
  const sqft = length * width;
  let calculatedBtu = sqft * 65;
  if (sunlight === 'high') calculatedBtu *= 1.25;
  if (sunlight === 'low') calculatedBtu *= 0.95;
  calculatedBtu += (people - 1) * 600;

  let recommendedBtuRating = "12000";
  let recommendedTon = "1.0 Ton (Standard)";
  let inverterUnitsKwh = 95;
  let nonInverterUnitsKwh = 220;

  if (calculatedBtu <= 10000) {
    recommendedBtuRating = "9000";
    recommendedTon = "0.75 Ton";
    inverterUnitsKwh = 68;
    nonInverterUnitsKwh = 160;
  } else if (calculatedBtu <= 15000) {
    recommendedBtuRating = "12000";
    recommendedTon = "1.0 Ton (Most Popular)";
    inverterUnitsKwh = 95;
    nonInverterUnitsKwh = 220;
  } else if (calculatedBtu <= 21000) {
    recommendedBtuRating = "18000";
    recommendedTon = "1.5 Ton";
    inverterUnitsKwh = 140;
    nonInverterUnitsKwh = 320;
  } else {
    recommendedBtuRating = "24000";
    recommendedTon = "2.0 Ton (Heavy Duty)";
    inverterUnitsKwh = 190;
    nonInverterUnitsKwh = 440;
  }

  const estMonthlySavings = (nonInverterUnitsKwh - inverterUnitsKwh) * 55;

  // Active BTU filter (either auto-linked from BTU calculator or manual)
  const activeBtuFilter = autoFilterBtu ? recommendedBtuRating : selectedBtu;

  const products = [
    {
      id: 'p1',
      title: 'Panasonic 12,000 BTU Aero Inverter',
      brand: 'Panasonic',
      btu: '12000',
      type: 'Brand New',
      coolingArea: '120 - 160 Sq.Ft',
      gas: 'R32 Eco',
      warranty: '10 Yrs Compressor + 1 Yr Comprehensive',
      originalPrice: '198,000',
      price: '184,500',
      priceNum: 184500,
      rating: '4.9',
      image: '/assets/hero-ac.jpg',
      badge: 'Bestseller',
      inStock: true
    },
    {
      id: 'p2',
      title: 'LG Dual Inverter 18,000 BTU Smart ThinQ',
      brand: 'LG',
      btu: '18000',
      type: 'Brand New',
      coolingArea: '180 - 260 Sq.Ft',
      gas: 'R32 Eco',
      warranty: '10 Yrs Compressor + 1 Yr General',
      originalPrice: '265,000',
      price: '249,000',
      priceNum: 249000,
      rating: '4.9',
      image: '/assets/hero-ac.jpg',
      badge: 'Super Saver',
      inStock: true
    },
    {
      id: 'p3',
      title: 'Daikin 9,000 BTU Precision Japanese Inverter',
      brand: 'Daikin',
      btu: '9000',
      type: 'Brand New',
      coolingArea: '80 - 120 Sq.Ft',
      gas: 'R32 Eco',
      warranty: '5 Yrs Compressor + 1 Yr Comprehensive',
      originalPrice: '165,000',
      price: '152,000',
      priceNum: 152000,
      rating: '4.8',
      image: '/assets/hero-ac.jpg',
      badge: 'Ultra Quiet',
      inStock: true
    },
    {
      id: 'p4',
      title: 'Gree Fairy Series 12,000 BTU Inverter',
      brand: 'Gree',
      btu: '12000',
      type: 'Brand New',
      coolingArea: '120 - 170 Sq.Ft',
      gas: 'R32 Eco',
      warranty: '5 Yrs Compressor + 1 Yr Workmanship',
      originalPrice: '175,000',
      price: '162,000',
      priceNum: 162000,
      rating: '4.7',
      image: '/assets/hero-ac.jpg',
      badge: 'Coastal Durability',
      inStock: true
    },
    {
      id: 'p5',
      title: 'Refcon Certified Reconditioned LG 12,000 BTU',
      brand: 'LG',
      btu: '12000',
      type: 'Reconditioned',
      coolingArea: '120 - 160 Sq.Ft',
      gas: 'R410A Genuine',
      warranty: '1 Year Full Refcon Warranty',
      originalPrice: '115,000',
      price: '89,500',
      priceNum: 89500,
      rating: '4.6',
      image: '/assets/hero-ac.jpg',
      badge: 'Certified Reconditioned',
      inStock: true
    },
    {
      id: 'p6',
      title: 'Mitsubishi Heavy Duty 24,000 BTU Inverter',
      brand: 'Mitsubishi',
      btu: '24000',
      type: 'Brand New',
      coolingArea: '300 - 450 Sq.Ft (Living Hall)',
      gas: 'R32 Eco',
      warranty: '5 Yrs Compressor + 1 Yr Refcon SLA',
      originalPrice: '385,000',
      price: '358,000',
      priceNum: 358000,
      rating: '5.0',
      image: '/assets/hero-ac.jpg',
      badge: 'Commercial Grade',
      inStock: true
    },
    {
      id: 'p7',
      title: 'TCL Smart Inverter 12,000 BTU Golden Fin',
      brand: 'TCL',
      btu: '12000',
      type: 'Brand New',
      coolingArea: '120 - 160 Sq.Ft',
      gas: 'R32 Eco',
      warranty: '5 Yrs Compressor + 1 Yr Refcon SLA',
      originalPrice: '158,000',
      price: '144,500',
      priceNum: 144500,
      rating: '4.7',
      image: '/assets/hero-ac.jpg',
      badge: 'Affordable Luxury',
      inStock: true
    },
    {
      id: 'p8',
      title: 'Singer Inverter 12,000 BTU Eco Cool',
      brand: 'Singer',
      btu: '12000',
      type: 'Brand New',
      coolingArea: '120 - 160 Sq.Ft',
      gas: 'R32 Eco',
      warranty: '5 Yrs Compressor + 1 Yr Free Servicing',
      originalPrice: '172,000',
      price: '159,000',
      priceNum: 159000,
      rating: '4.6',
      image: '/assets/hero-ac.jpg',
      badge: 'Popular Choice',
      inStock: true
    }
  ];

  const handleResetFilters = () => {
    setSelectedCategory('all');
    setSelectedBrand('all');
    setSelectedBtu('all');
    setAutoFilterBtu(false);
    setMaxPrice(400000);
    setSearchQuery('');
    setLength(14);
    setWidth(12);
    setSunlight('moderate');
    setPeople(2);
  };

  const filteredProducts = products.filter(p => {
    const matchCategory = selectedCategory === 'all' || 
      (selectedCategory === 'brand_new' && p.type === 'Brand New') ||
      (selectedCategory === 'reconditioned' && p.type === 'Reconditioned');
    const matchBrand = selectedBrand === 'all' || p.brand.toLowerCase() === selectedBrand.toLowerCase();
    const matchBtu = activeBtuFilter === 'all' || p.btu === activeBtuFilter;
    const matchPrice = p.priceNum <= maxPrice;
    const matchSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                        p.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchBrand && matchBtu && matchPrice && matchSearch;
  });

  const handleWhatsAppOrder = (item) => {
    const msg = encodeURIComponent(
      `*REFCON AC STORE INQUIRY*\n\n` +
      `Product: ${item.title}\n` +
      `Type: ${item.type}\n` +
      `Price: Rs. ${item.price}\n` +
      `Capacity: ${item.btu} BTU\n\n` +
      `Hi Refcon Team, I would like to inquire about stock availability & free installation for this unit.`
    );
    window.open(`https://wa.me/94704702040?text=${msg}`, '_blank');
  };

  const getGridClasses = () => {
    switch (columns) {
      case 4:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4';
      case 3:
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5';
      case 2:
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
      case 1:
        return 'grid grid-cols-1 gap-6';
      default:
        return 'grid grid-cols-1 md:grid-cols-2 gap-6';
    }
  };

  return (
    <div className="bg-[#F8FAFC]">
      {/* 🌟 Top Banner with Breadcrumb & Showroom Photo */}
      <PageBanner
        badge="REFCON OFFICIAL AC STORE & SMART SIZING"
        badgeIcon={ShoppingBag}
        title="Air Conditioning Catalog & Sizing Center"
        subtitle="Calculate your room's exact BTU requirement on the left panel or filter by brand, capacity, and price with Sri Lanka warranty."
        bgImage="/assets/banner-store.jpg"
        breadcrumbCurrent="AC Store & Sizing"
        onNavigateHome={onNavigateHome}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        {/* 2-Column Layout: Left Sidebar (lg:col-span-4 - Restored Width!) & Right Catalog (lg:col-span-8) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* 🎛️ RESTORED WIDTH LEFT SIDEBAR (lg:col-span-4) - FIT TO HEIGHT OPTIMIZED */}
          <div className="lg:col-span-4 bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-4 sticky top-28">
            
            {/* Header + Clear Button */}
            <div className="flex items-center justify-between pb-2.5 border-b border-slate-100">
              <div className="flex items-center space-x-2">
                <SlidersHorizontal className="w-4 h-4 text-sky-600" />
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-wider">Filters & Sizing</h3>
              </div>
              
              <button
                onClick={handleResetFilters}
                className="text-[11px] font-extrabold text-sky-600 hover:text-sky-800 flex items-center gap-1 hover:underline cursor-pointer"
                title="Reset all filters"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset All</span>
              </button>
            </div>

            {/* SECTION A: Smart BTU Sizing Calculator (Compact & Clean) */}
            <div className="space-y-3 bg-slate-50/80 p-3.5 rounded-2xl border border-slate-200/80">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-black uppercase text-slate-800 flex items-center gap-1">
                  <Calculator className="w-3.5 h-3.5 text-sky-600" /> Room Dimensions
                </span>
                <span className="text-[10px] font-extrabold text-sky-700 bg-white px-2 py-0.5 rounded-md border border-slate-200">
                  {length}×{width}ft ({sqft} sq.ft)
                </span>
              </div>

              {/* Sliders side by side or compact */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                    <span>L: {length} ft</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="28"
                    value={length}
                    onChange={(e) => setLength(Number(e.target.value))}
                    className="w-full accent-sky-600 bg-slate-200 h-1 rounded cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between text-[10px] text-slate-500 mb-0.5">
                    <span>W: {width} ft</span>
                  </div>
                  <input
                    type="range"
                    min="8"
                    max="24"
                    value={width}
                    onChange={(e) => setWidth(Number(e.target.value))}
                    className="w-full accent-sky-600 bg-slate-200 h-1 rounded cursor-pointer"
                  />
                </div>
              </div>

              {/* Sunlight Exposure */}
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-bold text-slate-600 shrink-0">Sunlight:</span>
                <div className="grid grid-cols-3 gap-1 flex-1 text-[10px]">
                  {[
                    { id: 'low', label: 'Shaded' },
                    { id: 'moderate', label: 'Normal' },
                    { id: 'high', label: 'Sun/Roof' }
                  ].map(item => (
                    <button
                      key={item.id}
                      onClick={() => setSunlight(item.id)}
                      className={`py-1 rounded-lg border text-center font-bold transition-all ${
                        sunlight === item.id
                          ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* People in Room - 2 Rows of 3 */}
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-bold text-slate-600">
                  <span>Occupants:</span>
                  <span className="text-sky-700 font-extrabold">{people} Persons</span>
                </div>
                <div className="grid grid-cols-3 gap-1 text-[10px]">
                  {[
                    { num: 1, label: '1 Person' },
                    { num: 2, label: '2 Persons' },
                    { num: 3, label: '3 Persons' },
                    { num: 4, label: '4 Persons' },
                    { num: 5, label: '5 Persons' },
                    { num: 6, label: '6+ Persons' }
                  ].map(p => (
                    <button
                      key={p.num}
                      onClick={() => setPeople(p.num)}
                      className={`py-1 rounded-lg font-bold border transition-all text-center ${
                        people === p.num
                          ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Recommendation & Auto Filter Button in One Compact Row */}
              <div className="flex items-center justify-between gap-2 pt-1 border-t border-slate-200/60">
                <div className="leading-tight">
                  <div className="text-[9px] uppercase font-bold text-slate-400">Recommended</div>
                  <div className="text-sm font-black text-slate-900">
                    {Number(recommendedBtuRating).toLocaleString()} <span className="text-sky-600">BTU</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setAutoFilterBtu(!autoFilterBtu)}
                  className={`py-1.5 px-3 rounded-xl text-[10px] font-black border transition-all flex items-center gap-1 ${
                    autoFilterBtu
                      ? 'bg-sky-600 text-white border-sky-600 shadow-xs'
                      : 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300'
                  }`}
                >
                  <Zap className="w-3 h-3 text-amber-400" />
                  <span>{autoFilterBtu ? 'Filter Active' : 'Auto Filter'}</span>
                </button>
              </div>

            </div>

            {/* SECTION B: SELECT BRAND - EXACTLY 2 ROWS (4 COLUMNS EACH) */}
            <div className="space-y-1.5 pt-1 border-t border-slate-100">
              <label className="text-[11px] font-black uppercase text-slate-800 block">Select Brand</label>
              <div className="grid grid-cols-4 gap-1 text-[10px]">
                {/* Row 1 */}
                {['all', 'Panasonic', 'LG', 'Daikin'].map(b => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`py-1.5 px-1 rounded-lg border text-center font-bold capitalize transition-all truncate ${
                      selectedBrand.toLowerCase() === b.toLowerCase()
                        ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {b === 'all' ? 'All' : b}
                  </button>
                ))}
                {/* Row 2 */}
                {['Gree', 'Mitsubishi', 'Singer', 'TCL'].map(b => (
                  <button
                    key={b}
                    onClick={() => setSelectedBrand(b)}
                    className={`py-1.5 px-1 rounded-lg border text-center font-bold capitalize transition-all truncate ${
                      selectedBrand.toLowerCase() === b.toLowerCase()
                        ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* SECTION C: BTU CAPACITY - EXACTLY 2 ROWS */}
            <div className="space-y-1.5 pt-1 border-t border-slate-100">
              <label className="text-[11px] font-black uppercase text-slate-800 block">BTU Capacity</label>
              <div className="grid grid-cols-3 gap-1 text-[10px]">
                {/* Row 1 */}
                {[
                  { id: 'all', label: 'All BTUs' },
                  { id: '9000', label: '9,000 BTU' },
                  { id: '12000', label: '12,000 BTU' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => { setAutoFilterBtu(false); setSelectedBtu(item.id); }}
                    className={`py-1.5 px-1 rounded-lg border text-center font-bold transition-all truncate ${
                      activeBtuFilter === item.id
                        ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                {/* Row 2 */}
                {[
                  { id: '18000', label: '18,000 BTU' },
                  { id: '24000', label: '24,000 BTU' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => { setAutoFilterBtu(false); setSelectedBtu(item.id); }}
                    className={`py-1.5 px-1 rounded-lg border text-center font-bold transition-all truncate ${
                      activeBtuFilter === item.id
                        ? 'bg-sky-500 text-white border-sky-500 shadow-xs'
                        : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                {/* Clear BTU Quick Trigger */}
                <button
                  onClick={() => { setAutoFilterBtu(false); setSelectedBtu('all'); }}
                  className="py-1.5 px-1 rounded-lg border text-center font-bold text-slate-400 bg-white hover:bg-slate-50 border-slate-200"
                >
                  Clear
                </button>
              </div>
            </div>

            {/* SECTION D: Standard Price Range Slider */}
            <div className="space-y-1 pt-1 border-t border-slate-100">
              <div className="flex justify-between items-center text-[10px]">
                <span className="font-black uppercase text-slate-700">Max Budget</span>
                <span className="font-extrabold text-sky-700">Rs. {maxPrice.toLocaleString()}</span>
              </div>
              <input
                type="range"
                min="80000"
                max="400000"
                step="10000"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full accent-sky-600 bg-slate-200 h-1 rounded cursor-pointer"
              />
            </div>

          </div>

          {/* 🛍️ RIGHT SIDE: Product Store & Column Controls (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Toolbar: Search, Condition Filter, and 4/3/2/1 Column Switcher */}
            <div className="bg-white p-3.5 rounded-3xl border border-slate-200 shadow-xs space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-3">
              
              {/* Search */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search Panasonic, LG, Daikin, Gree..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 rounded-xl bg-slate-50 border border-slate-200 text-xs font-bold text-slate-800 focus:outline-none focus:border-sky-500"
                />
              </div>

              {/* Condition Filter */}
              <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-xl shrink-0">
                {[
                  { id: 'all', label: 'All Units' },
                  { id: 'brand_new', label: 'Brand New' },
                  { id: 'reconditioned', label: 'Reconditioned' }
                ].map(cat => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      selectedCategory === cat.id
                        ? 'bg-white text-sky-600 shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Column Switcher: Default 2 */}
              <div className="flex items-center space-x-1 p-1 bg-slate-100 rounded-xl shrink-0">
                <span className="text-[10px] font-black text-slate-400 uppercase px-1 hidden md:inline">Cols:</span>
                {[
                  { count: 4, label: '4' },
                  { count: 3, label: '3' },
                  { count: 2, label: '2' },
                  { count: 1, label: '1' }
                ].map(col => (
                  <button
                    key={col.count}
                    onClick={() => setColumns(col.count)}
                    className={`w-7 h-7 rounded-lg text-xs font-black transition-all flex items-center justify-center ${
                      columns === col.count
                        ? 'bg-sky-600 text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200'
                    }`}
                    title={`${col.count} Columns Layout`}
                  >
                    {col.label}
                  </button>
                ))}
              </div>

            </div>

            {/* Active Filter Indicators & Reset Link */}
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold px-1">
              <span>Showing <strong>{filteredProducts.length}</strong> matching models</span>
              {(autoFilterBtu || selectedBrand !== 'all' || selectedBtu !== 'all' || selectedCategory !== 'all' || maxPrice < 400000 || searchQuery) && (
                <button 
                  onClick={handleResetFilters}
                  className="text-sky-600 font-bold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <RotateCcw className="w-3 h-3" />
                  <span>Clear Active Filters</span>
                </button>
              )}
            </div>

            {/* Product Cards Grid */}
            <div className={getGridClasses()}>
              {filteredProducts.map(p => (
                <div
                  key={p.id}
                  className={`glass-card-light rounded-2xl overflow-hidden border border-slate-200 group hover:shadow-md transition-all flex ${
                    columns === 1 
                      ? 'flex-col sm:flex-row min-h-[220px] sm:min-h-[260px]' 
                      : 'flex-col justify-between'
                  }`}
                >
                  {/* Image Container */}
                  <div className={`relative bg-slate-100 overflow-hidden ${
                    columns === 1 
                      ? 'sm:w-80 md:w-96 min-h-[220px] sm:min-h-[260px] shrink-0' 
                      : 'aspect-[4/3]'
                  }`}>
                    <img
                      src={p.image}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2.5 left-2.5 flex flex-col gap-1">
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider bg-sky-600 text-white shadow-sm">
                        {p.badge}
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[9px] font-bold bg-white/95 text-slate-700 shadow-sm">
                        {p.type}
                      </span>
                    </div>
                    <div className="absolute bottom-2 right-2 px-1.5 py-0.5 rounded bg-black/60 backdrop-blur-sm text-[9px] font-bold text-white">
                      {p.coolingArea}
                    </div>
                  </div>

                  {/* Body Info */}
                  <div className={`p-4 flex-1 flex flex-col justify-between space-y-3 ${
                    columns === 1 ? 'sm:p-6 sm:space-y-4' : ''
                  }`}>
                    <div>
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-extrabold uppercase tracking-widest text-sky-600">
                          {p.brand} • {Number(p.btu).toLocaleString()} BTU
                        </span>
                        {columns === 1 && (
                          <span className="text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                            Free Colombo Delivery & Installation
                          </span>
                        )}
                      </div>

                      <h3 className={`font-extrabold text-slate-900 leading-snug line-clamp-2 mt-0.5 ${
                        columns === 1 ? 'text-base sm:text-lg' : 'text-sm'
                      }`}>
                        {p.title}
                      </h3>

                      <div className={`text-slate-600 border-t border-slate-100 ${
                        columns === 1 ? 'pt-3 space-y-1.5 text-xs' : 'pt-2 space-y-1 text-[11px]'
                      }`}>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Refrigerant:</span>
                          <span className="font-semibold text-slate-800">{p.gas}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-slate-400">Warranty:</span>
                          <span className="font-semibold text-emerald-700">{p.warranty}</span>
                        </div>
                      </div>
                    </div>

                    {/* Price & Action */}
                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between gap-3">
                      <div>
                        <div className="text-[10px] text-slate-400 line-through">Rs. {p.originalPrice}</div>
                        <div className={`font-black text-slate-900 font-heading ${
                          columns === 1 ? 'text-xl sm:text-2xl' : 'text-base'
                        }`}>
                          Rs. {p.price}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => handleWhatsAppOrder(p)}
                          className={`rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold uppercase tracking-wider flex items-center space-x-1.5 shadow-sm transition-all shrink-0 ${
                            columns === 1 ? 'py-2.5 px-4 text-xs' : 'py-2 px-3 text-xs'
                          }`}
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Order on WhatsApp</span>
                        </button>
                      </div>
                    </div>

                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-16 bg-white rounded-3xl border border-slate-200 p-8 space-y-3">
                <p className="text-sm font-bold text-slate-700">No AC units match your selected filter criteria.</p>
                <button
                  onClick={handleResetFilters}
                  className="px-4 py-2 bg-sky-600 text-white font-bold text-xs rounded-xl shadow-xs"
                >
                  Reset All Filters
                </button>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
