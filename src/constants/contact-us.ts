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
    content: 'We are equipped with an Agile mindset — flexible, transparent, and results-driven at every stage.',
};

export const CONTACT_US_PERSONS: PersonalInfo[] = [
    {
        avatar: '/images/contact-us/kostin.jpg',
        name: 'Viacheslav Kostin',
        jobTitle: 'CEO',
        shortInfo: '20+ years of experience in managerial positions in IT and banking',
        fullInfo: 'Previous roles: CEO in IT, Director of Strategy and Marketing in Banking, Curator of Holding Banks, Head of Products and Project Office Education: MBA for Executives at IMD (Switzerland), Leading Digital Business Transformation (IMD). Provides consulting in strategy and digital transformation.',
        key: 2,
    },
    {
        avatar: '/images/contact-us/pahomov.jpg',
        name: 'Vasil Pahomov',
        jobTitle: 'CTO',
        shortInfo: '20+ years’ experience as a developer, analyst, and solutions architect',
        fullInfo:
            'Designs resilient, high-load systems with multiple integrations for banks and financial institutions. Expertise in distributed storage and microservices architecture.',
        key: 1,
    },
];

export const CONTACT_CARD = [
    {
        title: 'Get In Touch',
        contactType: ContactVariant.form,
        content: "Let's discuss your project's evolution.",
        key: 1,
    },
    {
        title: 'Email',
        contactType: ContactVariant.email,
        content: 'info@wislacode.com',
        key: 2,
    },
];
