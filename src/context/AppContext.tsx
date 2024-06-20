import React, { FC, ReactElement, createContext, useCallback, useEffect, useState } from "react";
import { AppContextProviderProps, AppContextProps } from "../types/AppContext";
import { fetchRestaurantDetails } from "../api/apiRestaurant";
import { fetchMenuDetails } from "../api/apiMenu";
import { ActionType } from "../types/Reducers";
import { RestaurantDetails } from "../types/RestaurantDetails";
import { useDispatch } from "react-redux";
import { CircularProgress } from "@mui/material";

export const AppContext = createContext<AppContextProps>({})

export const AppContextProvider: FC<AppContextProviderProps> = (props): ReactElement => {
    const { children } = props;
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [restaurantDetails, setRestaurantDetails] = useState<RestaurantDetails>({});
    const dispatch = useDispatch();

    const fetchData = useCallback(() => {
        fetchRestaurantDetails()
            .then((details) => {
                setRestaurantDetails(details);
                dispatch({
                    type: ActionType.SET_WEB_SETTINGS,
                    payload: details.webSettings
                })
            })
            .catch(err => console.log(err))

        fetchMenuDetails()
            .then((details) => {
                dispatch({
                    type: ActionType.SET_MENU_DETAILS,
                    payload: details
                });
                setIsLoading(false)
            })
    }, [dispatch])

    useEffect(() => {
        fetchData();
    }, [dispatch, fetchData])

    return (
        <AppContext.Provider value={{ restaurantDetails }}>
            {isLoading ? <CircularProgress /> : children}
        </AppContext.Provider>
    )
}