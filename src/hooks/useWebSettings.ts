import { AppConfigWebSettings } from "../types/AppConfig";
import { webSettingsDefault } from "../helpers/WebSettingsDefault";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export const useWebSettings = (): AppConfigWebSettings => {
    const context = useContext(AppContext);
    if (context?.restaurantDetails?.webSettings) {
        return context.restaurantDetails.webSettings;
    }
    return webSettingsDefault;
}