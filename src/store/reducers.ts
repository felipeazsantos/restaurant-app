import { combineReducers } from "redux";
import { ActionType, WebSettingsAction, MenuDetailsAction, ReducerState } from "../types/Reducers";

const initState: ReducerState = {
    webSettings: {},
    menuDetails: {},
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
        default: return state;
    }
}

const reducers = combineReducers({
    webSettingsReducer,
    menuDetailsReducer,

})

export default reducers;