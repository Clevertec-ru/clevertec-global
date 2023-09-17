import { CASES_CONTENT } from '../../constants/cases';
import { CasesImageBlock } from './components/cases-image-block';
import { CasesTextBlock } from './components/cases-text-block';

import styles from './cases-section.module.scss';

export const CasesSection = () => (
    <section id='cases'>
        {CASES_CONTENT.map((caseVariant) => (
            <div key={caseVariant.key} className={styles.sectionWrapper}>
                <CasesTextBlock title={caseVariant.title} content={caseVariant.content} />
                <CasesImageBlock image={caseVariant.image} alt={caseVariant.title} keyForStyle={caseVariant.key} />
            </div>
        ))}
    </section>

);

