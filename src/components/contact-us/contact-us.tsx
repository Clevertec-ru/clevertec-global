'use client';
import { SyntheticEvent } from 'react';
import { SectionTitles } from '../../constants/common';
import { CONTACT_US_CONTENT, CONTACT_US_PERSONS, CONTACT_CARD } from '../../constants/contact-us';
import { NavSections } from '../../constants/nav-menu';
import { ContactCard } from './components/contact-card';
import { PersonCard } from './components/person-card';

import styles from './contact-us.module.scss';

type ContactUsProps = {
    modalHandler: (e: SyntheticEvent) => void;
};

export const ContactUs = ({ modalHandler }: ContactUsProps) => (
    <section id={NavSections.contactUs} className={styles.sectionWrapper}>
        <div>
            <h4 className={styles.sectionTitle}>{SectionTitles.contactUs}</h4>
            <p className={styles.contactText}>{CONTACT_US_CONTENT.content}</p>
        </div>
        <div className={styles.cardsContainer}>
            {CONTACT_US_PERSONS.map((person) => (
                <PersonCard key={person.key} info={person} />
            ))}
            {CONTACT_CARD.map((card) => (
                <ContactCard
                    key={card.key}
                    title={card.title}
                    content={card.content}
                    contactType={card.contactType}
                    handler={modalHandler}
                />
            ))}
        </div>
    </section>
);
