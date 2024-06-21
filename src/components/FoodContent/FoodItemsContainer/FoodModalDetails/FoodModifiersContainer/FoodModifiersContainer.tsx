import React, { FC, ReactElement, useEffect, useState } from 'react';
import { IFoodModifiersContainer } from '../../../interfaces/IFoodModifiersContainer';
import { MenuModifiersItem } from '../../../../../types/MenuDetails';
import { FoodModifierHeader } from './FoodModifierHeader/FoodModifierHeader';
import { FoodModalDetailsCheckout } from '../../../../FoodCheckout/FoodModalDetailsCheckout/FoodModalDetailsCheckout';
import { renderModifiers } from '../../../helpers/renderModifiers';

export const FoodModifiersContainer: FC<IFoodModifiersContainer> = (props): ReactElement => {
    const { modifier, menuItem, onClose } = props;
    const [positionSelected, setPositionSelected] = useState<number>(0);
    const [selectedModifier, setSelectedModifier] = useState<MenuModifiersItem>({});
    const [price, setPrice] = useState<number>(0);

    useEffect(() => {
        if (modifier?.items) {
            setSelectedModifier(modifier.items[positionSelected]);
            setPrice(selectedModifier?.price || 0);
        }
    }, [positionSelected, modifier?.items, selectedModifier?.price]);

    return (
        <>
            <FoodModifierHeader modifier={modifier} />
            {modifier?.items?.map((modifier, index) => renderModifiers(modifier, index, positionSelected, setPositionSelected))}
            <FoodModalDetailsCheckout
                price={price}
                selectedModifier={selectedModifier}
                menuItem={menuItem}
                onClose={onClose} />
        </>
    )
}