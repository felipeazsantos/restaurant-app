import React, { FC, ReactElement } from 'react';

import './Header.css';
import { useWebSettings } from '../../../../hooks/useWebSettings';

export const Header: FC = (): ReactElement => {
    const { navBackgroundColour, primaryColour, bannerImage } = useWebSettings();

    return (
        <header className="header">
            <nav className="header-nav" style={{ backgroundColor: navBackgroundColour, color: primaryColour }}>
                <h1>Menu</h1>
            </nav>
            <div className="header-image">
                <img className="header-image__element" src={bannerImage} alt='banner header' />
            </div>
        </header>
    )
}