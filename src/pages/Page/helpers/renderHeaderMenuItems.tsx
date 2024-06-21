import React from 'react';
import { IconButton, Stack, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';

export const renderHeaderMenuItems = (isMobSecreen: boolean, drawerOpen: () => void): React.ReactNode => {
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
        return (
            <>
                <Stack direction="row" spacing={16}>
                    {
                        ['Menu', 'Entrar', 'Contato'].map(text => {
                            return (
                                <Typography
                                    fontWeight="400"
                                    fontSize="18px"
                                    textTransform="uppercase"
                                    mb="10px"
                                    sx={{ cursor: 'pointer' }}
                                >
                                    {text}
                                </Typography>
                            )
                        })
                    }
                </Stack>
            </>
        )
    }
}



