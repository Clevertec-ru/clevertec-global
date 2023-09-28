'use client';
import { useState } from 'react';

import styles from './custom-textarea.module.scss';

type CustomTextareaProps = {
    field: {
        placeholder: string;
        fieldName: string;
    };
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const CustomTextarea = ({ field, value, onChange }: CustomTextareaProps) => {
    const [isActive, setIsActive] = useState(false);
    const isActiveLabel = (isActive && value) || !!value;

    const handleFocus = () => {
        setIsActive(true);
    };

    const handleBlur = () => {
        setIsActive(false);
    };

    return (
        <div className={styles.textAreaWrapper}>
            {isActiveLabel && <span className={styles.floatingLabel}>{field.placeholder}</span>}
            <textarea
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={styles.contactFormTextArea}
                placeholder={field.placeholder}
                name={field.fieldName}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};
