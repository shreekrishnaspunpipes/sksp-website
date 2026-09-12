import React, { useState } from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { ChevronDown, ChevronUp, FileText } from 'lucide-react';

export default function Support({ onOpenQuoteModal }) {
  const [openFaq, setOpenFaq] = useState(-1);

  const faqs = [
    {
      q: 'What IS:458 pressure classes do you manufacture for RCC Hume Pipes?',
      a: 'We manufacture RCC Hume Pipes in NP2 (light duty/drainage), NP3 (medium traffic loading), and NP4 (heavy highway & railway traffic loading) across diameters from 150mm to 1200mm.'
    },
    {
      q: 'What are the main advantages of Precast U Drains over cast-in-situ drains?',
      a: 'Precast U Drains save up to 60% construction time on site, deliver uniform concrete strength, guarantee smooth inner channel surfaces, and eliminate curing delays.'
    },
    {
      q: 'Are Readymade Septic Tanks ready for immediate use upon installation?',
      a: 'Yes, our readymade RCC Septic Tanks are pre-cured and hydrostatic leak-tested. They can be installed into an excavated pit and connected to inlet/outlet pipes within 24 hours.'
    },
    {
      q: 'Do you provide customized precast concrete elements based on structural drawings?',
      a: 'Yes. We manufacture customized RCC products including heavy cable ducts, bridge culvert blocks, and earthing pits based on client CAD blueprints and concrete strength parameters.'
    },
    {
      q: 'What is your delivery coverage across Rajasthan and Madhya Pradesh?',
      a: 'We operate dedicated manufacturing units and storage yards across Kota, Jhalawar, Udaipur (Rajasthan) and Narsinghgarh, Betul, Nagpur (MP), enabling swift fleet logistics across Central India.'
    }
  ];

  return (
    <div className="py-12 space-y-16">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            TECHNICAL SUPPORT & ENQUIRIES
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Support & Request for Quotation</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Get technical assistance, dimensional specifications, or request a formal BOQ quotation for your project.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 space-y-6">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Technical & Ordering FAQs"
          description="Find quick answers regarding RCC product standards, manufacturing specifications, and logistics."
        />

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between font-bold text-[#062A5A] text-sm md:text-base focus:outline-none"
              >
                <span>{faq.q}</span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#F2A900] flex-shrink-0 ml-2" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0 ml-2" />
                )}
              </button>
              {openFaq === idx && (
                <div className="px-5 pb-5 text-xs md:text-sm text-slate-600 border-t border-slate-100 pt-3 leading-relaxed">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* RFQ Callout */}
      <section className="bg-[#062A5A] text-white py-12 px-4 rounded-2xl max-w-7xl mx-auto text-center space-y-6 border-b-4 border-[#F2A900]">
        <h2 className="text-3xl font-extrabold">Need a Quick Formal Price Quotation?</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Submit your product details and quantity through our interactive RFQ tool for instant sales processing.
        </p>
        <div>
          <Button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
            variant="primary"
            size="lg"
            icon={FileText}
          >
            Open Quote Request Tool
          </Button>
        </div>
      </section>
    </div>
  );
}
