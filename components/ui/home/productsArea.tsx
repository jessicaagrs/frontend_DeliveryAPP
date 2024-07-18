import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import { getProducts } from "@/service/product/productApi";
import { LoginResponse } from "@/types/loginType";
import { ProductResponse } from "@/types/productType";
import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "./productCard";
import { GridArea } from "./productsArea.styles";

export default function ProductsArea() {
    const { getLocalStorage } = useLocalStorage();
    const { AlertModalComponent, showModal } = useModal();
    const dataLogin = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;

    const { isPending, isError, data, error } = useQuery({
        queryKey: ["products"],
        queryFn: () => getProducts("clx9i5pi600005em1wonqt39h", 100, 0, dataLogin.token),
    });

    if (isPending) {
        return <p>Aguarde carregando a listagem de produtos...</p>;
    }

    if (isError) {
        showModal(error.message);
    }

    return (
        <GridArea>
            {data?.data.map((product: ProductResponse) => (
                <ProductCard
                    key={product.id}
                    {...product}
                />
            ))}
            <AlertModalComponent />
        </GridArea>
    );
}
