import { Filter } from "@/enum/enums";
import { createContext, useState } from "react";

export const FilterProductsContext = createContext({
    search: "",
    setSearch: (value: string) => {},
    page: 0,
    setPage: (value: number) => {},
    type: Filter.ALL,
    setType: (value: Filter) => {},
});

interface ProviderProps {
    children: React.ReactNode;
}

export function FilterProductsContextProvider({ children }: ProviderProps) {
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(0);
    const [type, setType] = useState<Filter>(Filter.ALL);

    return (
        <FilterProductsContext.Provider
            value={{
                search,
                setSearch,
                page,
                setPage,
                type,
                setType,
            }}
        >
            {children}
        </FilterProductsContext.Provider>
    );
}
