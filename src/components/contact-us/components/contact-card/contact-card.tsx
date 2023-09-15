import Link from 'next/link';
import Arrow from '../../../../../public/images/contact-us/arrow-up.svg'
import { ContactVariant } from '../../../../constants/common';
import styles from './contact-card.module.scss';

type ContactCardProps = {
    title: string;
    content: string;
    contactType: ContactVariant;
}

export const ContactCard = ({ title, content, contactType }: ContactCardProps) => {
    return (
        <div className={styles.sectionWrapper}>
           <Link href={contactType===ContactVariant.email ? `${contactType}:${content}` : '#'} className={styles.linkContainer}>
                <div className={styles.titleContainer}>
                    <h5 className={styles.cardTitle}>{title}</h5>
                    <Arrow />
                </div>
            <p className={styles.cardInfo}>{content}</p>
           </Link>
        </div>
    )
};
