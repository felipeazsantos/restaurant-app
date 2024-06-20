import React, { FC, ReactElement, useState } from 'react';
import { FoodItemContainer } from './FoodItemContainer/FoodItemContainer';
import { IFoodContent } from './interfaces/IFoodContent';
import { FoodModalBasket } from '../FoodCheckout/FoodModalBasket/FoodModalBasket';
import { ButtonCheckout } from '../FoodCheckout/ButtonCheckout/ButtonCheckout';
import { Box } from '@mui/material';

export const FoodContent: FC<IFoodContent> = (props): ReactElement => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);


    const handleModalClose = () => {
        setModalOpen(false);
    }

    const handleButtonCheckoutClick = () => {

    }

    return (
        <>
            <FoodItemContainer {...props} />
            <Box bgcolor="#F8F9FA" paddingTop="24px">
                <ButtonCheckout counter={1} handleClick={handleButtonCheckoutClick} buttonText="Your basket" />
            </Box>
            <FoodModalBasket open={modalOpen} onClose={handleModalClose} />
        </>
    )
}