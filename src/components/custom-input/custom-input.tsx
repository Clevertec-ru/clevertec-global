'use client'
import { useState } from 'react';

import styles from './custom-input.module.scss';

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
}

export const CustomInput = ({field, value, onChange}: CustomInputProps) => {
    const [isActive, setIsActive] = useState(false);
    const [isError, setIsError] = useState(false);

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsError(!!(value && !field.regex.test(value)))
        setIsActive(false);
    };
    
    return (
    <div className={styles.customFieldContainer}>
        {(isActive && value || value ) && <span className={styles.floatingLabel}>{field.placeholder}</span>}
        <input
            type={field.type}
            placeholder={field.placeholder}
            className={styles.customField}
            name={field.fieldName}
            value={value}
            onChange={onChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            />
        {isError && <p className={styles.errorMessage}>{field.errorMessage}</p>}
    </div>
)
} ;