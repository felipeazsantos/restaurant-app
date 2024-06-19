import { AppConfigWebSettings } from "../types/AppConfig";
import { webSettingsDefault } from "../helpers/WebSettingsDefault";
import { useSelector } from "react-redux";

export const useWebSettings = (): AppConfigWebSettings => {
    const context = useSelector()
    if (context?.restaurantDetails?.webSettings) {
        return context.restaurantDetails.webSettings;
    }
    return webSettingsDefault;
}