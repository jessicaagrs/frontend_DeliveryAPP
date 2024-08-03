import { createContext, useState } from "react";

export const CartContext = createContext({
    setTotalItems: (value: number) => {},
    totalItems: 0,
});

interface ProviderProps {
    children: React.ReactNode;
}

export function CartContextProvider({ children }: ProviderProps) {
    const [totalItems, setTotalItems] = useState(0);

    return (
        <CartContext.Provider
            value={{
                totalItems,
                setTotalItems,
            }}
        >
            {children}
        </CartContext.Provider>
    );
}