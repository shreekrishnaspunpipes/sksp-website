import React from 'react';
import { FileText, ShieldCheck, ExternalLink, CheckCircle2, Lock } from 'lucide-react';
import { certificatesList } from '../data/companyData';

export default function CertificatesSection({ onOpenCertModal }) {
  return (
    <section id="certificates" className="py-12 md:py-16 bg-slate-100 px-4 sm:px-6">
      {/* Outer PDF Border Frame Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-4 border-sksp-navy p-4 md:p-8 shadow-2xl">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 px-4 py-1.5 rounded-full text-xs font-extrabold text-sksp-navy uppercase tracking-widest">
            <ShieldCheck className="w-4 h-4 text-amber-600" />
            <span>Government Compliance & Certifications</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-sksp-navy font-heading uppercase tracking-tight">
            Statutory Registrations & ISO Certification
          </h2>

          <p className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed">
            Fully compliant with Government of India regulations, MSME Udyam, Income Tax, GST, and International Quality Management Systems.
          </p>
        </div>

        {/* Certificates Grid (PDF Pages 23 - 26 representation) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certificatesList.map((cert) => (
            <div 
              key={cert.id}
              className="bg-slate-50 border-2 border-slate-200 hover:border-sksp-navy rounded-xl p-6 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-4 group"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="bg-sksp-navy text-amber-400 font-black text-[10px] px-2.5 py-1 rounded uppercase tracking-wider">
                    {cert.type}
                  </span>
                  <span className="text-xs font-extrabold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Verified & Active
                  </span>
                </div>

                <h3 className="text-lg font-black text-sksp-navy font-heading uppercase leading-snug group-hover:text-amber-600 transition">
                  {cert.title}
                </h3>

                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mt-1">
                  Issued By: {cert.issuedBy}
                </p>

                <div className="mt-4 p-3 bg-white rounded-lg border border-slate-200 space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-slate-500 font-medium">Reg / Cert No:</span>
                    <span className="font-mono font-black text-sksp-navy">{cert.regNo}</span>
                  </div>
                  {cert.validity && (
                    <div className="flex justify-between">
                      <span className="text-slate-500 font-medium">Validity / Status:</span>
                      <span className="font-bold text-slate-700">{cert.validity}</span>
                    </div>
                  )}
                </div>
              </div>

              <button
                onClick={() => onOpenCertModal(cert)}
                className="w-full bg-sksp-navy hover:bg-sksp-blue text-white text-xs font-bold py-2.5 px-4 rounded-lg transition flex items-center justify-center gap-2 shadow"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>View Official Document Details</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </div>
          ))}
        </div>

        {/* Statutory Compliance Footer Box */}
        <div className="mt-8 bg-sksp-lightBlue border border-sksp-navy/20 rounded-xl p-4 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-bold text-sksp-navy">
          <div className="flex items-center gap-2">
            <Lock className="w-4 h-4 text-amber-600" />
            <span>Official Government Registration Details are updated & verified as per Ministry of Corporate Affairs standards.</span>
          </div>

          <button
            onClick={() => onOpenCertModal(null)}
            className="text-sksp-navy hover:text-amber-600 underline font-extrabold uppercase text-[11px] tracking-wider"
          >
            Inspect All 4 Registration Documents
          </button>
        </div>

      </div>
    </section>
  );
}
