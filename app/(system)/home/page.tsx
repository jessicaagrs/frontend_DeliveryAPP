"use client";

import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { getCustomerById } from "@/service/customer/customerApi";
import { getShopmanById } from "@/service/shopman/shopmanApi";
import { LoginResponse } from "@/types/loginType";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";

export default function Home() {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const typeAcess = getLocalStorage(KeysStorage.TYPEACESS) as string;
    const login = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const queryClient = useQueryClient();

    const fetchUserData = async () => {
        if (typeAcess === TypeAcess.CUSTOMER) {
            const dataCustomer = await queryClient.fetchQuery({
                queryKey: ["customer"],
                queryFn: () => getCustomerById(login.user.email, login.token),
            });

            setLocalStorage(KeysStorage.CUSTOMER, dataCustomer.data);
            return;
        }

        const dataShopman = await queryClient.fetchQuery({
            queryKey: ["shopman"],
            queryFn: () => getShopmanById(login.user.email, login.token),
        });

        setLocalStorage(KeysStorage.SHOPMAN, dataShopman.data);
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    return <main>teste</main>;
}
