import { MenuItem, MenuItemModifiers } from "../../../types/MenuDetails"
import { FoodModifiersContainer } from "../FoodItemsContainer/FoodModalDetails/FoodModifiersContainer/FoodModifiersContainer"

export const renderMenuItemModifiers = (modifier: MenuItemModifiers, menuItem: MenuItem, onClose: () => void) => {
    return (
        <FoodModifiersContainer
            key={modifier.id}
            modifier={modifier}
            menuItem={menuItem}
            onClose={onClose} />
    )
}