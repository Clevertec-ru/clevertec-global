'use client';
import { useScroll, useTransform, motion } from 'framer-motion';
import { forwardRef, LegacyRef, useRef } from 'react';
import {
    CASES_SCROLL_OPTIONS_OFFSET_START,
    HEIGHT_TRANSFORM_VALUES,
    SECTION_TITLE_ANIMATION_PROPS,
} from '../../constants/animation';
import { CASES_CONTENT } from '../../constants/cases';
import { SectionTitles, TABLET_WIDTH } from '../../constants/common';
import { SectionVariants } from '../../constants/nav-menu';
import { useWindowWidth } from '../../hooks/window-width';
import { AnimateCases } from './components/animate-cases';
import { StaticCases } from './components/static-cases';
import styles from './cases-slider.module.scss';

export const CasesSlider = forwardRef((props, ref: LegacyRef<HTMLElement>) => {
    const slidesRefs = CASES_CONTENT.map(() => useRef(null));
    const scrollCases = CASES_CONTENT.map((_, index) =>
        useScroll({
            target: slidesRefs[index],
            offset: [`start ${CASES_SCROLL_OPTIONS_OFFSET_START}`, 'end end'],
        }),
    );
    const height = CASES_CONTENT.map((_, index) =>
        useTransform(
            scrollCases[index].scrollYProgress,
            [0, Number(CASES_SCROLL_OPTIONS_OFFSET_START)],
            [...HEIGHT_TRANSFORM_VALUES],
        ),
    );
    const { isDevice: isTablet } = useWindowWidth(TABLET_WIDTH);

    return (
        <section id={SectionVariants.cases} className={styles.sectionWrapper} ref={ref}>
            <div className={styles.sectionTitleWrapper}>
                <motion.h4 className={styles.casesTitle} {...SECTION_TITLE_ANIMATION_PROPS}>
                    {SectionTitles.cases}
                </motion.h4>
            </div>
            {isTablet ? (
                <StaticCases cases={CASES_CONTENT} />
            ) : (
                <AnimateCases cases={CASES_CONTENT} slidesRefs={slidesRefs} height={height} />
            )}
        </section>
    );
});
