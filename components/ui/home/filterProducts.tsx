import { Filter } from "@/enum/enums";
import useFilterContext from "@/hooks/product/useFilterContext";
import { ButtonFilter, ContainerFilter } from "./filterProducts.styles";

export default function FilterProducts() {
    const { setType, type } = useFilterContext();

    const handleClickFilter = (filter: Filter) => {
        if (type !== filter) {
            setType(filter);
        }
    };

    return (
        <ContainerFilter>
            <ButtonFilter
                isSelected={type === Filter.ALL}
                onClick={() => handleClickFilter(Filter.ALL)}
            >
                Todos
            </ButtonFilter>
            <ButtonFilter
                isSelected={type === Filter.FOODS}
                onClick={() => handleClickFilter(Filter.FOODS)}
            >
                Refeições
            </ButtonFilter>
            <ButtonFilter
                isSelected={type === Filter.DRINKS}
                onClick={() => handleClickFilter(Filter.DRINKS)}
            >
                Bebidas
            </ButtonFilter>
        </ContainerFilter>
    );
}
