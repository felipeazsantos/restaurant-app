import React, { FC, ReactElement } from 'react';
import { ICustomModal } from '../interfaces/ICustomModal';
import { Box, Modal } from '@mui/material';

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

export const CustomModal: FC<ICustomModal> = (props): ReactElement => {
    const { open, onClose, children } = props;

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                {children}
            </Box>
        </Modal>
    )
}