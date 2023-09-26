import { motion } from 'framer-motion';
import { TITLE_ANIMATION_PROPS } from '../../../constants/animation';
import { SectionTitles } from '../../../constants/common';

import styles from './cases-text-block.module.scss';

type CasesTextBlockProps = {
    title: string;
    content: string;
};

export const CasesTextBlock = ({ title, content }: CasesTextBlockProps) => (
    <div className={styles.casesTextWrapper}>
        <h4 className={styles.casesTitle}>{SectionTitles.cases}</h4>
        <div className={styles.casesTextContent}>
            <motion.h3
                custom={1}
                className={styles.casesBlockTitle}
                {...TITLE_ANIMATION_PROPS}
            >
                {title}
            </motion.h3>
            <motion.p custom={2} className={styles.casesBlockContent} {...TITLE_ANIMATION_PROPS}>
                {content}
            </motion.p>
        </div>
    </div>
);
