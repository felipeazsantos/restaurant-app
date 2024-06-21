import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement, useEffect, useRef, useState } from 'react';
import { ControlQuantity } from '../../../../Common/ControlQuantity/ControlQuantity';
import { IFoodBasketContentItem } from '../../../interfaces/IFoodBasketContentItem';
import { useDispatch } from 'react-redux';
import { updateOrderQuantity } from '../../../helpers/updateOrderQuantity';


export const FoodBasketContentItem: FC<IFoodBasketContentItem> = (props): ReactElement => {
    const { order } = props;
    const { item, price = 0, quantity = 0, menuItemName } = order;
    const [counter, setCounter] = useState<number>(quantity);
    const initialCounterRef = useRef<number>(quantity);
    const hasModifier = menuItemName !== item?.name;
    const dispatch = useDispatch();

    useEffect(() => updateOrderQuantity(dispatch, initialCounterRef, counter, order), [counter, dispatch, order])

    return (
        <Box pb="10px">
            <Box padding="16px 24px 0 24px">
                <Box display="flex" justifyContent="space-between">
                    <Typography color="#121212" fontWeight="400">
                        {menuItemName}
                    </Typography>
                    <Typography color="#121212" fontWeight="400">
                        R${price * counter}
                    </Typography>
                </Box>
                {hasModifier && <Typography color="#5F5F5F" variant="body2">{item?.name} (+R${price})</Typography>}
            </Box>
            <ControlQuantity
                counter={counter}
                setCounter={setCounter}
                height="24px"
                width="24px"
                position="start"
                iconFontSize="20px"
                counterFontSize="14px"
                counterPadding="0 16px"
                boxPadding="10px 24px"
            />
        </Box>
    )

}