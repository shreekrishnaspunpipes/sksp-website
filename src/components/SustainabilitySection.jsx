import React from 'react';
import { Leaf, CheckSquare, Award, Lightbulb, Recycle, ShieldCheck, Factory } from 'lucide-react';
import { sustainabilityPillars } from '../data/companyData';

export default function SustainabilitySection() {
  const icons = [
    <Leaf className="w-6 h-6 text-emerald-500" />,
    <ShieldCheck className="w-6 h-6 text-amber-500" />,
    <Lightbulb className="w-6 h-6 text-blue-500" />,
    <Recycle className="w-6 h-6 text-emerald-500" />,
    <Award className="w-6 h-6 text-amber-500" />,
    <Factory className="w-6 h-6 text-blue-500" />
  ];

  return (
    <section id="sustainability" className="py-12 md:py-16 bg-slate-50 px-4 sm:px-6">
      {/* Outer PDF Border Frame Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-4 border-sksp-navy p-4 md:p-8 shadow-xl">
        
        {/* Title matching PDF Page 21 */}
        <div className="border-b-2 border-slate-200 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-300 text-emerald-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
              <Leaf className="w-4 h-4 text-emerald-600" />
              <span>Eco-Conscious Precast Engineering</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-sksp-navy font-heading uppercase tracking-tight">
              Commitment to <span className="text-sksp-blue">Sustainability & Innovation</span>
            </h2>
            
            <p className="text-sm md:text-base text-slate-600 font-semibold">
              Building durable infrastructure while embracing sustainable manufacturing practices.
            </p>
          </div>
        </div>

        {/* Top Grid: Left Bullets, Right Plant Backdrop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-10">
          
          {/* Left Bullets */}
          <div className="lg:col-span-6 space-y-3">
            {[
              "Energy-Efficient Manufacturing Processes",
              "Advanced Quality Control & Precision Engineering",
              "Optimized Production & Logistics for Faster Deliveries",
              "Durable RCC Products with Long Service Life",
              "Environment-Friendly Manufacturing Practices",
              "Continuous Product Innovation & Custom Engineering"
            ].map((item, idx) => (
              <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-emerald-500 transition">
                <div className="w-7 h-7 rounded bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0">
                  <CheckSquare className="w-4 h-4" />
                </div>
                <span className="text-xs md:text-sm font-extrabold text-sksp-navy">
                  {item}
                </span>
              </div>
            ))}
          </div>

          {/* Right Plant Banner */}
          <div className="lg:col-span-6">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-slate-300 h-72 md:h-80">
              <img 
                src="/images/about-page-infrastructure.png" 
                alt="Green Manufacturing Unit" 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/rcc hume pipes.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sksp-navyDark/80 via-transparent to-transparent"></div>
              
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow border border-slate-200">
                <div className="flex items-center gap-2 text-xs font-black text-sksp-navy uppercase">
                  <Recycle className="w-4 h-4 text-emerald-600" />
                  <span>Zero Wastewater & Material Recycling</span>
                </div>
                <p className="text-xs text-slate-600 font-medium mt-1">
                  Our plant utilizes closed-loop water curing systems and aggregate recycling to minimize environmental impact.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 6 Sustainability Cards Grid matching PDF Page 21 bottom row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sustainabilityPillars.map((pillar, idx) => (
            <div 
              key={idx}
              className="p-5 bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-sksp-navy hover:shadow-lg transition text-center space-y-2 group"
            >
              <div className="w-12 h-12 rounded-full bg-sksp-navy text-amber-400 mx-auto flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                {icons[idx]}
              </div>
              <h3 className="text-sm font-black text-sksp-navy uppercase font-heading">
                {pillar.title}
              </h3>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
