import React, { FC, ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import { ControlQuantity } from '../../Common/ControlQuantity/ControlQuantity';
import { ButtonCheckout } from '../ButtonCheckout/ButtonCheckout';
import { IFoodModalDetailsCheckout } from '../interfaces/IFoodModalDetailsCheckout';

export const FoodModalDetailsCheckout: FC<IFoodModalDetailsCheckout> = (props): ReactElement => {
    const [counter, setCounter] = useState<number>(1);
    const { price } = props;
    return (
        <Box>
            <ControlQuantity counter={counter} setCounter={setCounter} />
            <ButtonCheckout counter={counter} price={price} />
        </Box>
    )
}