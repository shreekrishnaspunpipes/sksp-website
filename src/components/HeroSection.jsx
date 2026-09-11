import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection({ onOpenQuoteModal }) {
  return (
    <section id="hero" className="relative min-h-[650px] md:min-h-[720px] overflow-hidden bg-sksp-navy flex items-end">
      <img
        src="/images/Homepage-bg-image.png"
        alt="Shree Krishna Spun Pipes manufacturing facility"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-sksp-navyDark/95 via-sksp-navy/75 to-sksp-navy/20" />
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-sksp-navyDark/85 to-transparent" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 pt-28 pb-0">
        <div className="max-w-3xl text-white pb-14 md:pb-20">
          <p className="inline-flex items-center gap-2 border border-amber-400/60 bg-sksp-navy/70 px-3 py-1.5 text-[10px] font-bold tracking-[0.16em] uppercase text-amber-300">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full" />
            Trusted infrastructure partner since 1974
          </p>
          <h1 className="mt-6 text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.88] drop-shadow-lg">
            Built for the<br />
            <span className="text-amber-400">load ahead.</span>
          </h1>
          <p className="mt-6 max-w-2xl text-base md:text-xl font-medium leading-relaxed text-slate-100">
            IS:458 certified RCC Hume pipes and high-strength precast concrete solutions for roads, drainage, railways and civil infrastructure.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <button onClick={() => onOpenQuoteModal()} className="bg-amber-500 hover:bg-amber-400 text-slate-950 px-6 py-3.5 font-black text-sm uppercase tracking-wide inline-flex justify-center items-center gap-2 transition">
              Request a project quote <ArrowRight className="w-4 h-4" />
            </button>
            <a href="#products" className="border border-white/70 hover:bg-white hover:text-sksp-navy text-white px-6 py-3.5 font-bold text-sm uppercase tracking-wide text-center transition">
              Explore products
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 border-t border-white/30 bg-sksp-navy/80 backdrop-blur-sm">
          {[
            ['50+', 'Years of manufacturing legacy'],
            ['IS:458', 'Certified RCC Hume pipes'],
            ['PAN INDIA', 'Project supply capability'],
          ].map(([value, label], index) => (
            <div key={value} className={`flex items-center gap-3 px-5 py-5 ${index > 0 ? 'sm:border-l border-white/20' : ''}`}>
              <CheckCircle2 className="w-5 h-5 text-amber-400 shrink-0" />
              <div><div className="text-base font-black text-white">{value}</div><div className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">{label}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
