import React, { FC, ReactElement } from 'react';
import { CustomModal } from '../../Common/CustomModal/CustomModal';
import { Box, Divider } from '@mui/material';
import { IFoodModalBasket } from '../interfaces/IFoodModalBasket';
import { FoodModalBasketHeader } from './FoodModalBasketHeader/FoodModalBasketHeader';
import { ButtonCheckout } from '../ButtonCheckout/ButtonCheckout';
import { FoodModalBasketContent } from './FoodModalBasketContent/FoodModalBasketContent';

export const FoodModalBasket: FC<IFoodModalBasket> = (props): ReactElement => {
    const { open, onClose } = props;

    const handleClickCheckout = () => {
        onClose();
    }

    return (
        <CustomModal open={open} onClose={onClose}>
            <FoodModalBasketHeader onClose={onClose} />
            <Divider />
            <FoodModalBasketContent />
            <Box py="24px">
                <ButtonCheckout buttonText='Checkout now' handleClick={handleClickCheckout} />
            </Box>
        </CustomModal>
    )
}