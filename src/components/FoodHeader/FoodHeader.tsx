import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { FoodTabs } from './FoodTabs/FoodTabs';
import { FoodImageContainer } from './FoodImageContainer/FoodImageContainer';

export const FoodHeader: FC = (props): ReactElement => {
    return (
        <Box>
            <FoodImageContainer />
            <FoodTabs />
        </Box>
    )
}