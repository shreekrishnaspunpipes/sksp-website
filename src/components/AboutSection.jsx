import React from 'react';
import { CheckSquare, MapPin, ShieldCheck, Link2, Clock, Headphones, Users, Factory, Award } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-12 md:py-16 bg-slate-50 px-4 sm:px-6">
      {/* Outer PDF Border Frame Container */}
      <div className="max-w-7xl mx-auto bg-white rounded-2xl border-4 border-sksp-navy p-4 md:p-8 shadow-xl">
        
        {/* Header Ribbon matching PDF Page 2 */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b-2 border-slate-200 pb-4 mb-8 gap-4">
          <div className="flex items-center gap-3">
            <img 
              src="/logos/logo.png" 
              alt="SKSP Emblem" 
              className="h-12 w-auto object-contain"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = '/logo.svg';
              }}
            />
            <div className="border-l-2 border-sksp-navy pl-3">
              <h3 className="text-xl font-black text-sksp-navy font-heading uppercase">
                SHREE KRISHNA SPUN PIPE
              </h3>
              <p className="text-xs font-bold text-sksp-blue tracking-widest uppercase">
                STRONG PIPES. STRONGER INFRASTRUCTURE.
              </p>
            </div>
          </div>
          <div className="text-xs font-bold uppercase tracking-wider text-sksp-navy bg-sksp-lightBlue border border-sksp-navy/20 px-3 py-1.5 rounded-lg flex items-center gap-2">
            <Award className="w-4 h-4 text-amber-500" />
            <span>50+ Years of Manufacturing Excellence</span>
          </div>
        </div>

        {/* Main Content Grid: Left Bullets & Presence, Right Plant Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: About Us Highlights */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            <div>
              <h2 className="text-3xl md:text-5xl font-black text-sksp-navy font-heading uppercase tracking-tight mb-6">
                About Us:
              </h2>

              <div className="space-y-4">
                
                {/* Feature 1 */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-sksp-navy transition">
                  <div className="w-8 h-8 rounded-lg bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-sksp-navy">
                      Trusted RCC manufacturer with 50+ years of experience
                    </h4>
                    <p className="text-sm text-slate-600 font-medium">
                      Delivering durable and reliable concrete solutions since decades.
                    </p>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-sksp-navy transition">
                  <div className="w-8 h-8 rounded-lg bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-sksp-navy">
                      Strong presence across Rajasthan & Madhya Pradesh
                    </h4>
                    <p className="text-sm text-slate-600 font-medium">
                      Wide network ensuring timely supply and customer satisfaction.
                    </p>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-sksp-navy transition">
                  <div className="w-8 h-8 rounded-lg bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-sksp-navy">
                      Strong relationships with government and private clients
                    </h4>
                    <p className="text-sm text-slate-600 font-medium">
                      Proud partner in building quality infrastructure for a better tomorrow.
                    </p>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="flex items-start gap-4 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-sksp-navy transition">
                  <div className="w-8 h-8 rounded-lg bg-sksp-navy text-amber-400 flex items-center justify-center flex-shrink-0 mt-0.5 shadow">
                    <CheckSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-extrabold text-sksp-navy">
                      State-of-the-art manufacturing units, automated & efficient supply chain
                    </h4>
                    <p className="text-sm text-slate-600 font-medium">
                      Advanced technology, strict quality control and seamless supply for every project.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* OUR PRESENCE Card (Recreating PDF Page 2 Presence Banner) */}
            <div className="bg-sksp-navy text-white rounded-xl overflow-hidden shadow-lg border border-amber-500/30">
              <div className="bg-sksp-blue px-4 py-2 text-center text-xs font-black tracking-widest uppercase text-amber-400 border-b border-white/10">
                OUR PRESENCE
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
                
                {/* Rajasthan */}
                <div className="space-y-1">
                  <div className="flex items-center justify-center gap-1.5 text-amber-400 font-bold text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>RAJASTHAN</span>
                  </div>
                  <div className="text-xs text-slate-200 font-semibold tracking-wide">
                    Kota <span className="text-amber-400">|</span> Jhalawar <span className="text-amber-400">|</span> Udaipur
                  </div>
                </div>

                {/* Madhya Pradesh */}
                <div className="space-y-1 pt-2 md:pt-0">
                  <div className="flex items-center justify-center gap-1.5 text-amber-400 font-bold text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>MADHYA PRADESH</span>
                  </div>
                  <div className="text-xs text-slate-200 font-semibold tracking-wide">
                    Narsinghgarh <span className="text-amber-400">|</span> Betul <span className="text-amber-400">|</span> Nagpur
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Right Column: High Quality Image & Plant Renders */}
          <div className="lg:col-span-5 flex flex-col">
            <div className="relative rounded-xl overflow-hidden shadow-xl border-2 border-slate-300 h-full min-h-[350px]">
              <img 
                src="/images/about-us-page.png" 
                alt="SKSP Manufacturing Plant & Concrete Pipe Stacks" 
                className="w-full h-full object-cover object-center"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/images/rcc hume pipes.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sksp-navyDark/80 via-transparent to-transparent"></div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-xl shadow-lg border border-slate-200">
                <div className="text-xs font-bold text-sksp-navy uppercase tracking-wider">
                  Automated High-Vibration Casting Technology
                </div>
                <div className="text-xs text-slate-600 mt-0.5 font-medium">
                  Ensures zero voids, high density concrete, and maximum compressive strength for NP3/NP4 pipes.
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* OUR FAMILY FIRMS Banner (Recreating PDF Page 2 Family Firms) */}
        <div className="mt-8 pt-6 border-t-2 border-slate-200">
          <div className="text-center mb-4">
            <span className="bg-sksp-navy text-amber-400 text-xs font-black px-4 py-1.5 rounded-full uppercase tracking-widest shadow">
              OUR FAMILY FIRMS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Paliwal Steels */}
            <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-sksp-navy transition">
              <div className="w-14 h-14 rounded-xl bg-sksp-navy text-white font-black text-xl flex items-center justify-center flex-shrink-0 border-2 border-amber-400 shadow">
                PS5
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-black text-sksp-navy uppercase">PALIWAL STEELS</h4>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-bold">RCC Solutions</span>
                </div>
                <div className="text-xs font-bold text-sksp-blue mb-1">RCC SOLUTIONS INDUSTRIES</div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Leading manufacturer of RCC Pipes, Precast Concrete Products, Paver Blocks, Kerb Stones & more.
                </p>
              </div>
            </div>

            {/* Nakoda Spun Pipes */}
            <div className="bg-slate-50 border border-slate-300 rounded-xl p-4 flex items-center gap-4 shadow-sm hover:border-sksp-navy transition">
              <div className="w-14 h-14 rounded-xl bg-sksp-navy text-amber-400 font-black text-xl flex items-center justify-center flex-shrink-0 border-2 border-amber-400 shadow">
                N
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-base font-black text-sksp-navy uppercase">NAKODA SPUN PIPES</h4>
                  <span className="text-[10px] bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded font-bold">Spun Pipes</span>
                </div>
                <div className="text-xs font-bold text-sksp-blue mb-1">STRONG PIPES. STRONGER FUTURE.</div>
                <p className="text-xs text-slate-600 font-medium leading-relaxed">
                  Manufacturer of RCC Spun Pipes delivering quality products for strong & sustainable infrastructure.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom 6 Pillars Trust Footer (Matching PDF Footer Bar across all pages) */}
        <div className="mt-8 bg-sksp-navy text-white rounded-xl p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center border border-amber-400/30">
          
          <div className="p-2 space-y-1">
            <ShieldCheck className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-xs font-extrabold uppercase">PREMIUM QUALITY</div>
            <div className="text-[10px] text-slate-300">Superior raw materials & strict QC</div>
          </div>

          <div className="p-2 space-y-1 border-l border-white/10 sm:border-l-0 lg:border-l border-white/10">
            <Link2 className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-xs font-extrabold uppercase">HIGH STRENGTH</div>
            <div className="text-[10px] text-slate-300">Engineered for high load bearing</div>
          </div>

          <div className="p-2 space-y-1 border-t sm:border-t-0 sm:border-l border-white/10">
            <Clock className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-xs font-extrabold uppercase">TIMELY DELIVERY</div>
            <div className="text-[10px] text-slate-300">Commitment to on-time delivery</div>
          </div>

          <div className="p-2 space-y-1 border-t lg:border-t-0 border-l border-white/10">
            <Headphones className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-xs font-extrabold uppercase">RELIABLE SUPPORT</div>
            <div className="text-[10px] text-slate-300">Dedicated customer support team</div>
          </div>

          <div className="p-2 space-y-1 border-t lg:border-t-0 sm:border-l border-white/10">
            <Users className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-xs font-extrabold uppercase">EXPERIENCED TEAM</div>
            <div className="text-[10px] text-slate-300">Skilled industry professionals</div>
          </div>

          <div className="p-2 space-y-1 border-t lg:border-t-0 border-l border-white/10">
            <Factory className="w-5 h-5 text-amber-400 mx-auto" />
            <div className="text-xs font-extrabold uppercase">LARGE CAPACITY</div>
            <div className="text-[10px] text-slate-300">High volume bulk supply</div>
          </div>

        </div>

      </div>
    </section>
  );
}
