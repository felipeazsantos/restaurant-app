import React, { FC, ReactElement } from 'react';

import './Header.css';
import { useWebSettings } from '../../../hooks/useWebSettings';
import { AppBar, Avatar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const Header: FC = (): ReactElement => {
    const { navBackgroundColour, bannerImage } = useWebSettings();

    return (
        <header className="header">
            {/* <nav className="header-nav" style={{ backgroundColor: navBackgroundColour }}>
                <div className="header-nav__menu-text">
                    <h1>Menu</h1>
                </div>
                <div className="header-nav__menu-icon">
                    ☰
                </div>
            </nav>
            <div className="header-image-container">
                <img src={bannerImage} alt='banner header' />
            </div> */}

            <AppBar sx={{ backgroundColor: navBackgroundColour, position: 'relative' }}>
                <Toolbar>
                    <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        width="100%"
                        position="relative"
                    >
                        <Typography fontWeight="500" fontSize="18px">
                            Menu
                        </Typography>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2, position: 'absolute', right: '-30px', color: '#ffffff' }}
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box overflow="hidden">
                <img src={bannerImage} alt="restaurante banner header" className="header-image-container_img" />
            </Box>
        </header>
    )
}