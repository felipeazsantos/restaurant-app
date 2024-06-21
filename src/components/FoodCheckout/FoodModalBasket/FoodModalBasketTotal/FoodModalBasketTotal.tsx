import { Box, Divider, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { useBasketTotal } from '../../../../hooks/useBasketTotal';

export const FoodModalBasketTotal: FC = (props): ReactElement => {
    const total = useBasketTotal();

    return (
        <Box padding="16px 24px">
            <Box display="flex" justifyContent="space-between" pb="10px">
                <Typography fontSize="16px" color="#121212" fontWeight="400">
                    Sub total
                </Typography>
                <Typography fontSize="16px" color="#121212" fontWeight="400">
                    R${total}
                </Typography>
            </Box>
            <Divider />
            <Box pt="10px" display="flex" justifyContent="space-between">
                <Typography fontSize="24px" color="#121212" fontWeight="300">
                    Total
                </Typography>
                <Typography fontSize="24px" color="#121212" fontWeight="700">
                    R${total}
                </Typography>
            </Box>
        </Box>
    )
}