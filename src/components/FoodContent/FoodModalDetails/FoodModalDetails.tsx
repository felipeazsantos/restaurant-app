import { Box, Modal } from '@mui/material';
import React, { FC, ReactElement, useState } from 'react';
import { IFoodModalDetails } from '../interfaces/IFoodModalDetails';

const modalStyle = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};


export const FoodModalDetails: FC<IFoodModalDetails> = (props): ReactElement => {
    const {
        name,
        description,
        imageUrl,
        price,
        menuItem,
        modalOpen,
        handleModalClose
    } = props;

    return (
        <Modal
            open={modalOpen}
            onClose={handleModalClose}
        >
            <Box sx={modalStyle}>
                teste
            </Box>
        </Modal>
    );
}