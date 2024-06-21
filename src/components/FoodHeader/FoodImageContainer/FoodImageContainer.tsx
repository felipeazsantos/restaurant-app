import React, { FC, ReactElement } from 'react';
import { Box } from '@mui/material';
import { MenuDetails } from '../../../types/MenuDetails';
import { useMenuDetails } from '../../../hooks/useMenuDetails';
import { useTabSelected } from '../../../hooks/useTabSelected';
import { useIsMobScreen } from '../../../hooks/useIsMobScreen';
import { renderFoodImage } from '../helpers/renderFoodImage';

export const FoodImageContainer: FC = (): ReactElement => {
    const menuDetails: MenuDetails[] = useMenuDetails();
    const tabSelected = useTabSelected();
    const isMobScreen = useIsMobScreen();

    return (
        <Box p="0px 16px 24px 16px" pt={isMobScreen ? '0' : '16px'} bgcolor="#fff">
            <Box sx={{
                width: '100%',
                ml: isMobScreen ? '0' : '16px',
                display: 'flex',
                gap: isMobScreen ? '0' : '32px',
                justifyContent: isMobScreen ? 'space-around' : 'start'
            }}>
                {menuDetails.map((detail, index) => renderFoodImage(detail, index, tabSelected))}
            </Box>
        </Box>
    )
}