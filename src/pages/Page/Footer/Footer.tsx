import { Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';

export const Footer: FC = (): ReactElement => {
    return (
        <footer style={{ backgroundColor: "#F8F9FA" }}>
            <Typography
                variant="body2"
                color="#7e7e7e"
                display="flex"
                justifyContent="center"
                alignItems="center"
                paddingBottom="10px">
                Developed by Felipe Azevedo
            </Typography>
        </footer>
    )
}