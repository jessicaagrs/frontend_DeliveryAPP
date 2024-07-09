"use client";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import useStoreData from "@/hooks/useStoreData";
import { getStoreByIdShopman } from "@/service/store/storeApi";
import { LoginResponse } from "@/types/loginType";
import { StoreResponse } from "@/types/storeType";
import { useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { ButtonCartContainer, NavButtonCart, NavButtonMenu, NavContainer, NavItems } from "./Navbar.styles";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const { showModal, SelectModalComponent } = useModal();
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const typeAcess = getLocalStorage(KeysStorage.TYPEACESS) as string;
    const storeSelected = getLocalStorage<StoreResponse>(KeysStorage.STORE);
    const shopmanSelected = getLocalStorage<LoginResponse>(KeysStorage.USER);
    const { setNameStore, nameStore } = useStoreData();
    const queryClient = useQueryClient();

    const handleClickOpenMenu = () => {
        setOpenMenu((openMenu) => !openMenu);
    };

    const getStoreByShopman = async () => {
        if (shopmanSelected?.token && shopmanSelected?.user?.email) {
            const data = await queryClient.fetchQuery({
                queryKey: ["storeById"],
                queryFn: () => getStoreByIdShopman(shopmanSelected.user.email, shopmanSelected.token),
            });
            setNameStore(data.data.corporateReason);
            setLocalStorage(KeysStorage.STORE, data.data);
        }
    };

    useEffect(() => {
        if (typeAcess === TypeAcess.CUSTOMER && !storeSelected) {
            showModal();
        } else {
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
            <Sidebar isOpen={openMenu} />
            <SelectModalComponent />
        </NavContainer>
    );
}
