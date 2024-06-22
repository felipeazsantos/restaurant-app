import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { FoodTabs } from './FoodTabs/FoodTabs';
import { FoodImageContainer } from './FoodImageContainer/FoodImageContainer';
import { useIsMobScreen } from '../../hooks/useIsMobScreen';

export const FoodHeader: FC = (props): ReactElement => {
    const isMobScreen = useIsMobScreen();
    return (
        <Box minWidth={isMobScreen ? "100vw" : "inherited"}>
            <FoodImageContainer />
            <FoodTabs />
        </Box>
    )
}