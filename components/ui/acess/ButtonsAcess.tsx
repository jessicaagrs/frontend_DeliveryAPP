"use client";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/global/useLocalStorage";
import { useRouter } from "next/navigation";
import { useMemo } from "react";
import { ButtonsContainer } from "./ButtonAcess.styles";

export const ButtonsAcess = () => {
    const route = useRouter();
    const { setLocalStorage } = useLocalStorage();

    const handleClick = useMemo(() => {
        return (type: string, event: React.MouseEvent<HTMLButtonElement>) => {
            setLocalStorage(KeysStorage.TYPEACESS, type);
            route.push("/login");
        };
    }, []);

    return (
        <ButtonsContainer>
            <button onClick={event => handleClick(TypeAcess.CUSTOMER, event)}>Cliente</button>
            <button onClick={event => handleClick(TypeAcess.SHOPMAN, event)}>Lojista</button>
        </ButtonsContainer>
    );
};
