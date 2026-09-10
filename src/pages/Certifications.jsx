import Button from '../components/ui/Button';
import { certificatesList } from '../data/companyData';
import { ShieldCheck, Award, Lock, ArrowRight } from 'lucide-react';

export default function Certifications({ onOpenQuoteModal }) {
  return (
    <div className="py-12 space-y-16">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            COMPLIANCE & QUALITY CERTIFICATIONS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Government & Quality Accreditations</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Shree Krishna Spun Pipes operates under ISO 9001:2015 Quality Management standards and official statutory registrations.
          </p>
        </div>
      </section>

      {/* Certifications Cards */}
      <section className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {certificatesList.map((cert) => (
            <div 
              key={cert.id} 
              className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition-all space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2 bg-blue-50 text-[#062A5A] px-3 py-1 rounded-full text-xs font-extrabold">
                    <Award className="w-4 h-4 text-[#F2A900]" />
                    <span>{cert.type}</span>
                  </div>
                  <span className="text-xs font-bold text-[#F2A900]">
                    Official Document
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[#062A5A]">{cert.title}</h3>
                
                <div className="space-y-2 text-sm text-slate-600 border-t border-slate-100 pt-4">
                  <p><strong className="text-[#062A5A]">Issuing Authority:</strong> {cert.issuedBy}</p>
                  <p><strong className="text-[#062A5A]">Registration / Cert No:</strong> <code className="bg-slate-100 px-2 py-0.5 rounded text-xs font-mono text-[#062A5A]">{cert.regNo}</code></p>
                  {cert.validity && <p><strong className="text-[#062A5A]">Validity / Tenure:</strong> {cert.validity}</p>}
                  {cert.scope && <p><strong className="text-[#062A5A]">Certified Scope:</strong> {cert.scope}</p>}
                  {cert.legalName && <p><strong className="text-[#062A5A]">Entity Name:</strong> {cert.legalName}</p>}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span className="flex items-center space-x-1">
                  <Lock className="w-3.5 h-3.5 text-slate-400" />
                  <span>Public Verification Record</span>
                </span>
                <span className="font-semibold text-[#062A5A]">Verified Compliant</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Security Note */}
      <section className="bg-slate-50 py-12">
        <div className="max-w-4xl mx-auto px-4 text-center space-y-3">
          <ShieldCheck className="w-8 h-8 text-[#F2A900] mx-auto" />
          <h3 className="text-lg font-bold text-[#062A5A]">Need Certified Copies for Vendor Empanelment?</h3>
          <p className="text-xs text-slate-600">
            For official tender submission or vendor registration documents, please contact our administrative team directly with your organization details.
          </p>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#062A5A] text-white py-12 px-4 rounded-2xl max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Submit a Tender or Procurement Enquiry</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          Get in touch with our team for tender compliance documents, IS:458 test reports, and BOQ quotes.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => onOpenQuoteModal && onOpenQuoteModal()} variant="primary" icon={ArrowRight}>
            Request Tender Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
