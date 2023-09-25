import { Frame } from '../../frame';
import styles from './front-card.module.scss';

export const FrontCard = ({ text, stack, typeCard }) => (
    <div className={styles[`frontCard${typeCard}`]}>
        <p className={styles.frontCardText}>{text}</p>
        <div className={styles.frontCardstacks}>
            {stack.map((item, index) => (
                <Frame key={index} title={item} />
            ))}
        </div>
    </div>
);
