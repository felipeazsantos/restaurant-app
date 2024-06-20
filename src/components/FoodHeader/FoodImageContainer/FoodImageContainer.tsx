import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { FoodImage } from '../FoodImage/FoodImage';
import { MenuDetails } from '../../../types/MenuDetails';
import { useMenuDetails } from '../../../hooks/useMenuDetails';

export const FoodImageContainer: FC = (): ReactElement => {
    const menuDetails: MenuDetails[] = useMenuDetails();
    const renderImage = (detail: MenuDetails) => {
        const imageUrl = detail?.images ? detail.images[0].image : ""
        const imageId = detail?.images ? detail.images[0].id : ""
        return <FoodImage key={imageId} imageUrl={imageUrl} />
    }

    return (
        <Box padding="0px 16px 24px 16px">
            <Box sx={{
                width: '100%',
                display: 'flex',
                justifyContent: 'space-around',
            }}>
                {menuDetails.map(renderImage)}
            </Box>
        </Box>
    )
}