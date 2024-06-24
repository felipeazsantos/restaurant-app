import { Box, Card, Divider } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { FoodBasketHeader } from './FoodBasketHeader/FoodModalBasketHeader';
import { FoodBasketContent } from './FoodBasketContent/FoodBasketContent';
import { ButtonCheckout } from '../ButtonCheckout/ButtonCheckout';
import { IFoodBasket } from '../interfaces/IFoodBasket';
import { useIsMobScreen } from '../../../hooks/useIsMobScreen';
import { useOrders } from '../../../hooks/useOrders';

export const FoodBasket: FC<IFoodBasket> = (props): ReactElement => {
    const { onClose = () => { } } = props;
    const isMobScreen = useIsMobScreen();
    const orders = useOrders();

    const handleClickCheckout = () => {
        onClose();
    }

    return (
        <Box component={isMobScreen ? Box : Card} minWidth={isMobScreen ? "inherited" : "17vw"}>
            <FoodBasketHeader onClose={onClose} />
            <Divider />
            <FoodBasketContent />
            {isMobScreen && orders.length > 0 &&
                <Box py="24px">
                    <ButtonCheckout buttonText='Checkout now' handleClick={handleClickCheckout} />
                </Box>
            }
        </Box>
    )
}