import Button from '../components/ui/Button';
import { sustainabilityPillars } from '../data/companyData';
import { Leaf, ShieldCheck, Cpu, Recycle, Award, ArrowRight } from 'lucide-react';

export default function Sustainability({ onOpenQuoteModal }) {
  const pillarIcons = [Leaf, ShieldCheck, Cpu, Recycle, Award, Leaf];

  return (
    <div className="py-12 space-y-16">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            COMMITMENT TO SUSTAINABILITY & INNOVATION
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Building Infrastructure for Tomorrow</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Our commitment to eco-friendly precast manufacturing, precision engineering, and durable concrete structures designed to last for generations.
          </p>
        </div>
      </section>

      {/* Sustainability Pillars */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sustainabilityPillars.map((pillar, idx) => {
            const Icon = pillarIcons[idx % pillarIcons.length];
            return (
              <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-[#F2A900] transition-colors">
                <div className="w-12 h-12 rounded-xl bg-[#062A5A] text-[#F2A900] flex items-center justify-center">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-[#062A5A]">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Environmental & Quality Details */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#F2A900] uppercase tracking-widest">
              ECO-FRIENDLY PRECAST CONCRETE
            </span>
            <h2 className="text-3xl font-extrabold text-[#062A5A]">
              Why Precast Concrete is Inherently Sustainable
            </h2>
            <div className="w-16 h-1 bg-[#F2A900]" />
            <p className="text-slate-600 leading-relaxed text-sm">
              Controlled factory manufacturing minimizes water consumption, eliminates site material waste, reduces cement slurry runoff, and delivers concrete structures with over 50 years of maintenance-free service life.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div>
                <p className="text-2xl font-extrabold text-[#062A5A]">50+ Yrs</p>
                <p className="text-xs text-slate-500 font-medium">Product Life Cycle</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-[#F2A900]">Zero</p>
                <p className="text-xs text-slate-500 font-medium">Toxic Chemical Emissions</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img 
              src="/images/about-us-page.png" 
              alt="Precast Manufacturing" 
              className="rounded-2xl shadow-xl border-4 border-white object-cover w-full h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#062A5A] text-white py-12 px-4 rounded-2xl max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Build Sustainable Infrastructure with SKSP</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Contact us to integrate high-efficiency precast RCC products into your project drawings.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => onOpenQuoteModal && onOpenQuoteModal()} variant="primary" icon={ArrowRight}>
            Request Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
