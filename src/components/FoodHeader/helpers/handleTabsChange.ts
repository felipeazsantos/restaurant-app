import { Dispatch } from "redux";
import { ActionType } from "../../../types/Reducers";

export const handleTabsChange = (
    dispatch: Dispatch,
    setValue: React.Dispatch<React.SetStateAction<number>>,
    event: React.SyntheticEvent,
    newValue: number
) => {
    setValue(newValue);
    dispatch({
        type: ActionType.SET_TAB_SELECTED,
        payload: newValue
    })
};