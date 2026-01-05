import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { Card } from './ui/card-component';
import { Button } from './ui/button-component';
import { ArrowRight, Code2, Smartphone, Database } from 'lucide-react';

export function Home() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', contact: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', contact: '' });
  };

  const metrics = [
    { value: '120+', label: 'Реализованных проектов' },
    { value: '98%', label: 'Довольных клиентов' },
    { value: '7 лет', label: 'На рынке' },
    { value: '24/7', label: 'Поддержка' },
  ];

  const services = [
    {
      icon: Code2,
      title: 'Веб-разработка',
      description: 'Современные веб-сайты и порталы с адаптивным дизайном и высокой производительностью',
    },
    {
      icon: Smartphone,
      title: 'Мобильные приложения',
      description: 'Нативные и кроссплатформенные приложения для iOS и Android',
    },
    {
      icon: Database,
      title: 'Корпоративные системы',
      description: 'CRM, ERP и другие решения для автоматизации бизнес-процессов',
    },
  ];

  const technologies = [
    'React', 'Vue.js', 'Node.js', 'TypeScript', 
    'Python', 'PostgreSQL', 'MongoDB', 'Docker'
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <Section className="pt-12 md:pt-20">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-8 items-center">
              {/* Left: Text Content */}
              <div>
                <h1 className="mb-6">
                  Разрабатываем цифровые решения для вашего бизнеса
                </h1>
                <p className="text-base md:text-base mb-8 text-[#6B7280]">
                  Минская веб-студия полного цикла. Специализируемся на разработке веб-приложений, 
                  мобильных приложений и корпоративных систем.
                </p>
                <Button onClick={() => navigate('/contacts')}>
                  Обсудить проект
                  <ArrowRight size={18} className="ml-2" />
                </Button>
              </div>

              {/* Right: Placeholder */}
              <div className="hidden md:block">
                <div className="w-full h-80 bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-[#E5E7EB] rounded-2xl mx-auto mb-4"></div>
                    <p className="text-sm text-[#6B7280]">Изображение</p>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Metrics */}
        <Section background="surface">
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {metrics.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-semibold text-[#1D4ED8] mb-2 leading-none">
                    {item.value}
                  </div>
                  <div className="text-sm md:text-base text-[#6B7280]">{item.label}</div>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Services */}
        <Section>
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="mb-4">Наши услуги</h2>
              <p className="text-base text-[#6B7280]">
                Полный спектр услуг по разработке цифровых продуктов для бизнеса любого масштаба
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index}>
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl mb-6 flex items-center justify-center">
                      <Icon className="text-[#1D4ED8]" size={24} strokeWidth={2} />
                    </div>
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-sm md:text-base text-[#6B7280] mb-6">{service.description}</p>
                    <button 
                      onClick={() => navigate('/services')}
                      className="text-[#1D4ED8] font-medium inline-flex items-center gap-2 hover:gap-3 transition-all text-sm"
                    >
                      Подробнее
                      <ArrowRight size={16} />
                    </button>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Technologies */}
        <Section background="surface">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="mb-4">Технологии</h2>
              <p className="text-base text-[#6B7280]">
                Используем современный стек технологий для создания надёжных решений
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3 md:gap-4">
              {technologies.map((tech, index) => (
                <div 
                  key={index} 
                  className="px-4 md:px-6 py-2 md:py-3 bg-white border border-[#E5E7EB] rounded-xl text-sm md:text-base font-medium text-[#111827]"
                >
                  {tech}
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Form */}
        <Section>
          <Container>
            <div className="max-w-2xl mx-auto">
              <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl p-8 md:p-12">
                <div className="text-center mb-8 md:mb-12">
                  <h2 className="mb-4">Обсудим ваш проект?</h2>
                  <p className="text-base text-[#6B7280]">
                    Оставьте заявку, и мы свяжемся с вами в течение рабочего дня
                  </p>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      required
                      value={formData.contact}
                      onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                      className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                      placeholder="Телефон или Email"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full h-12 bg-[#1D4ED8] text-white rounded-xl text-base font-medium hover:bg-[#1E40AF] transition-colors flex items-center justify-center gap-2"
                  >
                    Отправить заявку
                    <ArrowRight size={18} />
                  </button>
                </form>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
