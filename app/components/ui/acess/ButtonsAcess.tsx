'use client';
import { KeysStorage, TypeAcess } from "@/app/enum/enums";
import { useLocalStorage } from "@/app/hooks/useLocalStorage";
import { useRouter } from "next/navigation";
import { ButtonsContainer } from "./ButtonAcess.styles";

export const ButtonsAcess = () => {
    const route = useRouter();
    const { setLocalStorage } = useLocalStorage();

    const handleClick = (type: TypeAcess, event: React.MouseEvent<HTMLButtonElement>) => {
        setLocalStorage(KeysStorage.TYPEACESS, type);
        route.push('/login');
    };

    return (
        <ButtonsContainer>
            <button onClick={(event) => handleClick(TypeAcess.CUSTOMER, event)}>Cliente</button>
            <button onClick={(event) => handleClick(TypeAcess.SHOPMAN, event)}>Lojista</button>
        </ButtonsContainer>
    );
};