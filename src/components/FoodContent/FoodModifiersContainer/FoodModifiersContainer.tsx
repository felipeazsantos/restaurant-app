import React, { FC, ReactElement, useEffect, useState } from 'react';
import { IFoodModifiersContainer } from '../interfaces/IFoodModifiersContainer';
import { MenuModifiersItem } from '../../../types/MenuDetails';
import { FoodModifierItem } from './FoodModifierItem/FoodModifierItem';
import { FoodModifierHeader } from './FoodModifierHeader/FoodModifierHeader';
import { FoodModalDetailsCheckout } from '../../FoodCheckout/FoodModalDetailsCheckout/FoodModalDetailsCheckout';

export const FoodModifiersContainer: FC<IFoodModifiersContainer> = (props): ReactElement => {
    const { modifier, menuItem, onClose } = props;
    const [positionSelected, setPositionSelected] = useState<number>(0);
    const [selectedModifier, setSelectedModifier] = useState<MenuModifiersItem>({});
    const [price, setPrice] = useState<number>(0);

    const renderModifiers = (modifierItem: MenuModifiersItem, index: number) => {
        return (
            <React.Fragment key={modifierItem.id}>
                <FoodModifierItem
                    modifier={modifierItem}
                    position={index}
                    positionSelected={positionSelected}
                    setPositionSelected={setPositionSelected}
                />
            </React.Fragment>
        )
    }

    useEffect(() => {
        if (modifier?.items) {
            setSelectedModifier(modifier.items[positionSelected]);
            setPrice(selectedModifier?.price || 0);
        }
    }, [positionSelected, modifier?.items, selectedModifier?.price]);

    return (
        <>
            <FoodModifierHeader modifier={modifier} />
            {modifier?.items?.map(renderModifiers)}
            <FoodModalDetailsCheckout
                price={price}
                selectedModifier={selectedModifier}
                menuItem={menuItem}
                onClose={onClose} />
        </>
    )
}