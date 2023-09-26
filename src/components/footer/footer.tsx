import { FOOTER_INFO } from '../../constants/footer';
import { NAV_MENU } from '../../constants/nav-menu';
import { InfoBlockWithIcon } from './info-block-with-icon';

import styles from './footer.module.scss';

export const Footer = ({ scrollToComponent }) => (
    <footer className={styles.footerWrapper}>
        <div className={styles.footerContainer}>
            <nav className={styles.footerNavContainer}>
                <ul className={styles.navContainer}>
                    {NAV_MENU.menu.map(({ text }) =>
                        <li key={text}>
                            <button
                                className={styles.navContainerButton}
                                type='button'
                                onClick={() => {
                                    scrollToComponent(text)
                                }}
                            >
                                {text}
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
            <h4 className={styles.footerTitle}>{FOOTER_INFO.title}</h4>
            <div className={styles.infoWithIcon}>
                {FOOTER_INFO.content.map(({ contactType, text, icon }) => (
                    <InfoBlockWithIcon key={contactType} icon={icon} text={text} contactType={contactType} />
                ))}
            </div>
        </div>

    </footer >
);


