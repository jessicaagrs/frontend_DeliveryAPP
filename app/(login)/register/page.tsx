"use client";
import FormRegisterCustomer from "@/components/ui/register/FormRegisterCustomer";
import FormRegisterShopman from "@/components/ui/register/FormRegisterShopman";
import { KeysStorage, TypeAcess } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";

export default function Register() {
    const { getLocalStorage } = useLocalStorage();
    const typeAcessSelected = getLocalStorage(KeysStorage.TYPEACESS) as string;

    return <main>{typeAcessSelected === TypeAcess.CUSTOMER ? <FormRegisterCustomer /> : <FormRegisterShopman />}</main>;
}
