import { KeysStorage } from "@/enum/enums";
import { getStoreById } from "@/service/store/storeApi";
import { LoginResponse } from "@/types/loginType";
import { useQueryClient } from "@tanstack/react-query";
import { useLocalStorage } from "../global/useLocalStorage";
import useStoreContext from "./useStoreContext";

export default function useStoreById() {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const loginStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const queryClient = useQueryClient();
    const { setStore } = useStoreContext();

    const fetchStoreById = async (storeId: string) => {
        const data = await queryClient.fetchQuery({
            queryKey: ["storeById"],
            queryFn: () => getStoreById(storeId, loginStorage.token),
        });
        setLocalStorage(KeysStorage.STORE, data?.data);
        setStore(data?.data);
    };

    return {
        fetchStoreById,
    };
}
