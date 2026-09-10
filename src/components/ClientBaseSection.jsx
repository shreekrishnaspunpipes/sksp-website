import React, { useState } from 'react';
import { CheckSquare, Quote, Search, Award } from 'lucide-react';
import { clientBase } from '../data/companyData';

export default function ClientBaseSection() {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredClients = clientBase.filter(client =>
    client.toLowerCase().includes(filterQuery.toLowerCase())
  );

  return (
    <section id="clients" className="py-12 md:py-16 bg-slate-50 px-4 sm:px-6">
      {/* Outer PDF Border Frame Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-4 border-sksp-navy p-4 md:p-8 shadow-xl">
        
        {/* Header matching PDF Page 19 */}
        <div className="border-b-2 border-slate-200 pb-6 mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 bg-sksp-lightBlue border border-sksp-navy/20 px-3 py-1 rounded-full text-xs font-bold text-sksp-navy uppercase">
              <Award className="w-4 h-4 text-amber-500" />
              <span>Proven Track Record</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-black text-sksp-navy font-heading uppercase tracking-tight">
              Esteemed Client Base
            </h2>
            
            <p className="text-sm md:text-base text-slate-600 font-semibold">
              Trusted by India's most prestigious companies across various sectors.
            </p>
          </div>

          {/* Quick Filter Search */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input 
              type="text" 
              placeholder="Filter clients (e.g. L&T, Adani, Tata)..." 
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full bg-slate-50 border border-slate-300 text-xs font-semibold pl-9 pr-3 py-2 rounded-lg focus:outline-none focus:border-sksp-navy transition"
            />
          </div>
        </div>

        {/* Content Grid: Left Checklist & Quote, Right Graphic Illustration Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Checklist of 16 Clients */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {filteredClients.map((client, idx) => (
                <div 
                  key={idx}
                  className="flex items-center gap-3 p-3 bg-slate-50 border border-slate-200 rounded-xl hover:border-sksp-navy hover:shadow-md transition group"
                >
                  <div className="w-6 h-6 rounded bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <CheckSquare className="w-4 h-4" />
                  </div>
                  <span className="text-xs md:text-sm font-extrabold text-sksp-navy">
                    {client}
                  </span>
                </div>
              ))}
            </div>

            {/* Testimonial Quote Callout Box matching PDF Page 19 */}
            <div className="bg-sksp-lightBlue border-2 border-sksp-navy/30 rounded-xl p-6 relative">
              <Quote className="w-10 h-10 text-sksp-navy/20 absolute top-4 left-4" />
              <div className="relative z-10 space-y-2 pl-6">
                <p className="text-sm md:text-base font-extrabold text-sksp-navy italic leading-relaxed">
                  "Our clients are a testament to the trust, quality, and long-standing relationships we've built over the years."
                </p>
                <div className="text-xs font-bold text-sksp-blue tracking-wider uppercase">
                  — Shree Krishna Spun Pipe Management
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High Quality Industry Graphics & Corporate Handshake Backdrop */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-slate-300 h-full min-h-[350px] bg-slate-900 flex items-end">
              <img 
                src="/images/industrial.png" 
                alt="Infrastructure Corporate Clients Partnership" 
                className="absolute inset-0 w-full h-full object-cover object-center opacity-85"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/rcc hume pipes.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sksp-navyDark/90 via-sksp-navy/50 to-transparent"></div>

              <div className="relative z-10 p-6 text-white space-y-3">
                <div className="flex items-center gap-2">
                  <span className="bg-amber-500 text-slate-950 font-black px-2.5 py-1 rounded text-[10px] uppercase">
                    500+ Projects Supplied
                  </span>
                  <span className="bg-blue-600 text-white font-bold px-2.5 py-1 rounded text-[10px] uppercase">
                    Pan India Reach
                  </span>
                </div>

                <h3 className="text-2xl font-black font-heading uppercase text-amber-400">
                  Government & Tier-1 Contractor Preferred Supplier
                </h3>

                <p className="text-xs text-slate-200 font-medium leading-relaxed">
                  Supplying certified NP3/NP4 Hume Pipes, box culverts, and custom precast solutions across major highways, thermal plants, smart cities, and railway freight corridors.
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
