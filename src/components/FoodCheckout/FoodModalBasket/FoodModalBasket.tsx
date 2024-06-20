import React, { FC, ReactElement } from 'react';
import { CustomModal } from '../../Common/CustomModal/CustomModal';
import { Box, IconButton } from '@mui/material';
import { CancelOutlined } from '@mui/icons-material';
import { IFoodModalBasket } from '../interfaces/IFoodModalBasket';

export const FoodModalBasket: FC<IFoodModalBasket> = (props): ReactElement => {
    const { open, onClose } = props;

    return (
        <CustomModal open={open} onClose={onClose}>
            <Box>
                <Box>
                    Basket
                </Box>
                <IconButton>
                    <CancelOutlined />
                </IconButton>
            </Box>
        </CustomModal>
    )
}