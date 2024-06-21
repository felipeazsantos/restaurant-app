import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { useOrders } from '../../../../hooks/useOrders';
import { FoodBasketTotal } from '../FoodBasketTotal/FoodBasketTotal';
import { renderOrder } from '../../helpers/renderOrder';

export const FoodBasketContent: FC = (): ReactElement => {
    const orders = useOrders();

    return (
        <>
            <Box bgcolor="#ffffff">
                {orders.length > 0 ? orders.map(renderOrder) : <Typography p="16px 24px">Your cart is empty</Typography>}
            </Box>
            {orders.length > 0 && <FoodBasketTotal />}
        </>
    )
}