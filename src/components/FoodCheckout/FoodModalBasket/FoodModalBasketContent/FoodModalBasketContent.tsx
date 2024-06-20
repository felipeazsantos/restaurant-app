import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { useOrders } from '../../../../hooks/useOrders';
import { ControlQuantity } from '../../../Common/ControlQuantity/ControlQuantity';

export const FoodModalBasketContent: FC = (): ReactElement => {
    const orders = useOrders();
    const [counter, setCounter] = useState<number>(orders[0]?.quantity || 0);

    return (
        <Box bgcolor="#ffffff">
            <Box>
                <Box>
                    <Typography>
                        Name
                    </Typography>
                    <Typography>
                        R$35,00
                    </Typography>
                </Box>
                <Typography>
                    meats
                </Typography>
                <ControlQuantity
                    counter={counter}
                    setCounter={setCounter}
                    height="20px"
                    width="20px"
                    position="start"
                    iconFontSize="8px"
                    counterFontSize="10px"
                />
            </Box>
        </Box>
    )
}