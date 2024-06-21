import { Dispatch } from "redux";
import { IOrder } from "../../../types/Order";
import { createOrder } from "./createOrder";
import { ActionType } from "../../../types/Reducers";
import { MenuItem, MenuModifiersItem } from "../../../types/MenuDetails";

export const handleModalDetailsAddOrderClick = (
    dispatch: Dispatch,
    onClose: () => void,
    selectedModifier?: MenuModifiersItem,
    menuItem?: MenuItem,
    counter?: number,
    price?: number
) => {
    const order: IOrder = createOrder(selectedModifier?.id, menuItem?.id, counter, price, menuItem?.name, selectedModifier);
    dispatch({
        type: ActionType.SET_ORDERS_INSERT,
        payload: order
    });
    onClose();
}