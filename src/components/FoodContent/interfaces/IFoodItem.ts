import { MenuItem } from "../../../types/MenuDetails";

export interface IFoodItem {
    name?: string;
    description?: string;
    price?: number;
    imageUrl?: string;
    menuItem?: MenuItem;
}