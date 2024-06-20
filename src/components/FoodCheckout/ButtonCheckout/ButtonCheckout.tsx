import React, { FC, ReactElement } from 'react';
import { Box, Fab } from '@mui/material';
import { useWebSettings } from '../../../hooks/useWebSettings';
import { IButtonCheckout } from '../interfaces/IButtonCheckout';

export const ButtonCheckout: FC<IButtonCheckout> = (props): ReactElement => {
    const { primaryColour } = useWebSettings();
    const { counter = 0, price = 0, buttonText, handleClick } = props;

    const renderButtonText = (): React.ReactNode => {
        if (counter && price) {
            return <span>{buttonText} • R${price * counter}</span>
        } else if (counter) {
            return <span>{buttonText} • {counter} item(s)</span>
        } else {
            return <span>{buttonText}</span>
        }
    }

    return (
        <Box
            borderRadius="50%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding="0 16px 24px 16px"
        >
            <Fab
                onClick={handleClick}
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
                {renderButtonText()}
            </Fab>
        </Box>
    )
}