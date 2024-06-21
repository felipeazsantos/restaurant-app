import { IOrder } from "../../../types/Order"
import { FoodBasketContentItem } from "../FoodBasket/FoodBasketContent/FoodBasketContentItem/FoodModalBasketContentItem"

export const renderOrder = (order: IOrder): React.ReactNode => {
    return <FoodBasketContentItem order={order} key={order.item?.id} />
}