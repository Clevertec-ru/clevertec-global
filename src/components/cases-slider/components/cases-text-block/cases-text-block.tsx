import { motion } from 'framer-motion';
import { Ref } from 'react';
import { TITLE_ANIMATION_PROPS } from '../../../../constants/animation';
import { CaseContent } from '../../../../constants/cases';

import styles from './cases-text-block.module.scss';

type CasesTextBlockProps = {
    slide: CaseContent;
    slideRef?: Ref<HTMLDivElement>;
    isMobile?: boolean;
};

export const CasesTextBlock = ({
    slide: { title, content },
    slideRef,
    isMobile = false,
}: CasesTextBlockProps) => (
    <motion.div className={styles.leftSection} ref={slideRef}>
        <div className={styles.textWrapper}>
            <div className={styles.casesTextContent}>
                <motion.h3 custom={1} className={styles.casesBlockTitle} {...TITLE_ANIMATION_PROPS}>
                    {title}
                </motion.h3>
                <motion.p
                    custom={2}
                    className={styles.casesBlockContent}
                    {...TITLE_ANIMATION_PROPS}
                >
                    {content}
                </motion.p>
            </div>
        </div>
    </motion.div>
);
