"use client";

import CartArea from "@/components/ui/cart/cartArea";
import FilterProducts from "@/components/ui/home/filterProducts";
import ProductsArea from "@/components/ui/home/productsArea";
import SearchProducts from "@/components/ui/home/searchProducts";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import useCustomerData from "@/hooks/useCustomerData";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import useShopmanData from "@/hooks/useShopmanData";
import useTypeAcess from "@/hooks/useTypeAcess";
import { getCustomerById } from "@/service/customer/customerApi";
import { getShopmanById } from "@/service/shopman/shopmanApi";
import { ErrorApi } from "@/types/errorApiType";
import { LoginResponse } from "@/types/loginType";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
    const { getLocalStorage } = useLocalStorage();
    const login = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const typeAcess = getLocalStorage(KeysStorage.TYPEACESS) as string;
    const queryClient = useQueryClient();
    const { showModal, AlertModalComponent } = useModal();
    const { setCustomer } = useCustomerData();
    const { setShopman } = useShopmanData();
    const { setTypeAcessSelected } = useTypeAcess();

    const fetchUserData = async () => {
        if (typeAcess === TypeAcess.CUSTOMER) {
            try {
                const dataCustomer = await queryClient.fetchQuery({
                    queryKey: ["customer"],
                    queryFn: () => getCustomerById(login.user.email, login.token),
                });

                setCustomer(dataCustomer.data);
                return;
            } catch (error: any) {
                const errorResponse = error as ErrorApi;
                showModal(errorResponse.message);
            }
        }

        try {
            const dataShopman = await queryClient.fetchQuery({
                queryKey: ["shopman"],
                queryFn: () => getShopmanById(login.user.email, login.token),
            });

            setShopman(dataShopman.data);
        } catch (error: any) {
            const errorResponse = error as ErrorApi;
            showModal(errorResponse.message);
        }
    };

    useEffect(() => {
        fetchUserData();
        setTypeAcessSelected(typeAcess);
    }, []);

    return (
        <main>
            <CartArea />
            <SearchProducts />
            <FilterProducts />
            <ProductsArea />
            <AlertModalComponent />
        </main>
    );
}
