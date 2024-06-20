import React, { FC, ReactElement } from 'react';
import { IFoodModifiersContainer } from '../interfaces/IFoodModifiersContainer';
import { MenuModifiersItem } from '../../../types/MenuDetails';
import { FoodModifierItem } from '../FoodModifierItem/FoodModifierItem';
import { FoodModifierHeader } from '../FoodModifierHeader/FoodModifierHeader';
import { FoodModalDetailsCheckout } from '../../FoodCheckout/FoodModalDetailsCheckout/FoodModalDetailsCheckout';

export const FoodModifiersContainer: FC<IFoodModifiersContainer> = (props): ReactElement => {
    const { modifier } = props;

    const renderModifiers = (modifierItem: MenuModifiersItem) => {
        return (
            <React.Fragment key={modifierItem.id}>
                <FoodModifierItem modifier={modifierItem} />
            </React.Fragment>
        )
    }

    return (
        <>
            <FoodModifierHeader modifier={modifier} />
            {modifier?.items?.map(renderModifiers)}
            <FoodModalDetailsCheckout />
        </>
    )
}