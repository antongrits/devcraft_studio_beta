import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { Container } from './ui/container';
import { Section } from './ui/section';
import { Card } from './ui/card-component';
import { Award, Users, Target, TrendingUp } from 'lucide-react';

export function About() {
  const stats = [
    { value: '2019', label: 'Год основания', icon: Award },
    { value: '120+', label: 'Реализованных проектов', icon: Target },
    { value: '12', label: 'Специалистов в команде', icon: Users },
    { value: '98%', label: 'Довольных клиентов', icon: TrendingUp },
  ];

  const team = [
    { name: 'Алексей Смирнов', position: 'CEO, Основатель' },
    { name: 'Елена Козлова', position: 'CTO' },
    { name: 'Дмитрий Волков', position: 'Lead Frontend' },
    { name: 'Ольга Новикова', position: 'Lead Backend' },
    { name: 'Максим Петров', position: 'UI/UX Designer' },
    { name: 'Анна Сергеева', position: 'Project Manager' },
  ];

  const values = [
    {
      icon: Award,
      title: 'Качество',
      description: 'Стремимся к высочайшему качеству кода и продуктов. Каждый проект проходит тщательное тестирование и code review.',
    },
    {
      icon: Target,
      title: 'Прозрачность',
      description: 'Открытое общение и честность в отношениях с клиентами на всех этапах проекта. Регулярная отчётность.',
    },
    {
      icon: Users,
      title: 'Инновации',
      description: 'Используем передовые технологии и подходы для решения бизнес-задач клиентов. Постоянное обучение команды.',
    },
  ];

  const techStack = [
    { 
      category: 'Frontend', 
      technologies: ['React', 'Vue.js', 'TypeScript', 'Next.js', 'Tailwind'],
    },
    { 
      category: 'Backend', 
      technologies: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'Redis'],
    },
    { 
      category: 'Mobile', 
      technologies: ['React Native', 'Flutter', 'iOS', 'Android', 'Swift'],
    },
    { 
      category: 'DevOps', 
      technologies: ['Docker', 'AWS', 'CI/CD', 'Kubernetes', 'Nginx'],
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
              <h1 className="mb-6">О компании</h1>
              <p className="text-base text-[#6B7280]">
                Команда профессионалов, создающих цифровые решения для бизнеса с 2019 года
              </p>
            </div>
          </Container>
        </Section>

        {/* About Text */}
        <Section background="surface">
          <Container>
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                <div>
                  <p className="text-base text-[#6B7280] mb-4">
                    DevCraft Studio — минская веб-студия полного цикла, основанная в 2019 году. 
                    Мы специализируемся на разработке веб-приложений, мобильных приложений и корпоративных систем.
                  </p>
                  <p className="text-base text-[#6B7280]">
                    Наша команда состоит из 12 опытных специалистов: разработчиков, дизайнеров и менеджеров проектов.
                  </p>
                </div>
                <div>
                  <p className="text-base text-[#6B7280] mb-4">
                    За время работы мы реализовали более 120 проектов для компаний различного масштаба — 
                    от стартапов до крупных корпораций.
                  </p>
                  <p className="text-base text-[#6B7280]">
                    98% наших клиентов остаются довольны результатом и рекомендуют нас своим партнёрам.
                  </p>
                </div>
              </div>
            </div>
          </Container>
        </Section>

        {/* Stats */}
        <Section>
          <Container>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <Card key={index} className="text-center">
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl flex items-center justify-center mx-auto mb-4">
                      <Icon className="text-[#1D4ED8]" size={24} strokeWidth={2} />
                    </div>
                    <div className="text-4xl md:text-5xl font-semibold text-[#1D4ED8] mb-2 leading-none">
                      {stat.value}
                    </div>
                    <div className="text-sm md:text-base text-[#6B7280]">{stat.label}</div>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Team */}
        <Section background="surface">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="mb-4">Наша команда</h2>
              <p className="text-base text-[#6B7280]">
                Профессионалы с многолетним опытом разработки
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              {team.map((member, index) => (
                <div key={index} className="text-center">
                  <div className="w-full aspect-square bg-[#F7F8FA] border border-[#E5E7EB] rounded-2xl mb-4 flex items-center justify-center">
                    <div className="w-20 h-20 bg-[#E5E7EB] rounded-xl"></div>
                  </div>
                  <h4 className="mb-1 text-base md:text-lg">{member.name}</h4>
                  <p className="text-sm md:text-base text-[#6B7280]">{member.position}</p>
                </div>
              ))}
            </div>
          </Container>
        </Section>

        {/* Values */}
        <Section>
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="mb-4">Наши ценности</h2>
              <p className="text-base text-[#6B7280]">
                Принципы, которыми мы руководствуемся в работе
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {values.map((value, index) => {
                const Icon = value.icon;
                return (
                  <Card key={index}>
                    <div className="w-12 h-12 bg-[#EFF6FF] rounded-xl mb-6 flex items-center justify-center">
                      <Icon className="text-[#1D4ED8]" size={24} strokeWidth={2} />
                    </div>
                    <h3 className="mb-3">{value.title}</h3>
                    <p className="text-sm md:text-base text-[#6B7280]">{value.description}</p>
                  </Card>
                );
              })}
            </div>
          </Container>
        </Section>

        {/* Tech Stack */}
        <Section background="surface">
          <Container>
            <div className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
              <h2 className="mb-4">Технологический стек</h2>
              <p className="text-base text-[#6B7280]">
                Современные технологии для надёжных решений
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {techStack.map((stack, index) => (
                <Card key={index}>
                  <h4 className="mb-4 text-lg">{stack.category}</h4>
                  <ul className="space-y-2">
                    {stack.technologies.map((tech, techIndex) => (
                      <li key={techIndex} className="text-sm md:text-base text-[#6B7280] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-[#1D4ED8] rounded-full flex-shrink-0"></span>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </Container>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
