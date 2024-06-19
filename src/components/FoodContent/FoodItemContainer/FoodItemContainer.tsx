import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodItemContainer } from '../interfaces/IFoodItemContainer';

export const FoodItemContainer: FC<IFoodItemContainer> = (): ReactElement => {
    return (
        <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMore />}  >
                <Typography variant="h6" height="28px">Burgers</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                    malesuada lacus ex, sit amet blandit leo lobortis eget.
                </Typography>
            </AccordionDetails>
        </Accordion>
    )
}