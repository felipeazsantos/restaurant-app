import { combineReducers } from "redux";
import { IAction } from "../types/ActionsType";
import { webSettingsDefault } from "../helpers/WebSettingsDefault";


const webSettingsReducer = (state = webSettingsDefault, action: IAction) => {
    switch (action.type) {
        default: return state;
    }
}

const menuDetailsReducer = (state = {}, action: IAction) => {
    switch (action.type) {
        default: return state;
    }
}

const reducers = combineReducers({
    webSettingsReducer,
    menuDetailsReducer
})

export default reducers;