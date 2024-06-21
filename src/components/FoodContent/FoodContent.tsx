import React, { FC, ReactElement, useState } from 'react';
import { FoodItemsContainer } from './FoodItemsContainer/FoodItemsContainer';
import { IFoodContent } from './interfaces/IFoodContent';
import { FoodModalBasket } from '../FoodCheckout/FoodModalBasket/FoodModalBasket';
import { ButtonCheckout } from '../FoodCheckout/ButtonCheckout/ButtonCheckout';
import { Box, Link } from '@mui/material';
import { useOrders } from '../../hooks/useOrders';
import { useWebSettings } from '../../hooks/useWebSettings';
import { useIsMobScreen } from '../../hooks/useIsMobScreen';

export const FoodContent: FC<IFoodContent> = (props): ReactElement => {
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const orders = useOrders();
    const { primaryColour } = useWebSettings();
    const isMobSecreen = useIsMobScreen();

    const handleModalClose = () => setModalOpen(false);
    const handleButtonCheckoutClick = () => setModalOpen(true);

    return (
        <>
            <FoodItemsContainer {...props} orders={orders} />
            <Box bgcolor="#F8F9FA" paddingTop="24px">
                <Box
                    borderRadius="8px"
                    mb="30px"
                    mx="16px"
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    bgcolor="#ffffff"
                >
                    {isMobSecreen && <Link color={primaryColour} fontWeight="bold">View allergy information</Link>}
                </Box>
                {orders.length > 0 && <ButtonCheckout counter={orders.length} handleClick={handleButtonCheckoutClick} buttonText="Your basket" />}
            </Box>
            {isMobSecreen && <FoodModalBasket open={modalOpen} onClose={handleModalClose} orders={orders} />}
        </>
    )
}