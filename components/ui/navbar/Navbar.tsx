'use client';
import { KeysStorage, Messages } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { StoreResponse } from "@/types/storeType";
import { useState } from "react";
import Sidebar from "../sidebar/Sidebar";
import { ButtonCartContainer, NavButtonCart, NavButtonMenu, NavContainer, NavItems } from "./Navbar.styles";

export default function Navbar() {
    const [openMenu, setOpenMenu] = useState(false);
    const { getLocalStorage } = useLocalStorage();
    const store = getLocalStorage<StoreResponse>(KeysStorage.STORE);

    const handleClickOpenMenu = () => {
        setOpenMenu(openMenu => !openMenu);
    };

    return (
        <NavContainer>
            <NavButtonMenu onClick={handleClickOpenMenu}></NavButtonMenu>
            <NavItems>
                <span>{store ? store.corporateReason : Messages.UNEXPECTED_ERROR}</span>
                <ButtonCartContainer>
                    <NavButtonCart></NavButtonCart>
                </ButtonCartContainer>
            </NavItems>
            <Sidebar isOpen={openMenu} />
        </NavContainer>
    );
};