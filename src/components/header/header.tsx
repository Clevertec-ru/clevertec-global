import { SyntheticEvent } from "react";
import { PrimaryButton } from "../primary-button";

import styles from './header.module.scss';

type HeaderProps = {
    modalHandler: (e: SyntheticEvent) => void;
}

export const Header = ({ modalHandler }: HeaderProps) => (
    <header className={styles.header}>
        <h2 className={styles.headerTitle}>Fintech for the future</h2>
        <p className={styles.headerText}>Transform your digital landscape with WislaCode Solutions. Rely on a strong team to develop strong apps.</p>
        <div className={styles.headerButton}>
            <PrimaryButton text='Get in touch' type='button' handler={modalHandler} />
        </div>
    </header>
);
