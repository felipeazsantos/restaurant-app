import { MenuItem, MenuModifiersItem } from "../../../types/MenuDetails";

export interface IFoodModalDetailsCheckout {
    price?: number;
    selectedModifier?: MenuModifiersItem;
    menuItem?: MenuItem;
}