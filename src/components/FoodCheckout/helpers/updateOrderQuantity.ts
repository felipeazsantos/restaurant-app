import React from 'react';
import { IOrder } from '../../../types/Order';
import { Dispatch } from 'redux';
import { ActionType } from '../../../types/Reducers';

export const updateOrderQuantity = (
    dispatch: Dispatch,
    initialCounterRef: React.MutableRefObject<number>,
    counter: number,
    order: IOrder
) => {
    if (initialCounterRef.current !== counter) {
        const orderUpdate: IOrder = {
            ...order,
            quantity: counter
        }
        dispatch({
            type: ActionType.SET_ORDERS_UPDATE_BASKET,
            payload: orderUpdate
        });
        initialCounterRef.current = counter;
    }
}