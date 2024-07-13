"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { Nav, NavButton, NavButtonLogo, NavList, NavLogo, NavUser, NavUserDetails } from "./Navbar.styles";

export default function Navbar() {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const imageLogoRef = useRef<HTMLImageElement>(null);
    const spanRef = useRef<HTMLSpanElement>(null);
    const paragraphRef = useRef<HTMLParagraphElement>(null);
    const ulRef = useRef<HTMLUListElement>(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleToggleNavbar = () => {
        setIsOpen(isOpen => !isOpen);
    };

    return (
        <Nav isOpen={isOpen}>
            <NavLogo isOpen={isOpen}>
                <NavButtonLogo isOpen={isOpen}></NavButtonLogo>
                <h1 ref={titleRef}>Delivery APP</h1>
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
                    <span ref={spanRef}>Nome</span>
                    <p ref={paragraphRef}>email</p>
                </NavUserDetails>
            </NavUser>
            <NavList ref={ulRef} isOpen={isOpen}>
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
                    <Link href="/">Sair</Link>
                </li>
            </NavList>
        </Nav>
    );
}
