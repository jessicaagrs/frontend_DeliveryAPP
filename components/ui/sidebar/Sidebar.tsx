import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { CustomerResponse } from "@/types/customerType";
import { ShopmanResponse } from "@/types/shopmanType";
import Image from "next/image";
import Link from "next/link";
import {
    Container,
    SidebarBox,
    SidebarExit,
    SidebarIconItem,
    SidebarIdentificationItem,
    SidebarItems,
    SidebarList,
} from "./Sidebar.styles";

type SidebarProps = {
    isOpen: boolean;
    handleClose: () => void;
};

export default function Sidebar({ isOpen, handleClose }: SidebarProps) {
    const { getLocalStorage } = useLocalStorage();
    const customer = getLocalStorage(KeysStorage.CUSTOMER) as CustomerResponse;
    const shopman = getLocalStorage(KeysStorage.SHOPMAN) as ShopmanResponse;

    if (isOpen) {
        return (
            <Container>
                <SidebarBox>
                    <SidebarExit onClick={handleClose}>
                        <Image
                            src="/close-menu.svg"
                            alt="close"
                            width={34}
                            height={34}
                        />
                    </SidebarExit>
                    <SidebarItems>
                        <SidebarIconItem></SidebarIconItem>
                        <SidebarIdentificationItem>
                            <p>{customer ? customer.name : shopman.name}</p>
                            <span>{customer ? customer.email : shopman.email}</span>
                        </SidebarIdentificationItem>
                    </SidebarItems>
                    <SidebarList>
                        <li>
                            <Image
                                src="/home-list.svg"
                                alt="user"
                                width={25}
                                height={25}
                            />
                            <Link href="/home">Home</Link>
                        </li>
                        <li>
                            <Image
                                src="/orders-list.svg"
                                alt="user"
                                width={25}
                                height={25}
                            />
                            <Link href="/orders">Pedidos</Link>
                        </li>
                        <li>
                            <Image
                                src="/manage-orders-list.svg"
                                alt="user"
                                width={25}
                                height={25}
                            />
                            <Link href="/manageOrders">Gerenciar Pedidos</Link>
                        </li>
                        <li>
                            <Image
                                src="/payment-list.svg"
                                alt="user"
                                width={25}
                                height={25}
                            />
                            <Link href="/paymentMethods">Formas de Pagamento</Link>
                        </li>
                        <li>
                            <Image
                                src="/products-list.svg"
                                alt="user"
                                width={25}
                                height={25}
                            />
                            <Link href="/products">Produtos</Link>
                        </li>
                        <li>
                            <Image
                                src="/settings-list.svg"
                                alt="user"
                                width={25}
                                height={25}
                            />
                            <Link href="/settings">Configurações</Link>
                        </li>
                        <li>
                            <Image
                                src="/logout-list.svg"
                                alt="user"
                                width={25}
                                height={25}
                            />
                            <Link href="/">Sair</Link>
                        </li>
                    </SidebarList>
                </SidebarBox>
            </Container>
        );
    }

    return <></>;
}
