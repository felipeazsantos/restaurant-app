import { Dispatch } from "redux";
import { MenuDetails } from "../types/MenuDetails";
import { ActionType } from "../types/Reducers";

export const useSearch = (
    dispatch: Dispatch,
    text: string,
    menuDetailsRef: React.MutableRefObject<MenuDetails[]>
) => {
    setTimeout(() => {
        text = text.toLowerCase();
        if (text.length >= 3) {
            let menuDetails = menuDetailsRef.current;
            menuDetails = menuDetails.filter(menuDetail => menuDetail.name?.toLocaleLowerCase().includes(text))
            menuDetails = menuDetails.filter((menuDetail: MenuDetails) => {
                return menuDetail.items?.filter(menuItem => menuItem.name?.toLocaleLowerCase().includes(text))
            })
            dispatch({
                type: ActionType.SET_MENU_DETAILS,
                payload: menuDetails
            })
        } else {
            dispatch({
                type: ActionType.SET_MENU_DETAILS,
                payload: menuDetailsRef.current
            })
        }
    }, 1000)
}