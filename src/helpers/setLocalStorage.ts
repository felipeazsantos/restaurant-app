export const setLocalStorage = (key: string, value: any) => {
    if (value !== undefined && value !== null && value !== "") {
        localStorage.setItem(key, JSON.stringify(value))
    }
} 