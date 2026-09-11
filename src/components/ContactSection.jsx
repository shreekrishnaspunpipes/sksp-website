import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2, Building2 } from 'lucide-react';
import { companyInfo, productsList } from '../data/companyData';

export default function ContactSection({ selectedProductTitle }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: selectedProductTitle || 'RCC HUME PIPES',
    quantity: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        product: 'RCC HUME PIPES',
        quantity: '',
        location: '',
        message: ''
      });
    }, 6000);
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-slate-50 px-4 sm:px-6">
      {/* Outer PDF Border Frame Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-4 border-sksp-navy p-4 md:p-8 shadow-2xl">
        
        {/* Header Title matching PDF Page 22 */}
        <div className="border-b-2 border-slate-200 pb-6 mb-8">
          <div className="flex items-center gap-2 text-amber-500 font-extrabold text-xs uppercase mb-1">
            <Phone className="w-4 h-4" />
            <span>24/7 Bulk Tender & Commercial Support</span>
          </div>

          <h2 className="text-3xl md:text-5xl font-black text-sksp-navy font-heading uppercase tracking-tight">
            Get in Touch <span className="text-sksp-blue">with Us Today!</span>
          </h2>

          <p className="text-sm md:text-base text-slate-600 font-semibold leading-relaxed mt-2">
            Shree Krishna Spun Pipes is your trusted partner for durable, reliable, and innovative RCC solutions.
          </p>
        </div>

        {/* Content Grid: Left Contact Info, Right Interactive Quote Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info matching PDF Page 22 layout */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Website Card */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-sksp-navy transition shadow-sm group">
              <div className="w-12 h-12 rounded-xl bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 shadow group-hover:scale-105 transition-transform">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Official Website</div>
                <a 
                  href={`https://${companyInfo.website}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-base font-extrabold text-sksp-navy hover:text-amber-600 transition"
                >
                  {companyInfo.website}
                </a>
              </div>
            </div>

            {/* Phone Card */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-sksp-navy transition shadow-sm group">
              <div className="w-12 h-12 rounded-xl bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 shadow group-hover:scale-105 transition-transform">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Phone / WhatsApp</div>
                <a 
                  href={`tel:${companyInfo.phone}`}
                  className="text-base font-extrabold text-sksp-navy hover:text-amber-600 transition"
                >
                  {companyInfo.phone}
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="flex items-center gap-4 p-4 bg-slate-50 border-2 border-slate-200 rounded-xl hover:border-sksp-navy transition shadow-sm group">
              <div className="w-12 h-12 rounded-xl bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 shadow group-hover:scale-105 transition-transform">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Email</div>
                <a 
                  href={`mailto:${companyInfo.email}`}
                  className="text-base font-extrabold text-sksp-navy hover:text-amber-600 transition"
                >
                  {companyInfo.email}
                </a>
              </div>
            </div>

            {/* Plant & Address Card */}
            <div className="p-5 bg-sksp-navy text-white rounded-xl border-2 border-amber-500/30 space-y-4 shadow-lg">
              <div className="flex items-center gap-2 text-amber-400 font-extrabold text-xs uppercase border-b border-white/10 pb-2">
                <MapPin className="w-4 h-4" />
                <span>Manufacturing Plant & Works Address</span>
              </div>

              <div className="text-xs text-slate-200 font-medium leading-relaxed">
                <p className="font-extrabold text-white">SHREE KRISHNA SPUN PIPES</p>
                <p>Survey No. 253/2/1/3, 253/2/2, 253/2/4, 346/1/1, 346/1/2,</p>
                <p>Narsinghgarh Pachore Road, Chhota Berasia,</p>
                <p>Tehsil Narsinghgarh, District Rajgarh, MP - 465669</p>
              </div>

              <div className="pt-2 border-t border-white/10 text-xs text-amber-300 font-bold flex items-center gap-2">
                <Building2 className="w-4 h-4" />
                <span>Regional Sales Offices: Kota, Jhalawar, Udaipur & Bhopal</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Project Inquiry Form */}
          <div className="lg:col-span-7 bg-slate-50 border-2 border-slate-300 rounded-xl p-6 shadow-md">
            
            <h3 className="text-xl font-black text-sksp-navy font-heading uppercase mb-1">
              Request Commercial Quote / Technical Spec
            </h3>
            <p className="text-xs text-slate-600 font-medium mb-6">
              Fill out your project details below and our sales engineering team will respond within 2 hours.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 border-2 border-emerald-500 rounded-xl text-center space-y-3 animate-fadeIn">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-lg font-black text-emerald-900 font-heading uppercase">
                  Quote Inquiry Submitted Successfully!
                </h4>
                <p className="text-xs font-semibold text-emerald-800">
                  Thank you for reaching out to Shree Krishna Spun Pipes. Our technical sales representative will call you shortly on your provided phone number.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs font-semibold">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-extrabold uppercase mb-1">
                      Full Name *
                    </label>
                    <input 
                      type="text" 
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-white border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-extrabold uppercase mb-1">
                      Phone / Mobile Number *
                    </label>
                    <input 
                      type="tel" 
                      required
                      placeholder="+91 98290XXXXX"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-white border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-extrabold uppercase mb-1">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full bg-white border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-extrabold uppercase mb-1">
                      Select Required Product *
                    </label>
                    <select
                      value={formData.product}
                      onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                      className="w-full bg-white border border-slate-300 p-2.5 rounded-lg text-xs font-bold text-sksp-navy focus:outline-none focus:border-sksp-navy"
                    >
                      {productsList.map((p) => (
                        <option key={p.id} value={p.title}>
                          {p.title} ({p.certified})
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-slate-700 font-extrabold uppercase mb-1">
                      Quantity Required (e.g. 500 Meters / 20 Units)
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. 300 Meters of 600mm NP3"
                      value={formData.quantity}
                      onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                      className="w-full bg-white border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-700 font-extrabold uppercase mb-1">
                      Project Site Location
                    </label>
                    <input 
                      type="text" 
                      placeholder="e.g. Kota Highway Construction Site"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-white border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-extrabold uppercase mb-1">
                    Project Message / Additional Specs
                  </label>
                  <textarea 
                    rows="3"
                    placeholder="Mention any custom specifications, delivery timeline, or tender details..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-slate-300 p-2.5 rounded-lg text-xs font-medium focus:outline-none focus:border-sksp-navy"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 text-xs font-black uppercase tracking-wider py-3.5 rounded-xl shadow-lg transition flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Tender & Inquiry Form</span>
                </button>

              </form>
            )}

          </div>

        </div>

        {/* Bottom Tagline Banner (Direct PDF Page 22 Banner Reproduction) */}
        <div className="mt-8 bg-sksp-navy text-white rounded-xl p-5 border-2 border-amber-400/40 text-center shadow-lg">
          <p className="text-base md:text-xl font-black uppercase font-heading tracking-wide">
            Shree Krishna Spun Pipes – <span className="text-amber-400">Building Strong Foundations, Securing the Future.</span>
          </p>
        </div>

      </div>
    </section>
  );
}
