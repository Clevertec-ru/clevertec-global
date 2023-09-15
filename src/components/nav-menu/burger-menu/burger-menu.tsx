'use client'
import React, { useState, useEffect, useRef, Dispatch, SetStateAction } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import classNames from 'classnames';

import { onSetBodyStyle, scrollBodyBottom } from '../../../utils/set-body-style';

import styles from './burger-menu.module.scss';
import { NAV_MENU } from '../../../constants/nav-menu';

type BurgerMenuProps = {
    setIsActive: Dispatch<SetStateAction<boolean>>;
    setIsBurgerOpen: Dispatch<SetStateAction<boolean>>;
    scrollPosition: number;
    setScrollPosition: Dispatch<SetStateAction<number>>;
}

export const BurgerMenu = ({ setIsActive, setIsBurgerOpen, scrollPosition, setScrollPosition }: BurgerMenuProps) => {

    const router = usePathname();

    const [isActiveBurger, setIsActiveBurger] = useState(false);

    const burgerMenuClass = classNames(styles.burgerMenu, { [styles.open]: isActiveBurger });

    const dropDownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkIfClickedOutside = (e: MouseEvent) => {
            if (
                dropDownRef.current &&
                !dropDownRef.current.contains(e.target as Node)
            ) {
                setIsActive(false);
                onSetBodyStyle(true, scrollPosition, setScrollPosition);
                setIsBurgerOpen(false);
                e.preventDefault();
                e.stopPropagation();
            }
        };

        document.addEventListener('click', checkIfClickedOutside, true);

        return () => document.removeEventListener('click', checkIfClickedOutside, true);
    }, []);

    const onCheckPath = () => {
        setIsActive(false);
        onSetBodyStyle(true);
        setIsActiveBurger(false);
        setIsBurgerOpen(false);
    };

    useEffect(() => {
        setIsActiveBurger(true);
    }, []);

    const scrollBodyBottomBurger = () => {
        setIsActive(false);
        onSetBodyStyle(true);
        setIsActiveBurger(false);
        setIsBurgerOpen(false);
        scrollBodyBottom()
    }

    window.addEventListener('resize', () => {
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

    return (
        <div className={styles.burgerMenuSubstrate} >
            <div className={burgerMenuClass} ref={dropDownRef}>
                {NAV_MENU.menu.map(({ text, link }) =>
                    <li className={styles.navMenuItem} key={`burger-menu-${text}`}>
                        <Link href={link} className={styles.navMenuLink} onClick={() => onCheckPath()}>
                            {text}
                        </Link>
                    </li>
                )}
            </div>
        </div>
    );
};

