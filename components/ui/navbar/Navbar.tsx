'use client';
import { ButtonCartContainer, NavButtonCart, NavButtonMenu, NavContainer, NavItems } from "./Navbar.styles";

export default function Navbar() {

    return (
        <NavContainer>
            <NavButtonMenu></NavButtonMenu>
            <NavItems>
                <span>Nome da Loja</span>
                <ButtonCartContainer>
                    <NavButtonCart></NavButtonCart>
                </ButtonCartContainer>
            </NavItems>
        </NavContainer>
    );
};