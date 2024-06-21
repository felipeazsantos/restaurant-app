import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { useOrders } from '../../../../hooks/useOrders';
import { FoodBasketContentItem } from './FoodBasketContentItem/FoodModalBasketContentItem';
import { IOrder } from '../../../../types/Order';
import { FoodBasketTotal } from '../FoodBasketTotal/FoodBasketTotal';

export const FoodBasketContent: FC = (): ReactElement => {
    const orders = useOrders();

    const renderOrder = (order: IOrder) => {
        return <FoodBasketContentItem order={order} key={order.item?.id} />
    }

    return (
        <>
            <Box bgcolor="#ffffff">
                {orders.map(renderOrder)}
            </Box>
            <FoodBasketTotal />
        </>
    )
}