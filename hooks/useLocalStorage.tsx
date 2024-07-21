import { KeysStorage } from "../enum/enums";

export function useLocalStorage() {
    function getLocalStorage<T>(key: KeysStorage): T | T[] | null {
        const data = localStorage.getItem(key);

        if (!data) return null;

        return JSON.parse(data);
    }

    function setLocalStorage<T>(key: KeysStorage, value: T | T[]) {
        if (key === KeysStorage.LOGIN || key === KeysStorage.TYPEACESS) {
            document.cookie = `${key}=${encodeURIComponent(JSON.stringify(value))}; path=/;`;
        }
        localStorage.setItem(key, JSON.stringify(value));
    }

    function removeAllLocalStorage() {
        for (const key in KeysStorage) {
            if (key === KeysStorage.LOGIN || key === KeysStorage.TYPEACESS) {
                document.cookie = `${key}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/;`;
            }
            localStorage.removeItem(key);
        }
    }

    function removeKeyStorage(key: KeysStorage) {
        localStorage.removeItem(key);
    }

    return {
        getLocalStorage,
        setLocalStorage,
        removeAllLocalStorage,
        removeKeyStorage,
    };
}
