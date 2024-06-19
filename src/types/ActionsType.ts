export enum ActionType {
    SET_MENU_DETAILS = "SET_MENU_DETAILS"
}

export type ActionsType = ActionType.SET_MENU_DETAILS

export interface IAction {
    type: ActionsType
    payload: any
} 