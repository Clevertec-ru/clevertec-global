import { MotionValue, motion } from 'framer-motion';
import { CaseContent, CASES_CONTENT } from '../../../../constants/cases';
import { CasesTextBlock } from '../cases-text-block';

import styles from './animate-cases.module.scss';

type StaticCasesProps = {
    cases: CaseContent[];
    slidesRefs: React.Ref<HTMLDivElement>[];
    height: MotionValue<string>[];
};

export const AnimateCases = ({ cases, slidesRefs, height }: StaticCasesProps) => (
    <>
        {cases.map((slide, index) => (
            <CasesTextBlock slide={slide} slideRef={slidesRefs[index]} />
        ))}
        <div className={styles.rightSection}>
            <div className={styles.imageWrapper}>
                {CASES_CONTENT.map((_, index) => (
                    <motion.div
                        layout
                        className={styles.mainImage}
                        style={{
                            backgroundImage: `url(${CASES_CONTENT[index].image})`,
                            height: height[index],
                        }}
                    />
                ))}
            </div>
        </div>
    </>
);
