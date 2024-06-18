export interface AppConfig {
    name: string;
    webSettings: AppConfigWebSettings
}

interface AppConfigWebSettings {
    navBackgroundColour: string;
    primaryColour: string;
    bannerImage: string
}