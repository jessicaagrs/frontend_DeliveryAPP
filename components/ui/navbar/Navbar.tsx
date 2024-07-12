"use client";
import Image from "next/image";
import Link from "next/link";
import { Nav, NavList, NavLogo, NavUser, NavUserDetails } from "./Navbar.styles";

export default function Navbar() {
    
    return (
        <Nav>
            <NavLogo>
                <Image
                    src="/logo-navbar.svg"
                    width={34}
                    height={34}
                    alt="logo do sistema"
                />
                <h1>Delivery APP</h1>
                <Image
                    src="/close-navbar.svg"
                    width={34}
                    height={34}
                    alt="botão para sair"
                />
            </NavLogo>
            <NavUser>
                <Image
                    src="/user-navbar.svg"
                    width={34}
                    height={34}
                    alt="icone de usuário"
                />
                <NavUserDetails>
                    <span>Nome</span>
                    <p>email</p>
                </NavUserDetails>
            </NavUser>
            <NavList>
                <li>
                    <Image
                        src="/home-navbar.svg"
                        width={34}
                        height={34}
                        alt="teste"
                    />
                    <Link href="#">Home</Link>
                </li>
                <li>
                    <Image
                        src="/orders-navbar.svg"
                        width={34}
                        height={34}
                        alt="teste"
                    />
                    <Link href="#">Pedidos</Link>
                </li>
                <li>
                    <Image
                        src="/management-navbar.svg"
                        width={34}
                        height={34}
                        alt="teste"
                    />
                    <Link href="#">Gerenciar Pedidos</Link>
                </li>
                <li>
                    <Image
                        src="/payment-navbar.svg"
                        width={34}
                        height={34}
                        alt="teste"
                    />
                    <Link href="#">Formas de Pagamento</Link>
                </li>
                <li>
                    <Image
                        src="/product-navbar.svg"
                        width={34}
                        height={34}
                        alt="teste"
                    />
                    <Link href="#">Produtos</Link>
                </li>
                <li>
                    <Image
                        src="/shopman-navbar.svg"
                        width={34}
                        height={34}
                        alt="teste"
                    />
                    <Link href="#">Cadastro de Vendedores</Link>
                </li>
                <li>
                    <Image
                        src="/settings-navbar.svg"
                        width={34}
                        height={34}
                        alt="teste"
                    />
                    <Link href="#">Configurações</Link>
                </li>
            </NavList>
            <div>
                <button>Sair</button>
            </div>
        </Nav>
    );
}
