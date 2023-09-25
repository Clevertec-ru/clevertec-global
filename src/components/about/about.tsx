import { ABOUT } from '../../constants/about';
import { NavSections } from '../../constants/nav-menu';
import { Frame } from '../frame';
import styles from './about.module.scss';

export const About = () => (
    <section className={styles.about} id={NavSections.about}>
        <h4 className={styles.aboutTitle}>{ABOUT.title}</h4>
        <p className={styles.aboutText}>{ABOUT.text}</p>
        <div className={styles.aboutCards}>
            {ABOUT.cards.map((item, index) => (
                <Frame key={index} title={item} background={'Black'} />
            ))}
        </div>
    </section>
);
