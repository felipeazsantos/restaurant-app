import { useSelector } from "react-redux"
import { RootState } from "../store/store"
import { IOrder } from "../types/Order";

export const useOrders = (): IOrder[] => {
    const store = useSelector((state: RootState) => state.ordersReducers);
    return store.orders;
}