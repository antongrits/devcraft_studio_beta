import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { Card } from './ui/card-component';
import { Button } from './ui/button-component';
import { Code2, ShoppingCart, Smartphone, Database, Palette, Headphones } from 'lucide-react';

export function Services() {
  const navigate = useNavigate();

  const services = [
    {
      icon: Code2,
      title: 'Веб-разработка',
      description: 'Создаём современные веб-сайты и порталы с адаптивным дизайном, высокой производительностью и SEO-оптимизацией.',
    },
    {
      icon: ShoppingCart,
      title: 'Интернет-магазины',
      description: 'Разработка e-commerce решений с системами оплаты, управления товарами и интеграцией с внешними сервисами.',
    },
    {
      icon: Smartphone,
      title: 'Мобильные приложения',
      description: 'Создание нативных и кроссплатформенных приложений для iOS и Android с современным дизайном.',
    },
    {
      icon: Database,
      title: 'Корпоративные системы',
      description: 'CRM, ERP и другие системы автоматизации бизнес-процессов под ключ с интеграцией решений.',
    },
    {
      icon: Palette,
      title: 'UI/UX дизайн',
      description: 'Проектирование интуитивно понятных интерфейсов с фокусом на удобство пользователей.',
    },
    {
      icon: Headphones,
      title: 'Техническая поддержка',
      description: 'Сопровождение и развитие проектов, регулярные обновления и оперативное устранение неполадок.',
    },
  ];

  const workSteps = [
    { num: '1', title: 'Анализ требований', description: 'Изучаем ваш бизнес и формируем техническое задание' },
    { num: '2', title: 'Проектирование', description: 'Разрабатываем архитектуру и создаём прототипы' },
    { num: '3', title: 'Разработка', description: 'Пишем код и проводим тестирование на каждом этапе' },
    { num: '4', title: 'Запуск', description: 'Настраиваем серверы и запускаем проект в продакшн' },
    { num: '5', title: 'Обучение', description: 'Обучаем ваших сотрудников работе с системой' },
    { num: '6', title: 'Поддержка', description: 'Обеспечиваем техническую поддержку и развитие' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Page Header */}
        <Section className="pt-12 md:pt-20">
          <Container>
            <div className="max-w-3xl">
              <h1 className="mb-6">Услуги</h1>
              <p className="text-base text-[#6B7280]">
                Полный спектр услуг по разработке цифровых продуктов для бизнеса любого масштаба. 
                От идеи до реализации и поддержки.
              </p>
            </div>
          </Container>
        </Section>

        {/* Services Grid */}
        <Section background="surface">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index}>
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl mb-6 flex items-center justify-center">
                      <Icon className="text-[#1D4ED8]" size={24} strokeWidth={2} />
                    </div>
                    <h3 className="mb-3">{service.title}</h3>
                    <p className="text-sm md:text-base text-[#6B7280] mb-6">{service.description}</p>
                    <Button onClick={() => navigate('/contacts')} className="w-full">
                      Заказать услугу
                    </Button>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Work Process */}
        <Section>
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="mb-4">Как мы работаем</h2>
              <p className="text-base text-[#6B7280]">
                Проверенный процесс разработки, обеспечивающий качественный результат на каждом этапе
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {workSteps.map((step, index) => (
                <div 
                  key={index} 
                  className="bg-white border border-[#E5E7EB] rounded-2xl p-6"
                >
                  <div className="w-10 h-10 bg-[#1D4ED8] text-white rounded-lg flex items-center justify-center text-lg font-semibold mb-4">
                    {step.num}
                  </div>
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-sm md:text-base text-[#6B7280]">{step.description}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* CTA Section */}
        <Section background="surface">
          <Container>
            <div className="bg-white border border-[#E5E7EB] rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
              <h2 className="mb-4">Готовы начать проект?</h2>
              <p className="text-base text-[#6B7280] mb-8">
                Обсудим ваши задачи и предложим оптимальное решение
              </p>
              <Button 
                onClick={() => navigate('/contacts')}
              >
                Связаться с нами
              </Button>
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
