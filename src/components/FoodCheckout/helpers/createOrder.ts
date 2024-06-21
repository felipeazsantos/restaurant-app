import { MenuModifiersItem } from "../../../types/MenuDetails";
import { IOrder } from "../../../types/Order";

export const createOrder = (modifierId: number = 0, menuItemId: number = 0, quantity: number = 0,
    price: number = 0, menuItemName: string = "", selectedModifier: MenuModifiersItem = {}): IOrder => {
    return {
        modifierId,
        menuItemId,
        quantity,
        price,
        item: selectedModifier,
        menuItemName
    }
}