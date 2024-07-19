"use client";
import FormRegisterCustomer from "@/components/ui/register/FormRegisterCustomer";
import FormRegisterShopman from "@/components/ui/register/FormRegisterShopman";
import { TypeAcess } from "@/enum/enums";
import useTypeAcessContext from "@/hooks/useTypeAcessContext";

export default function Register() {
    const { typeAcessSelected } = useTypeAcessContext();

    return <main>{typeAcessSelected === TypeAcess.CUSTOMER ? <FormRegisterCustomer /> : <FormRegisterShopman />}</main>;
}
