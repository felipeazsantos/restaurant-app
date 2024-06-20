import { Box, Typography } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { ControlQuantity } from '../../../../Common/ControlQuantity/ControlQuantity';


export const FoodModalBasketContentItem: FC = (): ReactElement => {
    const [counter, setCounter] = useState<number>(1);

    return (
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
                <Typography color="#5F5F5F" variant="body2">
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
    )

}