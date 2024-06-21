import React, { FC, ReactElement } from 'react';
import { Box, Avatar } from '@mui/material';
import { IFoodImage } from '../interfaces/IFoodImage';
import { useWebSettings } from '../../../hooks/useWebSettings';
import { selectedStyle } from '../helpers/foodImageSelectedStyle';

export const FoodImage: FC<IFoodImage> = (props): ReactElement => {
    const { imageUrl, selected } = props;
    const { primaryColour } = useWebSettings();

    return (
        <Box padding="4px" gap="10px">
            <Box display="flex" alignItems="center" justifyContent="center" sx={selectedStyle(selected, primaryColour)}>
                <Avatar
                    src={imageUrl}
                    sx={{ height: 82, width: 82 }}
                    slotProps={{
                        img: {
                            style: { objectFit: 'cover' }
                        }
                    }}
                />
            </Box>
        </Box>
    )
}