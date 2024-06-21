import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { FoodImage } from '../FoodImage/FoodImage';
import { MenuDetails } from '../../../types/MenuDetails';
import { useMenuDetails } from '../../../hooks/useMenuDetails';
import { retrieveLocalImageUrl } from '../helpers/retrieveLocalImageUrl';
import { useTabSelected } from '../../../hooks/useTabSelected';
import { useIsMobScreen } from '../../../hooks/useIsMobScreen';

export const FoodImageContainer: FC = (): ReactElement => {
    const menuDetails: MenuDetails[] = useMenuDetails();
    const tabSelected = useTabSelected();
    const isMobScreen = useIsMobScreen();

    const renderImage = (detail: MenuDetails, index: number) => {
        const imageUrl = retrieveLocalImageUrl(detail?.name || "")
        const imageId = detail?.images ? detail.images[0].id : ""
        const selected = tabSelected === index
        return <FoodImage key={imageId} imageUrl={imageUrl} selected={selected} />
    }

    return (
        <Box p="0px 16px 24px 16px" pt={isMobScreen ? '0' : '16px'} bgcolor="#fff">
            <Box sx={{
                width: '100%',
                ml: isMobScreen ? '0' : '16px',
                display: 'flex',
                gap: isMobScreen ? '0' : '32px',
                justifyContent: isMobScreen ? 'space-around' : 'start'
            }}>
                {menuDetails.map(renderImage)}
            </Box>
        </Box>
    )
}