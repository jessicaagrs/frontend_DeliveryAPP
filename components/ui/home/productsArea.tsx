import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import useStoreContext from "@/hooks/useStoreContext";
import { getProducts } from "@/service/product/productApi";
import { LoginResponse } from "@/types/loginType";
import { ProductResponse } from "@/types/productType";
import { StoreResponse } from "@/types/storeType";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { ProductCard } from "./productCard";
import { GridArea, Text } from "./productsArea.styles";

export default function ProductsArea() {
    const { getLocalStorage } = useLocalStorage();
    const { AlertModalComponent, showModal } = useModal();
    const dataLogin = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const storeData = getLocalStorage(KeysStorage.STORE) as StoreResponse;
    const { selectedStore, setSelectStore } = useStoreContext();

    useEffect(() => {
        setSelectStore(storeData?.id);
    }, [storeData]);

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["products", selectedStore],
        queryFn: () => getProducts(selectedStore, 100, 0, dataLogin.token),
        enabled: !!selectedStore,
    });

    if (isPending) {
        return (
            <GridArea>
                <Text>Aguarde carregando a listagem de produtos...</Text>
            </GridArea>
        );
    }

    if (isError) {
        showModal(error.message);
    }

    if (data?.data.length === 0) {
        return (
            <GridArea>
                <Text>Nenhum produto encontrado.</Text>
            </GridArea>
        );
    }

    return (
        <GridArea>
            {data?.data.map((product: ProductResponse) => (
                <ProductCard
                    key={product.id}
                    {...product}
                />
            ))}
            <AlertModalComponent />
        </GridArea>
    );
}
