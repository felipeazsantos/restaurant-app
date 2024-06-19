import React, { FC, ReactElement } from 'react';
import { Box, Avatar } from '@mui/material';
import { IFoodImage } from '../interfaces/IFoodImage';

export const FoodImage: FC<IFoodImage> = (props): ReactElement => {
    return (
        <Box padding="4px" gap="10px">
            <Avatar src={props.imageUrl} sx={{ width: 82, height: 82 }} />
        </Box>
    )
}