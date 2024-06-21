import { MenuModifiersItem } from "./MenuDetails";

export interface IOrder {
    modifierId: number;
    quantity: number;
    price: number;
    item: MenuModifiersItem;
    menuItemName: string;
}