import { cookies } from "next/headers";
import { KeysStorage } from "../enum/enums";

export function useLocalStorage() {
    function getLocalStorage<T>(key: KeysStorage): T | T[] | null {
        const data = localStorage.getItem(key);

        if (!data) return null;

        return JSON.parse(data);
    }

    function setLocalStorage<T>(key: KeysStorage, value: T | T[]) {
        const valueString = JSON.stringify(value);
        if (key === KeysStorage.LOGIN || key === KeysStorage.TYPEACESS) {
            cookies().set(key, valueString);
        }
        localStorage.setItem(key, valueString);
    }

    function removeAllLocalStorage() {
        for (const key in KeysStorage) {
            if (key === KeysStorage.LOGIN || key === KeysStorage.TYPEACESS) {
                cookies().delete(key);
            }
            localStorage.removeItem(key);
        }
    }

    return {
        getLocalStorage,
        setLocalStorage,
        removeAllLocalStorage,
    };
}
