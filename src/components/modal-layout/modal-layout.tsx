'use client'
import classNames from 'classnames';
import { ContactDataProps } from '../../constants/contact-form';
import { ContactForm } from '../contact-form';
import { Modal } from './modal/modal';

import styles from './modal-layout.module.scss';

type ModalLayoutType = {
    isShow: boolean;
    onAddDataHandler: (values: ContactDataProps)=>void;
    onCloseHandler: ()=> void;

}

export const ModalLayout = ({isShow, onAddDataHandler, onCloseHandler}: ModalLayoutType) => {
  if(!isShow) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === e.currentTarget) {
      onCloseHandler()
    }
  };
  
  const containerStyles = classNames({
    [styles.overlay]: true,
    [styles.displayOverlay]: isShow
  });

  return (
    <div className={containerStyles} onClick={handleOverlayClick}>
      <Modal>
        <ContactForm onAddData={onAddDataHandler}/>
      </Modal>
    </div>
  );
};