import Button from '../components/ui/Button';
import { whyChooseUsPoints } from '../data/companyData';
import { CheckCircle2, ArrowRight } from 'lucide-react';

export default function WhySKSP({ onOpenQuoteModal }) {
  return (
    <div className="py-12 space-y-16">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            WHY SHREE KRISHNA SPUN PIPES IS THE BEST CHOICE
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Quality, Capacity & Reliability</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Discover why government departments, infrastructure majors, and private developers rely on SKSP for heavy concrete solutions.
          </p>
        </div>
      </section>

      {/* Points detail grid */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {whyChooseUsPoints.map((pt, idx) => (
          <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4 hover:border-[#F2A900] transition-colors">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-xl bg-[#062A5A] text-[#F2A900] font-extrabold flex items-center justify-center text-xl flex-shrink-0">
                0{idx + 1}
              </div>
              <h3 className="text-xl font-bold text-[#062A5A]">{pt.title}</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
              {pt.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Manufacturing & Testing Lab Highlights */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold text-[#F2A900] uppercase tracking-widest">
              INFRASTRUCTURE & COMPLIANCE
            </span>
            <h2 className="text-3xl font-extrabold text-[#062A5A]">
              Rigorous Quality Control & In-House Testing Laboratory
            </h2>
            <div className="w-16 h-1 bg-[#F2A900]" />
            <p className="text-slate-600 leading-relaxed text-sm">
              Every batch of raw materials—including cement, aggregate, and reinforcement rebar—undergoes strict laboratory testing before production. Final products are hydrostatically tested and load-tested under Indian Standard specifications.
            </p>
            <div className="space-y-3 pt-2">
              <div className="flex items-center space-x-3 text-sm font-semibold text-[#062A5A]">
                <CheckCircle2 className="w-5 h-5 text-[#F2A900]" />
                <span>Three-Edge Bearing Load Testing for Pipes</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold text-[#062A5A]">
                <CheckCircle2 className="w-5 h-5 text-[#F2A900]" />
                <span>Hydrostatic Seepage & Leak Proof Testing</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold text-[#062A5A]">
                <CheckCircle2 className="w-5 h-5 text-[#F2A900]" />
                <span>Compressive Cube Strength Verification</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <img 
              src="/images/about-page-infrastructure.png" 
              alt="Quality Testing" 
              className="rounded-2xl shadow-xl border-4 border-white object-cover w-full h-[380px]"
            />
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#062A5A] text-white py-12 px-4 rounded-2xl max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Partner with Rajasthan & MP's Trusted Manufacturer</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Discuss your project timeline, product specifications, and pricing directly with our team.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => onOpenQuoteModal && onOpenQuoteModal()} variant="primary" icon={ArrowRight}>
            Request Quote
          </Button>
          <Button to="/contact" variant="outlineGold">
            Get in Touch
          </Button>
        </div>
      </section>
    </div>
  );
}
