'use client';
import FormRegisterCustomer from "@/components/ui/register/FormRegisterCustomer";
import FormRegisterShopman from "@/components/ui/register/FormRegisterShopman";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { GlobalStyle, customThemeLogin } from "@/styles/Global.styles";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

export default function Register() {
    const [typeAcess, setTypeAccess] = useState('');
    const { getLocalStorage } = useLocalStorage();

    useEffect(() => {
        const type = getLocalStorage(KeysStorage.TYPEACESS) as string;
        setTypeAccess(type);
    }, []);

    return (
        <>
            <ThemeProvider theme={customThemeLogin}>
                <GlobalStyle />
                {
                    typeAcess === TypeAcess.CUSTOMER ?
                        (
                            <FormRegisterCustomer />
                        )
                        :
                        (
                            <FormRegisterShopman />
                        )
                }
            </ThemeProvider>
        </>
    );
};