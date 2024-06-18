import React, { FC, ReactElement, useState, createContext } from 'react';
import { AppContextProps, AppProviderProps } from '../types/AppContext';

export const AppContext = createContext<AppContextProps>({
    theme: '',
    toggleTheme: () => { }
});

export const AppProvider: FC<AppProviderProps> = ({ children }): ReactElement => {
    const [theme, setTheme] = useState(null);

    const toggleTheme = (theme: any) => {
        setTheme(theme)
    }

    return (
        <AppContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </AppContext.Provider>
    )
} 