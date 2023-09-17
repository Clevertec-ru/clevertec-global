import Image from "next/image";
import { ReactNode } from "react";
import { CLOSE_SVG_URL } from "../../../constants/common";

import styles from './modal.module.scss';

type ModalProps = {
    children: ReactNode;
    closeHandler: () => void;
}

export const Modal = ({ children, closeHandler }: ModalProps) => (
    <div className={styles.modalContainer} >
        <button className={styles.closeButton} onClick={closeHandler}>
            <Image src={CLOSE_SVG_URL} alt='close-modal' fill />
        </button>
        {children}
    </div>
);