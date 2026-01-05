import React, { useState } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { Card } from './ui/card-component';
import { X, ExternalLink, Quote } from 'lucide-react';

type Filter = 'all' | 'web' | 'ecommerce' | 'mobile' | 'systems';

interface Project {
  id: number;
  title: string;
  category: Filter;
  categoryLabel: string;
  description: string;
  fullDescription: string;
}

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<Filter>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filters: { label: string; value: Filter }[] = [
    { label: 'Все проекты', value: 'all' },
    { label: 'Веб-сайты', value: 'web' },
    { label: 'Интернет-магазины', value: 'ecommerce' },
    { label: 'Приложения', value: 'mobile' },
    { label: 'Системы', value: 'systems' },
  ];

  const projects: Project[] = [
    {
      id: 1,
      title: 'TECH Corp',
      category: 'web',
      categoryLabel: 'Корпоративный сайт',
      description: 'Многостраничный сайт для IT-компании с адаптивным дизайном',
      fullDescription: 'Разработали современный корпоративный сайт с адаптивным дизайном, системой управления контентом и интеграцией с CRM. Сайт демонстрирует услуги компании и портфолио проектов.',
    },
    {
      id: 2,
      title: 'Fashion Store',
      category: 'ecommerce',
      categoryLabel: 'Интернет-магазин',
      description: 'E-commerce платформа модной одежды',
      fullDescription: 'Создали полнофункциональный интернет-магазин с каталогом товаров, корзиной, онлайн-оплатой и личным кабинетом. Интегрировали систему учета товаров.',
    },
    {
      id: 3,
      title: 'FitTracker',
      category: 'mobile',
      categoryLabel: 'Мобильное приложение',
      description: 'Приложение для отслеживания фитнеса и здоровья',
      fullDescription: 'Разработали кроссплатформенное приложение для iOS и Android с функциями трекинга активности и планирования тренировок.',
    },
    {
      id: 4,
      title: 'CRM-система',
      category: 'systems',
      categoryLabel: 'Корпоративная система',
      description: 'Управление клиентами и проектами',
      fullDescription: 'Создали корпоративную CRM-систему для управления клиентами, проектами и задачами с аналитикой и отчетами.',
    },
    {
      id: 5,
      title: 'HomeFind',
      category: 'web',
      categoryLabel: 'Веб-портал',
      description: 'Портал недвижимости с расширенным поиском',
      fullDescription: 'Разработали веб-портал для поиска недвижимости с расширенными фильтрами и интерактивными картами.',
    },
    {
      id: 6,
      title: 'ElectroShop',
      category: 'ecommerce',
      categoryLabel: 'Интернет-магазин',
      description: 'Платформа продажи электроники',
      fullDescription: 'Создали e-commerce решение с большим каталогом, фильтрами по характеристикам и системой отзывов.',
    },
    {
      id: 7,
      title: 'FoodExpress',
      category: 'mobile',
      categoryLabel: 'Мобильное приложение',
      description: 'Сервис доставки еды',
      fullDescription: 'Разработали мобильное приложение для заказа еды с геолокацией и отслеживанием курьера в реальном времени.',
    },
    {
      id: 8,
      title: 'WMS System',
      category: 'systems',
      categoryLabel: 'Система управления',
      description: 'Система управления складом',
      fullDescription: 'Создали систему управления складскими операциями с учетом товаров и интеграцией с 1С.',
    },
    {
      id: 9,
      title: 'EduHub',
      category: 'web',
      categoryLabel: 'Образовательная платформа',
      description: 'Платформа для онлайн-обучения',
      fullDescription: 'Разработали платформу для онлайн-образования с видеокурсами, тестированием и личным кабинетом.',
    },
  ];

  const testimonials = [
    {
      name: 'Анна Петрова',
      position: 'CEO, Fashion Store',
      text: 'Отличная работа команды DevCraft! Создали нам современный интернет-магазин, который превзошёл все ожидания. Профессиональный подход на каждом этапе.',
    },
    {
      name: 'Дмитрий Иванов',
      position: 'Директор, TECH Corp',
      text: 'Профессиональный подход и внимание к деталям на каждом этапе. Рекомендуем всем партнёрам. Проект сдан точно в срок с отличным качеством.',
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeFilter);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Page Header */}
        <Section className="pt-12 md:pt-20">
          <Container>
            <div className="max-w-3xl">
              <h1 className="mb-6">Портфолио</h1>
              <p className="text-base text-[#6B7280]">
                Более 120 реализованных проектов в различных сферах бизнеса. 
                Каждый проект — это уникальное решение с учётом специфики отрасли.
              </p>
            </div>
          </Container>
        </Section>

        {/* Filters */}
        <div className="border-y border-[#E5E7EB] bg-[#F7F8FA]">
          <Container className="py-4 md:py-6">
            <div className="flex flex-wrap gap-2 md:gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.value}
                  onClick={() => setActiveFilter(filter.value)}
                  className={`px-4 md:px-6 py-2 md:py-2.5 rounded-xl text-sm md:text-base font-medium transition-colors ${
                    activeFilter === filter.value
                      ? 'bg-[#1D4ED8] text-white'
                      : 'bg-white text-[#6B7280] border border-[#E5E7EB] hover:border-[#1D4ED8] hover:text-[#111827]'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </Container>
        </div>

        {/* Projects Grid */}
        <Section>
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id}>
                  <div className="w-full h-48 bg-[#F7F8FA] border border-[#E5E7EB] rounded-xl mb-6 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-[#E5E7EB] rounded-xl mx-auto mb-2"></div>
                      <p className="text-xs text-[#6B7280]">Изображение</p>
                    </div>
                  </div>
                  <div className="inline-block px-3 py-1 bg-[#EFF6FF] text-[#1D4ED8] text-xs font-medium rounded-lg mb-4">
                    {project.categoryLabel}
                  </div>
                  <h3 className="mb-3">{project.title}</h3>
                  <p className="text-sm md:text-base mb-6 text-[#6B7280]">{project.description}</p>
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-[#1D4ED8] text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    Смотреть кейс
                    <ExternalLink size={16} />
                  </button>
                </Card>
              ))}
            </div>
          </Container>
        </Section>

        {/* Testimonials */}
        <Section background="surface">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="mb-4">Отзывы клиентов</h2>
              <p className="text-base text-[#6B7280]">
                Что говорят о нас наши клиенты
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index}>
                  <Quote className="text-[#1D4ED8] mb-4" size={24} />
                  <p className="text-base text-[#6B7280] mb-6">
                    {testimonial.text}
                  </p>
                  <div className="flex items-center gap-3 pt-6 border-t border-[#E5E7EB]">
                    <div className="w-12 h-12 bg-[#E5E7EB] rounded-xl flex-shrink-0"></div>
                    <div>
                      <div className="text-sm md:text-base font-medium text-[#111827] mb-1">{testimonial.name}</div>
                      <div className="text-xs md:text-sm text-[#6B7280]">{testimonial.position}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />

      {/* Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="w-full h-64 bg-[#F7F8FA] border-b border-[#E5E7EB] flex items-center justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#E5E7EB] rounded-xl mx-auto mb-2"></div>
                <p className="text-xs text-[#6B7280]">Изображение</p>
              </div>
            </div>
            
            <div className="p-6 md:p-8">
              <div className="inline-block px-3 py-1 bg-[#EFF6FF] text-[#1D4ED8] text-xs font-medium rounded-lg mb-4">
                {selectedProject.categoryLabel}
              </div>
              <h2 className="mb-6">{selectedProject.title}</h2>
              <p className="text-base text-[#6B7280] mb-8">
                {selectedProject.fullDescription}
              </p>
              <button
                onClick={() => setSelectedProject(null)}
                className="w-full h-12 bg-[#F7F8FA] text-[#111827] rounded-xl text-base font-medium hover:bg-[#E5E7EB] transition-colors border border-[#E5E7EB]"
              >
                Закрыть
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
