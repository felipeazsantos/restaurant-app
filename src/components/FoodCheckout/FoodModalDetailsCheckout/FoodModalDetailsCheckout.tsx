import React, { FC, ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import { ControlQuantity } from '../../Common/ControlQuantity/ControlQuantity';
import { ButtonCheckout } from '../ButtonCheckout/ButtonCheckout';


export const FoodModalDetailsCheckout: FC = (props): ReactElement => {
    const [counter, setCounter] = useState<number>(1);
    return (
        <Box>
            <ControlQuantity counter={counter} setCounter={setCounter} />
            <ButtonCheckout />
        </Box>
    )
}