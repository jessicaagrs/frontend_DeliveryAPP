"use client";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import useCustomer from "@/hooks/customer/useCustomer";
import { useLocalStorage } from "@/hooks/global/useLocalStorage";
import { useModal } from "@/hooks/global/useModal";
import useShopman from "@/hooks/shopman/useShopman";
import { CustomerResponse } from "@/types/customerType";
import { ErrorApi } from "@/types/errorApiType";
import { ShopmanResponse } from "@/types/shopmanType";
import { clearStorageBrowser } from "@/utils/routers";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
    Nav,
    NavBoxMenu,
    NavButton,
    NavButtonLogo,
    NavButtonMenu,
    NavList,
    NavLogo,
    NavTextMenu,
    NavUser,
    NavUserDetails,
} from "./Navbar.styles";

export default function Navbar() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const { getLocalStorage } = useLocalStorage();
    const { fetchCustomer } = useCustomer();
    const { fetchShopman } = useShopman();
    const typeAcess = getLocalStorage(KeysStorage.TYPEACESS) as string;
    const { showModal, AlertModalComponent, isOpen } = useModal();
    const customerStorage = getLocalStorage(KeysStorage.CUSTOMER) as CustomerResponse;
    const shopmanStorage = getLocalStorage(KeysStorage.SHOPMAN) as ShopmanResponse;

    const fetchUserData = async () => {
        if (typeAcess === TypeAcess.CUSTOMER) {
            try {
                await fetchCustomer();
                return;
            } catch (error: any) {
                const errorResponse = error as ErrorApi;
                showModal(errorResponse.message);
            }
        }

        try {
            await fetchShopman();
        } catch (error: any) {
            const errorResponse = error as ErrorApi;
            showModal(errorResponse.message);
        }
    };

    useEffect(() => {
        fetchUserData();
    }, []);

    const handleToggleNavbar = () => {
        setIsOpenMenu(isOpenMenu => !isOpenMenu);
    };

    const handleClickLogout = () => {
        clearStorageBrowser();
    };

    if (isOpenMenu) {
        return (
            <Nav>
                <NavLogo>
                    <NavButtonLogo onClick={handleToggleNavbar}></NavButtonLogo>
                    <h1>Delivery APP</h1>
                    <NavButton
                        id="menu-navbar"
                        onClick={handleToggleNavbar}
                    ></NavButton>
                </NavLogo>
                <NavUser>
                    <Image
                        src="/user-navbar.svg"
                        width={34}
                        height={34}
                        alt="icone de usuário"
                    />
                    <NavUserDetails>
                        <span>{customerStorage ? customerStorage.name : shopmanStorage?.name}</span>
                        <p>{customerStorage ? customerStorage.email : shopmanStorage?.email}</p>
                    </NavUserDetails>
                </NavUser>
                <NavList>
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
                {isOpen && <AlertModalComponent />}
            </Nav>
        );
    } else {
        return (
            <NavBoxMenu>
                <NavButtonMenu onClick={handleToggleNavbar} />
                <NavTextMenu>Menu</NavTextMenu>
            </NavBoxMenu>
        );
    }
}
