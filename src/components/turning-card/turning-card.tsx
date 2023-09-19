import { BackCard } from './back-card';
import { FrontCard } from './front-card';
import styles from './turning-card.module.scss';


export const TurningCard = ({ textFront, stackFront, titleBack, stackBack }) => (
    <figure className={styles.turningCard}>
        <FrontCard
            text={textFront}
            stack={stackFront}
            typeCard={'Animation'}
        />
        <BackCard
            titleBack={titleBack}
            stackBack={stackBack}
        />
    </figure>
);
