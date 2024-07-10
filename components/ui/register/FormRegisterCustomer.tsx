import { Messages } from "@/enum/enums";
import { useModal } from "@/hooks/useModal";
import { createCustomer } from "@/service/customer/customerApi";
import { CustomerRequest } from "@/types/customerType";
import { extractNumbers } from "@/utils/formatter";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import {
    ButtonPreview,
    ButtonSubmit,
    ContainerButtonPreview,
    Form,
    FormItems,
    FormText,
    Input,
} from "./FormRegister.styles";

export default function FormRegisterCustomer() {
    const { AlertModalComponent, showModal } = useModal();
    const router = useRouter();
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputConfirmPasswordRef = useRef<HTMLInputElement>(null);
    const inputPhoneRef = useRef<HTMLInputElement>(null);

    const setPreviewPageLogin = () => {
        router.push("/login");
    };

    const mutation = useMutation<AxiosResponse<string>, AxiosError, CustomerRequest>({
        mutationFn: createCustomer,
        onError: error => {
            showModal(error.message);
        },
        onSuccess: data => {
            setPreviewPageLogin();
        },
    });

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (
            !inputNameRef.current?.value ||
            !inputEmailRef.current?.value ||
            !inputPasswordRef.current?.value ||
            !inputConfirmPasswordRef.current?.value ||
            !inputPhoneRef.current?.value
        ) {
            showModal(Messages.INVALID_LOGIN_FIELDS);
            return;
        }

        if (inputPasswordRef.current?.value !== inputConfirmPasswordRef.current?.value) {
            showModal(Messages.INVALID_PASSWORD_CONFIRM_PASSWORD);
            return;
        }

        const customer: CustomerRequest = {
            name: inputNameRef.current?.value,
            email: inputEmailRef.current?.value,
            password: inputPasswordRef.current?.value,
            phone: extractNumbers(inputPhoneRef.current?.value),
        };

        mutation.mutate(customer);
    };

    return (
        <>
            <ContainerButtonPreview>
                <ButtonPreview onClick={setPreviewPageLogin}>Login</ButtonPreview>
            </ContainerButtonPreview>
            <Form>
                <FormText>
                    <h1>Cadastro de Cliente</h1>
                </FormText>
                <FormItems>
                    <Input
                        type="text"
                        placeholder="Nome Completo"
                        ref={inputNameRef}
                    />
                    <Input
                        type="email"
                        placeholder="Email"
                        ref={inputEmailRef}
                    />
                    <Input
                        type="password"
                        placeholder="Senha"
                        ref={inputPasswordRef}
                    />
                    <Input
                        type="password"
                        placeholder="Confirme a senha"
                        ref={inputConfirmPasswordRef}
                    />
                    <Input
                        type="tel"
                        placeholder="Telefone"
                        ref={inputPhoneRef}
                    />
                </FormItems>
                <ButtonSubmit onClick={event => handleSubmit(event)}>
                    {mutation.isPending ? "Enviando..." : "Cadastrar"}
                </ButtonSubmit>
            </Form>
            <AlertModalComponent />
        </>
    );
}
