import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { ControlQuantity } from '../../Common/ControlQuantity/ControlQuantity';


export const FoodModalDetailsCheckout: FC = (props): ReactElement => {

    return (
        <Box>
            <ControlQuantity />
        </Box>
    )
}