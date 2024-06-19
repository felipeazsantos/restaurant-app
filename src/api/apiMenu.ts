import { MenuDetails } from "../types/MenuDetails";
import { apiClient } from "./apiClient";

const menuDetailsEndPoint = "/challenge/menu"

export const fetchMenuDetails = async (): Promise<MenuDetails> => {
    let menuDetails: MenuDetails = {}
    const response = await apiClient.get(menuDetailsEndPoint);
    if (response.status === 200 && response.data.sections) {
        Object.assign(menuDetails, response.data.sections)
    }
    return menuDetails;
}