import Image from "next/image";
import Link from "next/link";
import { Container, SidebarBox, SidebarIconItem, SidebarIdentificationItem, SidebarItems, SidebarList } from "./Sidebar.styles";

type SidebarProps = {
    isOpen: boolean;
};

export default function Sidebar({ isOpen }: SidebarProps) {
    if (isOpen) {
        return (
            <Container>
                <SidebarBox>
                    <SidebarItems>
                        <SidebarIconItem></SidebarIconItem>
                        <SidebarIdentificationItem>
                            <p>Jessica</p>
                            <span>email@email.com</span>
                        </SidebarIdentificationItem>
                    </SidebarItems>
                    <SidebarList>
                        <li>
                            <Image src="/home-list.svg" alt="user" width={25} height={25} />
                            <Link href="/home">Home</Link>
                        </li>
                        <li>
                            <Image src="/orders-list.svg" alt="user" width={25} height={25} />
                            <Link href="/orders">Pedidos</Link>
                        </li>
                        <li>
                            <Image src="/manage-orders-list.svg" alt="user" width={25} height={25} />
                            <Link href="/manageOrders">Gerenciar Pedidos</Link>
                        </li>
                        <li>
                            <Image src="/payment-list.svg" alt="user" width={25} height={25} />
                            <Link href="/paymentMethods">Formas de Pagamento</Link>
                        </li>
                        <li>
                            <Image src="/products-list.svg" alt="user" width={25} height={25} />
                            <Link href="/products">Produtos</Link>
                        </li>
                        <li>
                            <Image src="/settings-list.svg" alt="user" width={25} height={25} />
                            <Link href="/settings">Configurações</Link>
                        </li>
                        <li>
                            <Image src="/logout-list.svg" alt="user" width={25} height={25} />
                            <Link href="/">Sair</Link>
                        </li>
                    </SidebarList>
                </SidebarBox>
            </Container>
        );
    }

    return (<></>);
};