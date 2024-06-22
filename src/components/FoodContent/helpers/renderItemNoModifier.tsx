import { MenuItem, MenuItemModifiers } from "../../../types/MenuDetails"
import { FoodModifiersContainer } from "../FoodItemsContainer/FoodModalDetails/FoodModifiersContainer/FoodModifiersContainer"

export const renderItemNoModifier = (menuItem?: MenuItem, onClose?: () => void) => {
    const modifier: MenuItemModifiers = {
        name: 'Choose an item',
        maxChoices: 1,
        id: menuItem?.id,
        items: [
            {
                id: menuItem?.id,
                name: menuItem?.name,
                price: menuItem?.price
            }
        ]
    }
    return <FoodModifiersContainer key={modifier.id} modifier={modifier} menuItem={menuItem} onClose={onClose} />
}