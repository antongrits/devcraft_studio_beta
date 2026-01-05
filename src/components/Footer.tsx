import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from './ui/container';
import { Mail, Phone, MapPin } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#111827] text-white">
      <Container className="py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-8 mb-12">
          {/* Company Info */}
          <div className="md:col-span-1">
            <div className="text-lg md:text-xl font-semibold text-white mb-3">DevCraft Studio</div>
            <p className="text-sm md:text-base text-[#9CA3AF] leading-relaxed mb-6">
              Разрабатываем цифровые решения для вашего бизнеса с 2019 года
            </p>
            <div className="flex gap-2">
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-xs">
                TG
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-lg flex items-center justify-center transition-colors text-xs">
                IG
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-xs md:text-sm uppercase tracking-wider text-[#9CA3AF] mb-4 font-semibold">Навигация</h4>
            <ul className="space-y-2">
              {['Главная', 'Услуги', 'Портфолио', 'О нас', 'Контакты'].map((item, index) => {
                const paths = ['/', '/services', '/portfolio', '/about', '/contacts'];
                return (
                  <li key={item}>
                    <Link to={paths[index]} className="text-sm md:text-base text-[#D1D5DB] hover:text-white transition-colors">
                      {item}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-1">
            <h4 className="text-xs md:text-sm uppercase tracking-wider text-[#9CA3AF] mb-4 font-semibold">Услуги</h4>
            <ul className="space-y-2">
              {['Веб-разработка', 'Мобильные приложения', 'Интернет-магазины', 'Корпоративные системы'].map((item) => (
                <li key={item}>
                  <Link to="/services" className="text-sm md:text-base text-[#D1D5DB] hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contacts */}
          <div className="md:col-span-1">
            <h4 className="text-xs md:text-sm uppercase tracking-wider text-[#9CA3AF] mb-4 font-semibold">Контакты</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-[#9CA3AF] flex-shrink-0 mt-0.5" />
                <span className="text-sm md:text-base text-[#D1D5DB]">г. Минск, ул. Немига, 40, офис 506</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-[#9CA3AF] flex-shrink-0" />
                <a href="tel:+375293456789" className="text-sm md:text-base text-[#D1D5DB] hover:text-white transition-colors">
                  +375 (29) 345-67-89
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-[#9CA3AF] flex-shrink-0" />
                <a href="mailto:hello@devcraft.by" className="text-sm md:text-base text-[#3B82F6] hover:text-[#60A5FA] transition-colors">
                  hello@devcraft.by
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xs md:text-sm text-[#9CA3AF] text-center md:text-left">
              © 2026 DevCraft Studio. Все права защищены.
            </div>
            <div className="flex flex-wrap gap-4 md:gap-8 text-xs md:text-sm justify-center md:justify-end">
              <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
                Политика конфиденциальности
              </a>
              <a href="#" className="text-[#9CA3AF] hover:text-white transition-colors">
                Условия использования
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
