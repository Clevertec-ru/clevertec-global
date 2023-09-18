import { ABOUT } from '../../constants/about';
import { Frame } from '../frame';
import styles from './about.module.scss';


export const About = () => (
    <section className={styles.about} id='about'>
        <h4 className={styles.aboutTitle}>{ABOUT.title}</h4>
        <p className={styles.aboutText}>{ABOUT.text}</p>
        <div className={styles.aboutCards}>
            {ABOUT.cards.map((item) =>
                <Frame
                    title={item}
                    background={'Black'}
                />
            )}
        </div>
    </section>
);
