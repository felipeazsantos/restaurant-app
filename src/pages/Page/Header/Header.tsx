import React, { FC, ReactElement } from 'react';

import './Header.css';
import { useWebSettings } from '../../../hooks/useWebSettings';

export const Header: FC = (): ReactElement => {
    const { navBackgroundColour, bannerImage } = useWebSettings();

    return (
        <header className="header">
            <nav className="header-nav" style={{ backgroundColor: navBackgroundColour }}>
                <div className="header-nav__menu-text">
                    <h1>Menu</h1>
                </div>
                <div className="header-nav__menu-icon">
                    ☰
                </div>
            </nav>
            <div className="header-image-container">
                <img src={bannerImage} alt='banner header' />
            </div>
        </header>
    )
}