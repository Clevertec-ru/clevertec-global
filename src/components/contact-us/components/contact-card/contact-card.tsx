'use client'
import Link from 'next/link';
import { SyntheticEvent } from 'react';
import Arrow from '../../../../../public/images/contact-us/arrow-up.svg'
import { ContactVariant } from '../../../../constants/common';
import styles from './contact-card.module.scss';

type ContactCardProps = {
    title: string;
    content: string;
    contactType: ContactVariant;
    handler?: (e: SyntheticEvent) => void;
}

export const ContactCard = ({ title, content, contactType, handler }: ContactCardProps) => {
    const propsForLink = {
        [ContactVariant.email]: {
            href: `${contactType}:${content}`,
            target: "_blank",
            rel: "nofollow",
        },
        [ContactVariant.form]: {
            href: '#',
            onClick: handler
        }
    };

    return (
        <div className={styles.sectionWrapper}>
            <Link {...propsForLink[contactType]} className={styles.linkContainer} >
                <div className={styles.titleContainer}>
                    <h5 className={styles.cardTitle}>{title}</h5>
                    <Arrow />
                </div>
                <p className={styles.cardInfo}>{content}</p>
            </Link>
        </div>
    );
};
