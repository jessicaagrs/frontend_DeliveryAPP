import { useState } from "react";
import { ButtonSearch, ContainerSearch, Input, SearchItems } from "./searchProducts.styles";

export default function SearchProducts() {
    const [isVisible, setIsVisible] = useState(true);

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value.length === 0 ? setIsVisible(true) : setIsVisible(false);
    };

    return (
        <ContainerSearch>
            <SearchItems>
                <Input
                    type="search"
                    placeholder="Procurar produtos"
                    onChange={handleChangeSearch}
                />
                <ButtonSearch isVisible={isVisible}></ButtonSearch>
            </SearchItems>
        </ContainerSearch>
    );
}
