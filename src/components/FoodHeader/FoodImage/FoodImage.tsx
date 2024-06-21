import React, { FC, ReactElement } from 'react';
import { Box, Avatar } from '@mui/material';
import { IFoodImage } from '../interfaces/IFoodImage';
import { useWebSettings } from '../../../hooks/useWebSettings';

export const FoodImage: FC<IFoodImage> = (props): ReactElement => {
    const { imageUrl, selected } = props;
    const { primaryColour } = useWebSettings();

    const selectedStyle = () => {
        if (selected) {
            return { height: 86, width: 86, borderRadius: '50%', outline: `2px solid ${primaryColour}` }
        }
        return {}
    }

    return (
        <Box padding="4px" gap="10px">
            <Box display="flex" alignItems="center" justifyContent="center" sx={selectedStyle()}>
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