'use client'
import classNames from 'classnames';
import { SyntheticEvent } from 'react';
import { ContactDataProps } from '../../constants/contact-form';
import { ContactForm } from '../contact-form';
import { Modal } from './modal/modal';

import styles from './modal-layout.module.scss';

type ModalLayoutType = {
    isShow: boolean;
    onAddDataHandler: (values: ContactDataProps) => void;
    onCloseHandler: () => void;
    isLoading: boolean;

}

export const ModalLayout = ({ isShow, isLoading, onAddDataHandler, onCloseHandler }: ModalLayoutType) => {
    if (!isShow) return null;

    const handleOverlayClick = (e: SyntheticEvent) => {
        if (e.target === e.currentTarget) {
            onCloseHandler();
        }
    };

    const containerStyles = classNames({
        [styles.overlay]: true,
        [styles.displayOverlay]: isShow
    });

    return (
        <div className={containerStyles} onClick={handleOverlayClick} >
            <Modal closeHandler={onCloseHandler}>
                <ContactForm
                    onAddData={onAddDataHandler}
                    isLoading={isLoading}
                />
            </Modal>
        </div>
    );
};