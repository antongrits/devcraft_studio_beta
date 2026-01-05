import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
  disabled?: boolean;
}

export function Button({ 
  children, 
  onClick, 
  type = 'button', 
  variant = 'primary',
  className = '',
  disabled = false 
}: ButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center h-14 px-10 rounded-2xl font-semibold transition-all duration-200 text-[16px]';
  
  const variantClasses = {
    primary: 'bg-[#2563EB] text-white hover:bg-[#1D4ED8] shadow-lg shadow-[#2563EB]/20 hover:shadow-xl hover:shadow-[#2563EB]/30 disabled:bg-[#94A3B8] disabled:cursor-not-allowed disabled:shadow-none',
    secondary: 'bg-white text-[#0F172A] border-2 border-[#E2E8F0] hover:bg-[#FAFBFC] hover:border-[#CBD5E1] shadow-sm',
    ghost: 'text-[#2563EB] hover:text-[#1D4ED8] hover:bg-[#DBEAFE]/50 px-0',
  };
  
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}
