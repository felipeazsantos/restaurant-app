import { IOrder } from '../types/Order';

export const useOrderItemQuantity = (orders: IOrder[], menuItemId: number = 0): number => {
    const orderIndex = orders.findIndex(order => order.menuItemId === menuItemId);
    if (orderIndex >= 0) {
        return orders[orderIndex].quantity;
    }
    return 0;
}