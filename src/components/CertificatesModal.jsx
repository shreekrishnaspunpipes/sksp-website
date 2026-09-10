import React, { useState } from 'react';
import { X, ShieldCheck, CheckCircle2, Award } from 'lucide-react';
import { certificatesList } from '../data/companyData';

export default function CertificatesModal({ cert, onClose }) {
  const [selectedCertId, setSelectedCertId] = useState(cert ? cert.id : certificatesList[0].id);

  const activeCert = certificatesList.find(c => c.id === selectedCertId) || certificatesList[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white border-4 border-sksp-navy rounded-2xl max-w-4xl w-full p-4 md:p-8 shadow-2xl relative my-8 max-h-[90vh] overflow-y-auto custom-scrollbar">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-sksp-navy rounded-full transition shadow"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Modal Header */}
        <div className="border-b-2 border-slate-200 pb-4 mb-6 pr-10">
          <div className="flex items-center gap-2 text-amber-500 font-extrabold text-xs uppercase mb-1">
            <Award className="w-4 h-4" />
            <span>Government Compliance & Statutory Certifications</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-sksp-navy font-heading uppercase">
            Official Registration Documents
          </h2>
        </div>

        {/* Certificate Navigation Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 border-b border-slate-200 custom-scrollbar">
          {certificatesList.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCertId(item.id)}
              className={`px-3 py-2 rounded-lg text-xs font-bold uppercase tracking-wider whitespace-nowrap transition ${
                selectedCertId === item.id
                  ? 'bg-sksp-navy text-white shadow'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {item.title.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Active Certificate Content Viewer (PDF Pages 23-26 simulation) */}
        <div className="bg-slate-50 border-2 border-slate-300 rounded-xl p-6 shadow-inner space-y-6">
          
          {/* Certificate Header Banner */}
          <div className="bg-sksp-navy text-white p-4 rounded-xl flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <span className="bg-amber-500 text-slate-950 font-black text-[10px] px-2 py-0.5 rounded uppercase">
                {activeCert.type}
              </span>
              <h3 className="text-lg md:text-xl font-black font-heading uppercase text-amber-400 mt-1">
                {activeCert.title}
              </h3>
            </div>

            <div className="flex items-center gap-1.5 text-emerald-400 font-extrabold text-xs bg-slate-900/80 px-3 py-1.5 rounded-lg border border-emerald-500/30">
              <CheckCircle2 className="w-4 h-4" />
              <span>Government Verified</span>
            </div>
          </div>

          {/* Document Technical Data Table */}
          <div className="bg-white rounded-xl border border-slate-300 overflow-hidden text-xs">
            <table className="w-full text-left border-collapse">
              <tbody>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-extrabold text-sksp-navy w-1/3 border-r border-slate-200">Legal Enterprise Name</td>
                  <td className="p-3 font-bold text-slate-800 uppercase">{activeCert.legalName || "SHREE KRISHNA SPUN PIPES"}</td>
                </tr>

                <tr className="border-b border-slate-200">
                  <td className="p-3 font-extrabold text-sksp-navy border-r border-slate-200">Registration / Identification No</td>
                  <td className="p-3 font-mono font-black text-sksp-blue text-sm">{activeCert.regNo}</td>
                </tr>

                <tr className="border-b border-slate-200 bg-slate-50">
                  <td className="p-3 font-extrabold text-sksp-navy border-r border-slate-200">Issuing Authority</td>
                  <td className="p-3 font-semibold text-slate-700">{activeCert.issuedBy}</td>
                </tr>

                {activeCert.validity && (
                  <tr className="border-b border-slate-200">
                    <td className="p-3 font-extrabold text-sksp-navy border-r border-slate-200">Validity Period</td>
                    <td className="p-3 font-bold text-slate-800">{activeCert.validity}</td>
                  </tr>
                )}

                {activeCert.scope && (
                  <tr className="border-b border-slate-200 bg-slate-50">
                    <td className="p-3 font-extrabold text-sksp-navy border-r border-slate-200">Certified Scope</td>
                    <td className="p-3 font-semibold text-slate-700">{activeCert.scope}</td>
                  </tr>
                )}

                {activeCert.address && (
                  <tr className="bg-slate-50">
                    <td className="p-3 font-extrabold text-sksp-navy border-r border-slate-200">Principal Address</td>
                    <td className="p-3 font-medium text-slate-700 leading-relaxed">{activeCert.address}</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Certificate Notice Box */}
          <div className="bg-amber-50 border border-amber-200 text-amber-900 p-4 rounded-xl text-xs space-y-1">
            <div className="font-extrabold uppercase flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-600" />
              <span>Statutory Compliance Notice</span>
            </div>
            <p className="font-medium text-amber-800">
              This document is registered under the jurisdiction of Madhya Pradesh State Tax / Govt of India. Original physical copies are available upon request for tender and contract execution.
            </p>
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="mt-6 pt-4 border-t-2 border-slate-200 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-6 py-2.5 bg-sksp-navy text-white text-xs font-bold rounded-lg hover:bg-sksp-blue transition shadow"
          >
            Close Document Viewer
          </button>
        </div>

      </div>
    </div>
  );
}
