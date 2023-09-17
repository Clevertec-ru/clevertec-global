import styles from './header.module.scss';


export const Header = () => (
    <header className={styles.header}>
        <h2 className={styles.headerTitle}>Fintech for the future</h2>
        <p className={styles.headerText}>Transform your digital landscape with WislaCode Solutions. Rely on a strong team to develop strong apps.</p>
        <button type="button" className={styles.headerButton}>
            Get In Touch
        </button>
    </header>
);
