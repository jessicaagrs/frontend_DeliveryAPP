import { ContainerSearch, Input } from "./searchProducts.styles";

export default function SearchProducts() {
    return (
        <ContainerSearch>
            <Input
                type="search"
                placeholder="Procurar produtos"
            />
        </ContainerSearch>
    );
}
