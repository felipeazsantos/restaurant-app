import { AppConfigWebSettings } from "./AppConfig"
import { MenuDetails } from "./MenuDetails"

export enum ActionType {
    SET_MENU_DETAILS = "SET_MENU_DETAILS",
    SET_WEB_SETTINGS = "SET_WEB_SETTINGS"
}

export type ActionsType = ActionType.SET_MENU_DETAILS | ActionType.SET_WEB_SETTINGS

export interface WebSettingsAction {
    type: ActionsType
    payload: AppConfigWebSettings
}

export interface MenuDetailsAction {
    type: ActionsType
    payload: Object
}

export interface ReducerState {
    webSettings: AppConfigWebSettings,
    menuDetails: MenuDetails
}