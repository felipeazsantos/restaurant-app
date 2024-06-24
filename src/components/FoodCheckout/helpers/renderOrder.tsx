import { IOrder } from "../../../types/Order"
import { FoodBasketContentItem } from "../FoodBasket/FoodBasketContent/FoodBasketContentItem/FoodBasketContentItem"

export const renderOrder = (order: IOrder): React.ReactNode => {
    return <FoodBasketContentItem order={order} key={order.item?.id} />
}