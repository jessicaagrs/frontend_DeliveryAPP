'use client';
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ButtonCartContainer, NavButtonCart, NavButtonMenu, NavContainer, NavItems } from "./Navbar.styles";
import { KeysStorage, Messages } from "@/enum/enums";
import { StoreResponse } from "@/types/storeType";

export default function Navbar() {
    const { getLocalStorage } = useLocalStorage();
    const store = getLocalStorage<StoreResponse>(KeysStorage.STORE);

    return (
        <NavContainer>
            <NavButtonMenu></NavButtonMenu>
            <NavItems>
                <span>{store ? store.corporateReason : Messages.UNEXPECTED_ERROR}</span>
                <ButtonCartContainer>
                    <NavButtonCart></NavButtonCart>
                </ButtonCartContainer>
            </NavItems>
        </NavContainer>
    );
};