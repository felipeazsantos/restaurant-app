import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodItemModifiers } from '../interfaces/IFoodItemModifiers';

export const FoodItemModifiers: FC<IFoodItemModifiers> = (props): ReactElement => {
    const { modifiersItems } = props;

    const renderModifiersItems = () => {

    }


    return (
        <Box padding="16px 24px">
            <Box>
                <Typography>

                </Typography>
                <Typography>

                </Typography>
            </Box>
        </Box>
    )
}