import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { productsList } from '../data/companyData';

export default function QuoteModal({ prefilledProduct, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: prefilledProduct || 'RCC HUME PIPES',
    quantity: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm overflow-y-auto animate-fadeIn">
      <div className="bg-white border-4 border-sksp-navy rounded-2xl max-w-xl w-full p-6 shadow-2xl relative my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 bg-slate-100 hover:bg-slate-200 text-sksp-navy rounded-full transition shadow"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="border-b-2 border-slate-200 pb-3 mb-4 pr-10">
          <div className="flex items-center gap-2 text-amber-500 font-extrabold text-xs uppercase mb-1">
            <ShieldCheck className="w-4 h-4" />
            <span>Instant Commercial Quote Request</span>
          </div>
          <h3 className="text-xl font-black text-sksp-navy font-heading uppercase">
            Request Quotation
          </h3>
        </div>

        {submitted ? (
          <div className="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-xl text-center space-y-3 animate-fadeIn my-4">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h4 className="text-lg font-black text-emerald-900 font-heading uppercase">
              Quote Request Submitted!
            </h4>
            <p className="text-xs font-semibold text-emerald-800">
              Our engineering team will contact you shortly on {formData.phone || 'your phone number'}.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3.5 text-xs font-semibold">
            
            <div>
              <label className="block text-slate-700 font-extrabold uppercase mb-1">
                Full Name *
              </label>
              <input 
                type="text" 
                required
                placeholder="e.g. Anand Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-extrabold uppercase mb-1">
                  Phone Number *
                </label>
                <input 
                  type="tel" 
                  required
                  placeholder="+91 98290XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-extrabold uppercase mb-1">
                  Select Product *
                </label>
                <select
                  value={formData.product}
                  onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-bold text-sksp-navy focus:outline-none focus:border-sksp-navy"
                >
                  {productsList.map((p) => (
                    <option key={p.id} value={p.title}>
                      {p.title}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-slate-700 font-extrabold uppercase mb-1">
                  Estimated Quantity
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. 500 Rft / 10 Box Culverts"
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                />
              </div>

              <div>
                <label className="block text-slate-700 font-extrabold uppercase mb-1">
                  Site City / State
                </label>
                <input 
                  type="text" 
                  placeholder="e.g. Kota, Rajasthan"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                />
              </div>
            </div>

            <div>
              <label className="block text-slate-700 font-extrabold uppercase mb-1">
                Message / Custom Specs
              </label>
              <textarea 
                rows="2"
                placeholder="Details about project requirement..."
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>Submit Instant Pricing Request</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
