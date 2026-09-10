import React, { useState } from 'react';
import { Phone, Mail, Globe, MapPin, Send, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import { companyInfo } from '../data/companyData';
import { products } from '../data/productsData';

export default function Contact({ selectedProductTitle = '' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    product: selectedProductTitle || '',
    quantity: '',
    location: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="py-12 space-y-16">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            GET IN TOUCH WITH US TODAY
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Contact Sales & Technical Support</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Have a project requirement or need technical drawings for Hume Pipes, U Drains, or Box Culverts? Connect with our sales engineering team.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Info + Form */}
      <section className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12">
        {/* Left Column: Direct Contact Info */}
        <div className="lg:col-span-5 space-y-8">
          <div>
            <h2 className="text-2xl font-extrabold text-[#062A5A]">Corporate Office & Sales</h2>
            <div className="w-12 h-1 bg-[#F2A900] mt-2 mb-4" />
            <p className="text-xs text-slate-600 leading-relaxed">
              Reach out via phone, email, or by filling out the enquiry form. Our technical team responds within 24 business hours.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-3 bg-[#062A5A] text-[#F2A900] rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Phone & WhatsApp</p>
                <a href={`tel:${companyInfo.phone}`} className="text-base font-extrabold text-[#062A5A] hover:text-[#F2A900]">
                  {companyInfo.phone}
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">Mon–Sat: 9:00 AM – 7:00 PM</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-3 bg-[#062A5A] text-[#F2A900] rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Official Email</p>
                <a href={`mailto:${companyInfo.email}`} className="text-base font-extrabold text-[#062A5A] hover:text-[#F2A900] break-all">
                  {companyInfo.email}
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">Send BOQ & drawings directly</p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-4 rounded-xl bg-slate-50 border border-slate-200">
              <div className="p-3 bg-[#062A5A] text-[#F2A900] rounded-xl">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase">Official Portal</p>
                <p className="text-base font-extrabold text-[#062A5A]">
                  {companyInfo.website}
                </p>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#062A5A] text-white space-y-3">
              <h3 className="font-bold text-sm text-[#F2A900] flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span>Manufacturing Facilities</span>
              </h3>
              <div className="text-xs text-slate-300 space-y-1">
                <p><strong className="text-white">Rajasthan Hubs:</strong> Kota, Jhalawar, Udaipur</p>
                <p><strong className="text-white">MP / Central Hubs:</strong> Narsinghgarh, Betul, Nagpur</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7 bg-white p-8 rounded-2xl border border-slate-200 shadow-md">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#062A5A]">Enquiry Received!</h3>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you for contacting Shree Krishna Spun Pipes. Our engineering sales team will review your requirement and get back to you shortly.
              </p>
              <Button onClick={() => setSubmitted(false)} variant="navy">
                Submit Another Inquiry
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="text-2xl font-extrabold text-[#062A5A]">Project Inquiry Form</h3>
                <p className="text-xs text-slate-500 mt-1">Fill out your details to receive pricing, specifications, or CAD drawings.</p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#062A5A] uppercase mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rajesh Sharma"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#062A5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#062A5A] uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +91 9829039655"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#062A5A] focus:outline-none"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#062A5A] uppercase mb-1">Email Address</label>
                  <input
                    type="email"
                    placeholder="e.g. rajesh@construction.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#062A5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#062A5A] uppercase mb-1">Product Interest *</label>
                  <select
                    required
                    value={formData.product}
                    onChange={(e) => setFormData({ ...formData, product: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#062A5A] focus:outline-none bg-white"
                  >
                    <option value="">Select a Product</option>
                    {products.map((p) => (
                      <option key={p.slug} value={p.name}>{p.name}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-[#062A5A] uppercase mb-1">Estimated Quantity</label>
                  <input
                    type="text"
                    placeholder="e.g. 500 meters / 50 pcs"
                    value={formData.quantity}
                    onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#062A5A] focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-[#062A5A] uppercase mb-1">Project Site Location</label>
                  <input
                    type="text"
                    placeholder="e.g. Kota, Rajasthan"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#062A5A] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-[#062A5A] uppercase mb-1">Project Details / Message</label>
                <textarea
                  rows="4"
                  placeholder="Provide specifications, diameter class (e.g. NP3/NP4), delivery timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-lg border border-slate-300 text-sm focus:ring-2 focus:ring-[#062A5A] focus:outline-none"
                />
              </div>

              <Button type="submit" variant="primary" size="lg" icon={Send} className="w-full">
                Submit Project Inquiry
              </Button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
