export interface MenuDetails {
    id?: number;
    name?: string;
    position?: number;
    visible?: number;
    images?: MenuImage[];
    items?: MenuItem[];
}

export interface MenuItem {
    id?: number;
    name?: string;
    description?: string;
    alcoholic?: number;
    price?: number;
    visible?: number;
    availabilityType?: string;
    sku?: string;
    modifiers?: MenuItemModifiers[];
    images?: MenuImage[];
    available?: boolean;
}

interface MenuImage {
    id: number;
    image: string;
}

interface MenuItemModifiers {
    id?: number;
    name?: string;
    minChoices?: number;
    maxChoices?: number;
    items?: MenuModifiersItem[];
}

interface MenuModifiersItem {
    id?: number;
    name?: string;
    price?: number;
    maxChoices?: number;
    position?: number;
    visible?: number;
    availabilityType?: string;
    available?: boolean;
}