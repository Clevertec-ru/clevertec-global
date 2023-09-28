enum AnimateVariant {
    hidden = 'hidden',
    visible = 'visible',
}

const SECTION_TITLE_ANIMATION_VARIANT = {
    [AnimateVariant.hidden]: {
        opacity: 0,
    },
    [AnimateVariant.visible]: {
        opacity: 1,
        transition: { delay: 0.2 },
    },
};

const ANIMATE_TITLE_VARIANT = {
    [AnimateVariant.hidden]: {
        opacity: 0,
        x: -100,
    },
    [AnimateVariant.visible]: (custom) => ({
        opacity: 1,
        x: 0,
        transition: { delay: custom * 0.1 },
    }),
};

export const TITLE_ANIMATION_PROPS = {
    variants: ANIMATE_TITLE_VARIANT,
    initial: AnimateVariant.hidden,
    whileInView: AnimateVariant.visible,
};

export const SECTION_TITLE_ANIMATION_PROPS = {
    variants: SECTION_TITLE_ANIMATION_VARIANT,
    initial: AnimateVariant.hidden,
    whileInView: AnimateVariant.visible,
    exit: AnimateVariant.hidden,
};

export const CASES_SCROLL_OPTIONS_OFFSET_START = '0.8';
export const HEIGHT_TRANSFORM_VALUES = ['0%', '100%'];
export const MAX_HEIGHT_WiTHOUT_ANIMATE = '100vh';
