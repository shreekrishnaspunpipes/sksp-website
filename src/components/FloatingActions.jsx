import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTop(true);
      } else {
        setShowTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappMessage = encodeURIComponent("Hello Shree Krishna Spun Pipe, I would like to inquire about RCC Pipes and Precast products for my project.");

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      
      {/* Scroll to Top */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-11 h-11 rounded-full bg-[#062A5A] text-white flex items-center justify-center shadow-lg hover:bg-[#041A36] transition-transform hover:scale-110 border border-[#F2A900]/50"
          title="Scroll to Top"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* WhatsApp Quick Inquiry */}
      <a
        href={`https://wa.me/919829039655?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-emerald-600 p-2.5 text-white flex items-center justify-center shadow-xl hover:bg-emerald-500 transition-transform hover:scale-110 border-2 border-white"
        title="Chat on WhatsApp"
        aria-label="WhatsApp chat"
      >
        <img src="/icons/whatsapp.png" alt="WhatsApp" className="w-full h-full object-contain" />
      </a>

      {/* Phone Direct Action */}
      <a
        href={`tel:${companyInfo.phone}`}
        className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#062A5A] p-3 text-white flex items-center justify-center shadow-xl hover:bg-[#041A36] transition-transform hover:scale-110 border-2 border-[#F2A900]"
        title="Call Sales Team"
        aria-label="Call sales team"
      >
        <img src="/icons/phone-call.png" alt="Call Sales Team" className="w-full h-full object-contain filter invert brightness-200" />
      </a>

    </div>
  );
}
