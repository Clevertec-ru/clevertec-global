import styles from './primary-button.module.scss';

type PrimaryButtonProps = {
    text: string;
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
}

export const PrimaryButton = ({text, type = 'button', disabled = false }: PrimaryButtonProps) => (
  <button className={styles.primaryButtonContainer} type={type} disabled={disabled}>{text}</button>
);