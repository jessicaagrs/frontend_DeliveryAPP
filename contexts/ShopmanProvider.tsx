import { ShopmanResponse } from "@/types/shopmanType";
import { createContext, useState } from "react";

export const ShopmanContext = createContext<{
    shopman: ShopmanResponse | null;
    setShopman: (value: ShopmanResponse | null) => void;
}>({
    shopman: null,
    setShopman: () => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function ShopmanContextProvider({ children }: ProviderProps) {
    const [shopman, setShopman] = useState<ShopmanResponse | null>(null);

    return (
        <ShopmanContext.Provider
            value={{
                shopman,
                setShopman,
            }}
        >
            {children}
        </ShopmanContext.Provider>
    );
}
