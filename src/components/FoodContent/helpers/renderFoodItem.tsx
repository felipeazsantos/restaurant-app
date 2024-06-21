import { MenuItem } from "../../../types/MenuDetails";
import { IOrder } from "../../../types/Order";
import { FoodItem } from "../FoodItemsContainer/FoodItem/FoodItem";

export const renderFoodItem = (foodItem: MenuItem, orders: IOrder[]) => {
    const { name, description, price, images } = foodItem;
    const imageUrl = images ? images[0].image : ""
    return (
        <FoodItem
            key={foodItem.id}
            name={name}
            description={description}
            price={price}
            imageUrl={imageUrl}
            orders={orders}
            menuItem={foodItem} />
    )
}