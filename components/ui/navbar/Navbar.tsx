"use client";
import useCustomerData from "@/hooks/useCustomerData";
import useShopmanData from "@/hooks/useShopmanData";
import { clearStorageBrowser } from "@/utils/routers";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Nav, NavButton, NavButtonLogo, NavList, NavLogo, NavUser, NavUserDetails } from "./Navbar.styles";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { customer } = useCustomerData();
    const { shopman } = useShopmanData();

    const handleToggleNavbar = () => {
        setIsOpen(isOpen => !isOpen);
    };

    const handleClickLogout = () => {
        clearStorageBrowser();
    };

    return (
        <Nav isOpen={isOpen}>
            <NavLogo isOpen={isOpen}>
                <NavButtonLogo
                    isOpen={isOpen}
                    onClick={handleToggleNavbar}
                ></NavButtonLogo>
                <h1>Delivery APP</h1>
                <NavButton
                    onClick={handleToggleNavbar}
                    isOpen={isOpen}
                ></NavButton>
            </NavLogo>
            <NavUser>
                <Image
                    src="/user-navbar.svg"
                    width={34}
                    height={34}
                    alt="icone de usuário"
                />
                <NavUserDetails isOpen={isOpen}>
                    <span>{customer ? customer.name : shopman?.name}</span>
                    <p>{customer ? customer.email : shopman?.email}</p>
                </NavUserDetails>
            </NavUser>
            <NavList isOpen={isOpen}>
                <li>
                    <Image
                        src="/home-navbar.svg"
                        width={34}
                        height={34}
                        alt="ícone página principal"
                    />
                    <Link href="/home">Home</Link>
                </li>
                <li>
                    <Image
                        src="/orders-navbar.svg"
                        width={34}
                        height={34}
                        alt="ícone de acesso aos pedidos"
                    />
                    <Link href="/orders">Pedidos</Link>
                </li>
                <li>
                    <Image
                        src="/management-navbar.svg"
                        width={34}
                        height={34}
                        alt="ícone de acesso ao gerenciamento de pedidos"
                    />
                    <Link href="/managementOrders">Gerenciar Pedidos</Link>
                </li>
                <li>
                    <Image
                        src="/payment-navbar.svg"
                        width={34}
                        height={34}
                        alt="ícone de acesso as formas de pagamento"
                    />
                    <Link href="/paymentMethods">Formas de Pagamento</Link>
                </li>
                <li>
                    <Image
                        src="/product-navbar.svg"
                        width={34}
                        height={34}
                        alt="ícone de acesso aos produtos"
                    />
                    <Link href="/products">Produtos</Link>
                </li>
                <li>
                    <Image
                        src="/shopman-navbar.svg"
                        width={34}
                        height={34}
                        alt="ícone de acesso ao cadastro de vendedores"
                    />
                    <Link href="/shopmans">Cadastro de Vendedores</Link>
                </li>
                <li>
                    <Image
                        src="/settings-navbar.svg"
                        width={34}
                        height={34}
                        alt="ícone de acesso as configurações do sistema"
                    />
                    <Link href="/settings">Configurações</Link>
                </li>
                <li>
                    <Image
                        src="/logout-navbar.svg"
                        width={34}
                        height={34}
                        alt="ícone de saída do sistema"
                    />
                    <Link
                        href="/"
                        onClick={handleClickLogout}
                    >
                        Sair
                    </Link>
                </li>
            </NavList>
        </Nav>
    );
}
