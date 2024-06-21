import React, { FC, ReactElement, useState } from 'react';
import './Header.css';
import { useWebSettings } from '../../../hooks/useWebSettings';
import { AppBar, Box, Toolbar } from '@mui/material';
import { MenuDrawer } from './MenuDrawer/MenuDrawer';
import { useIsMobScreen } from '../../../hooks/useIsMobScreen';
import { renderHeaderMenuItems } from '../helpers/renderHeaderMenuItems';

export const Header: FC = (): ReactElement => {
    const { navBackgroundColour, bannerImage } = useWebSettings();
    const [drawerState, setDrawerState] = useState<boolean>(false);
    const isMobSecreen = useIsMobScreen();

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
                        {renderHeaderMenuItems(isMobSecreen, drawerOpen)}
                    </Box>
                </Toolbar>
            </AppBar>
            <Box overflow="hidden">
                <img src={bannerImage} alt="restaurante banner header" className="header-image-container_img" />
            </Box>
            {isMobSecreen && <MenuDrawer drawerState={drawerState} drawerClose={drawerClose} />}
        </header>
    )
}