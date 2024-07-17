import { ButtonSearch, ContainerSearch, Input, SearchItems } from "./searchProducts.styles";

export default function SearchProducts() {
    return (
        <ContainerSearch>
            <SearchItems>
                <Input
                    type="search"
                    placeholder="Procurar produtos"
                />
                <ButtonSearch></ButtonSearch>
            </SearchItems>
        </ContainerSearch>
    );
}
