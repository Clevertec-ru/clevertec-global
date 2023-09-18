import { SyntheticEvent } from 'react';
import styles from './primary-button.module.scss';

type PrimaryButtonProps = {
    text: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    handler?: (e: SyntheticEvent) => void;
}

export const PrimaryButton = ({ text, type = 'button', disabled = false, handler }: PrimaryButtonProps) => (
    <button
        className={styles.primaryButtonContainer}
        type={type}
        disabled={disabled}
        onClick={handler}
    >
        {text}
    </button>
);