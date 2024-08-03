import { KeysStorage } from "@/enum/enums";
import useCart from "@/hooks/cart/useCart";
import { useLocalStorage } from "@/hooks/global/useLocalStorage";
import { StoreResponse } from "@/types/storeType";
import { ButtonCart, CartIconItems, CartProducts, ContainerCartIcon } from "./cartArea.styles";
import { useEffect } from "react";

export default function CartArea() {
    const { totalItems, calculateTotalItemsCart } = useCart();
    const { getLocalStorage } = useLocalStorage();
    const storeStorage = getLocalStorage(KeysStorage.STORE) as StoreResponse;

    useEffect(() => {
        calculateTotalItemsCart();
    }, []);

    return (
        <ContainerCartIcon>
            <h1>{storeStorage ? storeStorage.corporateReason : "Aguarde..."}</h1>
            <CartIconItems>
                <ButtonCart></ButtonCart>
                {totalItems > 0 && <CartProducts>{totalItems}</CartProducts>}
            </CartIconItems>
        </ContainerCartIcon>
    );
}
