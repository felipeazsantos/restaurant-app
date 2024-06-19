import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import { AppConfigWebSettings } from "../types/AppConfig";
import bannerHeader from '../assets/images/bannerHeader.svg';

const webSettingsDefault: AppConfigWebSettings = {
    backgroundColor: "#ffffff",
    navBackgroundColour: "#000000",
    primaryColour: "#000000",
    primaryColourHover: "#000000",
    bannerImage: bannerHeader
}


export const useWebSettings = (): AppConfigWebSettings => {
    const context = useContext(AppContext)
    if (context?.restaurantDetails?.webSettings) {
        return context?.restaurantDetails?.webSettings
    }
    return webSettingsDefault;
}