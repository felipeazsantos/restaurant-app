import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodItemsContainer } from '../interfaces/IFoodItemsContainer';
import { MenuItem } from '../../../types/MenuDetails';
import { renderFoodItem } from '../helpers/renderFoodItem';


export const FoodItemsContainer: FC<IFoodItemsContainer> = (props): ReactElement => {
    const { title, items, orders } = props;

    return (
        <Accordion sx={{ border: 'none', boxShadow: 'none' }} defaultExpanded>
            <AccordionSummary expandIcon={<ExpandMore />}  >
                <Typography variant="h6" height="28px" color="#121212">
                    {title}
                </Typography>
            </AccordionSummary>
            <AccordionDetails>
                {items?.map((foodItem: MenuItem) => renderFoodItem(foodItem, orders))}
            </AccordionDetails>
        </Accordion>
    )
}