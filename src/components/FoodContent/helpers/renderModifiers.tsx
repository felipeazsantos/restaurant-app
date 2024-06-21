import React from "react"
import { MenuModifiersItem } from "../../../types/MenuDetails"
import { FoodModifierItem } from "../FoodItemsContainer/FoodModalDetails/FoodModifiersContainer/FoodModifierItem/FoodModifierItem"

export const renderModifiers = (
    modifierItem: MenuModifiersItem,
    index: number,
    positionSelected: number,
    setPositionSelected: React.Dispatch<React.SetStateAction<number>>
) => {
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