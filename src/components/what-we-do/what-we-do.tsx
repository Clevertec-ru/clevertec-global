import { NavSections } from '../../constants/nav-menu';
import { WHAT_WE_DO } from '../../constants/what-we-do';
import { TurningCard } from '../turning-card';
import { FrontCard } from '../turning-card/front-card';

import styles from './what-we-do.module.scss';

export const WhatWeDo = () => (
    <section className={styles.whatWeDo} id={NavSections.whatWeDo}>
        <div className={styles.whatWeDoTextBlock}>
            <h4 className={styles.whatWeDoTitle}>{WHAT_WE_DO.title}</h4>
            <p className={styles.whatWeDoText}>{WHAT_WE_DO.text}</p>
        </div>
        <div className={styles.whatWeDoTurningCards}>
            {WHAT_WE_DO.turningCards.map(
                ({ textFront, stackFront, titleBack, stackBack }, index) => (
                    <div className={styles.whatWeDoTurningCard} key={index}>
                        <TurningCard
                            textFront={textFront}
                            stackFront={stackFront}
                            titleBack={titleBack}
                            stackBack={stackBack}
                        />
                    </div>
                )
            )}
        </div>
        <div className={styles.whatWeDoCards}>
            {WHAT_WE_DO.cards.map(({ text, stack }, index) => (
                <FrontCard key={index} text={text} stack={stack} typeCard={'Static'} />
            ))}
        </div>
    </section>
);
