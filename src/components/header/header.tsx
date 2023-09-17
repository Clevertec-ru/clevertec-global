import { SyntheticEvent } from "react";
import { PrimaryButton } from "../primary-button";

import styles from './header.module.scss';

type HeaderProps = {
    modalHandler: (e: SyntheticEvent) => void;
}

export const Header = ({ modalHandler }: HeaderProps) => (
    <header className={styles.headerContainer}>
        <div className={styles.modalButton}>
            <PrimaryButton text='Get in touch' type='button' handler={modalHandler} />
        </div>
    </header>
);