import useFilterContext from "@/hooks/product/useFilterContext";
import React, { useRef, useState } from "react";
import { ButtonSearch, ContainerSearch, Input, SearchItems } from "./searchProducts.styles";

export default function SearchProducts() {
    const [isVisible, setIsVisible] = useState(true);
    const { setSearch } = useFilterContext();
    const inputRef = useRef<HTMLInputElement>(null);

    const handleChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
        event.target.value.length === 0 ? setIsVisible(true) : setIsVisible(false);
        setSearch(inputRef.current?.value ?? "");
    };

    const handleClickSearch = (event: React.MouseEvent<HTMLButtonElement>) => {
        setSearch(inputRef.current?.value ?? "");
    };

    return (
        <ContainerSearch>
            <SearchItems>
                <Input
                    ref={inputRef}
                    type="search"
                    placeholder="Procurar produtos"
                    onChange={handleChangeSearch}
                />
                <ButtonSearch
                    isVisible={isVisible}
                    onClick={handleClickSearch}
                ></ButtonSearch>
            </SearchItems>
        </ContainerSearch>
    );
}
