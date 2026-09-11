import React from 'react';
import { X, ShieldCheck, CheckCircle2, ChevronRight, Award, Phone } from 'lucide-react';

export default function ProductSpotlightModal({ product, onClose, onOpenQuoteModal }) {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white border-4 border-sksp-navy rounded-2xl max-w-5xl w-full p-4 md:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-sksp-navy rounded-full transition shadow"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Top Header Row inside PDF Card */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-2 border-slate-200 pb-4 mb-6 pr-10">
          <div className="flex items-center gap-3">
            <img 
              src="/logos/logo.png" 
              alt="SKSP Logo" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo.svg';
              }}
            />
            <div className="border-l-2 border-sksp-navy pl-3">
              <h3 className="text-xl font-black text-sksp-navy font-heading uppercase">
                SHREE KRISHNA SPUN PIPE
              </h3>
              <p className="text-xs font-bold text-sksp-blue tracking-widest uppercase">
                STRONG PIPES. STRONGER INFRASTRUCTURE.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-sksp-lightBlue border border-sksp-navy/20 px-3 py-1.5 rounded-lg">
            <ShieldCheck className="w-5 h-5 text-sksp-navy" />
            <div className="text-left text-[10px] font-bold text-sksp-navy uppercase">
              <div>QUALITY • STRENGTH</div>
              <div className="text-amber-600">DURABILITY</div>
            </div>
          </div>
        </div>

        {/* Product Title Section */}
        <div className="mb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <h2 className="text-3xl md:text-5xl font-black text-sksp-navy font-heading uppercase tracking-tight">
              {product.title}
            </h2>
            <span className="bg-amber-500 text-slate-950 font-black px-3 py-1 rounded text-xs uppercase tracking-wider shadow">
              {product.certified}
            </span>
          </div>
          
          {product.specs && (
            <p className="text-sm font-extrabold text-amber-600 uppercase tracking-widest mt-1">
              Specs: {product.specs}
            </p>
          )}

          <p className="text-sm text-slate-600 font-medium leading-relaxed mt-2 max-w-3xl">
            {product.description || product.shortDesc}
          </p>
        </div>

        {/* Main Content Grid: Features & Applications vs Product Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8 items-start">
          
          {/* Left Column: Key Features & Applications */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Key Features */}
            <div>
              <h4 className="text-xs font-black text-sksp-navy uppercase tracking-widest bg-sksp-lightBlue px-3 py-1.5 rounded-md inline-block mb-3 border-l-4 border-sksp-navy">
                KEY FEATURES
              </h4>

              <div className="space-y-3">
                {product.keyFeatures.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 p-3 rounded-lg bg-slate-50 border border-slate-200">
                    <div className="w-6 h-6 rounded-full bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span className="text-xs md:text-sm text-slate-800 font-semibold leading-snug">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Applications */}
            <div>
              <h4 className="text-xs font-black text-sksp-navy uppercase tracking-widest bg-sksp-lightBlue px-3 py-1.5 rounded-md inline-block mb-3 border-l-4 border-sksp-navy">
                SECTOR APPLICATIONS
              </h4>

              <div className="flex flex-wrap gap-2">
                {product.applications.map((app, idx) => (
                  <div 
                    key={idx}
                    className="bg-sksp-navy text-white text-xs font-bold px-3 py-2 rounded-lg flex items-center gap-2 shadow-sm"
                  >
                    <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                    <span>{app}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Image Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-slate-300 bg-slate-100 group">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-72 md:h-80 object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/rcc hume pipes.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sksp-navyDark/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-3 rounded-lg shadow border border-slate-200 text-xs font-bold text-sksp-navy">
                <div className="flex items-center gap-1.5 text-amber-600">
                  <Award className="w-4 h-4" />
                  <span>Tested & Quality Approved</span>
                </div>
                <div className="text-[11px] text-slate-600 mt-0.5 font-normal">
                  Custom length, diameter, and reinforcement specs manufactured on order.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Core Benefits Bottom Bar (Direct PDF Spotlight 3 benefit cards) */}
        {product.coreBenefits && product.coreBenefits.length > 0 && (
          <div className="mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {product.coreBenefits.map((benefit, idx) => (
                <div key={idx} className="bg-sksp-navy text-white p-4 rounded-xl border border-amber-500/30 shadow-md">
                  <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase mb-1">
                    <ShieldCheck className="w-4 h-4" />
                    <span>{benefit.title}</span>
                  </div>
                  <p className="text-xs text-slate-300 font-medium">
                    {benefit.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Action Buttons */}
        <div className="pt-4 border-t-2 border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="text-xs text-slate-500 font-bold flex items-center gap-2">
            <Phone className="w-4 h-4 text-sksp-navy" />
            <span>Direct Sales Line: +91-9829039655</span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="px-5 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-bold rounded-lg transition"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenQuoteModal(product.title);
              }}
              className="flex-1 sm:flex-none px-6 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider rounded-lg transition shadow flex items-center justify-center gap-2"
            >
              <span>Inquire for Project Pricing</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
