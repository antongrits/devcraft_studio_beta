import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { Card } from './ui/card-component';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

export function Contacts() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    agreement: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Спасибо за заявку! Мы свяжемся с вами в ближайшее время.');
    setFormData({
      name: '',
      phone: '',
      email: '',
      company: '',
      subject: '',
      message: '',
      agreement: false,
    });
  };

  const subjectOptions = [
    { value: 'web', label: 'Веб-разработка' },
    { value: 'mobile', label: 'Мобильное приложение' },
    { value: 'ecommerce', label: 'Интернет-магазин' },
    { value: 'system', label: 'Корпоративная система' },
    { value: 'design', label: 'Дизайн' },
    { value: 'support', label: 'Техподдержка' },
    { value: 'other', label: 'Другое' },
  ];

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Адрес офиса',
      details: ['г. Минск, ул. Немига, 40', 'офис 506'],
    },
    {
      icon: Phone,
      title: 'Телефоны',
      details: ['+375 (29) 345-67-89', '+375 (33) 876-54-32'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['hello@devcraft.by', 'business@devcraft.by'],
    },
    {
      icon: Clock,
      title: 'Время работы',
      details: ['Пн-Пт: 9:00–19:00', 'Сб: 10:00–15:00'],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Page Header */}
        <Section className="pt-12 md:pt-20">
          <Container>
            <div className="max-w-3xl">
              <h1 className="mb-6">Контакты</h1>
              <p className="text-base text-[#6B7280]">
                Свяжитесь с нами удобным способом или оставьте заявку, и мы ответим в течение рабочего дня
              </p>
            </div>
          </Container>
        </Section>

        {/* Contact Info & Form - 2 columns on desktop */}
        <Section background="surface">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-8">
              {/* Left Column: Contact Information */}
              <div className="space-y-6 md:space-y-8">
                {/* Contact Info Cards */}
                <div className="space-y-4 md:space-y-6">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <Card key={index}>
                        <div className="flex items-start gap-4">
                          <div className="w-10 h-10 bg-[#EFF6FF] rounded-xl flex items-center justify-center flex-shrink-0">
                            <Icon className="text-[#1D4ED8]" size={20} strokeWidth={2} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="mb-2 text-base md:text-lg">{info.title}</h4>
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm md:text-base text-[#6B7280]">
                                {detail}
                              </p>
                            ))}
                          </div>
                        </div>
                      </Card>
                    );
                  })}
                </div>

                {/* Social Media */}
                <Card>
                  <h4 className="mb-3 text-base md:text-lg">Социальные сети</h4>
                  <div className="space-y-2">
                    <p className="text-sm md:text-base text-[#6B7280]">Telegram: @devcraft_by</p>
                    <p className="text-sm md:text-base text-[#6B7280]">Instagram: @devcraft.minsk</p>
                  </div>
                </Card>

                {/* Map Placeholder */}
                <div className="w-full h-64 md:h-72 bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <MapPin size={32} className="mx-auto mb-2 text-[#1D4ED8]" strokeWidth={2} />
                    <p className="text-sm font-medium text-[#1D4ED8] mb-1">Карта офиса</p>
                    <p className="text-xs text-[#6B7280]">г. Минск, ул. Немига, 40</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Contact Form */}
              <div>
                <Card>
                  <h2 className="mb-3">Оставить заявку</h2>
                  <p className="text-sm md:text-base text-[#6B7280] mb-6 md:mb-8">
                    Заполните форму, и мы свяжемся с вами для обсуждения проекта
                  </p>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    <div>
                      <label className="block text-xs md:text-sm text-[#6B7280] mb-2 font-medium">
                        Ваше имя <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-sm md:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                        placeholder="Введите ваше имя"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm text-[#6B7280] mb-2 font-medium">
                        Телефон <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-sm md:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                        placeholder="+375 (__) ___-__-__"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm text-[#6B7280] mb-2 font-medium">
                        Email <span className="text-[#EF4444]">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-sm md:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm text-[#6B7280] mb-2 font-medium">
                        Компания
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-sm md:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                        placeholder="Название компании"
                      />
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm text-[#6B7280] mb-2 font-medium">
                        Тема обращения <span className="text-[#EF4444]">*</span>
                      </label>
                      <select
                        required
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full h-12 px-4 bg-white border border-[#E5E7EB] rounded-xl text-sm md:text-base text-[#111827] focus:outline-none focus:border-[#1D4ED8] transition-colors"
                      >
                        <option value="">Выберите тему</option>
                        {subjectOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs md:text-sm text-[#6B7280] mb-2 font-medium">
                        Сообщение <span className="text-[#EF4444]">*</span>
                      </label>
                      <textarea
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className="w-full px-4 py-3 bg-white border border-[#E5E7EB] rounded-xl text-sm md:text-base text-[#111827] placeholder:text-[#9CA3AF] focus:outline-none focus:border-[#1D4ED8] transition-colors resize-none"
                        placeholder="Расскажите о вашем проекте"
                      />
                    </div>

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreement}
                        onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded border-[#E5E7EB] text-[#1D4ED8] focus:ring-2 focus:ring-[#1D4ED8]"
                      />
                      <label className="text-xs md:text-sm text-[#6B7280] leading-relaxed">
                        Я согласен на обработку персональных данных
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="w-full h-12 bg-[#1D4ED8] text-white rounded-xl text-sm md:text-base font-medium hover:bg-[#1E40AF] transition-colors flex items-center justify-center gap-2"
                    >
                      <Send size={18} />
                      Отправить заявку
                    </button>
                  </form>
                </Card>
              </div>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
