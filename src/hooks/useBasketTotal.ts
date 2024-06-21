import { IOrder } from "../types/Order";
import { useOrders } from "./useOrders"

export const useBasketTotal = (): number => {
    const orders = useOrders();
    let total = 0
    orders.forEach((order: IOrder) => {
        total += order.price * order.quantity;
    });
    return total
}