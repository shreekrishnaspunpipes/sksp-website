import React from 'react';
import { CheckSquare, ThumbsUp, ShieldCheck, Award } from 'lucide-react';
import { whyChooseUsPoints } from '../data/companyData';

export default function WhyChooseUsSection({ onOpenQuoteModal }) {
  return (
    <section id="why-us" className="py-12 md:py-16 bg-slate-100 px-4 sm:px-6">
      {/* Outer PDF Border Frame Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-4 border-sksp-navy p-4 md:p-8 shadow-2xl">
        
        {/* Title Banner matching PDF Page 20 */}
        <div className="text-center max-w-4xl mx-auto mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-extrabold text-sksp-navy uppercase tracking-widest">
            <ThumbsUp className="w-4 h-4 text-amber-600" />
            <span>Unmatched Reliability & Quality</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-sksp-navy font-heading uppercase tracking-tight">
            Why <span className="text-sksp-blue underline decoration-amber-400 decoration-4">Shree Krishna Spun Pipes</span> is the Best Choice?
          </h2>
          <div className="h-1.5 w-32 bg-amber-500 mx-auto rounded-full"></div>
        </div>

        {/* 7 Differentiators Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: 7 Differentiator Cards */}
          <div className="lg:col-span-8 space-y-4">
            {whyChooseUsPoints.map((point, idx) => (
              <div 
                key={idx}
                className="flex items-start gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl hover:border-sksp-navy hover:shadow-md transition group"
              >
                <div className="w-10 h-10 rounded-xl bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 shadow group-hover:scale-110 transition-transform">
                  <CheckSquare className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base md:text-lg font-black text-sksp-navy font-heading">
                    {point.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-600 font-medium mt-0.5 leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Visual Trust Hero Card */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full space-y-6">
            <div className="bg-sksp-navy text-white rounded-2xl p-6 shadow-xl border-2 border-amber-500/30 flex flex-col justify-between space-y-6">
              
              <div className="space-y-3">
                <div className="w-14 h-14 rounded-2xl bg-amber-500 text-slate-950 flex items-center justify-center shadow-lg font-black text-2xl">
                  👍
                </div>

                <h3 className="text-2xl font-black font-heading text-amber-400 uppercase leading-tight">
                  Over 5 Decades of Customer Trust
                </h3>

                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  We take immense pride in delivering top-grade concrete products that withstand heavy dynamic loads, aggressive soil chemistry, and harsh environmental weathering.
                </p>
              </div>

              <div className="space-y-3 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Strict Quality Assurance at Every Stage</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-amber-300">
                  <Award className="w-4 h-4" />
                  <span>ISO 9001:2015 Accredited Facility</span>
                </div>

                <button
                  onClick={() => onOpenQuoteModal()}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 rounded-xl text-xs uppercase tracking-wider transition shadow-lg mt-2"
                >
                  Partner With Us Today
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
