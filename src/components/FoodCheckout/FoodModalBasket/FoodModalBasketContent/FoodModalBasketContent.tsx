import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { useOrders } from '../../../../hooks/useOrders';
import { FoodModalBasketContentItem } from './FoodModalBasketContentItem/FoodModalBasketContentItem';
import { IOrder } from '../../../../types/Order';

export const FoodModalBasketContent: FC = (): ReactElement => {
    const orders = useOrders();

    const renderOrder = (order: IOrder) => {
        return <FoodModalBasketContentItem order={order} key={order.item?.id} />
    }

    return (
        <Box bgcolor="#ffffff">
            {orders.map(renderOrder)}
        </Box>
    )
}