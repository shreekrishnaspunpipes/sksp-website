import React from 'react';
import { Link } from 'react-router-dom';

export default function Button({ children, to, onClick, variant = 'primary', size = 'md', className = '', icon: Icon, type = 'button', disabled = false }) {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-200 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed';
  
  const variants = {
    primary: 'bg-[#F2A900] hover:bg-[#d99700] text-[#041A36] focus:ring-[#F2A900] shadow-md hover:shadow-lg',
    navy: 'bg-[#062A5A] hover:bg-[#041A36] text-white focus:ring-[#062A5A] shadow-md hover:shadow-lg',
    outline: 'border-2 border-[#062A5A] text-[#062A5A] hover:bg-[#062A5A] hover:text-white focus:ring-[#062A5A]',
    outlineGold: 'border-2 border-[#F2A900] text-[#F2A900] hover:bg-[#F2A900] hover:text-[#041A36] focus:ring-[#F2A900]',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base'
  };

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${sizes[size] || sizes.md} ${className}`;

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        {children}
        {Icon && <Icon className="ml-2 w-4 h-4" />}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      {children}
      {Icon && <Icon className="ml-2 w-4 h-4" />}
    </button>
  );
}
