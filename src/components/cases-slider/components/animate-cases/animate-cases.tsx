import { MotionValue, motion } from 'framer-motion';
import { MAX_HEIGHT_WiTHOUT_ANIMATE } from '../../../../constants/animation';
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
            <CasesTextBlock key={slide.key} slide={slide} slideRef={slidesRefs[index]} />
        ))}
        <div className={styles.rightSection}>
            <div className={styles.imageWrapper}>
                {CASES_CONTENT.map(({ key }, index) => (
                    <motion.div
                        layout
                        key={key}
                        className={styles.mainImage}
                        style={{
                            backgroundImage: `url(${CASES_CONTENT[index].image})`,
                            height: !index ? MAX_HEIGHT_WiTHOUT_ANIMATE : height[index],
                        }}
                    />
                ))}
            </div>
        </div>
    </>
);
