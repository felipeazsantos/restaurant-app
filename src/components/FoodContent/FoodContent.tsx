import React, { FC, ReactElement, useState } from 'react';
import { FoodItemContainer } from './FoodItemContainer/FoodItemContainer';
import { IFoodContent } from './interfaces/IFoodContent';
import { FoodModalBasket } from '../FoodCheckout/FoodModalBasket/FoodModalBasket';
import { ButtonCheckout } from '../FoodCheckout/ButtonCheckout/ButtonCheckout';
import { Box } from '@mui/material';
import { useOrders } from '../../hooks/useOrders';

export const FoodContent: FC<IFoodContent> = (props): ReactElement => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const orders = useOrders();

    const handleModalClose = () => {
        setModalOpen(false);
    }

    const handleButtonCheckoutClick = () => {

    }

    return (
        <>
            <FoodItemContainer {...props} />
            <Box bgcolor="#F8F9FA" paddingTop="24px">
                {orders.length && <ButtonCheckout counter={orders.length} handleClick={handleButtonCheckoutClick} buttonText="Your basket" />}
            </Box>
            <FoodModalBasket open={modalOpen} onClose={handleModalClose} />
        </>
    )
}