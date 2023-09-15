import { Dispatch, SetStateAction } from 'react';

export const onSetBodyStyle = (isModalActive?: boolean, scrollPosition?: number, setScrollPosition?: Dispatch<SetStateAction<number>>) => {
    const html = document.documentElement;
    if (!isModalActive) {
        const scrollPositionNew = window.pageYOffset;
        html.style.top = `${-scrollPositionNew}px`;
        html.classList.add('hystmodal__opened');
        setScrollPosition?.(scrollPositionNew);
    } else {
        html.classList.remove('hystmodal__opened');
        // прокручиваем окно туда где оно было
        window.scrollTo(0, scrollPosition!);
        html.style.top = '';
    }
};

export const enableBodyScroll = () => {
    if (document.readyState === 'complete') {
        document.body.style.position = '';
        document.body.style.overflowY = '';
        document.body.style.left = '';
        document.body.style.right = '';
        if (document.body.style.marginTop) {
            const scrollTop = -parseInt(document.body.style.marginTop, 10);
            document.body.style.marginTop = '';
            window.scrollTo(window.pageXOffset, scrollTop);
        }
    } else {
        window.addEventListener('load', enableBodyScroll);
    }
};

export const disableBodyScroll = ({ savePosition = false } = {}) => {
    if (document.readyState === 'complete') {
        if (document.body.scrollHeight > window.innerHeight) {
            if (savePosition) document.body.style.marginTop = `-${window.pageYOffset}px`;
            document.body.style.position = 'fixed';
            document.body.style.left = '0';
            document.body.style.right = '0';
            document.body.style.overflowY = 'scroll';
        }
    } else {
        window.addEventListener('load', () => disableBodyScroll({ savePosition }));
    }
};

export const scrollBodyBottom = () => {
    const scrollHeight = Math.max(
        document.body.scrollHeight, document.documentElement.scrollHeight,
        document.body.offsetHeight, document.documentElement.offsetHeight,
        document.body.clientHeight, document.documentElement.clientHeight
    );
    window.scrollTo({
        top: scrollHeight,
        left: 0,
        behavior: 'smooth'
    });
}
