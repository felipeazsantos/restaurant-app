import React, { FC, ReactElement } from 'react';
import { IFoodItemModifiers } from '../interfaces/IFoodModifiersContainer';
import { MenuModifiersItem } from '../../../types/MenuDetails';
import { FoodModifierItem } from '../FoodModifierItem/FoodModifierItem';
import { FoodModifierHeader } from '../FoodModifierHeader/FoodModifierHeader';

export const FoodModifiersContainer: FC<IFoodItemModifiers> = (props): ReactElement => {
    const { modifiersItems } = props;

    const renderModifiers = (modifier: MenuModifiersItem) => {
        return (
            <React.Fragment key={modifier.id}>
                <FoodModifierHeader modifier={modifier} />
                <FoodModifierItem modifier={modifier} />
            </React.Fragment>
        )
    }

    return (
        <>
            {modifiersItems?.map(renderModifiers)}
        </>
    )
}