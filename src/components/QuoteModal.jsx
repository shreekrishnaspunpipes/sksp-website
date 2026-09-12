import React, { useState } from 'react';
import { X, Send, CheckCircle2, ShieldCheck, AlertCircle } from 'lucide-react';
import { productsList } from '../data/companyData';
import LocationAutocomplete from './ui/LocationAutocomplete';
import CustomSelect from './ui/CustomSelect';

const WEB3FORMS_ACCESS_KEY = '3f5c005a-9607-420c-a382-8bed22f30667';
const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

const INDIAN_MOBILE_REGEX = /^([6-9])(?!\1{9}$)\d{9}$/;
const PHONE_ERROR_MESSAGE = 'Please enter a valid 10-digit mobile number.';

export default function QuoteModal({ prefilledProduct, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: prefilledProduct || '',
    quantity: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [productError, setProductError] = useState('');

  const handlePhoneChange = (e) => {
    const digitsOnly = e.target.value.replace(/\D/g, '').slice(0, 10);
    setFormData({ ...formData, phone: digitsOnly });
    if (phoneError) setPhoneError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitError('');

    if (!INDIAN_MOBILE_REGEX.test(formData.phone)) {
      setPhoneError(PHONE_ERROR_MESSAGE);
      return;
    }
    setPhoneError('');

    if (!formData.product) {
      setProductError('Please select a product.');
      return;
    }
    setProductError('');

    setSubmitting(true);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: 'Instant Commercial Quote Request - Shree Krishna Spun Pipes',
          from_name: 'Shree Krishna Spun Pipes Website',
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          product: formData.product,
          quantity: formData.quantity,
          location: formData.location,
          message: formData.message
        })
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          onClose();
        }, 3000);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again or call us directly.');
      }
    } catch (error) {
      setSubmitError('Unable to submit your request right now. Please check your connection or call us directly.');
    } finally {
      setSubmitting(false);
    }
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
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="e.g. 9829039655"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  className="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                />
                {phoneError && (
                  <p className="text-red-600 font-semibold mt-1 normal-case">{phoneError}</p>
                )}
              </div>

              <div>
                <label className="block text-slate-700 font-extrabold uppercase mb-1">
                  Select Product *
                </label>
                <CustomSelect
                  required
                  value={formData.product}
                  onChange={(val) => {
                    setFormData({ ...formData, product: val });
                    if (productError) setProductError('');
                  }}
                  placeholder="Select a Product"
                  options={productsList.map((p) => ({ value: p.title, label: p.title }))}
                  buttonClassName="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-bold text-sksp-navy focus:outline-none focus:border-sksp-navy"
                />
                {productError && (
                  <p className="text-red-600 font-semibold mt-1 normal-case">{productError}</p>
                )}
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
                <LocationAutocomplete
                  placeholder="e.g. Kota, Rajasthan"
                  value={formData.location}
                  onChange={(val) => setFormData({ ...formData, location: val })}
                  inputClassName="w-full bg-slate-50 border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
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

            {submitError && (
              <div className="flex items-start space-x-2 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-xs font-semibold">
                <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <span>{submitError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-amber-500 hover:bg-amber-600 disabled:opacity-60 disabled:cursor-not-allowed text-slate-950 text-xs font-black uppercase tracking-wider py-3 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>{submitting ? 'Submitting...' : 'Submit Instant Pricing Request'}</span>
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
