import { useSearchParams, Link } from 'react-router-dom';
import { ArrowRight, Filter, Package, CheckCircle2 } from 'lucide-react';
import { products, productCategories } from '../data/productsData';

export default function Products({ onOpenQuoteModal }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get('category') || 'all';

  const filteredProducts = activeCategory === 'all'
    ? products
    : products.filter(p => p.category === activeCategory);

  const handleCategorySelect = (categoryId) => {
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  return (
    <div className="py-12 space-y-12">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            CERTIFIED PRECAST CONCRETE SOLUTIONS
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Comprehensive Product Portfolio</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            High-strength IS:458 RCC Hume Pipes, Precast U Drains, Box Culverts, Septic Tanks, Paver Blocks, and customized concrete elements manufactured to precise structural standards.
          </p>
        </div>
      </section>

      {/* Main Catalogue Section */}
      <section className="max-w-7xl mx-auto px-4">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {productCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-4 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-[#062A5A] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Product Count Header */}
        <div className="flex items-center justify-between border-b border-slate-200 pb-4 mb-8">
          <p className="text-xs md:text-sm font-bold text-[#062A5A]">
            Showing {filteredProducts.length} Product{filteredProducts.length === 1 ? '' : 's'}
          </p>
          <div className="flex items-center space-x-1 text-xs text-slate-500">
            <Filter className="w-4 h-4 text-[#F2A900]" />
            <span>Category Filter Active</span>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((p) => (
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
      </section>
    </div>
  );
}
