import { MenuModifiersItem } from "../../../types/MenuDetails";
import { IOrder } from "../../../types/Order";

export const createOrder = (modifierId?: number, quantity: number = 0, price: number = 0, menuItemName: string = "", selectedModifier?: MenuModifiersItem): IOrder => {
    return {
        modifierId,
        quantity,
        price,
        item: selectedModifier,
        menuItemName
    }
}