import { KeysStorage } from "../enum/enums";

export function useLocalStorage() {

    function getLocalStorage<T>(key: KeysStorage): T | null {
        const data = localStorage.getItem(key);

        if (!data) return null;

        return JSON.parse(data);
    }

    function getListLocalStorage<T>(key: KeysStorage): T[] | null {
        const data = localStorage.getItem(key);

        if (!data) return null;

        return JSON.parse(data);
    }

    function setLocalStorage<T>(key: KeysStorage, value: T) {
        if (key === KeysStorage.USER || key === KeysStorage.TYPEACESS) {
            document.cookie = `${key}=${encodeURIComponent(JSON.stringify(value))}; path=/;`;
        }
        localStorage.setItem(key, JSON.stringify(value));
    }

    function setListLocalStorage<T>(key: KeysStorage, value: T[]) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function removeAllLocalStorage() {
        for (const key in KeysStorage) {
            if (key === KeysStorage.USER || key === KeysStorage.TYPEACESS) {
                document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
            }
            localStorage.removeItem(key);
        }
    }

    return {
        getLocalStorage,
        getListLocalStorage,
        setListLocalStorage,
        setLocalStorage,
        removeAllLocalStorage
    };
}
