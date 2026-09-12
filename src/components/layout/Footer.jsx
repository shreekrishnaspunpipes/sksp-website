import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { companyInfo } from '../../data/companyData';

export default function Footer({ onOpenQuoteModal }) {
  return (
    <footer className="bg-[#041A36] text-white pt-16 pb-8 border-t-4 border-[#F2A900]">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
        
        {/* Col 1: Brand Info */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center space-x-3">
            <img 
              src="/logos/logo.png" 
              alt="SKSP Logo" 
              className="h-12 w-auto bg-white p-1.5 rounded-lg"
            />
            <div>
              <h3 className="font-extrabold text-xl tracking-wider text-white uppercase">
                Shree Krishna
              </h3>
              <p className="text-xs font-bold tracking-widest text-[#F2A900] uppercase">
                Spun Pipes
              </p>
            </div>
          </div>

          <p className="text-slate-300 text-sm leading-relaxed max-w-md">
            Established leader in manufacturing IS:458 certified RCC Hume Pipes, Precast U Drains, Box Culverts, Septic Tanks, and heavy precast concrete products across Rajasthan and Madhya Pradesh.
          </p>

          <div className="flex items-center space-x-2 text-xs text-[#F2A900] font-semibold bg-slate-900/60 p-3 rounded-lg border border-slate-800 inline-block">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>ISO 9001:2015 Certified | Government Approved Supplier</span>
          </div>

          <div className="flex items-center space-x-2 text-xs text-[#F2A900] font-semibold bg-slate-900/60 p-3 rounded-lg border border-slate-800 inline-block">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>Tax Document | GST Registration Certificate (Form GST REG-06)</span>
          </div>

          <div className="flex items-center space-x-2 text-xs text-[#F2A900] font-semibold bg-slate-900/60 p-3 rounded-lg border border-slate-800 inline-block">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>MSME Registration | UDYAM Registration Certificate (MSME)</span>
          </div>

          <div className="flex items-center space-x-2 text-xs text-[#F2A900] font-semibold bg-slate-900/60 p-3 rounded-lg border border-slate-800 inline-block">
            <ShieldCheck className="w-4 h-4 flex-shrink-0" />
            <span>Government Identification | Income Tax PAN Card</span>
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div>
          <h4 className="font-bold text-base text-white uppercase tracking-wider mb-4 border-b border-[#F2A900]/40 pb-2 inline-block">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm text-slate-300">
            <li><Link to="/about" className="hover:text-[#F2A900] transition-colors">About Us</Link></li>
            <li><Link to="/why-sksp" className="hover:text-[#F2A900] transition-colors">Why SKSP</Link></li>
            <li><Link to="/sustainability" className="hover:text-[#F2A900] transition-colors">Sustainability & Innovation</Link></li>
            <li><Link to="/clients" className="hover:text-[#F2A900] transition-colors">Client Trust Wall</Link></li>
            <li><Link to="/contact" className="hover:text-[#F2A900] transition-colors">Contact Us</Link></li>
          </ul>
        </div>

        {/* Col 3: Key Products */}
        <div>
          <h4 className="font-bold text-base text-white uppercase tracking-wider mb-4 border-b border-[#F2A900]/40 pb-2 inline-block">
            Products
          </h4>
          <ul className="space-y-2 text-sm text-slate-300">
            <li><Link to="/products/rcc-hume-pipes" className="hover:text-[#F2A900] transition-colors">RCC Hume Pipes</Link></li>
            <li><Link to="/products/u-drain" className="hover:text-[#F2A900] transition-colors">RCC U Drains</Link></li>
            <li><Link to="/products/box-culvert" className="hover:text-[#F2A900] transition-colors">Box Culverts</Link></li>
            <li><Link to="/products/rcc-manhole-chambers" className="hover:text-[#F2A900] transition-colors">Manhole Chambers</Link></li>
            <li><Link to="/products/paver-blocks" className="hover:text-[#F2A900] transition-colors">Paver Blocks</Link></li>
            <li><Link to="/products/rcc-septic-tanks" className="hover:text-[#F2A900] transition-colors">Septic Tanks</Link></li>
            <li><Link to="/products" className="text-[#F2A900] hover:underline font-semibold flex items-center pt-1">View All Products <ArrowUpRight className="w-3.5 h-3.5 ml-1" /></Link></li>
          </ul>
        </div>

        {/* Col 4: Contact & Locations */}
        <div>
          <h4 className="font-bold text-base text-white uppercase tracking-wider mb-4 border-b border-[#F2A900]/40 pb-2 inline-block">
            Locations & Contact
          </h4>
          <div className="space-y-3 text-xs text-slate-300">
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#F2A900] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Rajasthan Hubs:</p>
                <p>Kota | Jhalawar | Udaipur</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <MapPin className="w-4 h-4 text-[#F2A900] flex-shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">MP / Central Hubs:</p>
                <p>Narsinghgarh | Betul | Nagpur</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4 text-[#F2A900]" />
              <a href={`tel:${companyInfo.phone}`} className="hover:text-[#F2A900]">{companyInfo.phone}</a>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4 text-[#F2A900]" />
              <a href={`mailto:${companyInfo.email}`} className="hover:text-[#F2A900]">{companyInfo.email}</a>
            </div>
          </div>
        </div>

      </div>

      {/* Footer bottom */}
      <div className="max-w-7xl mx-auto px-4 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
        <p>© {new Date().getFullYear()} Shree Krishna Spun Pipes. All Rights Reserved.</p>
        <div className="flex items-center space-x-6">
          <span className="hover:text-white transition-colors">Compliance & ISO</span>
          <Link to="/support" className="hover:text-white transition-colors">Technical Support</Link>
          <button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
            className="text-[#F2A900] hover:underline font-semibold"
          >
            Request Quote
          </button>
        </div>
      </div>
    </footer>
  );
}
