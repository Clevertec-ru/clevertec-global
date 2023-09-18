import classNames from 'classnames';

import styles from './frame.module.scss';


export const Frame = ({ title, background }) => (
    <span className={classNames(styles.frame, styles[`frame${background}`]) }>
        {title}
    </span>
);
