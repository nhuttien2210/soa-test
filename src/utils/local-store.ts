type Keys = 'lang'
export const setObjectLocalData = (key: Keys, data: any) => {
    window.localStorage.setItem(key, JSON.stringify(data));
};

export const getObjectLocalData = (key: Keys) => {
    const jsonData = window.localStorage.getItem(key);
    if (jsonData) {
        try {
            return JSON.parse(jsonData);
        } catch {
            return undefined;
        }
    }
    return undefined;
};

export const setStringLocalData = (key: Keys, value: string) => {
    window.localStorage.setItem(key, value);
};

export const getStringLocalData = (key: Keys) => {
    return window.localStorage.getItem(key);
};

export const removeLocalItem = (key: Keys) => {
    window.localStorage.removeItem(key);
};