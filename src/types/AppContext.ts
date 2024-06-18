import { ReactNode } from "react";

export interface AppContextProps {
    theme: any;
    toggleTheme: (theme: any) => void;
}

export interface AppProviderProps {
    children: ReactNode
}