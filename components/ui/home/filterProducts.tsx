import { Filter } from "@/enum/enums";
import { useState } from "react";
import { ButtonFilter, ContainerFilter } from "./filterProducts.styles";

export default function FilterProducts() {
    const [activeFilter, setActiveFilter] = useState(Filter.ALL);

    const handleClickFilter = (filter: Filter) => {
        setActiveFilter(filter);
    };

    return (
        <ContainerFilter>
            <ButtonFilter
                isSelected={activeFilter === Filter.ALL}
                onClick={() => handleClickFilter(Filter.ALL)}
            >
                Todos
            </ButtonFilter>
            <ButtonFilter
                isSelected={activeFilter === Filter.FOODS}
                onClick={() => handleClickFilter(Filter.FOODS)}
            >
                Refeições
            </ButtonFilter>
            <ButtonFilter
                isSelected={activeFilter === Filter.DRINKS}
                onClick={() => handleClickFilter(Filter.DRINKS)}
            >
                Bebidas
            </ButtonFilter>
        </ContainerFilter>
    );
}
