import React, { FC, ReactElement, useState, createContext, useEffect } from 'react';
import { AppContextProps, AppProviderProps } from '../types/AppContext';
import { RestaurantDetails } from '../types/RestaurantDetails';
import { fetchRestaurantDetails } from '../api/apiRestaurant';

export const AppContext = createContext<AppContextProps>({
    restaurantDetails: {}
});

export const AppProvider: FC<AppProviderProps> = ({ children }): ReactElement => {
    const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>({});

    useEffect(() => {
        fetchRestaurantDetails()
            .then((details) => setRestaurantDetails(details))
            .catch(err => console.log(err));
    }, [])

    return (
        <AppContext.Provider value={{ restaurantDetails }}>
            {children}
        </AppContext.Provider>
    )
} 