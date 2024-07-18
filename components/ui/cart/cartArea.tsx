import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import useShopmanData from "@/hooks/useShopmanData";
import useTypeAcess from "@/hooks/useTypeAcess";
import { getStoreById } from "@/service/store/storeApi";
import { LoginResponse } from "@/types/loginType";
import { StoreResponse } from "@/types/storeType";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { ButtonCart, CartIconItems, CartProducts, ContainerCartIcon } from "./cartArea.styles";

export default function CartArea() {
    const { shopman } = useShopmanData();
    const { typeAcessSelected } = useTypeAcess();
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const dataLogin = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const storeData = getLocalStorage(KeysStorage.STORE) as StoreResponse;
    const { showModal, SelectModalComponent } = useModal();
    const queryClient = useQueryClient();

    const getDataStore = async () => {
        if (typeAcessSelected === TypeAcess.CUSTOMER && storeData === null) {
            showModal();
        } else {
            if (shopman) {
                const data = await queryClient.fetchQuery({
                    queryKey: ["storeById"],
                    queryFn: () => getStoreById(shopman?.storeId, dataLogin.token),
                });
                setLocalStorage(KeysStorage.STORE, data.data);
            }
        }
    };

    useEffect(() => {
        getDataStore();
    }, [shopman, typeAcessSelected]);

    return (
        <ContainerCartIcon>
            <h1>{storeData ? storeData.corporateReason : ""}</h1>
            <CartIconItems>
                <ButtonCart></ButtonCart>
                <CartProducts></CartProducts>
            </CartIconItems>
            <SelectModalComponent />
        </ContainerCartIcon>
    );
}
