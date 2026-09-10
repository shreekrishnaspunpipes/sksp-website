import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2, Award, Package } from 'lucide-react';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import { products } from '../data/productsData';
import { companyInfo, clientBase, whyChooseUsPoints } from '../data/companyData';

export default function Home({ onOpenQuoteModal }) {
  const featuredProducts = products.filter(p => 
    ['rcc-hume-pipes', 'u-drain', 'box-culvert', 'rcc-manhole-chambers', 'rcc-septic-tanks', 'rcc-drain-covers'].includes(p.slug)
  );

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <section className="relative bg-[#041A36] text-white min-h-[580px] lg:min-h-[640px] flex items-center overflow-hidden">
        {/* Background Image with Dark Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/images/Homepage-bg-image.png" 
            alt="Shree Krishna Spun Pipes Manufacturing Facility" 
            className="w-full h-full object-cover object-center opacity-30 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041A36] via-[#062A5A]/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20 w-full grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center space-x-2 bg-[#F2A900]/15 border border-[#F2A900]/40 px-3 py-1.5 rounded-full text-xs font-extrabold text-[#F2A900] uppercase tracking-widest">
              <Award className="w-4 h-4" />
              <span>IS:458 & ISO 9001:2015 CERTIFIED MANUFACTURER</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              BUILT FOR THE <span className="text-[#F2A900]">LOAD AHEAD.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              India's premier manufacturer of high-strength precast RCC Hume Pipes, U Drains, Box Culverts, and customized concrete solutions. Engineered for heavy vehicular loads and lifetime durability.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button to="/products" variant="primary" size="lg" icon={ArrowRight}>
                Explore Products
              </Button>
              <Button onClick={() => onOpenQuoteModal && onOpenQuoteModal()} variant="outlineGold" size="lg">
                Request Quote
              </Button>
            </div>

            {/* Key stats strip */}
            <div className="pt-8 grid grid-cols-3 gap-6 border-t border-slate-700/60 max-w-xl">
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#F2A900]">50+</p>
                <p className="text-xs text-slate-300 font-medium">Years Legacy</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">15+</p>
                <p className="text-xs text-slate-300 font-medium">RCC Product Lines</p>
              </div>
              <div>
                <p className="text-2xl sm:text-3xl font-extrabold text-[#F2A900]">6+</p>
                <p className="text-xs text-slate-300 font-medium">State Manufacturing Hubs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Capability / Trust Strip */}
      <section className="bg-white py-8 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {companyInfo.pillars.map((pillar) => (
            <div key={pillar.id} className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center hover:border-[#F2A900]/50 transition-colors">
              <ShieldCheck className="w-6 h-6 text-[#F2A900] mx-auto mb-2" />
              <h4 className="text-xs font-extrabold text-[#062A5A] uppercase">{pillar.title}</h4>
              <p className="text-[11px] text-slate-500 mt-1 leading-tight">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. About Us Preview */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-extrabold text-[#F2A900] uppercase tracking-widest">
              ABOUT SHREE KRISHNA SPUN PIPES
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#062A5A]">
              Pioneering Industrial RCC & Precast Solutions Since Decades
            </h2>
            <div className="w-16 h-1 bg-[#F2A900]" />
            <p className="text-slate-600 leading-relaxed">
              Shree Krishna Spun Pipes is a trusted manufacturer of high-grade Reinforced Cement Concrete (RCC) Hume Pipes and precast products. With modern manufacturing hubs across Rajasthan and Madhya Pradesh, we serve major national highways, expressways, smart cities, and industrial parks.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#F2A900] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#062A5A]">Government Approved</h4>
                  <p className="text-xs text-slate-500">Trusted supplier for PWD, Municipalities & Infrastructure Majors.</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-[#F2A900] flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-[#062A5A]">Advanced Testing</h4>
                  <p className="text-xs text-slate-500">In-house hydrostatic & three-edge bearing load testing lab.</p>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button to="/about" variant="navy" icon={ArrowRight}>
                Read More About Us
              </Button>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src="/images/about-us-page.png" 
                alt="SKSP Precast Pipe Storage Yard" 
                className="w-full h-[400px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#062A5A] text-white p-6 rounded-xl shadow-xl hidden sm:block border-l-4 border-[#F2A900]">
              <p className="text-2xl font-extrabold text-[#F2A900]">IS:458</p>
              <p className="text-xs font-semibold text-slate-200 uppercase">Certified Quality Standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Product Categories */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="PORTFOLIO CATEGORIES"
            title="Comprehensive Precast Product Range"
            description="Explore our specialized concrete offerings categorized by sector requirements."
          />

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                <img src="/images/about-page-infrastructure.png" alt="Infrastructure" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#062A5A] text-white text-xs font-extrabold px-3 py-1 rounded-md uppercase">
                  Infrastructure
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#062A5A]">Infrastructure & Highways</h3>
                  <p className="text-xs text-slate-600 mt-2">IS:458 Hume Pipes (NP2/NP3/NP4), U Drains, Box Culverts, Railway Ballast & Slabs.</p>
                </div>
                <Link to="/products?category=infrastructure" className="text-sm font-bold text-[#062A5A] hover:text-[#F2A900] flex items-center">
                  Explore Infrastructure Products <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                <img src="/images/real-estate.png" alt="Real Estate" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#062A5A] text-white text-xs font-extrabold px-3 py-1 rounded-md uppercase">
                  Real Estate
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#062A5A]">Real Estate & Townships</h3>
                  <p className="text-xs text-slate-600 mt-2">Readymade Septic Tanks, Water Tanks, Manhole Chambers, Kerb Stones, Pavers & Compound Walls.</p>
                </div>
                <Link to="/products?category=real-estate" className="text-sm font-bold text-[#062A5A] hover:text-[#F2A900] flex items-center">
                  Explore Real Estate Products <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>

            <div className="group rounded-2xl overflow-hidden border border-slate-200 bg-slate-50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
              <div className="aspect-[16/10] overflow-hidden relative bg-slate-100">
                <img src="/images/industrial.png" alt="Industrial" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4 bg-[#062A5A] text-white text-xs font-extrabold px-3 py-1 rounded-md uppercase">
                  Industrial
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h3 className="text-xl font-bold text-[#062A5A]">Industrial & Customized</h3>
                  <p className="text-xs text-slate-600 mt-2">Earthing Pits, Guard Posts, Fencing Poles, and Custom Precast Concrete Drawings.</p>
                </div>
                <Link to="/products?category=industrial" className="text-sm font-bold text-[#062A5A] hover:text-[#F2A900] flex items-center">
                  Explore Industrial Products <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Products Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="FEATURED PRODUCTS"
            title="Engineered Concrete Solutions"
            description="Our top-demanded precast products manufactured with high-vibration casting technology."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((p) => (
              <div 
                key={p.slug} 
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#062A5A] p-6 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group relative border-t-4 border-t-[#062A5A] hover:border-t-[#F2A900]"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex items-center gap-1.5 bg-[#062A5A]/10 text-[#062A5A] text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <Package className="w-3.5 h-3.5 text-[#F2A900]" />
                      {p.categoryName}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-extrabold text-[#062A5A] group-hover:text-[#F2A900] transition-colors">
                      {p.name}
                    </h3>
                    <p className="text-xs text-[#F2A900] font-bold leading-snug mt-1">{p.tagline}</p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {p.shortDescription}
                  </p>

                  {p.features && p.features.length > 0 && (
                    <div className="pt-3 border-t border-slate-100 space-y-1.5">
                      {p.features.slice(0, 2).map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-600 font-medium">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#F2A900] flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-4 mt-6 border-t border-slate-100 flex items-center justify-between gap-2">
                  <Link 
                    to={`/products/${p.slug}`} 
                    className="text-xs font-extrabold text-[#062A5A] hover:text-[#F2A900] flex items-center"
                  >
                    View Product Specs <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>

                  <button
                    onClick={() => onOpenQuoteModal && onOpenQuoteModal(p.name)}
                    className="text-xs font-bold text-[#041A36] bg-[#FEF3C7] hover:bg-[#F2A900] border border-[#FDE68A] px-3.5 py-1.5 rounded-lg shadow-sm transition-colors"
                  >
                    Get Quote
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button to="/products" variant="navy" size="lg" icon={ArrowRight}>
              View All 15+ Products
            </Button>
          </div>
        </div>
      </section>

      {/* 6. Why Choose SKSP */}
      <section className="py-20 bg-[#062A5A] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <SectionHeading
            eyebrow="WHY CHOOSE US"
            title="The Shree Krishna Spun Pipes Advantage"
            description="Decades of manufacturing capability, rigorous quality control, and regional reach."
            dark={true}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsPoints.slice(0, 4).map((pt, idx) => (
              <div key={idx} className="bg-[#041A36] p-6 rounded-2xl border border-slate-700/60 space-y-3">
                <div className="w-10 h-10 rounded-lg bg-[#F2A900] text-[#041A36] font-extrabold flex items-center justify-center text-lg">
                  0{idx + 1}
                </div>
                <h4 className="text-lg font-bold text-white">{pt.title}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{pt.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button to="/why-sksp" variant="outlineGold">
              Explore All Company Advantages
            </Button>
          </div>
        </div>
      </section>

      {/* 7. Client Trust Wall */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 text-center mb-8">
          <SectionHeading
            eyebrow="ESTEEMED CLIENTELE"
            title="Trusted by India's Top Infrastructure Leaders"
            description="Proudly supplying high-performance RCC materials to national projects."
          />
        </div>

        {/* 2-Row Moving Carousel with Faded Edges */}
        <div className="relative max-w-7xl mx-auto overflow-hidden px-4">
          {/* Faded Side Gradients */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 md:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 md:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

          {/* Row 1 - Leftward Marquee */}
          <div className="flex w-max space-x-4 mb-4 animate-marquee-left">
            {[...clientBase.slice(0, 8), ...clientBase.slice(0, 8)].map((client, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center font-bold text-xs md:text-sm text-[#062A5A] hover:border-[#F2A900] hover:bg-blue-50 transition-colors shadow-xs flex-shrink-0 whitespace-nowrap"
              >
                {client}
              </div>
            ))}
          </div>

          {/* Row 2 - Rightward Marquee */}
          <div className="flex w-max space-x-4 animate-marquee-right">
            {[...clientBase.slice(8, 16), ...clientBase.slice(8, 16)].map((client, idx) => (
              <div 
                key={idx} 
                className="px-6 py-3.5 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center font-bold text-xs md:text-sm text-[#062A5A] hover:border-[#F2A900] hover:bg-blue-50 transition-colors shadow-xs flex-shrink-0 whitespace-nowrap"
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link to="/clients" className="text-sm font-bold text-[#062A5A] hover:text-[#F2A900] inline-flex items-center">
            View Complete Client List <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </section>

      {/* 8. Conversion Callout CTA */}
      <section className="py-16 bg-[#F2A900] text-[#041A36]">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-extrabold uppercase">Ready to Build Your Project?</h2>
            <p className="text-sm font-semibold max-w-xl">
              Contact our sales engineering team for technical drawings, BOQ estimates, and bulk order pricing for Hume Pipes, U Drains, and Box Culverts.
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => onOpenQuoteModal && onOpenQuoteModal()}
              className="bg-[#041A36] text-white hover:bg-[#062A5A] font-bold text-sm px-6 py-3 rounded-xl shadow-lg transition-all"
            >
              Request a Quotation
            </button>
            <Link to="/contact" className="border-2 border-[#041A36] font-bold text-sm px-6 py-3 rounded-xl hover:bg-[#041A36] hover:text-white transition-all">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
