import React, { FC, ReactElement } from 'react';
import { Box, Fab } from '@mui/material';
import { useWebSettings } from '../../../hooks/useWebSettings';
import { IButtonCheckout } from '../interfaces/IButtonCheckout';

export const ButtonCheckout: FC<IButtonCheckout> = (props): ReactElement => {
    const { primaryColour } = useWebSettings();
    const { counter = 0, price = 0 } = props;

    return (
        <Box
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="0 16px 24px 16px"
        >
            <Fab
                sx={{
                    backgroundColor: primaryColour,
                    color: '#ffffff',
                    '&:hover': {
                        backgroundColor: primaryColour,
                    },
                    '&:focus': {
                        backgroundColor: primaryColour,
                    },
                    '&:active': {
                        backgroundColor: primaryColour,
                    },
                    width: "100%",
                    textTransform: 'none',
                    fontSize: '15px',
                    height: '40px',
                    minHeight: 'unset',
                    padding: '4px',
                }}
                variant="extended"
                size="small"
            >
                Add to Order - R${price * counter}
            </Fab>
        </Box>
    )
}