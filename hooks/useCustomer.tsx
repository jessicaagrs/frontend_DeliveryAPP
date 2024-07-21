import { KeysStorage } from "@/enum/enums";
import { getCustomerById } from "@/service/customer/customerApi";
import { LoginResponse } from "@/types/loginType";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./useLocalStorage";

export default function useCustomer() {
    const queryClient = useQueryClient();
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const loginStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;

    const fetchCustomer = async () => {
        const dataCustomer = await queryClient.fetchQuery({
            queryKey: ["customer"],
            queryFn: () => getCustomerById(loginStorage.user.email, loginStorage.token),
        });
        setLocalStorage(KeysStorage.CUSTOMER, dataCustomer.data);
    };

    return {
        fetchCustomer,
    };
}
