import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { FoodImage } from '../FoodImage/FoodImage';
import { MenuDetails } from '../../../types/MenuDetails';
import { useMenuDetails } from '../../../hooks/useMenuDetails';
import { retrieveLocalImageUrl } from '../helpers/retrieveLocalImageUrl';
import { useTabSelected } from '../../../hooks/useTabSelected';

export const FoodImageContainer: FC = (): ReactElement => {
    const menuDetails: MenuDetails[] = useMenuDetails();
    const tabSelected = useTabSelected();

    const renderImage = (detail: MenuDetails, index: number) => {
        const imageUrl = retrieveLocalImageUrl(detail?.name || "")
        const imageId = detail?.images ? detail.images[0].id : ""
        const selected = tabSelected === index
        return <FoodImage key={imageId} imageUrl={imageUrl} selected={selected} />
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