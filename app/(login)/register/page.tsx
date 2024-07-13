"use client";
import FormRegisterCustomer from "@/components/ui/register/FormRegisterCustomer";
import FormRegisterShopman from "@/components/ui/register/FormRegisterShopman";
import { TypeAcess } from "@/enum/enums";
import useTypeAcess from "@/hooks/useTypeAcess";

export default function Register() {
    const { typeAcessSelected } = useTypeAcess();

    return <main>{typeAcessSelected === TypeAcess.CUSTOMER ? <FormRegisterCustomer /> : <FormRegisterShopman />}</main>;
}
