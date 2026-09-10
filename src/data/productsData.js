export const productCategories = [
  { id: 'all', name: 'All Products' },
  { id: 'infrastructure', name: 'Infrastructure & Highways' },
  { id: 'real-estate', name: 'Real Estate & Urban Development' },
  { id: 'industrial', name: 'Industrial & Specialized' },
  { id: 'custom', name: 'Custom Precast Concrete' }
];

export const products = [
  {
    slug: 'rcc-hume-pipes',
    name: 'RCC Hume Pipes',
    category: 'infrastructure',
    categoryName: 'Infrastructure & Highways',
    image: '/images/rcc hume pipes.png',
    tagline: 'IS:458 Certified High-Strength Reinforced Concrete Pipes',
    shortDescription: 'Heavy-duty precast reinforced cement concrete (RCC) pipes engineered for drainage, sewerage, highway culverts, and irrigation projects.',
    description: `Shree Krishna Spun Pipes manufactures premium IS:458 certified RCC Hume Pipes using high-grade spun casting processes. Available in diameters ranging from 150mm to 1200mm, in NP2, NP3, and NP4 pressure classes to withstand heavy traffic and earth loading across highway, railway, and municipal infrastructure projects.`,
    specifications: [
      { label: 'Standard Specification', value: 'IS:458 Compliant' },
      { label: 'Diameter Range', value: '150mm to 1200mm' },
      { label: 'Pressure Classes', value: 'NP2 (Light Duty), NP3 (Medium Duty), NP4 (Heavy Duty Traffic)' },
      { label: 'Joint Types', value: 'Spigot & Socket, Flush Joint, Collar Joint' },
      { label: 'Manufacturing Process', value: 'Centrifugal Spun Casting with High-Vibration Densification' },
      { label: 'Concrete Grade', value: 'M30 - M40 High-Strength Concrete' }
    ],
    features: [
      'IS:458 Certified for guaranteed structural integrity and load resistance',
      'Leak-proof joint engineering preventing soil contamination and water seepage',
      'High resistance to corrosive effluents and severe chemical weathering',
      'Exceptional hydraulic flow characteristics due to smooth inner barrel surfaces',
      'Engineered for long service life with minimal structural maintenance'
    ],
    applications: [
      'National Highways & Expressway Road Cross-Drainage',
      'Municipal Drainage & Underground Stormwater Networks',
      'Agricultural Irrigation Canals & Water Transfer Pipelines',
      'Industrial Effluent Discharge & Sewerage Lines',
      'Railway Track Embankment Culverts'
    ],
    benefits: [
      'High Durability under heavy wheel loads (IRC Class AA & 70R loading)',
      'Leak-proof design ensures zero ground contamination',
      'Low maintenance cost over 50+ year operational lifespan'
    ]
  },
  {
    slug: 'u-drain',
    name: 'RCC U Drains',
    category: 'infrastructure',
    categoryName: 'Infrastructure & Highways',
    image: '/images/u drains.png',
    tagline: 'High-Capacity Precast Concrete Surface Drainage Channels',
    shortDescription: 'Prefabricated RCC U-shaped channels designed for rapid storm water clearance along highways, municipal roads, and industrial parks.',
    description: `Precast RCC U Drains engineered for efficient surface runoff management. Manufactured using high-strength concrete to deliver superior structural stability, uniform channel dimensions, and rapid installation over traditional cast-in-situ drains.`,
    specifications: [
      { label: 'Concrete Grade', value: 'M30 / M35 Grade Concrete' },
      { label: 'Wall Thickness', value: '75mm to 150mm (Customizable)' },
      { label: 'Standard Length', value: '1.0m to 2.5m per segment' },
      { label: 'Cover Compatibility', value: 'Compatible with Perforated & Solid Precast Slabs' },
      { label: 'Load Rating', value: 'Heavy Duty Road Traffic Compatible' }
    ],
    features: [
      'High-strength concrete formulation resistant to scour and abrasion',
      'Smooth inner channel walls for maximum hydraulic flow rate',
      'Rapid, plug-and-play installation saving site labor and project timelines',
      'Precision jointing ensuring seamless water flow and zero leakage',
      'Durable under freeze-thaw and intense heat conditions'
    ],
    applications: [
      'Roads, Highways & Urban Expressways',
      'Residential Complexes & Township Road Networks',
      'Industrial Parks & Manufacturing Facility Grounds',
      'Agriculture Land Water Conveyance'
    ],
    benefits: [
      'Saves up to 60% construction time compared to cast-in-situ drains',
      'Efficient, obstruction-free stormwater clearance',
      'Cost-effective lifecycle maintenance'
    ]
  },
  {
    slug: 'box-culvert',
    name: 'RCC Box Culverts',
    category: 'infrastructure',
    categoryName: 'Infrastructure & Highways',
    image: '/images/box culverts.png',
    tagline: 'Heavy-Duty Modular Precast Box Structures for Waterways & Crossings',
    shortDescription: 'Modular precast RCC box culverts designed for stream crossings, vehicular subways, utility ducts, and high-capacity drainage systems.',
    description: `Precast RCC Box Culverts offer an eco-friendly and rapid construction solution for replacing old bridges or creating heavy-duty water conduits under highways and railways. Engineered to withstand high soil pressures and IRC loading standards.`,
    specifications: [
      { label: 'Span & Height', value: 'Custom spans up to 4.0m x 4.0m single cell' },
      { label: 'Structural Rating', value: 'Designed for IRC Class AA & Class 70R Loading' },
      { label: 'Concrete Grade', value: 'M35 / M40 High-Performance Precast Concrete' },
      { label: 'Joint Sealing', value: 'Mastic / Rubber Gasket Sealants' }
    ],
    features: [
      'Exceptional load-bearing capacity under heavy vehicular traffic',
      'Monolithic precast design delivering uniform stress distribution',
      'Rapid installation reducing traffic diversions and road closure time',
      'Smooth rectangular interior optimizing water flow capacity'
    ],
    applications: [
      'Roads, Expressways & Railway Line Crossings',
      'Stormwater Channels & Stream Diversions',
      'Utility & Power Cable Ducts',
      'Pedestrian & Light Vehicle Subways'
    ],
    benefits: [
      'Drastically reduces construction site blockage',
      'Exceptional hydraulic performance and high strength',
      'Cost-effective solution over steel or cast-in-place structures'
    ]
  },
  {
    slug: 'rcc-manhole-chambers',
    name: 'RCC Manhole Chambers',
    category: 'real-estate',
    categoryName: 'Real Estate & Urban Development',
    image: '/images/septic tank & more.png',
    tagline: 'Precast Modular Manhole Chambers for Underground Sewer Utilities',
    shortDescription: 'Factory-engineered modular precast RCC manhole rings, base units, and conical covers for sewer networks and telecommunication vaults.',
    description: `Engineered precast RCC Manhole Chambers offer standard dimensional accuracy, tight seals against groundwater ingress, and structural resilience against earth movement and traffic impact. Ideal for smart city sewerage projects.`,
    specifications: [
      { label: 'Internal Diameters', value: '600mm, 900mm, 1200mm, 1500mm' },
      { label: 'Concrete Grade', value: 'M30 / M35 High Density' },
      { label: 'Chamber Types', value: 'Circular & Rectangular Precast Sections' },
      { label: 'Cover Compatibility', value: 'Heavy Duty SFRC / Ductile Iron Cover Frames' }
    ],
    features: [
      'Monolithic leak-proof base and modular wall rings',
      'Pre-formed step rungs and benching channels available',
      'Quick stacking assembly reducing underground excavation holding time',
      'Resistant to H2S gas corrosion and acidic domestic sewage'
    ],
    applications: [
      'Municipal Sewerage & Underground Sanitation Pipelines',
      'Smart City Infrastructure & Cable Junction Vaults',
      'Commercial Real Estate & Industrial Waste Management'
    ],
    benefits: [
      'Quick, safe installation in tight urban corridors',
      'Zero groundwater infiltration or sewage leakage',
      'Long maintenance-free service life'
    ]
  },
  {
    slug: 'paver-blocks',
    name: 'Interlocking Paver Blocks',
    category: 'real-estate',
    categoryName: 'Real Estate & Urban Development',
    image: '/images/half round pipes.png',
    tagline: 'High Load-Bearing Architectural & Heavy-Duty Concrete Pavers',
    shortDescription: 'High-density vibrated concrete paver blocks available in various shapes, thicknesses, and colors for commercial and heavy traffic zones.',
    description: `Architectural and heavy-duty precast interlocking paver blocks manufactured using hydraulic press technology. Built for extreme load distribution, skid resistance, and visual appeal across commercial driveways, ports, and public walkways.`,
    specifications: [
      { label: 'Thickness Options', value: '60mm, 80mm, 100mm' },
      { label: 'Compressive Strength', value: 'M30 to M50 Grade Concrete' },
      { label: 'Patterns', value: 'Zig-Zag, I-Shape, Hexagonal, Rectangular' },
      { label: 'Color Options', value: 'Natural Grey, Red, Yellow, Charcoal Black' }
    ],
    features: [
      'High load-bearing capacity suitable for container yards and heavy trucks',
      'Weather-resistant, slip-resistant surface finish',
      'Easy spot repairs and re-laying capability without structural wastage',
      'Eco-friendly permeable drainage surface options available'
    ],
    applications: [
      'Industrial Premises & Freight Terminal Storage Yards',
      'Commercial Building Approach Roads & Parking Areas',
      'Pedestrian Pathways, Parks & Public Plazas'
    ],
    benefits: [
      'Aesthetic flexibility with structural durability',
      'High resistance to oil spills and mechanical abrasion',
      'Low maintenance and long-lasting color fastness'
    ]
  },
  {
    slug: 'kerb-stones',
    name: 'Precast Kerb Stones',
    category: 'real-estate',
    categoryName: 'Real Estate & Urban Development',
    image: '/images/about-us-page.png',
    tagline: 'Precision Moulded Concrete Kerbs for Road Edge & Landscape Edging',
    shortDescription: 'Durable precast RCC kerb stones designed for highway medians, footpath edging, and landscape containment.',
    description: `High-grade precast concrete kerb stones manufactured with hydraulic press precision for uniform straight edges, high impact resistance, and clean aesthetics along highways, gardens, and urban streets.`,
    specifications: [
      { label: 'Concrete Strength', value: 'M25 / M30 Hydraulic Pressed' },
      { label: 'Standard Sizes', value: '300x300x150mm, 450x300x150mm (Customizable)' },
      { label: 'Profiles', value: 'Full Batter, Half Batter, Bullnose, Flush Kerbs' }
    ],
    features: [
      'Clean finish with sharp dimensional accuracy',
      'High resistance to vehicular impact and edge chipping',
      'Weather-resistant against monsoon moisture and extreme heat'
    ],
    applications: [
      'National Highway Central Medians & Road Margins',
      'Urban Footpaths, Townships & Commercial Complexes',
      'Landscaped Public Gardens & Parking Facilities'
    ],
    benefits: [
      'Enhances traffic safety and road boundary visibility',
      'Quick alignment laying along road edges',
      'Robust weather resistance'
    ]
  },
  {
    slug: 'rcc-septic-tanks',
    name: 'Readymade RCC Septic Tanks',
    category: 'real-estate',
    categoryName: 'Real Estate & Urban Development',
    image: '/images/septic tank & more.png',
    tagline: 'Prefabricated Eco-Friendly Underground Waste Treatment Tanks',
    shortDescription: 'Pre-assembled, leak-proof RCC septic tanks designed for quick installation in residential, commercial, and rural housing setups.',
    description: `Shree Krishna Spun Pipes offers readymade RCC Septic Tanks designed for immediate plug-and-play installation. Manufactured with reinforced dense concrete to eliminate traditional masonry septic tank leakages and long curing delays.`,
    specifications: [
      { label: 'Capacity Range', value: '1,000 Liters to 15,000 Liters' },
      { label: 'Concrete Grade', value: 'M30 Reinforced Precast Concrete' },
      { label: 'Chamber Configuration', value: 'Multi-Chamber Anaerobic Settling System' },
      { label: 'Structural Seal', value: '100% Water-Tight Hydrostatic Testing' }
    ],
    features: [
      'Pre-fitted baffle walls for optimum solid settling and clear liquid outflow',
      'Zero ground water contamination guarantee',
      'Ready to use within 24 hours of excavation placement',
      'Custom capacities available for large commercial or industrial worker camps'
    ],
    applications: [
      'Residential Housing Societies & Individual Bungalows',
      'Commercial Complexes, Resorts & Educational Institutes',
      'Industrial Factories & Labor Housing Projects'
    ],
    benefits: [
      'Eliminates months of brick masonry work',
      '100% leak-proof and root-penetration resistant',
      'Eco-friendly waste settlement design'
    ]
  },
  {
    slug: 'rcc-water-tanks',
    name: 'Readymade RCC Water Tanks',
    category: 'real-estate',
    categoryName: 'Real Estate & Urban Development',
    image: '/images/about-page-infrastructure.png',
    tagline: 'Hygienic & Heavy-Duty Precast Water Storage Structures',
    shortDescription: 'Underground and surface precast RCC water tanks engineered for clean drinking water storage and agricultural reserves.',
    description: `Engineered precast RCC Water Storage Tanks manufactured with non-toxic food-grade concrete mixes. Built for maximum structural stability against soil uplift and extreme summer temperatures, preserving water coolness and quality.`,
    specifications: [
      { label: 'Storage Capacities', value: '2,000 to 20,000+ Liters' },
      { label: 'Concrete Safety', value: 'Non-Toxic Food-Grade Mineral Concrete' },
      { label: 'Wall Reinforcement', value: 'High Tensile Steel Rebar Framework' }
    ],
    features: [
      'Algae-resistant interior concrete lining',
      'Superior thermal insulation keeping stored water cool in peak summers',
      'Corrosion and rust-free compared to plastic or steel overhead tanks'
    ],
    applications: [
      'Domestic Overhead & Underground Water Storage',
      'Agricultural Drip & Sprinkler Water Sump Systems',
      'Firefighting Water Storage Reserves in Industrial Plants'
    ],
    benefits: [
      'Maintains natural water temperature year-round',
      'Indestructible structural longevity',
      'Zero maintenance requirement'
    ]
  },
  {
    slug: 'rcc-fencing-poles',
    name: 'RCC Fencing Poles',
    category: 'industrial',
    categoryName: 'Industrial & Specialized',
    image: '/images/jacking pipes.png',
    tagline: 'Prestressed & Reinforced Concrete Posts for Perimeter Protection',
    shortDescription: 'High-strength precast concrete poles engineered for agricultural, industrial, and highway boundary wire fencing.',
    description: `Pre-stressed and reinforced RCC Fencing Poles built to replace wooden or iron posts that rot or corrode over time. Designed with pre-formed wire holes or hooks for easy barbed wire and chain-link mesh mounting.`,
    specifications: [
      { label: 'Height Range', value: '6 feet to 10 feet' },
      { label: 'Cross Section', value: '4"x4" tapered or uniform rectangular' },
      { label: 'Pre-Formed Slots', value: '4 to 7 Barbed Wire Holes' }
    ],
    features: [
      '100% Weatherproof – zero rot, rust, or termite degradation',
      'High bending strength against cattle impact and strong winds',
      'Cost-effective bulk solution for expansive boundary security'
    ],
    applications: [
      'Agricultural Land Boundary Fencing',
      'Industrial Plant Perimeter Boundaries',
      'Solar Power Park & Railway Line Protection Fencing'
    ],
    benefits: [
      'One-time lifetime investment with zero maintenance',
      'Easy wire anchoring through pre-moulded holes',
      'High resistance to coastal and humid environments'
    ]
  },
  {
    slug: 'rcc-drain-covers',
    name: 'RCC Drain Covers & Slabs',
    category: 'infrastructure',
    categoryName: 'Infrastructure & Highways',
    image: '/images/jacking pipes.png',
    tagline: 'Heavy-Duty Steel Reinforced Concrete Drain Covers & Trench Slabs',
    shortDescription: 'Precast heavy-duty RCC covers and perforated slabs for storm channels, utility trenches, and footpath crossings.',
    description: `Heavy load-bearing precast RCC Drain Covers designed for seamless placement over storm drains and utility trenches. Available with anti-slip patterns and perforated lifting holes for easy cleaning and inspection access.`,
    specifications: [
      { label: 'Load Rating', value: 'Heavy Vehicular Traffic (EHD) & Light Pedestrian' },
      { label: 'Reinforcement', value: 'Steel Mesh Reinforced M35 Concrete' },
      { label: 'Surface Finish', value: 'Chequered / Anti-Slip Textured' }
    ],
    features: [
      'Anti-slip surface pattern preventing vehicle skidding',
      'High impact resistance under heavy axle loads',
      'Pre-formed lifting holes for convenient maintenance lifting'
    ],
    applications: [
      'Municipal Drainage Channels',
      'Factory Shop Floor Utility Trenches',
      'Gas & Electric Cable Protection Slabs'
    ],
    benefits: [
      'Ensures public and vehicle safety over open drains',
      'Heavy-duty load capacity',
      'Custom sizes made to site order'
    ]
  },
  {
    slug: 'rcc-boundary-walls',
    name: 'RCC Precast Boundary Walls',
    category: 'real-estate',
    categoryName: 'Real Estate & Urban Development',
    image: '/images/half round pipes.png',
    tagline: 'Interlocking Precast Concrete Wall Panels & Columns',
    shortDescription: 'Quick-install precast RCC compound wall systems for fast, durable perimeter security around industrial and residential lands.',
    description: `Precast RCC Boundary Walls consist of vertical columns with grooves and horizontal interlocking precast concrete panels. Designed for speed, structural strength, and high cost savings compared to traditional brick wall construction.`,
    specifications: [
      { label: 'Wall Height Options', value: '5ft, 6ft, 7ft, 8ft, 10ft' },
      { label: 'Panel Dimensions', value: '7ft Length x 1ft Height x 50mm Thickness' },
      { label: 'Concrete Strength', value: 'M30 Reinforced Concrete' }
    ],
    features: [
      'Installs 5x faster than brick masonry walls',
      'Re-usable and shiftable if site boundaries expand in future',
      'Attractive textured patterns available (brick texture, wood finish, plain)'
    ],
    applications: [
      'Industrial Factories & Warehouse Plots',
      'Residential Real Estate & Gated Colonies',
      'Solar Power Plants & Agricultural Land Security'
    ],
    benefits: [
      'Saves over 50% cost compared to brick masonry wall',
      'Requires zero water curing on site',
      'Immediate physical security'
    ]
  },
  {
    slug: 'railway-stone-ballast',
    name: 'Crusher Stone, Ballast & Railway Blanket',
    category: 'industrial',
    categoryName: 'Industrial & Specialized',
    image: '/images/about-page-infrastructure.png',
    tagline: 'Indian Railway Specification Crushed Stone Ballast & Granular Blanket',
    shortDescription: 'High-density crushed stone aggregates and sub-ballast blanket materials conforming to Indian Railways standards.',
    description: `Shree Krishna Spun Pipes operates specialized aggregate crushing plants supplying high-grade stone ballast and sub-ballast blanket material for railway track construction, highway foundations, and heavy concrete works.`,
    specifications: [
      { label: 'Standard', value: 'Conforms to RDSO / Indian Railway Specs' },
      { label: 'Aggregate Sizes', value: '50mm Track Ballast, 20mm, 10mm, Crusher Dust' },
      { label: 'Abrasion Value', value: 'Los Angeles Abrasion Value < 30%' },
      { label: 'Impact Value', value: 'Aggregate Impact Value < 20%' }
    ],
    features: [
      'High angularity ensuring interlocking stability under high-speed trains',
      'Low water absorption and high crushing strength',
      'Conforms strictly to Indian Railway Track Specs'
    ],
    applications: [
      'Indian Railway Track Bed Ballasting',
      'Highway Sub-Base & Foundation Granular Layers',
      'Ready Mix Concrete (RMC) Manufacturing'
    ],
    benefits: [
      'Ensures track load distribution and ballast drainage',
      'High resistance to traffic wear and weathering',
      'Large-scale supply capability'
    ]
  },
  {
    slug: 'rcc-earthing-pits',
    name: 'RCC Earthing Pits',
    category: 'industrial',
    categoryName: 'Industrial & Specialized',
    image: '/images/industrial.png',
    tagline: 'Precast Protective Covers for Electrical & Lightning Protection Pits',
    shortDescription: 'Heavy-duty precast RCC earthing pit chambers for electrical substations and industrial grounding systems.',
    description: `Precast RCC Earthing Pit Chambers designed to protect delicate electrical earthing electrodes from environmental damage while allowing quick inspection. Pre-moulded with handle slots and removable covers.`,
    specifications: [
      { label: 'Pit Dimensions', value: '300x300mm, 450x450mm, 600x600mm' },
      { label: 'Concrete Rating', value: 'M25 Reinforced Concrete' },
      { label: 'Cover Type', value: 'Heavy Duty Precast Lid with Inspection Hole' }
    ],
    features: [
      'Corrosion resistant protection for electrical grounding rods',
      'Removable top lid for easy earth resistance testing',
      'Weather-tight design preventing pit mud filling'
    ],
    applications: [
      'Electrical Substations & Power Distribution Centers',
      'Industrial Plant Electrical Grounding Systems',
      'Telecommunication Tower Lightning Arrester Pits'
    ],
    benefits: [
      'Protects critical grounding equipment',
      'Easy maintenance testing access',
      'Precast readiness for quick site deployment'
    ]
  },
  {
    slug: 'rcc-guard-posts',
    name: 'RCC Guard Posts',
    category: 'industrial',
    categoryName: 'Industrial & Specialized',
    image: '/images/about-us-page.png',
    tagline: 'Robust Precast Concrete Security Posts & Highway Markers',
    shortDescription: 'Precast reinforced concrete guard posts for highway curve safety markers, security perimeters, and boundary demarcation.',
    description: `High-strength precast RCC Guard Posts engineered for road safety visibility along sharp mountain curves, embankment edges, and security checkpoint barriers. Finished with high-reflectivity paint grooves.`,
    specifications: [
      { label: 'Post Dimensions', value: '1.2m to 1.8m height' },
      { label: 'Concrete Class', value: 'M30 Reinforced Precast' },
      { label: 'Finish', value: 'Pre-coated Safety Yellow/Black or Plain Grey' }
    ],
    features: [
      'High impact resistance absorbing vehicle scuffs',
      'Pre-cast anchor base for solid underground embedment',
      'Weather-resistant paint retention'
    ],
    applications: [
      'Highway Sharp Curve & Embankment Edge Markers',
      'Security Gate Communities & Industrial Checkpoints',
      'Institutional Campus Perimeter Protection'
    ],
    benefits: [
      'Improves night traffic safety and boundary visibility',
      'Quick installation',
      'Zero maintenance required'
    ]
  },
  {
    slug: 'customized-rcc-products',
    name: 'Customized RCC Products',
    category: 'custom',
    categoryName: 'Custom Precast Concrete',
    image: '/images/industrial.png',
    tagline: 'Bespoke Engineered Precast Concrete Elements to Architectural Specs',
    shortDescription: 'Custom precast RCC components manufactured to client drawings, including heavy foundation blocks, cable ducts, and structural members.',
    description: `Shree Krishna Spun Pipes partners with infrastructure contractors, municipal bodies, and private developers to manufacture custom-engineered precast concrete elements tailored to specific project drawings and stress parameters.`,
    specifications: [
      { label: 'Design Service', value: 'Fabrication based on Client CAD/Structural Drawings' },
      { label: 'Concrete Range', value: 'M30 up to M50 Self-Compacting Concrete' },
      { label: 'Testing', value: 'In-House Hydrostatic & Compressive Testing Lab' }
    ],
    features: [
      'Precision steel mould fabrication for complex geometry',
      'Dedicated quality testing and structural strength certification',
      'Scalable manufacturing capacity for mega infrastructure orders'
    ],
    applications: [
      'Specialized Bridge & Flyover Structural Components',
      'Thermal Power Plant Water Intake Structures',
      'Industrial Custom Machinery Footings & Ducts'
    ],
    benefits: [
      'Tailor-made structural compliance',
      'Full technical support from casting to delivery',
      'Guaranteed high-grade concrete quality'
    ]
  }
];

export const featuredProductsSlugs = [
  'rcc-hume-pipes',
  'u-drain',
  'box-culvert',
  'rcc-manhole-chambers',
  'rcc-septic-tanks',
  'rcc-drain-covers'
];
