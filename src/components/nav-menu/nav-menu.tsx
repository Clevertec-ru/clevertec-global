"use client"
import { useEffect, useState } from 'react';
import classNames from 'classnames';

import { BurgerMenu } from './burger-menu';

import { NAV_MENU } from '../../constants/nav-menu';

import { useScrollPosition } from '../../hooks/useScrollPosition';
import { onSetBodyStyle } from '../../utils/set-body-style';

import Logo from '../../../public/images/logo/logo.svg'

import styles from './nav-menu.module.scss';

type PositionType = {
    prevPos: {
        x: number,
        y: number
    };
    currPos: {
        x: number,
        y: number
    };
}

export const NavMenu = ({ scrollToComponent }) => {
    const [isScroll, setIsScroll] = useState(false);
    const [sticky, setSticky] = useState(false);
    const [isDisplayNav, setIsDisplayNav] = useState(false);

    const [isBurgerOpen, setIsBurgerOpen] = useState(false);
    const [isActive, setIsActive] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useScrollPosition(
        ({ prevPos, currPos }: PositionType) => {
            const isHide = currPos.y < prevPos.y - 200;
            const isShow = currPos.y > prevPos.y + 200;
            if ((currPos.y < -1 || (currPos.y > -200 && prevPos.y === 0)) && !isHide) {
                setIsScroll(true);
            } else {
                setIsScroll(false);
            }
            if (isHide && !sticky) {
                setSticky(true);
                setTimeout(() => {
                    setIsDisplayNav(true);
                }, 300);
            }
            if ((isShow && sticky) || currPos.y === 0) {
                setIsDisplayNav(false);
                setTimeout(() => {
                    setSticky(false);
                }, 300);
            }
        },
        [sticky],
        false,
        false,
        300,
    );

    const onBurgerClick = () => {
        if (isActive) {
            setIsActive(false);
        } else {
            setIsBurgerOpen(!isBurgerOpen);
        }
        if (!isBurgerOpen || (isBurgerOpen && isActive)) {
            onSetBodyStyle(false, scrollPosition, setScrollPosition);
        } else {
            onSetBodyStyle(true, scrollPosition, setScrollPosition);
        }
    };

    useEffect(() => {
        onSetBodyStyle(true, scrollPosition, setScrollPosition);
    }, []);

    const navClass = classNames(styles.navMenu, {
        [styles.scroll]: isScroll,
        [styles.hide]: sticky,
        [styles.display]: isDisplayNav,
    });

    const navClassButtonBurger = classNames(styles.burger, {
        [styles.open]: isBurgerOpen && !isActive,
        [styles.submenu__active]: isActive,
    });
    return (
        <nav className={navClass}>
            <div className={styles.navMenuBlock}>
                <h1 className={styles.navMenuLogo}><Logo/></h1>
                <ul className={styles.navItems}>
                    {NAV_MENU.menu.map(({ text }) =>
                        <li className={styles.navMenuItem} key={text}>
                            <button
                                className={styles.navMenuButton}
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
                <button
                    type="button"
                    className={navClassButtonBurger}
                    onClick={onBurgerClick}
                >
                    <span />
                </button>
                {isBurgerOpen
                    &&
                    <BurgerMenu
                        setIsBurgerOpen={setIsBurgerOpen}
                        setIsActive={setIsActive}
                        scrollPosition={scrollPosition}
                        setScrollPosition={setScrollPosition}
                        scrollToComponent={scrollToComponent}
                    />}
            </div>
        </nav>
    );
}
