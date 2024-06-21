import React, { FC, ReactElement, useState } from 'react';
import { Box } from '@mui/material';
import { ControlQuantity } from '../../Common/ControlQuantity/ControlQuantity';
import { ButtonCheckout } from '../ButtonCheckout/ButtonCheckout';
import { IFoodModalDetailsCheckout } from '../interfaces/IFoodModalDetailsCheckout';
import { useDispatch } from 'react-redux';
import { handleModalDetailsAddOrderClick } from '../helpers/handleModalDetailsAddOrderClick';

export const FoodModalDetailsCheckout: FC<IFoodModalDetailsCheckout> = (props): ReactElement => {
    const [counter, setCounter] = useState<number>(1);
    const { price, selectedModifier, menuItem, onClose = () => { } } = props;
    const dispatch = useDispatch();

    const handleClick = () => handleModalDetailsAddOrderClick(dispatch, onClose, selectedModifier, menuItem, counter, price);

    return (
        <Box>
            <ControlQuantity
                counter={counter}
                setCounter={setCounter}
                height="32px"
                width="32px"
                iconFontSize="28px"
                counterFontSize="24px"
                counterPadding="0 30px"
                position="center"
                boxPadding="16px 24px"
            />
            <ButtonCheckout
                counter={counter}
                price={price}
                buttonText="Add to Order"
                handleClick={handleClick}
            />
        </Box>
    )
}