import { Filter, KeysStorage } from "@/enum/enums";
import { getProductsByFilter } from "@/service/product/productApi";
import { LoginResponse } from "@/types/loginType";
import { StoreResponse } from "@/types/storeType";
import { useQuery } from "@tanstack/react-query";
import { useDeferredValue } from "react";
import { useLocalStorage } from "../global/useLocalStorage";
import useFilterContext from "./useFilterContext";

const setSearchValue = (search: string, type: Filter) => {
    if (search !== "" && type === Filter.ALL) return search;
    else return type;
};

export default function useFilterProducts() {
    const { type, page, search } = useFilterContext();
    const searchDeferred = useDeferredValue(search.toLowerCase());
    const filter = setSearchValue(searchDeferred, type);
    const { getLocalStorage } = useLocalStorage();
    const loginStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const storeStorage = getLocalStorage(KeysStorage.STORE) as StoreResponse;
    const totalRecordsDefault = 15;

    const { data, isPending, isError, error } = useQuery({
        queryFn: () => getProductsByFilter(storeStorage.id, totalRecordsDefault, page, loginStorage.token, filter),
        queryKey: ["products", type, search, page],
        staleTime: 1000 * 60 * 1,
    });

    return { data: data?.data, isPending, isError, error };
}
