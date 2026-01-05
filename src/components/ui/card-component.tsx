import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = '', hover = false }: CardProps) {
  const hoverClass = hover ? 'hover:shadow-xl hover:border-[#2563EB]/30 hover:-translate-y-1 transition-all duration-300' : '';
  
  return (
    <div className={`bg-white border border-[#E2E8F0] rounded-2xl md:rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
