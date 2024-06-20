import { MenuModifiersItem } from "./MenuDetails";

export interface IOrder {
    quantity?: number;
    totalCost?: number;
    item?: MenuModifiersItem;
}