import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { FoodImage } from '../FoodImage/FoodImage';
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { MenuDetails } from '../../../types/MenuDetails';

export const FoodImageContainer: FC = (): ReactElement => {
    const store = useSelector((state: RootState) => state.menuDetailsReducer);
    const menuDetails: MenuDetails[] = Object.assign([], store.menuDetails);

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