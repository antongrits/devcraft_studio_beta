import React from 'react';

interface InputProps {
  type?: string;
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  className?: string;
}

export function Input({ 
  type = 'text', 
  label, 
  placeholder, 
  value, 
  onChange,
  required = false,
  className = ''
}: InputProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-[14px] text-[#6B7280] mb-2">
          {label} {required && <span className="text-[#DC2626]">*</span>}
        </label>
      )}
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-[14px] text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all"
      />
    </div>
  );
}

interface TextareaProps {
  label?: string;
  placeholder?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  rows?: number;
  className?: string;
}

export function Textarea({ 
  label, 
  placeholder, 
  value, 
  onChange,
  required = false,
  rows = 4,
  className = ''
}: TextareaProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-[14px] text-[#6B7280] mb-2">
          {label} {required && <span className="text-[#DC2626]">*</span>}
        </label>
      )}
      <textarea
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        rows={rows}
        className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-[14px] text-[#111827] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all resize-none"
      />
    </div>
  );
}

interface SelectProps {
  label?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  options: { value: string; label: string }[];
  placeholder?: string;
  className?: string;
}

export function Select({ 
  label, 
  value, 
  onChange,
  required = false,
  options,
  placeholder = 'Выберите...',
  className = ''
}: SelectProps) {
  return (
    <div className={className}>
      {label && (
        <label className="block text-[14px] text-[#6B7280] mb-2">
          {label} {required && <span className="text-[#DC2626]">*</span>}
        </label>
      )}
      <select
        value={value}
        onChange={onChange}
        required={required}
        className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-[14px] text-[#111827] focus:outline-none focus:ring-2 focus:ring-[#1D4ED8] focus:border-transparent transition-all"
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
