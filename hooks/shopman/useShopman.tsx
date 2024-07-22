import { KeysStorage } from "@/enum/enums";
import { getShopmanById } from "@/service/shopman/shopmanApi";
import { LoginResponse } from "@/types/loginType";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "./useLocalStorage";

export default function useShopman() {
    const queryClient = useQueryClient();
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const loginStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const fetchShopman = async () => {
        const dataShopman = await queryClient.fetchQuery({
            queryKey: ["shopman"],
            queryFn: () => getShopmanById(loginStorage.user.email, loginStorage.token),
        });
        setLocalStorage(KeysStorage.SHOPMAN, dataShopman.data);
    };

    return {
        fetchShopman,
    };
}
