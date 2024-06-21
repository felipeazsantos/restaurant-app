import { combineReducers } from "redux";
import { ActionType, WebSettingsAction, MenuDetailsAction, OrdersAction, ReducerState, TabSelectedAction } from "../types/Reducers";

const initState: ReducerState = {
    webSettings: {},
    menuDetails: {},
    orders: [],
    tabSelected: 0
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
        case ActionType.SET_ORDERS_INSERT:
            const orderInsertIndex = state.orders.findIndex(order => order.modifierId === action.payload.modifierId);
            if (orderInsertIndex >= 0) {
                // order already exists then plus the quantity
                const updateOrders = state.orders.map((order, index) => {
                    if (index === orderInsertIndex) {
                        action.payload.quantity += order.quantity;
                        return action.payload;
                    }
                    return order;
                });
                return {
                    ...state,
                    orders: updateOrders
                }
            } else {
                // order doesn't exists
                return {
                    ...state,
                    orders: [...state.orders, action.payload]
                }
            }
        case ActionType.SET_ORDERS_UPDATE_BASKET:
            const orderUpdateIndex = state.orders.findIndex(order => order.modifierId === action.payload.modifierId);
            const updateOrders = state.orders.map((order, index) => index === orderUpdateIndex ? action.payload : order);
            return {
                ...state,
                orders: updateOrders
            }

        default: return state;
    }
}

const tabSelectedReducer = (state = initState, action: TabSelectedAction): ReducerState => {
    switch (action.type) {
        case ActionType.SET_TAB_SELECTED:
            return { ...state, tabSelected: action.payload }
        default: return state;
    }
}

const reducers = combineReducers({
    webSettingsReducer,
    menuDetailsReducer,
    ordersReducers,
    tabSelectedReducer
})

export default reducers;