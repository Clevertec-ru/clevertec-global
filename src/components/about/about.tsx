import Image from 'next/image';

import { ABOUT_IMAGE } from '../../constants/about';

import styles from './about.module.scss';

export const About = () => (
    <section className={styles.about}>
        <div className={styles.aboutTextBlock}>
            <h3 className={styles.aboutTitle}>About</h3>
            <p className={styles.aboutText}>We have broad views and great opportunities to amp up your business. Our teams work flexibly
                and transparently. First and foremost, we thoroughly study the requirements and offer the most effecient solution. Then, we show the result at each stage and discuss possible improvements to contribute
                to your ultimate success. Our Projects speak louder than words.
            </p>
            <p className={styles.aboutTextParagraph}>
                You can take a look at them in this <span className={styles.aboutTextColor}>case-book</span>.
            </p>
        </div>
        <div className={styles.aboutImages}>
            {ABOUT_IMAGE.map(({ img, key }) =>
                <div className={styles.aboutImage}>
                    <Image
                        src={img}
                        alt={`img${key}`}
                        fill
                        quality={100}
                        sizes={'100%'}
                        className={styles.aboutImg}
                        priority
                    />
                </div>
            )}
        </div>
    </section>
);


