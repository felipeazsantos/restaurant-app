import React, { FC, ReactElement } from 'react';
import { ICustomModal } from '../interfaces/ICustomModal';
import { Box, Modal } from '@mui/material';
import { useIsMobScreen } from '../../../hooks/useIsMobScreen';
import { customModalStyle } from '../../FoodContent/helpers/customModalStyle';

export const CustomModal: FC<ICustomModal> = (props): ReactElement => {
    const { open, onClose, children } = props;
    const isMobScreen = useIsMobScreen();
    const modalStyle = customModalStyle(isMobScreen);

    return (
        <Modal open={open} onClose={onClose}>
            <Box sx={modalStyle}>
                {children}
            </Box>
        </Modal>
    )
}