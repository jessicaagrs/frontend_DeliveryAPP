'use client';
import { createContext, useState } from "react";

export const TypeAcessContext = createContext({
    typeAcess: "",
    setTypeAcess: (value: string) => { }
});

interface ProviderProps {
    children: React.ReactNode;
}

export function TypeAcessContextProvider({ children }: ProviderProps) {
    const [typeAcess, setTypeAcess] = useState("");

    return (
        <TypeAcessContext.Provider value={{ typeAcess, setTypeAcess }}>
            {children}
        </TypeAcessContext.Provider>
    );
}