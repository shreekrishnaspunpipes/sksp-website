import React, { useState } from 'react';
import { 
  Building2, 
  Factory, 
  Truck, 
  CheckCircle2, 
  Layers, 
  Search, 
  ChevronRight, 
  Info
} from 'lucide-react';
import { productsList } from '../data/companyData';

export default function ProductPortfolioSection({ onSelectProduct, onOpenQuoteModal }) {
  const [activeTab, setActiveTab] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Products (15)' },
    { id: 'drainage', name: 'Pipes & Culverts' },
    { id: 'infrastructure', name: 'Precast Infrastructure' },
    { id: 'tanks', name: 'Septic & Water Tanks' },
    { id: 'railway', name: 'Railway & Aggregates' }
  ];

  const filteredProducts = productsList.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          product.keyFeatures.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    
    if (activeTab === 'all') return matchesSearch;
    if (activeTab === 'drainage') {
      return matchesSearch && (product.id.includes('pipe') || product.id.includes('drain') || product.id.includes('culvert'));
    }
    if (activeTab === 'infrastructure') {
      return matchesSearch && (product.id.includes('wall') || product.id.includes('pole') || product.id.includes('kerb') || product.id.includes('paver') || product.id.includes('guard'));
    }
    if (activeTab === 'tanks') {
      return matchesSearch && (product.id.includes('tank') || product.id.includes('manhole') || product.id.includes('pit'));
    }
    if (activeTab === 'railway') {
      return matchesSearch && (product.id.includes('railway') || product.id.includes('custom'));
    }
    return matchesSearch;
  });

  return (
    <section id="products" className="py-12 md:py-16 bg-slate-100 px-4 sm:px-6">
      {/* Outer PDF Border Frame Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-4 border-sksp-navy p-4 md:p-8 shadow-2xl">
        
        {/* Top Header matching PDF Page 3 */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-sksp-lightBlue border border-sksp-navy/20 px-4 py-1.5 rounded-full text-xs font-extrabold text-sksp-navy uppercase tracking-widest">
            <Layers className="w-4 h-4 text-amber-500" />
            <span>Complete Engineering Solutions</span>
          </div>
          
          <h2 className="text-3xl md:text-5xl font-black text-sksp-navy font-heading uppercase tracking-tight">
            Comprehensive Product Portfolio
          </h2>
          
          <p className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
            Shree Krishna Spun Pipe offers an extensive range of RCC and precast products designed to meet the growing demands of:
          </p>
        </div>

        {/* 3 Industry Sector Cards (Direct PDF Page 3 visual reproduction) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          
          {/* Card 1: INFRASTRUCTURE */}
          <div className="group relative rounded-xl overflow-hidden shadow-md border-2 border-slate-200 hover:border-sksp-navy transition-all duration-300">
            <div className="h-44 overflow-hidden relative">
              <img 
                src="/images/about-page-infrastructure.png" 
                alt="Infrastructure Concrete Projects" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/rcc hume pipes.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sksp-navyDark/80 via-transparent to-transparent"></div>
              <div className="absolute top-3 left-3 bg-sksp-navy text-amber-400 p-2 rounded-lg shadow">
                <Truck className="w-6 h-6" />
              </div>
            </div>
            <div className="p-4 bg-sksp-navy text-white text-center">
              <h3 className="text-lg font-black tracking-wider uppercase font-heading text-amber-400">
                INFRASTRUCTURE
              </h3>
              <p className="text-xs text-slate-300 mt-1">Highways, Bridges, Smart Cities & Rail</p>
            </div>
          </div>

          {/* Card 2: REAL ESTATE */}
          <div className="group relative rounded-xl overflow-hidden shadow-md border-2 border-slate-200 hover:border-sksp-navy transition-all duration-300">
            <div className="h-44 overflow-hidden relative">
              <img 
                src="/images/real-estate.png" 
                alt="Real Estate Developments" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/rcc hume pipes.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sksp-navyDark/80 via-transparent to-transparent"></div>
              <div className="absolute top-3 left-3 bg-sksp-navy text-amber-400 p-2 rounded-lg shadow">
                <Building2 className="w-6 h-6" />
              </div>
            </div>
            <div className="p-4 bg-sksp-navy text-white text-center">
              <h3 className="text-lg font-black tracking-wider uppercase font-heading text-amber-400">
                REAL ESTATE
              </h3>
              <p className="text-xs text-slate-300 mt-1">Townships, Residential & Commercial</p>
            </div>
          </div>

          {/* Card 3: INDUSTRIAL */}
          <div className="group relative rounded-xl overflow-hidden shadow-md border-2 border-slate-200 hover:border-sksp-navy transition-all duration-300">
            <div className="h-44 overflow-hidden relative">
              <img 
                src="/images/industrial.png" 
                alt="Industrial Infrastructure" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/rcc hume pipes.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sksp-navyDark/80 via-transparent to-transparent"></div>
              <div className="absolute top-3 left-3 bg-sksp-navy text-amber-400 p-2 rounded-lg shadow">
                <Factory className="w-6 h-6" />
              </div>
            </div>
            <div className="p-4 bg-sksp-navy text-white text-center">
              <h3 className="text-lg font-black tracking-wider uppercase font-heading text-amber-400">
                INDUSTRIAL
              </h3>
              <p className="text-xs text-slate-300 mt-1">Factories, Refineries & Heavy Grids</p>
            </div>
          </div>

        </div>

        {/* Benefits Badges Row matching PDF Page 3 */}
        <div className="bg-sksp-lightBlue border border-sksp-navy/20 rounded-xl p-4 mb-10 flex flex-col md:flex-row justify-around items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-sksp-navy font-black text-sm uppercase">
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            <span>MAXIMUM DURABILITY</span>
          </div>
          <span className="hidden md:inline text-slate-300">|</span>
          <div className="flex items-center gap-2 text-sksp-navy font-black text-sm uppercase">
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            <span>STRUCTURAL STRENGTH</span>
          </div>
          <span className="hidden md:inline text-slate-300">|</span>
          <div className="flex items-center gap-2 text-sksp-navy font-black text-sm uppercase">
            <CheckCircle2 className="w-5 h-5 text-amber-500" />
            <span>COST EFFICIENCY</span>
          </div>
        </div>

        {/* Product Search & Filter Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 custom-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                  activeTab === cat.id
                    ? 'bg-sksp-navy text-white shadow'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search RCC products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 text-xs font-semibold pl-9 pr-4 py-2.5 rounded-lg focus:outline-none focus:border-sksp-navy transition"
            />
          </div>

        </div>

        {/* 15 Product Cards Grid (Matching Page 4-18 Spotlights) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl hover:border-sksp-navy transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Header */}
                <div className="relative h-48 bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/rcc hume pipes.png';
                    }}
                  />
                  <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black px-2.5 py-1 rounded shadow uppercase tracking-wider">
                    {product.certified}
                  </div>
                  {product.specs && (
                    <div className="absolute bottom-3 right-3 bg-sksp-navy/90 text-white text-[10px] font-bold px-2.5 py-1 rounded backdrop-blur-sm">
                      {product.specs}
                    </div>
                  )}
                </div>

                {/* Body Content */}
                <div className="p-5">
                  <h3 className="text-xl font-black text-sksp-navy font-heading uppercase leading-snug mb-2 group-hover:text-amber-600 transition">
                    {product.title}
                  </h3>
                  
                  <p className="text-xs text-slate-600 font-medium leading-relaxed mb-4 line-clamp-2">
                    {product.shortDesc}
                  </p>

                  {/* Key Features Bullet List */}
                  <div className="space-y-1.5 mb-4">
                    {product.keyFeatures.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Applications Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-100">
                    {product.applications.slice(0, 3).map((app, idx) => (
                      <span 
                        key={idx} 
                        className="bg-slate-100 text-sksp-navy text-[10px] font-bold px-2 py-0.5 rounded border border-slate-200 uppercase"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Action Buttons */}
              <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between gap-2">
                <button
                  onClick={() => onSelectProduct(product)}
                  className="flex-1 bg-sksp-navy hover:bg-sksp-blue text-white text-xs font-bold py-2 px-3 rounded-lg transition flex items-center justify-center gap-1.5 shadow"
                >
                  <Info className="w-3.5 h-3.5 text-amber-400" />
                  <span>Full Spec Sheet</span>
                </button>

                <button
                  onClick={() => onOpenQuoteModal(product.title)}
                  className="bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-extrabold py-2 px-3 rounded-lg transition flex items-center justify-center gap-1 shadow"
                >
                  <span>Inquire</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Wide Applications Sidebar Callout Box matching PDF Page 3 right column */}
        <div className="mt-12 bg-sksp-navy text-white rounded-xl p-6 shadow-xl border-2 border-amber-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-2xl font-black text-amber-400 uppercase font-heading">
                WIDE APPLICATIONS & CUSTOMIZABLE DESIGNS
              </h3>
              <p className="text-xs md:text-sm text-slate-200 font-medium">
                Engineered to meet specific project dimensions, load requirements, and Indian Standard (IS) certifications.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3">
              <span className="bg-white/10 text-white px-3 py-1.5 rounded text-xs font-bold border border-white/20">Roads & Highways</span>
              <span className="bg-white/10 text-white px-3 py-1.5 rounded text-xs font-bold border border-white/20">Drainage & Sewerage</span>
              <span className="bg-white/10 text-white px-3 py-1.5 rounded text-xs font-bold border border-white/20">Irrigation Networks</span>
              <span className="bg-white/10 text-white px-3 py-1.5 rounded text-xs font-bold border border-white/20">Smart City Grids</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
