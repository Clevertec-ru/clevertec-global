enum AnimateVariant {
    hidden = 'hidden',
    visible = 'visible',
}

const ANIMATE_TITLE_VARIANT = {
    [AnimateVariant.hidden]: {
        opacity: 0,
        x: -100,
    },
    [AnimateVariant.visible]: (custom) => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.2 },
    }),
};

export const TITLE_ANIMATION_PROPS = {
    variants: ANIMATE_TITLE_VARIANT,
    initial: AnimateVariant.hidden,
    whileInView: AnimateVariant.visible,
};
