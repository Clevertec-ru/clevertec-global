import { SectionTitles } from '../../constants/common';
import { CONTACT_CARD, CONTACT_US_CONTENT, CONTACT_US_PERSONS } from '../../constants/contact-us';
import { ContactCard } from './components/contact-card';
import { PersonCard } from './components/person-card';

import styles from './contact-us.module.scss';

export const ContactUs = () => (
    <section id='contact-us' className={styles.sectionWrapper}>
        <div>
            <h4 className={styles.sectionTitle}>{SectionTitles.contactUs}</h4>
            <p className={styles.contactText}>{CONTACT_US_CONTENT.content}</p>
        </div>
        <div className={styles.cardsContainer}>
            {CONTACT_US_PERSONS.map(person => (
                <PersonCard key={person.key} info={person} />
            ))}
            {CONTACT_CARD.map(card => (
                <ContactCard key={card.key} title={card.title} content={card.content} contactType={card.contactType}/>
            ))}
        </div>
    </section>
);

