import { createContext, useState } from "react";

export const StoreContext = createContext({
    selectedStore: "",
    setSelectStore: (value: string) => {},
    nameStore: "",
    setNameStore: (value: string) => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function StoreContextProvider({ children }: ProviderProps) {
    const [selectedStore, setSelectStore] = useState("");
    const [nameStore, setNameStore] = useState("");

    return (
        <StoreContext.Provider
            value={{
                selectedStore,
                setSelectStore,
                nameStore,
                setNameStore,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}
