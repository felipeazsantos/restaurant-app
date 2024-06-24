import { Dispatch } from "redux";
import { IOrder } from "../../../types/Order";
import { ActionType } from "../../../types/Reducers";

export const deleteOrderFromCart = (dispatch: Dispatch, order: IOrder) => {
    dispatch({
        type: ActionType.ORDER_DELETE,
        payload: order
    })
}