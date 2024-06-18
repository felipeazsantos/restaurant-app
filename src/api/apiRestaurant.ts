import { RestaurantDetails } from "../types/RestaurantDetails";
import { apiClient } from "./apiClient";

const restaurantDetailsEndpoint = '/challenge/venue/9';

export const fetchRestaurantDetails = async (): Promise<RestaurantDetails> => {
    const response = await apiClient.get(restaurantDetailsEndpoint);
    let restaurantDetails: RestaurantDetails = {};
    if (response.status === 200) {
        const { data } = response;
        Object.assign(restaurantDetails, data)
        return restaurantDetails;
    }
    return restaurantDetails;
}

