import { CustomerResponse } from "@/types/customerType";
import { createContext, useState } from "react";

export const CustomerContext = createContext<{
    customer: CustomerResponse | null;
    setCustomer: (value: CustomerResponse | null) => void;
}>({
    customer: null,
    setCustomer: () => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function CustomerContextProvider({ children }: ProviderProps) {
    const [customer, setCustomer] = useState<CustomerResponse | null>(null);

    return (
        <CustomerContext.Provider
            value={{
                customer,
                setCustomer,
            }}
        >
            {children}
        </CustomerContext.Provider>
    );
}
