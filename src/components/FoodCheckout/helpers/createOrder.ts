import { MenuModifiersItem } from "../../../types/MenuDetails";
import { IOrder } from "../../../types/Order";

export const createOrder = (modifierId?: number, quantity: number, price: number = 0, menuItemName: string = "", selectedModifier?: MenuModifiersItem): IOrder => {
    return {
        modifierId,
        quantity,
        price,
        item: selectedModifier,
        menuItemName
    }
}