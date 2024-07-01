import { useAlertModal } from "@/hooks/useAlertModal";
import createCustomer from "@/service/customer/customerApi";
import { CustomerRequest } from "@/types/customerType";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { ButtonSubmit, Form, FormItems, Input } from "./FormRegisterCustomer.styles";

export default function FormRegisterCustomer() {
    const { ModalComponent, showModal } = useAlertModal();
    const router = useRouter();

    const mutation = useMutation<AxiosResponse<string>, AxiosError, CustomerRequest>({
        mutationFn: createCustomer,
        onError: (error) => {
            showModal(error.message);
        },
        onSuccess: (data) => {
            router.push("/login");
        },
    });

    return (
        <Form>
            <h1>Cadastro de Cliente</h1>
            <FormItems>
                <Input type="text" placeholder="Nome Completo" />
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Senha" />
                <Input type="password" placeholder="Confirme a senha" />
                <Input type="tel" placeholder="Telefone" />
            </FormItems>
            <ButtonSubmit>Enviar</ButtonSubmit>
            <ModalComponent />
        </Form>
    );
};