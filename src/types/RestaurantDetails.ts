import { AppConfigWebSettings } from "./AppConfig";

export interface RestaurantDetails {
    address1?: string;
    address2?: string;
    address3?: string;
    ccy?: string;
    ccySymbol?: string;
    city?: string;
    country?: string;
    currency?: string;
    demoFlag?: number;
    description?: string;
    id?: number;
    internalName?: string;
    liveFlag?: number;
    locale?: "pt-BR"
    name?: string;
    postcode?: string;
    timeZone?: string;
    timeZoneOffset?: string;
    webSettings?: AppConfigWebSettings;
}