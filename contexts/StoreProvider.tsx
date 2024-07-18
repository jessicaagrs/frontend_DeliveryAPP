import { createContext, useState } from "react";

export const StoreContext = createContext<{
    selectedStore: string;
    setSelectStore: (value: string) => void;
}>({
    selectedStore: "",
    setSelectStore: () => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function StoreContextProvider({ children }: ProviderProps) {
    const [selectedStore, setSelectStore] = useState("");

    return (
        <StoreContext.Provider
            value={{
                selectedStore,
                setSelectStore,
            }}
        >
            {children}
        </StoreContext.Provider>
    );
}
