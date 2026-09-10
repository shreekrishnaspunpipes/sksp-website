import React from 'react';

function ClientCard({ name }) {
  return (
    <div
      className="flex-shrink-0 w-[220px] sm:w-[240px] px-4 py-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-center font-bold text-xs text-[#062A5A] hover:bg-blue-50 transition-colors"
    >
      {name}
    </div>
  );
}

function MarqueeRow({ clients, direction = 'left', duration = 38 }) {
  const items = [...clients, ...clients];

  return (
    <div className="overflow-hidden">
      <div
        className={`flex w-max gap-4 ${direction === 'left' ? 'animate-marquee-left' : 'animate-marquee-right'} group-hover:[animation-play-state:paused]`}
        style={{ animationDuration: `${duration}s` }}
      >
        {items.map((client, idx) => (
          <ClientCard key={`${client}-${idx}`} name={client} />
        ))}
      </div>
    </div>
  );
}

export default function ClientCarousel({ clients }) {
  const midpoint = Math.ceil(clients.length / 2);
  const topRow = clients.slice(0, midpoint);
  const bottomRow = clients.slice(midpoint);

  return (
    <div className="relative mt-8 group">
      <div
        className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 sm:w-20 bg-gradient-to-r from-white to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 sm:w-20 bg-gradient-to-l from-white to-transparent"
        aria-hidden="true"
      />

      <div className="space-y-4 overflow-hidden">
        <MarqueeRow clients={topRow} direction="left" duration={42} />
        <MarqueeRow clients={bottomRow} direction="right" duration={36} />
      </div>
    </div>
  );
}
