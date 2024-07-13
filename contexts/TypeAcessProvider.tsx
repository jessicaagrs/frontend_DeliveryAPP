import { createContext, useState } from "react";

export const TypeAcessContext = createContext({
    typeAcessSelected: "",
    setTypeAcessSelected: (value: string) => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function TypeAcessContextProvider({ children }: ProviderProps) {
    const [typeAcessSelected, setTypeAcessSelected] = useState("");

    return (
        <TypeAcessContext.Provider
            value={{
                typeAcessSelected,
                setTypeAcessSelected,
            }}
        >
            {children}
        </TypeAcessContext.Provider>
    );
}
