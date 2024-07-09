import { Messages } from "@/enum/enums";
import { useModal } from "@/hooks/useModal";
import { createStore } from "@/service/store/storeApi";
import { StoreRequest } from "@/types/storeType";
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
} from "../register/FormRegister.styles";

export default function FormNewStore() {
    const { AlertModalComponent, showModal } = useModal();
    const inputCnpjRef = useRef<HTMLInputElement>(null);
    const inputCorporateReasonRef = useRef<HTMLInputElement>(null);
    const inputPhoneRef = useRef<HTMLInputElement>(null);
    const inputAcessPasswordRef = useRef<HTMLInputElement>(null);
    const router = useRouter();

    const setPreviewPageRegister = () => {
        router.push("/register");
    };

    const mutation = useMutation<AxiosResponse<string>, AxiosError, StoreRequest>({
        mutationFn: createStore,
        onError: (error) => {
            showModal(error.message);
        },
        onSuccess: (data) => {
            setPreviewPageRegister();
        },
    });

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (
            !inputCnpjRef.current?.value ||
            !inputCorporateReasonRef.current?.value ||
            !inputPhoneRef.current?.value ||
            !inputAcessPasswordRef.current?.value
        ) {
            showModal(Messages.INVALID_LOGIN_FIELDS);
            return;
        }

        const store: StoreRequest = {
            corporateReason: inputCorporateReasonRef.current?.value,
            cnpj: inputCnpjRef.current?.value,
            acessPassword: inputAcessPasswordRef.current?.value,
            phone: extractNumbers(inputPhoneRef.current?.value),
        };

        mutation.mutate(store);
    };

    return (
        <>
            <ContainerButtonPreview>
                <ButtonPreview onClick={setPreviewPageRegister}>Cadastro Lojista</ButtonPreview>
            </ContainerButtonPreview>
            <Form>
                <FormText>
                    <h1>Cadastro de Loja</h1>
                </FormText>
                <FormItems>
                    <Input type="text" placeholder="CNPJ" ref={inputCnpjRef} />
                    <Input type="text" placeholder="Razão Social" ref={inputCorporateReasonRef} />
                    <Input type="tel" placeholder="Telefone" ref={inputPhoneRef} />
                    <Input type="password" placeholder="Palavra Passe" ref={inputAcessPasswordRef} />
                </FormItems>
                <ButtonSubmit onClick={(event) => handleSubmit(event)}>
                    {mutation.isPending ? "Enviando..." : "Cadastrar"}
                </ButtonSubmit>
            </Form>
            <AlertModalComponent />
        </>
    );
}
