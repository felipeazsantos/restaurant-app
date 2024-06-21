import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { FoodBasket } from '../FoodBasket/FoodBasket';

export const FoodCart: FC = (): ReactElement => {
    return (
        <Box>
            <FoodBasket />
        </Box>
    )
}