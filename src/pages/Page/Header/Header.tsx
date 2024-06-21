import React, { FC, ReactElement, useState } from 'react';
import './Header.css';
import { useWebSettings } from '../../../hooks/useWebSettings';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import { MenuDrawer } from './MenuDrawer/MenuDrawer';

export const Header: FC = (): ReactElement => {
    const { navBackgroundColour, bannerImage } = useWebSettings();
    const [drawerState, setDrawerState] = useState<boolean>(false);

    const drawerOpen = () => setDrawerState(true);
    const drawerClose = () => setDrawerState(false);

    return (
        <header className="header">
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
                            onClick={drawerOpen}
                        >
                            <Menu />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <Box overflow="hidden">
                <img src={bannerImage} alt="restaurante banner header" className="header-image-container_img" />
            </Box>
            <MenuDrawer drawerState={drawerState} drawerClose={drawerClose} />
        </header>
    )
}