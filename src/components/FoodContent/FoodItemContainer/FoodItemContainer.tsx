import { ExpandMore } from '@mui/icons-material';
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { FC, ReactElement } from 'react';
import { IFoodItemContainer } from '../interfaces/IFoodItemContainer';
import { FoodItem } from '../FoodItem/FoodItem';
import { MenuItem } from '../../../types/MenuDetails';

export const FoodItemContainer: FC<IFoodItemContainer> = (props): ReactElement => {
    const { title, items } = props;

    const renderFoodItem = (foodItem: MenuItem) => {
        const { name, description, price, images } = foodItem;
        const imageUrl = images ? images[0].image : ""
        return <FoodItem name={name} description={description} price={price} imageUrl={imageUrl} />
    }

    return (
        <Accordion sx={{ border: 'none', boxShadow: 'none' }}>
            <AccordionSummary expandIcon={<ExpandMore />}  >
                <Typography variant="h6" height="28px">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {items?.map(renderFoodItem)}
            </AccordionDetails>
        </Accordion>
    )
}