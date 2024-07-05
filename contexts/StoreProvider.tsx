import { createContext, useState } from "react";

export const StoreContext = createContext({
    selectedStore: "",
    setSelectStore: (value: string) => { },
});

interface ProviderProps {
    children: React.ReactNode;
}

export function StoreContextProvider({ children }: ProviderProps) {
    const [selectedStore, setSelectStore] = useState("");

    return (
        <StoreContext.Provider value={{
            selectedStore,
            setSelectStore
        }}>
            {children}
        </StoreContext.Provider>
    );
}