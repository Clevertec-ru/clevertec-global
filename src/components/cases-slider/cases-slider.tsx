'use client';
import classNames from 'classnames';
import { useAnimation, motion } from 'framer-motion';
import { useState, useRef, useEffect, LegacyRef, forwardRef } from 'react';
import { CASES_CONTENT } from '../../constants/cases';
import { SectionVariants } from '../../constants/nav-menu';
import { scrollToNextSection } from '../../utils/scroll-to-next-section';
import { CasesTextBlock } from './cases-text-block';

import styles from './cases-slider.module.scss';

export const CasesSlider = forwardRef((props, ref: LegacyRef<HTMLElement>) => {
    const [isSliderVisible, setIsSliderVisible] = useState(false);
    const [activeSlideIndex, setActiveSlideIndex] = useState(0);
    const [slideHeight, setSlideHeight] = useState<number | undefined>();
    const sliderContainerRef = useRef<HTMLDivElement | null>(null);
    const controls = useAnimation();

    useEffect(() => {
        const sliderContainer = sliderContainerRef.current;
        if (sliderContainer) {
            setSlideHeight(sliderContainer.clientHeight);
        }

        const observer = new IntersectionObserver(
            (entries) => {
                const entry = entries[0];
                setIsSliderVisible(entry.isIntersecting);
                if (entry.isIntersecting) {
                    scrollToNextSection(entry.target);
                    controls.start({ opacity: 1 });
                } else {
                    controls.start({ opacity: 0.5 });
                }
            },
            { threshold: 0.5 },
        );
        if (sliderContainer) {
            observer.observe(sliderContainer);
        }

        return () => {
            if (sliderContainer) {
                observer.unobserve(sliderContainer);
            }
        };
    }, [controls]);

    const setScrollIndex = (e: React.WheelEvent<HTMLDivElement>) => {
        if (e.deltaY < 0) {
            setActiveSlideIndex((prevIndex) => prevIndex - 1);
            if (activeSlideIndex <= 0) {
                setActiveSlideIndex(0);
            }
        }
        if (e.deltaY > 0) {
            setActiveSlideIndex((prevIndex) => prevIndex + 1);
            if (activeSlideIndex >= CASES_CONTENT.length - 1) {
                setActiveSlideIndex(CASES_CONTENT.length - 1);
            }
        }
    };

    const scrollToSection = (e: React.WheelEvent<HTMLDivElement>) => {
        if (e.deltaY < 0 && activeSlideIndex === 0) {
            const prevSection = document.getElementById(SectionVariants.whatWeDo);
            setIsSliderVisible(false);
            prevSection && scrollToNextSection(prevSection);
        }
        if (e.deltaY > 0 && activeSlideIndex === CASES_CONTENT.length - 1) {
            const nextSection = document.getElementById(SectionVariants.contactUs);
            setIsSliderVisible(false);
            nextSection && scrollToNextSection(nextSection);
        }
    };

    const handleMouseWheel = (event: React.WheelEvent<HTMLDivElement>) => {
        if (isSliderVisible) {
            setScrollIndex(event);
            scrollToSection(event);
        }
    };

    const stickyClass = classNames([styles.sliderContainer, isSliderVisible && styles.sticky]);
    const translateY = activeSlideIndex * slideHeight!;

    return (
        <section className={stickyClass}id={SectionVariants.cases} ref={ref} >
            <motion.div
                className={stickyClass}
                ref={sliderContainerRef}
                initial={{ opacity: 0.5 }}
                onWheel={handleMouseWheel}
                animate={controls}
            >
                <div className={styles.leftSection}>
                    <motion.div
                        className={styles.leftSlide}
                        style={{
                            y: -translateY,
                        }}
                    >
                        {CASES_CONTENT.map((slide, index) => (
                            <CasesTextBlock key={index} title={slide.title} content={slide.content} />
                        ))}
                    </motion.div>
                </div>
                <motion.div
                    className={styles.rightSlide}
                    style={{
                        top: `-${(CASES_CONTENT.length - 1) * 100}vh`,
                        y: translateY,
                    }}
                >
                    {CASES_CONTENT.map((slide, index) => (
                        <div key={index} style={{ backgroundImage: `url('${slide.image}')` }} />
                    ))}
                </motion.div>
            </motion.div>
        </section>
    );
});
