import { MenuItem } from "../../../types/MenuDetails";
import { IOrder } from "../../../types/Order";

export interface IFoodItem {
    name?: string;
    description?: string;
    price?: number;
    imageUrl?: string;
    menuItem?: MenuItem;
    orders: IOrder[];
}