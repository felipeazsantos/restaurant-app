import React, { FC, ReactElement } from 'react';
import './Header.css';


export const Header: FC = (): ReactElement => {
    const { navBackgroundColour, primaryColour, bannerImage } = useThemeWebSettings();

    return (
        <header>
            <nav style={{ backgroundColor: navBackgroundColour, color: primaryColour }}>
                <h1>Menu</h1>
            </nav>
            <div>
                <img src={bannerImage} alt='banner header' />
            </div>
        </header>
    )
}