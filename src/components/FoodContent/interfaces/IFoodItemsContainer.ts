import { MenuItem } from "../../../types/MenuDetails";
import { IOrder } from "../../../types/Order";

export interface IFoodItemsContainer {
    title?: string;
    items?: MenuItem[];
    orders: IOrder[];
}