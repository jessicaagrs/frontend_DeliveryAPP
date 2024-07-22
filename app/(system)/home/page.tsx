"use client";

import CartArea from "@/components/ui/cart/cartArea";
import FilterProducts from "@/components/ui/home/filterProducts";
import ProductsArea from "@/components/ui/home/productsArea";
import SearchProducts from "@/components/ui/home/searchProducts";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/global/useLocalStorage";
import { useModal } from "@/hooks/global/useModal";
import useStoreById from "@/hooks/store/useStoreById";
import { ErrorApi } from "@/types/errorApiType";
import { ShopmanResponse } from "@/types/shopmanType";
import { StoreResponse } from "@/types/storeType";
import { useEffect } from "react";

export default function Home() {
    const { getLocalStorage } = useLocalStorage();
    const typeAcessStorage = getLocalStorage(KeysStorage.TYPEACESS) as string;
    const shopmanStorage = getLocalStorage(KeysStorage.SHOPMAN) as ShopmanResponse;
    const storeStorage = getLocalStorage(KeysStorage.STORE) as StoreResponse;
    const { showModal, SelectModalComponent, isOpen } = useModal();
    const { fetchStoreById } = useStoreById();

    const getStore = async () => {
        if (typeAcessStorage === TypeAcess.CUSTOMER) {
            if (!storeStorage) {
                showModal();
            }
        } else {
            try {
                await fetchStoreById(shopmanStorage.storeId);
            } catch (error: any) {
                const errorResponse = error as ErrorApi;
                showModal(errorResponse.message);
            }
        }
    };

    useEffect(() => {
        getStore();
    }, []);

    return (
        <main>
            <CartArea />
            <SearchProducts />
            <FilterProducts />
            {storeStorage && <ProductsArea />}
            {isOpen && <SelectModalComponent />}
        </main>
    );
}
