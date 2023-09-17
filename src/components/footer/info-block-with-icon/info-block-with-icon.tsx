import Image from 'next/image';

import styles from './info-block-with-icon.module.scss';

type InfoBlockWithIconProps = {
    icon: string;
    text: string;
    contactType: string
}

export const InfoBlockWithIcon = ({ icon, text, contactType }: InfoBlockWithIconProps) => (
    <div className={styles.infoContainer}>
        <div className={styles.iconContainer}>
            <Image
                src={icon}
                alt={contactType}
                fill
                quality={100}
                className={styles.icon}
                priority
            />
        </div>
        <p>{text}</p>
    </div >
);
