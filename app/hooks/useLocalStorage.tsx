import { KeysStorage } from "../enum/enums";

export function useLocalStorage() {

    function getLocalStorage<T>(key: KeysStorage): T[] {
        const data = localStorage.getItem(key);

        if (!data) return [];

        return JSON.parse(data);
    }

    function setLocalStorage<T>(key: KeysStorage, value: T[]) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    return {
        getLocalStorage,
        setLocalStorage
    };
}
