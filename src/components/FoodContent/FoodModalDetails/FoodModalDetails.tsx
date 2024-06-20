import { Avatar, Box, IconButton, Modal, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodModalDetails } from '../interfaces/IFoodModalDetails';
import { MenuItemModifiers } from '../../../types/MenuDetails';
import { FoodModifiersContainer } from '../FoodModifiersContainer/FoodModifiersContainer';
import { Cancel } from '@mui/icons-material';

const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    bgcolor: 'background.paper',
    boxShadow: 24,
    overflow: 'scroll'
};


export const FoodModalDetails: FC<IFoodModalDetails> = (props): ReactElement => {
    const {
        name,
        description,
        imageUrl,
        menuItem,
        modalOpen,
        handleModalClose
    } = props;

    const renderMenuItemModifiers = (modifier: MenuItemModifiers) => {
        return <FoodModifiersContainer key={modifier.id} modifier={modifier} />
    }

    const renderItemNoModifier = () => {
        const modifier: MenuItemModifiers = {
            name: 'Choose an item',
            maxChoices: 1,
            id: menuItem?.id,
            items: [
                {
                    id: menuItem?.id,
                    name: `1 ${menuItem?.name}`,
                    price: menuItem?.price
                }
            ]
        }
        return <FoodModifiersContainer key={modifier.id} modifier={modifier} />
    }

    return (
        <Modal
            open={modalOpen}
            onClose={handleModalClose}
        >
            <Box sx={modalStyle}>
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
                        <IconButton onClick={handleModalClose}>
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
                    {menuItem?.modifiers ? menuItem?.modifiers?.map(renderMenuItemModifiers) : renderItemNoModifier()}
                </Box>
            </Box>
        </Modal>
    );
}