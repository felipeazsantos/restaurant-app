import { combineReducers } from "redux";
import { ActionType, WebSettingsAction, MenuDetailsAction, OrdersAction, ReducerState } from "../types/Reducers";

const initState: ReducerState = {
    webSettings: {},
    menuDetails: {},
    orders: []
}

const webSettingsReducer = (state = initState, action: WebSettingsAction): ReducerState => {
    switch (action.type) {
        case ActionType.SET_WEB_SETTINGS:
            return {
                ...state,
                webSettings: action.payload
            }
        default: return state;
    }
}

const menuDetailsReducer = (state = initState, action: MenuDetailsAction): ReducerState => {
    switch (action.type) {
        case ActionType.SET_MENU_DETAILS:
            return {
                ...state,
                menuDetails: action.payload
            }
        default: return state;
    }
}

const ordersReducers = (state = initState, action: OrdersAction): ReducerState => {
    switch (action.type) {
        case ActionType.SET_ORDERS:
            console.log(state);
            return {
                ...state,
                orders: [...state.orders, action.payload]
            }
        default: return state;
    }
}

const reducers = combineReducers({
    webSettingsReducer,
    menuDetailsReducer,
    ordersReducers
})

export default reducers;