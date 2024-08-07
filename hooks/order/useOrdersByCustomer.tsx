import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "../global/useLocalStorage";
import { CustomerResponse } from "@/types/customerType";
import { StoreResponse } from "@/types/storeType";
import { getOrdersByCustomer } from "@/service/order/orderApi";
import { useQuery } from "@tanstack/react-query";
import { LoginResponse } from "@/types/loginType";

export default function useOrdersByCustomer() {
    const { getLocalStorage } = useLocalStorage();
    const customer = getLocalStorage(KeysStorage.CUSTOMER) as CustomerResponse;
    const store = getLocalStorage(KeysStorage.STORE) as StoreResponse;
    const loginStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;

    const { data, isPending, isError, error } = useQuery({
        queryFn: () => getOrdersByCustomer(customer.id, store.id, loginStorage.token),
        queryKey: ["orders"],
        staleTime: 1000 * 60 * 1,
    });

    return { data: data?.data, isPending, isError, error };
}
