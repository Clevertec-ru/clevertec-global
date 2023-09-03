import Image from 'next/image';

import styles from './logo.module.scss';

export const Logo = () => (
    <div className={styles.logo}>
        <Image
            src={'/images/logo/logo.svg'}
            alt='logo'
            fill
            quality={100}
            className={styles.logoImg}
            priority
        />
        <h3 className={styles.logoSubTitle}>Fintech for the future</h3>
    </div>
);


