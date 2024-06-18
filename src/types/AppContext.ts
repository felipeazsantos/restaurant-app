import { ReactNode } from "react";
import { RestaurantDetails } from "./RestaurantDetails";

export interface AppContextProps {
    restaurantDetails: RestaurantDetails;
}

export interface AppProviderProps {
    children: ReactNode
}