import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, FileText, ChevronRight } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionHeading from '../components/ui/SectionHeading';
import { products } from '../data/productsData';

export default function ProductDetail({ onOpenQuoteModal }) {
  const { slug } = useParams();

  const product = products.find(p => p.slug === slug);

  if (!product) {
    return (
      <div className="py-24 max-w-7xl mx-auto px-4 text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#062A5A]">Product Not Found</h2>
        <p className="text-slate-600">The product you are looking for does not exist or has been moved.</p>
        <Button to="/products" variant="navy" icon={ArrowLeft}>
          Back to All Products
        </Button>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.slug !== product.slug && (p.category === product.category || p.category === 'infrastructure'))
    .slice(0, 3);

  return (
    <div className="py-8 space-y-16">
      {/* Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4">
        <nav className="flex items-center space-x-2 text-xs font-semibold text-slate-500">
          <Link to="/" className="hover:text-[#062A5A]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/products" className="hover:text-[#062A5A]">Products</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#062A5A] font-bold">{product.name}</span>
        </nav>
      </div>

      {/* 1. Product Hero Section */}
      <section className="max-w-7xl mx-auto px-4 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-3 py-1.5 rounded-full text-xs font-bold text-[#062A5A] uppercase">
            <ShieldCheck className="w-4 h-4 text-[#F2A900]" />
            <span>{product.categoryName}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062A5A]">
            {product.name}
          </h1>

          <p className="text-base text-[#F2A900] font-bold">{product.tagline}</p>

          <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
            {product.description}
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              onClick={() => onOpenQuoteModal && onOpenQuoteModal(product.name)}
              variant="primary"
              size="lg"
              icon={FileText}
            >
              Request a Quote
            </Button>

            <Button to="/contact" variant="navy" size="lg">
              Contact Sales Team
            </Button>
          </div>
        </div>

        <div className="lg:col-span-6">
          <div
            className={`rounded-2xl overflow-hidden shadow-2xl border-4 border-white relative ${
              product.slug === 'railway-stone-ballast' ? 'bg-white' : 'bg-slate-100'
            }`}
          >
            <img
              src={product.slug === 'rcc-hume-pipes' ? '/images/rcc hume pipes-no-label.png' : product.image}
              alt={product.name}
              className={`w-full h-[380px] sm:h-[450px] object-center ${
                product.slug === 'rcc-hume-pipes'
                  ? 'object-cover'
                  : product.slug === 'rcc-drain-covers' || product.slug === 'railway-stone-ballast'
                  ? 'object-contain'
                  : product.slug === 'rcc-manhole-chambers'
                  ? 'object-cover object-center'
                  : product.slug === 'rcc-fencing-poles'
                  ? 'object-cover object-top'
                  : product.slug === 'rcc-boundary-walls'
                  ? 'object-cover object-[30%_center]'
                  : product.slug === 'rcc-earthing-pits'
                  ? 'object-cover object-[65%_center]'
                  : product.slug === 'customized-rcc-products'
                  ? 'object-cover object-[70%_center]'
                  : 'object-cover'
              }`}
            />
            <div className="absolute bottom-4 right-4 bg-[#041A36] text-white text-xs font-bold px-4 py-2 rounded-lg border border-[#F2A900]">
              Certified Manufacturer Quality
            </div>
          </div>
        </div>
      </section>

      {/* 2. Technical Specifications Table */}
      {product.specifications && (
        <section className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-extrabold text-[#062A5A] mb-6 flex items-center space-x-2 border-b border-slate-100 pb-3">
              <span className="w-3 h-3 bg-[#F2A900] rounded-sm" />
              <span>Technical Specifications</span>
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              {product.specifications.map((spec, idx) => (
                <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
                  <p className="text-xs font-bold text-slate-500 uppercase">{spec.label}</p>
                  <p className="text-sm font-extrabold text-[#062A5A]">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 3. Features & Applications Grid */}
      <section className="max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-8">
        {/* Key Features */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
          <h3 className="text-xl font-extrabold text-[#062A5A] border-b border-slate-100 pb-3">
            Key Features
          </h3>
          <ul className="space-y-3">
            {product.features.map((feat, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-[#F2A900] flex-shrink-0 mt-0.5" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Recommended Applications */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm space-y-4">
          <h3 className="text-xl font-extrabold text-[#062A5A] border-b border-slate-100 pb-3">
            Recommended Applications
          </h3>
          <ul className="space-y-3">
            {product.applications.map((app, idx) => (
              <li key={idx} className="flex items-start space-x-3 text-sm text-slate-700">
                <span className="w-2 h-2 rounded-full bg-[#062A5A] mt-2 flex-shrink-0" />
                <span>{app}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. Related Products */}
      {relatedProducts.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 pt-8">
          <SectionHeading
            eyebrow="COMPLEMENTARY PRODUCTS"
            title="Related Concrete Products"
            description="Explore associated RCC solutions frequently deployed in similar infrastructure projects."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((rel) => (
              <div key={rel.slug} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-lg transition-all">
                <img src={rel.image} alt={rel.name} className="w-full h-40 object-cover" />
                <div className="p-5 space-y-3">
                  <h4 className="font-bold text-lg text-[#062A5A]">{rel.name}</h4>
                  <p className="text-xs text-slate-600 line-clamp-2">{rel.shortDescription}</p>
                  <Link to={`/products/${rel.slug}`} className="text-xs font-bold text-[#F2A900] hover:underline flex items-center pt-2">
                    View Product Details <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* RFQ Callout */}
      <section className="bg-[#041A36] text-white py-12 px-4 rounded-2xl max-w-7xl mx-auto text-center space-y-4 border-b-4 border-[#F2A900]">
        <h3 className="text-2xl sm:text-3xl font-extrabold">Need Custom Sizes or Quantity Quotes for {product.name}?</h3>
        <p className="text-slate-300 text-sm max-w-xl mx-auto">
          Our technical team provides BOQ estimates, delivery schedules, and customized RCC casting as per your structural drawings.
        </p>
        <div>
          <Button
            onClick={() => onOpenQuoteModal && onOpenQuoteModal(product.name)}
            variant="primary"
            size="lg"
            icon={FileText}
          >
            Get Instant Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
