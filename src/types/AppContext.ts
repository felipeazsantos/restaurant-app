import { ReactNode } from "react";
import { RestaurantDetails } from "./RestaurantDetails";
import { MenuDetails } from "./MenuDetails";

export interface AppContextProps {
    restaurantDetails?: RestaurantDetails;
    menuDetails?: MenuDetails
}

export interface AppContextProviderProps {
    children: ReactNode
}