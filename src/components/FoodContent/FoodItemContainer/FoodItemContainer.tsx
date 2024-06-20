import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodItemContainer } from '../interfaces/IFoodItemContainer';
import { FoodItem } from '../FoodItem/FoodItem';
import { MenuItem } from '../../../types/MenuDetails';

export const FoodItemContainer: FC<IFoodItemContainer> = (props): ReactElement => {
    const { title, items } = props;

    const renderFoodItem = (foodItem: MenuItem) => {

    }

    return (
        <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMore />}  >
                <Typography variant="h6" height="28px">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <FoodItem />
                <FoodItem />
                <FoodItem />
            </AccordionDetails>
        </Accordion>
    )
}