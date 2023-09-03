import Image from 'next/image';

import styles from './header.module.scss';

export const Header = () => (
    <header className={styles.header}>
        <h2 className={styles.headerTitle}>
            Transform your digital landscape with <span className={styles.headerTitleColor}>CleverNova</span>
        </h2>
        <p className={styles.headerText}>
            We are a team of fintech experts – architects, developers and designers.We develop multifunctional mobile and web applications, which help grow business and showcase new user experience. We follow fintech trends and implement them in our customers' projects.
        </p>
        <div className={styles.headerIcon}>
            <Image
                src={'/images/header/header-icon.svg'}
                alt='logo'
                fill
                quality={100}
                className={styles.headerImg}
                priority
            />
        </div>
    </header>
);


