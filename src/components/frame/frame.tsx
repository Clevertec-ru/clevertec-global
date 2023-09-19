import classNames from 'classnames';

import styles from './frame.module.scss';

type FrameType = {
    title: string;
    background?: string;
}


export const Frame = ({ title, background }: FrameType) => (
    <span className={classNames(styles.frame, background && styles[`frame${background}`])}>
        {title}
    </span>
);
