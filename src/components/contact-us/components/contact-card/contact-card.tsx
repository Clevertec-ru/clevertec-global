'use client'
import Link from 'next/link';
import Arrow from '../../../../../public/images/contact-us/arrow-up.svg'
import { ContactVariant } from '../../../../constants/common';
import styles from './contact-card.module.scss';

type ContactUsRequestProps = {
    type: string,
}

type ContactCardProps = {
    title: string;
    content: string;
    contactType: ContactVariant;
    handler?:  ()=> void,
}

export const ContactCard = ({ title, content, contactType, handler }: ContactCardProps) => (
        <div className={styles.sectionWrapper}>
           <Link 
                href={contactType===ContactVariant.email ? `${contactType}:${content}` : '#'} 
                onClick={handler}
                className={styles.linkContainer}
            >
                <div className={styles.titleContainer}>
                    <h5 className={styles.cardTitle}>{title}</h5>
                    <Arrow />
                </div>
                <p className={styles.cardInfo}>{content}</p>
           </Link>
        </div>
);
