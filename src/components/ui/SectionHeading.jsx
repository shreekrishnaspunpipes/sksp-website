import React from 'react';

export default function SectionHeading({ eyebrow, title, description, align = 'center', dark = false }) {
  const alignClasses = align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center mx-auto';

  return (
    <div className={`max-w-3xl mb-12 ${alignClasses}`}>
      {eyebrow && (
        <span className="inline-block text-xs md:text-sm font-bold tracking-widest text-[#F2A900] uppercase mb-2">
          {eyebrow}
        </span>
      )}
      {title && (
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight ${dark ? 'text-white' : 'text-[#062A5A]'}`}>
          {title}
        </h2>
      )}
      <div className={`w-16 h-1 bg-[#F2A900] mt-4 mb-4 ${align === 'left' ? 'mr-auto' : align === 'right' ? 'ml-auto' : 'mx-auto'}`} />
      {description && (
        <p className={`text-base md:text-lg ${dark ? 'text-slate-300' : 'text-[#607086]'} leading-relaxed`}>
          {description}
        </p>
      )}
    </div>
  );
}
