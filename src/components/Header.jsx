import React, { useState, useEffect } from 'react';
import { ShieldCheck, Phone, Menu, X, FileText, ChevronRight } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function Header({ onOpenQuoteModal, onOpenCertModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About Us', href: '#about' },
    { name: 'Products', href: '#products' },
    { name: 'Clients', href: '#clients' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Sustainability', href: '#sustainability' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md transition-all duration-300">
      {/* Top Banner Stripe matching PDF navy header style */}
      <div className="pdf-header-stripe text-white py-1.5 px-4 text-xs font-medium border-b border-blue-900/40">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap justify-center md:justify-start">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-amber-400" />
              <a href={`tel:${companyInfo.phone}`} className="hover:underline text-slate-200">
                {companyInfo.phone}
              </a>
            </span>
            <span className="hidden sm:inline text-slate-400">|</span>
            <span className="hidden sm:inline text-slate-200">
              Email: <a href={`mailto:${companyInfo.email}`} className="hover:underline">{companyInfo.email}</a>
            </span>
            <span className="hidden lg:inline text-slate-400">|</span>
            <span className="hidden lg:inline text-amber-300 font-semibold">
              ISO 9001:2015 Certified & IS:458 Hume Pipe Manufacturer
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => onOpenCertModal(null)}
              className="text-xs text-amber-300 hover:text-white flex items-center gap-1 font-semibold transition"
            >
              <FileText className="w-3.5 h-3.5" />
              Statutory Docs
            </button>
            <span className="text-slate-400">|</span>
            <span className="bg-amber-500 text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] tracking-wide uppercase">
              50+ Years Legacy
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 transition-all duration-200 ${isScrolled ? 'py-2.5' : 'py-3.5'}`}>
        <div className="flex items-center justify-between">
          
          {/* Brand Logo & Name strictly following PDF Page 1 emblem layout */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative flex items-center justify-center p-1 bg-white rounded border border-slate-200 shadow-sm group-hover:border-sksp-navy transition">
              <img 
                src="/logos/logo.png" 
                alt="SKSP Logo" 
                className="h-12 md:h-14 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/logo.svg';
                }}
              />
            </div>
            <div className="border-l-2 border-sksp-navy pl-3 py-0.5">
              <div className="text-lg md:text-2xl font-black tracking-tight text-sksp-navy uppercase font-heading leading-tight flex items-center gap-1">
                SHREE KRISHNA
              </div>
              <div className="text-xs md:text-sm font-bold text-sksp-blue tracking-widest uppercase flex items-center gap-2">
                <span className="h-[1px] w-3 bg-sksp-gold inline-block"></span>
                SPUN PIPE
                <span className="h-[1px] w-3 bg-sksp-gold inline-block"></span>
              </div>
              <div className="text-[9px] md:text-[10px] text-slate-500 font-semibold tracking-wider uppercase mt-0.5">
                STRONG PIPES. STRONGER INFRASTRUCTURE.
              </div>
            </div>
          </a>

          {/* Desktop Right Side Quality Badge & Nav */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Quality Shield Badge matching PDF Header Right Emblem */}
            <div className="flex items-center gap-2.5 px-3 py-1.5 rounded-lg border border-sksp-navy/20 bg-sksp-lightBlue/60">
              <div className="w-8 h-8 rounded-full bg-sksp-navy text-amber-400 flex items-center justify-center shadow">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left text-[11px] leading-tight font-bold text-sksp-navy uppercase tracking-wider">
                <div>QUALITY</div>
                <div>STRENGTH</div>
                <div className="text-amber-600">DURABILITY</div>
              </div>
            </div>

            {/* CTA Button */}
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-sksp-navy hover:bg-sksp-blue text-white px-5 py-2.5 rounded-md font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center gap-2 border border-amber-400/40"
            >
              <span>Get Quote</span>
              <ChevronRight className="w-4 h-4 text-amber-400" />
            </button>
          </div>

          {/* Mobile menu toggle */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={() => onOpenQuoteModal()}
              className="bg-sksp-navy text-white text-xs font-bold px-3 py-2 rounded shadow"
            >
              Quote
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-sksp-navy rounded-lg hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Desktop Links Bar */}
        <nav className="hidden lg:flex items-center justify-between border-t border-slate-200 mt-3 pt-2.5 text-sm font-semibold text-sksp-navy">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-amber-600 transition-colors py-1 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-sksp-gold group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}
          </div>
          <div className="text-xs text-slate-500 font-bold flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Govt. Approved Supplier (PWD / Municipal / MP & RJ)
          </div>
        </nav>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-900 text-white border-t border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <div className="grid grid-cols-2 gap-2 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 bg-slate-800/80 hover:bg-sksp-navy rounded text-slate-200 flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-3.5 h-3.5 text-amber-400" />
              </a>
            ))}
          </div>
          
          <div className="pt-2 border-t border-slate-800 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuoteModal();
              }}
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold py-2.5 rounded text-center text-sm shadow"
            >
              Request Heavy Bulk Quote
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCertModal(null);
              }}
              className="w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-2 rounded text-center text-xs flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              View Statutory GST & ISO Certs
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
