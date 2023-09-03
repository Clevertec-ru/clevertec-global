import Image from 'next/image';

import styles from './footer.module.scss';

export const Footer = () => (
    <footer className={styles.footer}>
        <h3 className={styles.footerTitle}>
            Stay in touch and contact us
        </h3>
        <a href="mailto:info@clevernova.dev" className={styles.footerEmail}>
            <div className={styles.footerIconBlock}>
                <Image
                    src={'/images/footer/icon-email.svg'}
                    alt='email'
                    fill
                    quality={100}
                    className={styles.footerIcon}
                    priority
                />
            </div>
            info@clevernova.dev
        </a>
        <a href="tel:+48 572 597 508 " className={styles.footerTel}>
            <div className={styles.footerIconBlock}>
                <Image
                    src={'/images/footer/icon-tel.svg'}
                    alt='tel'
                    fill
                    quality={100}
                    className={styles.footerIcon}
                    priority
                />
            </div>
            +48 572 597 508
        </a>
        <div className={styles.footerAdressBlock}>
            <div className={styles.footerIconBlock}>
                <Image
                    src={'/images/footer/icon-map.svg'}
                    alt='map'
                    fill
                    quality={100}
                    className={styles.footerIcon}
                    priority
                />
            </div>
            <p className={styles.footerAdress}>
                Klimczaka, Warszawa, Masovian Voivodeship 02-797, Poland
            </p>
        </div>
    </footer >
);


