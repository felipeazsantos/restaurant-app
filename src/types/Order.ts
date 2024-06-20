import { MenuModifiersItem } from "./MenuDetails";

export interface IOrder {
    quantity?: number;
    price?: number;
    item?: MenuModifiersItem;
    menuItemName?: string;
}