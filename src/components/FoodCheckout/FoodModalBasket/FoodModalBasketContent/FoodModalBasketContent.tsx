import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { useOrders } from '../../../../hooks/useOrders';
import { ControlQuantity } from '../../../Common/ControlQuantity/ControlQuantity';

export const FoodModalBasketContent: FC = (): ReactElement => {
    const orders = useOrders();
    const [counter, setCounter] = useState<number>(orders[0]?.quantity || 0);

    return (
        <Box bgcolor="#ffffff">
            <Box pb="10px">
                <Box padding="16px 24px 0 24px">
                    <Box display="flex" justifyContent="space-between">
                        <Typography color="#121212" fontWeight="400">
                            Name
                        </Typography>
                        <Typography color="#121212" fontWeight="400">
                            R$35,00
                        </Typography>
                    </Box>
                    <Typography>
                        meats
                    </Typography>
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
        </Box>
    )
}