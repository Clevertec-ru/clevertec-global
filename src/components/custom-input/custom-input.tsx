'use client'
import { useState } from 'react';

import styles from './custom-input.module.scss';
import { FormErrorMessages } from '../../constants/contact-form';

type CustomInputProps = {
    field: {
        placeholder: string,
        type: string,
        errorMessage: string,
        fieldName: string,
        regex: RegExp
    },
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
    isRequired: boolean;
}

export const CustomInput = ({ field, value, onChange, isRequired }: CustomInputProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isError, setIsError] = useState(false);
    
    const isActiveLabel = (isActive && value) || !!value;
    const errorMessageVariant = !value ? FormErrorMessages.requiredField : field.errorMessage;
    const errorMessage = {
        email: errorMessageVariant,
        name: field.errorMessage
    }
    
    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        if (field.fieldName === 'email') {
            setIsError(!!(value && !field.regex.test(value)|| !value))
        } else {
            setIsError(!value);
        }
        setIsActive(false);
    };

    return (
        <div className={styles.customFieldContainer}>
            {isActiveLabel && <span className={styles.floatingLabel}>{field.placeholder}</span>}
            <input
                type={field.type}
                placeholder={field.placeholder}
                className={styles.customField}
                name={field.fieldName}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required={isRequired}
            />
            {isError && <p className={styles.errorMessage}>{errorMessage[field.fieldName]}</p>}
        </div>
    )
};