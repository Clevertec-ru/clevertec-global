'use client'
import { useState, useEffect, SyntheticEvent } from 'react';
import { ContactDataProps, INITIAL_FORM_VALUE, CONTACT_FORM_DATA } from '../../constants/contact-form';
import { CustomInput } from '../custom-input';
import { PrimaryButton } from '../primary-button';

import styles from './contact-form.module.scss';

type ContactFormProps = {
    onAddData: (values) => void
}

export const ContactForm = ({ onAddData }: ContactFormProps) => {
    const [values, setValues] = useState<ContactDataProps>(INITIAL_FORM_VALUE);
    const [isDisabled, setIsDisabled] = useState(true);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value.trimStart() });
    };

    const onSubmit = (e: SyntheticEvent) => {
        e.preventDefault();
        onAddData((values));
    };

    useEffect(() => {
        if (values.email && values.name) {
            const emailError = !CONTACT_FORM_DATA.inputs.find(input => input.fieldName === 'email')?.regex.test(values.email);
            setIsDisabled(emailError);
        } else {
            setIsDisabled(true);
        }
    }, [values])

    return (
        <form className={styles.contactFormContainer} onSubmit={onSubmit}>
            <h4 className={styles.contactFormTitle}>{CONTACT_FORM_DATA.title}</h4>
            <div className={styles.contactFormFields}>
                {CONTACT_FORM_DATA.inputs.map(field => (
                    <CustomInput
                        field={field}
                        value={values[field.fieldName]}
                        onChange={handleInputChange}
                        key={field.type}
                        isRequired={field.isRequired}
                    />
                ))}
                <textarea
                    className={styles.contactFormTextArea}
                    placeholder={CONTACT_FORM_DATA.textarea.placeholder}
                    name={CONTACT_FORM_DATA.textarea.fieldName}
                    value={values.content}
                    onChange={handleInputChange}
                />
            </div>
            <PrimaryButton text={CONTACT_FORM_DATA.submitButton} type='submit' disabled={isDisabled} />
        </form>
    )
};