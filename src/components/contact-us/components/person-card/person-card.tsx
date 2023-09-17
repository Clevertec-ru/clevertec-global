'use client'
import Image from 'next/image';
import { useState } from 'react';
import { PersonalInfo } from '../../../../constants/contact-us';

import styles from './person-card.module.scss';


type PersonalCardProps = {
    info: PersonalInfo;
}

export const PersonCard = ({ info: { name, avatar, fullInfo, shortInfo, jobTitle } }: PersonalCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    return (
        <div
            className={styles.sectionWrapper}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {!isHovered && <div className={styles.avatarContainer}>
                <Image src={avatar} alt={name} fill />
            </div>}
            <h5 className={styles.cardTitle}>{`${name}, ${jobTitle}`}</h5>
            <p className={styles.cardInfo}>{isHovered ? fullInfo : shortInfo}</p>
        </div>
    )
};
