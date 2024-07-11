import { ButtonFilter, ContainerFilter } from "./filterProducts.styles";

export default function FilterProducts() {
    return (
        <ContainerFilter>
            <ButtonFilter>Todos</ButtonFilter>
            <ButtonFilter>Refeições</ButtonFilter>
            <ButtonFilter>Bebidas</ButtonFilter>
        </ContainerFilter>
    )
};