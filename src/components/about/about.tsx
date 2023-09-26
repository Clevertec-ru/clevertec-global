import { forwardRef, LegacyRef } from 'react';

import { ABOUT } from '../../constants/about';
import { SectionVariants } from '../../constants/nav-menu';
import { Frame } from '../frame';
import styles from './about.module.scss';


export const About = forwardRef((props, ref: LegacyRef<HTMLElement>) => (
    <section className={styles.about} id={SectionVariants.about} ref={ref}>
        <h4 className={styles.aboutTitle}>{ABOUT.title}</h4>
        <p className={styles.aboutText}>{ABOUT.text}</p>
        <div className={styles.aboutCards}>
            {ABOUT.cards.map((item) =>
                <Frame
                    title={item}
                    background={'Black'}
                    key={item}
                />
            )}
        </div>
    </section>
))
