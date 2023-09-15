import { ContactVariant, SectionTitles } from './common';

export type PersonalInfo = {
  avatar: string;
  name: string;
  jobTitle: string;
  shortInfo: string;
  fullInfo: string;
  key: number;
};

export const CONTACT_US_CONTENT = {
  title: SectionTitles.contactUs,
  content:
    'We are open-minded and into Agile. Работаем гибко и прозрачно. Показываем результат на каждом этапе и обсуждаем, как улучшить  его для вашего успеха.',
};

export const CONTACT_US_PERSONS: PersonalInfo[] = [
  {
    avatar: '/images/contact-us/kostin.jpg',
    name: 'Viacheslav Kostin',
    jobTitle: 'CEO',
    shortInfo: '20+ years of experience in managerial positions in IT and banking',
    fullInfo:
      'Worked as CEO, director of strategy and marketing, curator of holding banks, head of products and project office.MBA for Executives at IMD (Switzerland, No. 1 in the Financial Times MBA Rankings).Leading Digital Business Transformation (IMD).',
    key: 2,
  },
  {
    avatar: '/images/contact-us/pahomov.jpg',
    name: 'Vasil Pahomov',
    jobTitle: 'CTO',
    shortInfo: '20+ лет опыта как разработчик, аналитик и solution архитектор',
    fullInfo:
      'Проектирует устойчивые высоконагруженные системы со множественными интеграциями для банков и других финансовых организаций. Эксперт в работе с распределенными хранилищами и микросервисной архитектурой.',
    key: 1,
  },
];

export const CONTACT_CARD = [
  {
    title: 'Get In Touch',
    contactType: ContactVariant.form,
    content: "Let's talk about your improved project",
    key: 1,
  },
  {
    title: 'Почта',
    contactType: ContactVariant.email,
    content: 'info@clevernova.dev',
    key: 2,
  },
];
