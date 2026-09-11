import React from 'react';
import { ShieldCheck, Link2, Clock, Headphones, Users, Factory } from 'lucide-react';
import { companyInfo } from '../data/companyData';

export default function PillarsFooterBar() {
  return (
    <div className="bg-sksp-navy text-white border-t-4 border-amber-500 py-6 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
        
        {companyInfo.pillars.map((pillar, idx) => {
          const icons = [
            <ShieldCheck className="w-5 h-5 text-amber-400 mx-auto" />,
            <Link2 className="w-5 h-5 text-amber-400 mx-auto" />,
            <Clock className="w-5 h-5 text-amber-400 mx-auto" />,
            <Headphones className="w-5 h-5 text-amber-400 mx-auto" />,
            <Users className="w-5 h-5 text-amber-400 mx-auto" />,
            <Factory className="w-5 h-5 text-amber-400 mx-auto" />
          ];

          return (
            <div key={pillar.id} className="p-2 space-y-1">
              {icons[idx]}
              <div className="text-xs font-extrabold uppercase font-heading text-amber-400 tracking-wider">
                {pillar.title}
              </div>
              <div className="text-[10px] text-slate-300 font-medium">
                {pillar.desc}
              </div>
            </div>
          );
        })}

      </div>
    </div>
  );
}
