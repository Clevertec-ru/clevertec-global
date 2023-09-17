import { ReactNode } from "react";

import styles from './modal.module.scss';

type ModalProps = {
    children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => (
  <div className={styles.modalContainer} >{children}</div>
);