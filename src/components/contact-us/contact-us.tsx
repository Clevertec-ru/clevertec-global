'use client'
import { useReducer } from 'react';
import { SectionTitles } from '../../constants/common';
import { ContactDataProps } from '../../constants/contact-form';
import { CONTACT_US_CONTENT, CONTACT_US_PERSONS, CONTACT_CARD } from '../../constants/contact-us';
import { reducer, initialState } from '../../store/contact-us';
import { setModal, contactUsClear } from '../../store/contact-us/actions';
import { onContactUs } from '../../store/contact-us/send-form';
import { ModalLayout } from '../modal-layout';
import { ContactCard } from './components/contact-card';
import { PersonCard } from './components/person-card';

import styles from './contact-us.module.scss';

export const ContactUs = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addFormData = (values: ContactDataProps) => {
        onContactUs({ dispatch, values});
    }
    
    const setModalHandler = () =>{
        dispatch(setModal());
    }

    const clearAndCloseForm = () => {
        setModalHandler();
        dispatch(contactUsClear());
    };

   return (
    <>
        <section id='contact-us' className={styles.sectionWrapper}>
           <div>
               <h4 className={styles.sectionTitle}>{SectionTitles.contactUs}</h4>
               <p className={styles.contactText}>{CONTACT_US_CONTENT.content}</p>
           </div>
           <div className={styles.cardsContainer}>
               {CONTACT_US_PERSONS.map(person => (
                   <PersonCard key={person.key} info={person} />
               ))}
               {CONTACT_CARD.map(card => (
                   <ContactCard key={card.key} title={card.title} content={card.content} contactType={card.contactType} handler={setModalHandler} />
               ))}
           </div>
       </section>
       <ModalLayout isShow={state.isShowModal} onAddDataHandler={addFormData} onCloseHandler={clearAndCloseForm} />
    </>
)};

