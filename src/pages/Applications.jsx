import { ArrowRight, Truck, Building, Waves, Train, Factory, Wrench } from 'lucide-react';
import Button from '../components/ui/Button';

export default function Applications({ onOpenQuoteModal }) {
  const applicationSectors = [
    {
      id: 'highways',
      title: 'Roads, Expressways & Highways',
      icon: Truck,
      image: '/images/about-page-infrastructure.png',
      description: 'Heavy vehicular traffic cross-drainage culverts, highway median kerb stones, storm water U drains, and protective guard posts built for IRC Class AA loading.',
      products: ['RCC Hume Pipes (NP3/NP4)', 'Precast U Drains', 'Box Culverts', 'Kerb Stones', 'Guard Posts']
    },
    {
      id: 'sewerage',
      title: 'Municipal Drainage & Sewerage',
      icon: Waves,
      image: '/images/rcc hume pipes.png',
      description: 'IS:458 certified underground storm drainage networks, modular sewer manhole chambers, chequered drain covers, and eco-friendly septic systems.',
      products: ['RCC Hume Pipes', 'Manhole Chambers', 'Drain Covers & Slabs', 'Readymade Septic Tanks']
    },
    {
      id: 'irrigation',
      title: 'Irrigation & Agriculture',
      icon: Wrench,
      image: '/images/u drains.png',
      description: 'Agricultural water conveyance pipelines, canal culverts, precast water sumps, and rot-proof fencing posts for field boundary protection.',
      products: ['RCC Hume Pipes', 'U Drains', 'Water Storage Tanks', 'RCC Fencing Poles']
    },
    {
      id: 'railways',
      title: 'Railways & Track Bed Infrastructure',
      icon: Train,
      image: '/images/about-us-page.png',
      description: 'High-density crushed stone ballast, sub-ballast blanket materials, railway line track culverts, and perimeter fencing poles conforming to Indian Railways standards.',
      products: ['Railway Stone Ballast', 'Granular Blanket Material', 'Box Culverts', 'Fencing Poles']
    },
    {
      id: 'real-estate',
      title: 'Real Estate & Smart City Townships',
      icon: Building,
      image: '/images/septic tank & more.png',
      description: 'Architectural interlocking pavers, township compound walls, modular septic tanks, water sumps, and underground utility ducting.',
      products: ['Paver Blocks', 'Boundary Walls', 'Kerb Stones', 'Water Tanks', 'Septic Tanks']
    },
    {
      id: 'industrial',
      title: 'Industrial Plants & Power Sector',
      icon: Factory,
      image: '/images/jacking pipes.png',
      description: 'Transformer grounding earthing pits, shop floor cable trenches, high-capacity waste treatment tanks, and bespoke structural precast concrete elements.',
      products: ['RCC Earthing Pits', 'Custom Precast Elements', 'Drain Covers', 'Boundary Walls']
    }
  ];

  return (
    <div className="py-12 space-y-16">
      {/* Hero */}
      <section className="bg-[#041A36] text-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold text-[#F2A900] tracking-widest uppercase">
            SECTOR APPLICATIONS & USAGE
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold">Applications & Industries Served</h1>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Engineered concrete solutions tailored for National Highways, Municipal Corporations, Railways, Industrial Plants, and Commercial Real Estate developments.
          </p>
        </div>
      </section>

      {/* Application Cards */}
      <section className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applicationSectors.map((sector) => {
            const Icon = sector.icon;
            return (
              <div key={sector.id} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="aspect-[16/10] overflow-hidden relative bg-slate-100 flex-shrink-0">
                  <img
                    src={
                      sector.id === 'sewerage'
                        ? '/images/rcc hume pipes-no-label.png'
                        : sector.id === 'real-estate'
                        ? '/images/septic tank & more-no-label.png'
                        : sector.image
                    }
                    alt={sector.title}
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute top-4 left-4 bg-[#062A5A] text-[#F2A900] p-2.5 rounded-xl shadow-md">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col space-y-4">
                  <div className="space-y-2 flex-grow">
                    <h3 className="text-xl font-bold text-[#062A5A]">{sector.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{sector.description}</p>
                  </div>

                  <div className="mt-auto border-t border-slate-100 pt-4 space-y-2">
                    <p className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">Relevant SKSP Products:</p>
                    <div className="flex flex-wrap gap-1.5">
                      {sector.products.map((item, i) => (
                        <span key={i} className="text-[11px] font-semibold bg-slate-100 text-[#062A5A] px-2.5 py-1 rounded">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#062A5A] text-white py-12 px-4 rounded-2xl max-w-7xl mx-auto text-center space-y-6">
        <h2 className="text-3xl font-extrabold">Have Special Engineering Requirements?</h2>
        <p className="text-slate-300 max-w-xl mx-auto text-sm">
          We manufacture custom RCC precast products tailored to your project's load parameters and CAD drawings.
        </p>
        <div className="flex justify-center gap-4">
          <Button onClick={() => onOpenQuoteModal && onOpenQuoteModal('Custom Applications')} variant="primary" icon={ArrowRight}>
            Submit Custom BOQ / Enquiry
          </Button>
        </div>
      </section>
    </div>
  );
}
