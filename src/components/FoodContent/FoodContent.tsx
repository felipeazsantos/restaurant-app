import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { FoodItemContainer } from './FoodItemContainer/FoodItemContainer';

export const FoodContent: FC = (): ReactElement => {
    return (
        <Box>
            <FoodItemContainer />
        </Box>
    )
}