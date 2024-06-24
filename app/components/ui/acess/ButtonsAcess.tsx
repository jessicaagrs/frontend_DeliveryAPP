'use client';
import { TypeAcess } from "@/app/enum/enums";
import useTypeAcess from "@/app/hooks/useTypeAcess";
import { useRouter } from "next/navigation";
import { ButtonsContainer } from "./ButtonAcess.styles";

export const ButtonsAcess = () => {
    const { setTypeAcess, typeAcess } = useTypeAcess();
    const route = useRouter();

    const handleClick = (type: TypeAcess, event: React.MouseEvent<HTMLButtonElement>) => {
        setTypeAcess(type);

        route.push('/login');
    };

    return (
        <ButtonsContainer>
            <button onClick={(event) => handleClick(TypeAcess.CUSTOMER, event)}>Cliente</button>
            <button onClick={(event) => handleClick(TypeAcess.SHOPMAN, event)}>Lojista</button>
        </ButtonsContainer>
    );
};