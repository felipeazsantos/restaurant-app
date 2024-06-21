import { Close } from '@mui/icons-material';
import { Box, IconButton, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodBasketHeader } from '../../interfaces/IFoodBasketHeader';
import { useIsMobScreen } from '../../../../hooks/useIsMobScreen';

export const FoodBasketHeader: FC<IFoodBasketHeader> = (props): ReactElement => {
    const { onClose } = props;
    const isMobScreen = useIsMobScreen();

    return (
        <Box
            display="flex"
            justifyContent={isMobScreen ? "center" : "start"}
            bgcolor={isMobScreen ? "#ffffff" : "#F8F9FA"}
            alignItems="center"
            position="relative"
            width="100%"
            py={isMobScreen ? "24px" : "16px"}
            ml={isMobScreen ? "inherited" : "24px"}
        >
            <Typography color="#121212" variant="h1" fontSize="18px" fontWeight="500">
                Basket
            </Typography>
            {isMobScreen &&
                <IconButton
                    onClick={onClose}
                    size="large"
                    edge="start"
                    aria-label="basket"
                    sx={{ mr: 2, position: 'absolute', right: '-16px' }}
                >
                    <Close />
                </IconButton>
            }
        </Box>
    )
}