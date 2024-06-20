import { MenuModifiersItem } from "../../../types/MenuDetails";
import { IOrder } from "../../../types/Order";


export const createOrder = (quantity: number, price: number = 0, selectedModifier?: MenuModifiersItem): IOrder => {
    return {
        quantity,
        price,
        item: selectedModifier
    }
}