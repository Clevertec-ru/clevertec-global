import { SyntheticEvent } from "react";
import Image from 'next/image';

import { PrimaryButton } from "../primary-button";

import styles from './header.module.scss';

type HeaderProps = {
    modalHandler: (e: SyntheticEvent) => void;
}

export const Header = ({ modalHandler }: HeaderProps) => (
    <header className={styles.header}>
        <h2 className={styles.headerTitle}>Next-Generation Fintech</h2>
        <p className={styles.headerText}>Transform your digital landscape with WislaCode Solutions. Rely on a strong team to develop strong apps.</p>
        <div className={styles.headerButton}>
            <PrimaryButton text='Get in touch' type='button' handler={modalHandler} />
        </div>
        <div className={styles.headerImage}>
            <Image
                src={'/images/header/header-img.jpg'}
                alt={'team'}
                fill
                quality={100}
                sizes={'100%'}
                className={styles.headerImg}
                priority
            />
        </div>
    </header>
);
