export const scrollToNextSection = (section: HTMLElement | Element) => {
    const elementRect = section.getBoundingClientRect();
    const topOffset = elementRect.top + window.scrollY;
    window.scrollTo({
        top: topOffset,
        behavior: 'smooth',
    });
};
