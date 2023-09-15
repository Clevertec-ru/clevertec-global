import { SectionTitles } from '../../../../constants/common';
import styles from './cases-text-block.module.scss';

type CasesTextBlockProps = {
    title: string;
    content: string;
}

export const CasesTextBlock = ({ title, content }: CasesTextBlockProps) => (
    <div className={styles.casesTextWrapper}>
        <h4 className={styles.casesTitle}>{SectionTitles.cases}</h4>
        <div>
            <h3 className={styles.casesBlockTitle}>{title}</h3>
            <p className={styles.casesBlockContent}>{content}</p>
        </div>
    </div>
);

