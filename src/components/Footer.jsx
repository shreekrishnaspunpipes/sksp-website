import React from 'react';
import { ShieldCheck, Phone, Mail, MapPin, ChevronRight, FileText } from 'lucide-react';
import { companyInfo } from '../data/companyData';
import PillarsFooterBar from './PillarsFooterBar';

export default function Footer({ onOpenCertModal, onOpenQuoteModal }) {
  return (
    <footer className="bg-slate-900 text-white pt-8">
      {/* Signature PDF 6-Pillar Bar */}
      <PillarsFooterBar />

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Col 1: Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 bg-white p-2.5 rounded-xl inline-block shadow-md">
              <img 
                src="/logos/logo.png" 
                alt="SKSP Logo" 
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/logo.svg';
                }}
              />
              <div className="border-l-2 border-sksp-navy pl-2 text-sksp-navy">
                <div className="text-sm font-black font-heading leading-tight uppercase">SHREE KRISHNA</div>
                <div className="text-[10px] font-bold text-sksp-blue tracking-widest uppercase">SPUN PIPE</div>
              </div>
            </div>

            <p className="text-xs text-slate-400 font-medium leading-relaxed">
              Leading manufacturer of IS:458 certified RCC Hume Pipes (NP2, NP3, NP4), Box Culverts, U Drains, Septic Tanks, Paver Blocks, and precast infrastructure solutions with 50+ years of legacy.
            </p>

            <div className="flex items-center gap-2 text-xs font-bold text-amber-400">
              <ShieldCheck className="w-4 h-4" />
              <span>ISO 9001:2015 Certified • MSME Registered</span>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase text-amber-400 font-heading tracking-wider border-b border-slate-800 pb-2">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><a href="#hero" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Company Profile</a></li>
              <li><a href="#about" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> About Us & Presence</a></li>
              <li><a href="#products" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Comprehensive Portfolio</a></li>
              <li><a href="#clients" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Esteemed Client Base</a></li>
              <li><a href="#why-us" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Why Choose Us</a></li>
              <li><a href="#sustainability" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Sustainability & Green Tech</a></li>
            </ul>
          </div>

          {/* Col 3: Product Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase text-amber-400 font-heading tracking-wider border-b border-slate-800 pb-2">
              Core Products
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-300">
              <li><a href="#products" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> RCC Hume Pipes (IS:458)</a></li>
              <li><a href="#products" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Precast Concrete U Drains</a></li>
              <li><a href="#products" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Precast Box Culverts</a></li>
              <li><a href="#products" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> RCC Septic & Water Tanks</a></li>
              <li><a href="#products" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Railway Track Aggregates</a></li>
              <li><a href="#products" className="hover:text-amber-400 flex items-center gap-1.5"><ChevronRight className="w-3.5 h-3.5 text-amber-500" /> Custom Boundary Walls</a></li>
            </ul>
          </div>

          {/* Col 4: Statutory & Contact */}
          <div className="space-y-3">
            <h4 className="text-sm font-black uppercase text-amber-400 font-heading tracking-wider border-b border-slate-800 pb-2">
              Contact & Compliance
            </h4>

            <div className="space-y-2 text-xs text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`tel:${companyInfo.phone}`} className="hover:underline">{companyInfo.phone}</a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 flex-shrink-0" />
                <a href={`mailto:${companyInfo.email}`} className="hover:underline">{companyInfo.email}</a>
              </div>

              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                <span>Narsinghgarh, Dist. Rajgarh, Madhya Pradesh - 465669</span>
              </div>
            </div>

            <div className="pt-2 space-y-2">
              <button
                onClick={() => onOpenCertModal(null)}
                className="w-full bg-slate-800 hover:bg-slate-700 text-amber-300 text-xs font-bold py-2 px-3 rounded flex items-center justify-center gap-1.5 border border-amber-400/20"
              >
                <FileText className="w-3.5 h-3.5" />
                <span>Inspect GST & ISO Certs</span>
              </button>

              <button
                onClick={() => onOpenQuoteModal()}
                className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs font-black uppercase py-2 px-3 rounded text-center shadow"
              >
                Request Heavy Order Quote
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Row */}
        <div className="mt-12 pt-6 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-medium">
          <div>
            © {new Date().getFullYear()} <span className="text-white font-extrabold">SHREE KRISHNA SPUN PIPE</span>. All Rights Reserved.
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>GSTIN: {companyInfo.gstin}</span>
            <span>|</span>
            <span>UDYAM: {companyInfo.udyam}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
