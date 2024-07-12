"use client";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import { useSidebar } from "@/hooks/useSidebar";
import useStoreData from "@/hooks/useStoreData";
import { getStoreByIdShopman } from "@/service/store/storeApi";
import { LoginResponse } from "@/types/loginType";
import { StoreResponse } from "@/types/storeType";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect } from "react";
import { ButtonCartContainer, NavButtonCart, NavButtonMenu, NavContainer, NavItems } from "./Navbar.styles";
import { ErrorApi } from "@/types/errorApiType";

export default function Navbar() {
    const { showModal, SelectModalComponent } = useModal();
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const typeAcess = getLocalStorage(KeysStorage.TYPEACESS) as string;
    const storeSelected = getLocalStorage(KeysStorage.STORE) as StoreResponse;
    const shopmanSelected = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const { setNameStore, nameStore } = useStoreData();
    const queryClient = useQueryClient();
    const { showSidebar, SidebarComponent } = useSidebar();

    const handleClickOpenMenu = () => {
        showSidebar();
    };

    const getStoreByShopman = async () => {
        if (shopmanSelected?.token && shopmanSelected?.user?.email) {
            try {
                const data = await queryClient.fetchQuery({
                    queryKey: ["storeById"],
                    queryFn: () => getStoreByIdShopman(shopmanSelected.user.email, shopmanSelected.token),
                });
                setNameStore(data.data.corporateReason);
                setLocalStorage(KeysStorage.STORE, data.data);
            } catch (error: any) {
                const errorResponse = error as ErrorApi;
                showModal(errorResponse.message);
            }
        }
    };

    useEffect(() => {
        if (typeAcess === TypeAcess.CUSTOMER && !storeSelected) {
            showModal();
        }

        if (typeAcess === TypeAcess.SHOPMAN) {
            getStoreByShopman();
        }
    }, []);

    return (
        <NavContainer>
            <NavButtonMenu onClick={handleClickOpenMenu}></NavButtonMenu>
            <NavItems>
                <span>{nameStore === "" ? storeSelected?.corporateReason : nameStore}</span>
                <ButtonCartContainer>
                    <NavButtonCart></NavButtonCart>
                </ButtonCartContainer>
            </NavItems>
            <SidebarComponent />
            <SelectModalComponent />
        </NavContainer>
    );
}
