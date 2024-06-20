import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { FoodItemContainer } from './FoodItemContainer/FoodItemContainer';
import { IFoodContent } from './interfaces/IFoodContent';

export const FoodContent: FC<IFoodContent> = (props): ReactElement => {
    return (
        <Box>
            <FoodItemContainer {...props} />
        </Box>
    )
}