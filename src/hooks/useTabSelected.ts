import { useSelector } from "react-redux"
import { RootState } from "../store/store"

export const useTabSelected = (): number => {
    const store = useSelector((state: RootState) => state.tabSelectedReducer);
    return store.tabSelected;
}