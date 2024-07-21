import useFilterProducts from "@/hooks/useFilterProducts";
import { ProductResponse } from "@/types/productType";
import { ProductCard } from "./productCard";
import { GridArea, Text } from "./productsArea.styles";
import { useModal } from "@/hooks/useModal";

export default function ProductsArea() {
    const { data, error, isError, isPending } = useFilterProducts();
    const { showModal, AlertModalComponent } = useModal();

    if (isPending) {
        return (
            <GridArea>
                <Text>Aguarde carregando a listagem de produtos...</Text>
            </GridArea>
        );
    }

    if (isError) {
        showModal(error?.message);
    }

    if (data?.length === 0) {
        return (
            <GridArea>
                <Text>Nenhum produto encontrado.</Text>
            </GridArea>
        );
    }

    return (
        <GridArea>
            {data?.map((product: ProductResponse) => (
                <ProductCard
                    key={product.id}
                    {...product}
                />
            ))}
            <AlertModalComponent />
        </GridArea>
    );
}
