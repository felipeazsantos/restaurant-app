import { Box } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { FoodItemContainer } from './FoodItemContainer/FoodItemContainer';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

export const FoodContent: FC = (): ReactElement => {
    const store = useSelector((state: RootState) => state.menuDetailsReducer);
    const menuDetails = store.menuDetails;
    console.log(menuDetails);

    return (
        <Box>
            <FoodItemContainer />
        </Box>
    )
}