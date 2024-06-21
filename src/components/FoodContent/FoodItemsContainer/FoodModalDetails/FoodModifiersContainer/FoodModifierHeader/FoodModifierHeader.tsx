import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodModifierHeader } from '../../../../interfaces/IFoodModifierHeader';

export const FoodModifierHeader: FC<IFoodModifierHeader> = (props): ReactElement => {
    const { modifier } = props;

    return (
        <Box padding="16px 24px" sx={{ backgroundColor: '#F8F9FA' }}>
            <Typography
                fontWeight="bold"
            >
                {modifier?.name}
            </Typography>
            <Typography color="#5F5F5F">
                Select {modifier?.maxChoices} option(s)
            </Typography>
        </Box>
    )
}