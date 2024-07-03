'use client';
import FormRegisterCustomer from "@/components/ui/register/FormRegisterCustomer";
import FormRegisterShopman from "@/components/ui/register/FormRegisterShopman";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useEffect, useState } from "react";

export default function Register() {
    const [typeAcess, setTypeAccess] = useState('');
    const { getLocalStorage } = useLocalStorage();

    useEffect(() => {
        const type = getLocalStorage(KeysStorage.TYPEACESS) as string;
        setTypeAccess(type);
    }, []);

    return (
        <main>
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
        </main>
    );
};