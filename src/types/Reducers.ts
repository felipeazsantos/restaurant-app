import { AppConfigWebSettings } from "./AppConfig"
import { MenuDetails } from "./MenuDetails"
import { IOrder } from "./Order"

export enum ActionType {
    SET_MENU_DETAILS = "SET_MENU_DETAILS",
    SET_WEB_SETTINGS = "SET_WEB_SETTINGS",
    SET_ORDERS_INSERT = "SET_ORDERS_INSERT",
    SET_ORDERS_UPDATE_BASKET = "SET_ORDERS_UPDATE"
}

export type ActionsType =
    ActionType.SET_MENU_DETAILS |
    ActionType.SET_WEB_SETTINGS |
    ActionType.SET_ORDERS_INSERT |
    ActionType.SET_ORDERS_UPDATE_BASKET

export interface WebSettingsAction {
    type: ActionsType;
    payload: AppConfigWebSettings;
}

export interface MenuDetailsAction {
    type: ActionsType;
    payload: MenuDetails;
}

export interface OrdersAction {
    type: ActionsType;
    payload: IOrder;
}

export interface ReducerState {
    webSettings: AppConfigWebSettings;
    menuDetails: MenuDetails;
    orders: IOrder[];
}

