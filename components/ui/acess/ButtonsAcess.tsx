"use client";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useTypeAcess from "@/hooks/useTypeAcess";
import { useRouter } from "next/navigation";
import { ButtonsContainer } from "./ButtonAcess.styles";

export const ButtonsAcess = () => {
    const route = useRouter();
    const { setTypeAcessSelected } = useTypeAcess();
    const { setLocalStorage } = useLocalStorage();

    const handleClick = (type: TypeAcess, event: React.MouseEvent<HTMLButtonElement>) => {
        setTypeAcessSelected(type);
        setLocalStorage(KeysStorage.TYPEACESS, type);
        route.push("/login");
    };

    return (
        <ButtonsContainer>
            <button onClick={event => handleClick(TypeAcess.CUSTOMER, event)}>Cliente</button>
            <button onClick={event => handleClick(TypeAcess.SHOPMAN, event)}>Lojista</button>
        </ButtonsContainer>
    );
};
