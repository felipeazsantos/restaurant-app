import React from 'react';
import { IconButton, Tab, Tabs, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const renderHeaderMenuItems = (
    isMobSecreen: boolean,
    drawerOpen: () => void,
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
): React.ReactNode => {
    if (isMobSecreen) {
        return (
            <>
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
            </>
        )
    } else {
        const handleChange = (event: React.SyntheticEvent, newValue: number) => {
            setValue(newValue);
        }

        return (
            <>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    sx={{
                        '& .MuiTabs-indicator': {
                            backgroundColor: '#ffffff',
                        },
                        '& .MuiTab-root': {
                            color: '#ffffff',
                            px: '64px',
                            '&.Mui-selected': {
                                color: '#ffffff',
                            },
                        },
                    }}
                    aria-label="header menu tabs">
                    <Tab label="Menu" />
                    <Tab label="Entrar" />
                    <Tab label="Contato" />
                </Tabs>
            </>
        )
    }
}



