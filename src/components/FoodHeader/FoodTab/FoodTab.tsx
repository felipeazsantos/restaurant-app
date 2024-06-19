import React, { FC, ReactElement, useState } from 'react';
import { Box, Button } from '@mui/material';
import { ICustomTabPanel } from '../interfaces/ICustomTabPanel';


export const FoodTab: FC = (): ReactElement => {
    return (
        <Box padding="8px 0px 8px 16px">
            <Box width="100%">
                <Button>Item 1</Button>
            </Box>
        </Box>
    )
}