import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: 'white' | 'surface';
}

export function Section({ children, className = '', background = 'white' }: SectionProps) {
  const bgClass = background === 'surface' ? 'bg-[#F8FAFC]' : 'bg-white';
  
  return (
    <section className={`py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 ${bgClass} ${className}`}>
      {children}
    </section>
  );
}
