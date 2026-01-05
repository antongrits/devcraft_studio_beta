import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Container } from './ui/container';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { label: 'Главная', path: '/' },
    { label: 'Услуги', path: '/services' },
    { label: 'Портфолио', path: '/portfolio' },
    { label: 'О нас', path: '/about' },
    { label: 'Контакты', path: '/contacts' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="bg-white border-b border-[#E5E7EB] sticky top-0 z-50">
      <Container>
        <div className="flex items-center justify-between h-20 md:h-20">
          {/* Logo */}
          <Link 
            to="/"
            className="text-lg md:text-xl font-semibold text-[#111827] hover:text-[#1D4ED8] transition-colors"
          >
            DevCraft Studio
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'text-[#1D4ED8] bg-[#EFF6FF]'
                    : 'text-[#6B7280] hover:text-[#111827] hover:bg-[#F7F8FA]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#111827] hover:bg-[#F7F8FA] rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-[#E5E7EB] mt-4 pt-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                    isActive(item.path)
                      ? 'bg-[#EFF6FF] text-[#1D4ED8]'
                      : 'text-[#6B7280] hover:bg-[#F7F8FA] hover:text-[#111827]'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </Container>
    </header>
  );
}
