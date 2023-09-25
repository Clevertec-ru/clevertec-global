import { forwardRef, LegacyRef } from 'react';

import { CASES_CONTENT } from '../../constants/cases';
import { CasesImageBlock } from './components/cases-image-block';
import { CasesTextBlock } from './components/cases-text-block';

import styles from './cases-section.module.scss';

export const CasesSection = forwardRef((props, ref: LegacyRef<HTMLElement>) => (
    <section id='cases' ref={ref}>
        {CASES_CONTENT.map((caseVariant) => (
            <div key={caseVariant.key} className={styles.sectionWrapper}>
                <CasesTextBlock title={caseVariant.title} content={caseVariant.content} />
                <CasesImageBlock image={caseVariant.image} alt={caseVariant.title} keyForStyle={caseVariant.key} />
            </div>
        ))}
    </section>
))
