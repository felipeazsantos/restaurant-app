import { MenuModifiersItem } from "../../../types/MenuDetails";
import { IOrder } from "../../../types/Order";

export const createOrder = (quantity: number, price: number = 0, menuItemName: string = "", selectedModifier?: MenuModifiersItem): IOrder => {
    return {
        quantity,
        price,
        item: selectedModifier,
        menuItemName
    }
}