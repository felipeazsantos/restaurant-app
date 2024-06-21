import { MenuModifiersItem } from "./MenuDetails";

export interface IOrder {
    modifierId: number;
    menuItemId: number;
    quantity: number;
    price: number;
    item: MenuModifiersItem;
    menuItemName: string;
}