import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/global/useLocalStorage";
import { StoreResponse } from "@/types/storeType";
import { ButtonCart, CartIconItems, CartProducts, ContainerCartIcon } from "./cartArea.styles";

export default function CartArea() {
    const { getLocalStorage } = useLocalStorage();
    const storeStorage = getLocalStorage(KeysStorage.STORE) as StoreResponse;

    return (
        <ContainerCartIcon>
            <h1>{storeStorage ? storeStorage.corporateReason : "Aguarde..."}</h1>
            <CartIconItems>
                <ButtonCart></ButtonCart>
                <CartProducts></CartProducts>
            </CartIconItems>
        </ContainerCartIcon>
    );
}
