"use client";
import Image from "next/image";
import { ButtonsAcess } from "./ButtonsAcess";
import { DataContainer, LogoContainer, LogoPhrase, LogoTitle } from "./Logo.styles";

export default function Logo() {
    return (
        <LogoContainer>
            <DataContainer>
                <Image src="/logo-acess.svg" width={420} height={350} alt="logo delivery app" />
                <LogoTitle>Delivery APP</LogoTitle>
                <LogoPhrase>Faça seus pedidos favoritos aqui! Conectando clientes a vários parceiros</LogoPhrase>
            </DataContainer>
            <ButtonsAcess />
        </LogoContainer>
    );
}
