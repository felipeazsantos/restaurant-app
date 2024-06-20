import React, { FC, ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import { ControlQuantity } from '../../Common/ControlQuantity/ControlQuantity';
import { ButtonCheckout } from '../ButtonCheckout/ButtonCheckout';
import { IFoodModalDetailsCheckout } from '../interfaces/IFoodModalDetailsCheckout';
import { useDispatch } from 'react-redux';
import { ActionType } from '../../../types/Reducers';
import { IOrder } from '../../../types/Order';
import { createOrder } from '../helpers/createOrder';

export const FoodModalDetailsCheckout: FC<IFoodModalDetailsCheckout> = (props): ReactElement => {
    const [counter, setCounter] = useState<number>(1);
    const { price, selectedModifier } = props;
    const dispatch = useDispatch();

    const handleButtonCheckoutClick = () => {
        const order: IOrder = createOrder(counter, price, selectedModifier);
        dispatch({
            type: ActionType.SET_ORDERS,
            payload: order
        });
    }

    return (
        <Box>
            <ControlQuantity
                counter={counter}
                setCounter={setCounter}
                height="32px"
                width="32px"
                iconFontSize="28px"
                counterFontSize="24px"
                position="center"
            />
            <ButtonCheckout
                counter={counter}
                price={price}
                buttonText="Add to Order"
                handleClick={handleButtonCheckoutClick}
            />
        </Box>
    )
}