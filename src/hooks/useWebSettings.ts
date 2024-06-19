import { AppConfigWebSettings } from "../types/AppConfig";
import { webSettingsDefault } from "../helpers/WebSettingsDefault";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export const useWebSettings = (): AppConfigWebSettings => {
    const store = useSelector((state: RootState) => state.webSettingsReducer)
    if (store.webSettings) {
        return store.webSettings;
    }
    return webSettingsDefault;
}