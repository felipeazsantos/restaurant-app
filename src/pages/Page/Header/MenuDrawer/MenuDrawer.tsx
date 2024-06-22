import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IMenuDrawer } from '../../interfaces/IMenuDrawer';
import { Home, Login, Mail } from '@mui/icons-material';
import { useWebSettings } from '../../../../hooks/useWebSettings';
import { useIsMobScreen } from '../../../../hooks/useIsMobScreen';

export const MenuDrawer: FC<IMenuDrawer> = (props): ReactElement => {
    const { drawerState, drawerClose } = props;
    const { primaryColour } = useWebSettings();
    const isMobScreen = useIsMobScreen();

    return (
        <Drawer
            anchor="right"
            open={drawerState}
            onClose={drawerClose}
        >
            <Box width={isMobScreen ? "50vw" : "14vw"} pl={isMobScreen ? "0" : "10px"} >
                <List sx={{ width: '100%' }}>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon >
                                <Home htmlColor={primaryColour} />
                            </ListItemIcon>
                            <ListItemText primary="Menu" color={primaryColour} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Login htmlColor={primaryColour} />
                            </ListItemIcon>
                            <ListItemText primary="Entrar" color={primaryColour} />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                <Mail htmlColor={primaryColour} />
                            </ListItemIcon>
                            <ListItemText primary="Contato" color={primaryColour} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Drawer>
    )
}