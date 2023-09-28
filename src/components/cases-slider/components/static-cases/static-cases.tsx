import Image from 'next/image';

import { BLUR_DATA_URL } from '../../../../constants/blur-data-url';
import { CaseContent } from '../../../../constants/cases';
import { CasesTextBlock } from '../cases-text-block';

import styles from './static-cases.module.scss';

type StaticCasesProps = {
    cases: CaseContent[];
};

export const StaticCases = ({ cases }: StaticCasesProps) => (
    <div className={styles.casesVariants}>
        {cases.map((caseVariant) => (
            <div className={styles.isTabletCase} key={caseVariant.key}>
                <div className={styles.mainImage}>
                    <Image
                        src={caseVariant.image}
                        alt={caseVariant.title}
                        fill
                        quality={100}
                        priority
                        placeholder='blur'
                        blurDataURL={BLUR_DATA_URL}
                    />
                </div>
                <CasesTextBlock slide={caseVariant} />
            </div>
        ))}
    </div>
);
