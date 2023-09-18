import styles from './back-card.module.scss';


export const BackCard = ({ titleBack, stackBack }) => (
    <div className={styles.backCard}>
        <span className={styles.backCardTitle}>{titleBack}</span>
        <div className={styles.backCardItems}>
            {stackBack.map(({ tech, stack }) =>
                <div className={styles.backCardItem}>
                    <span className={styles.backCardTech}>{tech}</span>
                    <span className={styles.backCardStack}>{stack}</span>
                </div>
            )}
        </div>
    </div>
);
