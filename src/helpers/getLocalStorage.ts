export const getLocalStorage = (key: string) => {
    const value = localStorage.getItem(key)
    if (value !== undefined && value !== null && value !== "") {
        if (typeof value === 'string') {
            return JSON.parse(value);
        }
    }
} 