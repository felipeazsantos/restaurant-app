import { Avatar, Box, IconButton, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodModalDetails } from '../../interfaces/IFoodModalDetails';
import { Cancel } from '@mui/icons-material';
import { CustomModal } from '../../../Common/CustomModal/CustomModal';
import { renderMenuItemModifiers } from '../../helpers/renderMenuItemModifiers';
import { renderItemNoModifier } from '../../helpers/renderItemNoModifier';

export const FoodModalDetails: FC<IFoodModalDetails> = (props): ReactElement => {
    const {
        name,
        description,
        imageUrl,
        menuItem,
        open,
        onClose
    } = props;

    return (
        <CustomModal
            open={open}
            onClose={onClose}
        >
            <Box position="relative">
                <Avatar
                    src={imageUrl}
                    variant="square"
                    sx={{
                        width: '100%',
                        height: '100%'
                    }}
                />
                <Box position="absolute" top="30px" right="5px">
                    <IconButton onClick={onClose}>
                        <Cancel sx={{ color: '#ffffff', fontSize: '28px', cursor: 'pointer' }} />
                    </IconButton>
                </Box>
            </Box>
            <Box padding="16px">
                <Typography variant="h3" fontSize="28px" fontWeight="bold" paddingBottom="4px">
                    {name}
                </Typography>
                <Typography>
                    {description}
                </Typography>
            </Box>
            <Box>
                {menuItem?.modifiers ?
                    menuItem?.modifiers?.map((modifier) => renderMenuItemModifiers(modifier, menuItem, onClose)) :
                    renderItemNoModifier(menuItem, onClose)}
            </Box>
        </CustomModal>
    );
}