import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { clientBase } from '../data/companyData';
import { Building2, ArrowRight } from 'lucide-react';

export default function Clients({ onOpenQuoteModal }) {
  return (
    <div className="py-12 space-y-16">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            ESTEEMED CLIENT BASE
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Trusted by Industry Leaders</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            We take pride in supplying IS:458 RCC Hume Pipes and precast concrete solutions to India's foremost infrastructure contractors and public sector undertakings.
          </p>
        </div>
      </section>

      {/* Trust Wall Grid */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="PORTFOLIO CLIENTS"
          title="Major Infrastructure & Power Sector Partners"
          description="A selection of prestigious organizations that rely on Shree Krishna Spun Pipes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
          {clientBase.map((client, idx) => (
            <div 
              key={idx} 
              className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-[#F2A900] transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#062A5A] group-hover:bg-[#062A5A] group-hover:text-[#F2A900] flex items-center justify-center transition-colors">
                  <Building2 className="w-5 h-5" />
                </div>
                <span className="text-[10px] font-extrabold text-[#F2A900] uppercase tracking-wider">
                  Verified Client
                </span>
              </div>
              <h3 className="font-bold text-base text-[#062A5A] group-hover:text-[#062A5A] transition-colors leading-snug">
                {client}
              </h3>
            </div>
          ))}
        </div>
      </section>

      {/* Corporate Trust Banner */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-3xl font-extrabold text-[#062A5A]">100%</p>
            <p className="text-xs font-bold text-slate-500 uppercase">On-Time Project Delivery Commitment</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-3xl font-extrabold text-[#F2A900]">PWD & PSU</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Government Vendor Approvals</p>
          </div>
          <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
            <p className="text-3xl font-extrabold text-[#062A5A]">Pan-India</p>
            <p className="text-xs font-bold text-slate-500 uppercase">Supply Chain Reach</p>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#062A5A] text-white py-12 px-4 rounded-2xl max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Join Our Growing Client Network</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Contact us today for corporate vendor registration, bulk quotes, and project BOQ support.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => onOpenQuoteModal && onOpenQuoteModal()} variant="primary" icon={ArrowRight}>
            Request Quote
          </Button>
          <Button to="/contact" variant="outlineGold">
            Contact Sales Team
          </Button>
        </div>
      </section>
    </div>
  );
}
