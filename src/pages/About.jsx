import React from 'react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { companyInfo } from '../data/companyData';
import { MapPin, ArrowRight } from 'lucide-react';

export default function About({ onOpenQuoteModal }) {
  return (
    <div className="space-y-16 py-12">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            ESTABLISHED MANUFACTURING LEGACY
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">About Shree Krishna Spun Pipes</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Delivering high-strength reinforced cement concrete (RCC) infrastructure products engineered for quality, load capacity, and long service life.
          </p>
        </div>
      </section>

      {/* Story & Facilities */}
      <section className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-bold text-[#F2A900] uppercase tracking-widest">
            COMPANY BACKGROUND
          </span>
          <h2 className="text-3xl font-extrabold text-[#062A5A]">
            Over 50 Years of Excellence in Concrete Manufacturing
          </h2>
          <div className="w-16 h-1 bg-[#F2A900]" />
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Shree Krishna Spun Pipes has established itself as one of the leading manufacturers of IS:458 certified RCC Hume Pipes, Precast U Drains, Box Culverts, and customized concrete solutions across Rajasthan and Madhya Pradesh.
          </p>
          <p className="text-slate-600 leading-relaxed text-sm md:text-base">
            Equipped with modern centrifugal spun casting machinery, high-vibration compaction setups, and automated batching plants, we ensure strict quality standards across all production runs.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
            <div>
              <p className="text-2xl font-extrabold text-[#062A5A]">IS:458</p>
              <p className="text-xs text-slate-500 font-medium">Certified Standard Specification</p>
            </div>
            <div>
              <p className="text-2xl font-extrabold text-[#F2A900]">ISO 9001:2015</p>
              <p className="text-xs text-slate-500 font-medium">Quality Management System</p>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="/images/about-us-page.png" 
              alt="SKSP Manufacturing Yard" 
              className="w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* Regional Presence */}
      <section className="bg-slate-50 py-16">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="MANUFACTURING NETWORK"
            title="Strategic Regional Presence"
            description="Our manufacturing hubs and supply chain coverage allow fast delivery across North & Central India."
          />

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Rajasthan */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#062A5A] text-[#F2A900] rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#062A5A]">Rajasthan State Hubs</h3>
                  <p className="text-xs text-slate-500">Key Manufacturing & Distribution Centers</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 font-medium border-t border-slate-100 pt-4">
                {companyInfo.presence.rajasthan.map((city, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#F2A900]" />
                    <span>{city} Unit & Storage Yard</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Madhya Pradesh */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-[#062A5A] text-[#F2A900] rounded-xl">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#062A5A]">Madhya Pradesh & Central Hubs</h3>
                  <p className="text-xs text-slate-500">Key Manufacturing & Distribution Centers</p>
                </div>
              </div>
              <ul className="space-y-2 text-sm text-slate-700 font-medium border-t border-slate-100 pt-4">
                {companyInfo.presence.madhyaPradesh.map((city, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-[#F2A900]" />
                    <span>{city} Unit & Storage Yard</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Sister / Family Concerns */}
      <section className="max-w-7xl mx-auto px-4">
        <SectionHeading
          eyebrow="GROUP COMPANIES"
          title="Affiliated Firms & Group Entities"
          description="Strengthening our capacity and product breadth under the same commitment to quality."
        />

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {companyInfo.familyFirms.map((firm) => (
            <div key={firm.id} className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-xl bg-[#062A5A] text-[#F2A900] font-extrabold flex items-center justify-center text-xl">
                  {firm.logoText}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#062A5A]">{firm.name}</h3>
                  <p className="text-xs font-bold text-[#F2A900]">{firm.subTitle}</p>
                </div>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                {firm.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-[#062A5A] text-white py-12 px-4 rounded-2xl max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Need Specifications for Your Project?</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Get in touch with our technical sales engineers for product catalogs, dimensional drawings, and price quotes.
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
