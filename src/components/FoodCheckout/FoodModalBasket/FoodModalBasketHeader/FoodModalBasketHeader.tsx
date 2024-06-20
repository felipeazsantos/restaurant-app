import { Close } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodModalBasketHeader } from '../../interfaces/IFoodModalBasketHeader';

export const FoodModalBasketHeader: FC<IFoodModalBasketHeader> = (props): ReactElement => {
    const { onClose } = props;
    return (
        <Box
            display="flex"
            justifyContent="center"
            bgcolor="#ffffff"
            alignItems="center"
            position="relative"
            width="100%"
            py="24px"
        >
            <Typography color="#121212" variant="h1" fontSize="18px" fontWeight="500">
                Basket
            </Typography>
            <IconButton
                onClick={onClose}
                size="large"
                edge="start"
                aria-label="basket"
                sx={{ mr: 2, position: 'absolute', right: '-16px' }}
            >
                <Close />
            </IconButton>
        </Box>
    )
}