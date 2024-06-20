import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { MenuDetails } from "../types/MenuDetails";


export const useMenuDetails = (): MenuDetails[] => {
    const store = useSelector((state: RootState) => state.menuDetailsReducer);
    const menuDetails: MenuDetails[] = Object.assign([], store.menuDetails);
    return menuDetails;
}

