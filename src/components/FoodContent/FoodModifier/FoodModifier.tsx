import React, { FC, ReactElement } from 'react';
import { IFoodModifier } from '../interfaces/IFoodModifier';
import { Box, Radio, Typography } from '@mui/material';

export const FoodModifier: FC<IFoodModifier> = (props): ReactElement => {
    const { modifier } = props;

    return (
        <>
            <Box flexGrow="1">
                <Typography>
                    {modifier?.name}
                </Typography>
                <Typography>
                    {modifier?.price}
                </Typography>
            </Box>
            <Box>
                <Radio />
            </Box>
        </>
    )
}