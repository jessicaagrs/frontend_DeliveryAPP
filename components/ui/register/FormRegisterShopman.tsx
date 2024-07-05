import { useAlertModal } from "@/hooks/useAlertModal";
import { ButtonPreview, ButtonSubmit, ContainerButtonPreview, Form, FormItems, FormText, Input } from "./FormRegister.styles";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { Messages } from "@/enum/enums";
import { ShopmanRequest } from "@/types/shopmanType";
import createShopman from "@/service/shopman/shopmanApi";
import SelectStore from "../selectStore/SelectStore";

export default function FormRegisterShopman() {
    const { ModalComponent, showModal } = useAlertModal();
    const router = useRouter();
    const inputNameRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputConfirmPasswordRef = useRef<HTMLInputElement>(null);

    const setPreviewPageLogin = () => {
        router.push("/login");
    };

    const mutation = useMutation<AxiosResponse<string>, AxiosError, ShopmanRequest>({
        mutationFn: createShopman,
        onError: (error) => {
            showModal(error.message);
        },
        onSuccess: (data) => {
            setPreviewPageLogin();
        },
    });

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        if (!inputNameRef.current?.value || !inputEmailRef.current?.value || !inputPasswordRef.current?.value || !inputConfirmPasswordRef.current?.value) {
            showModal(Messages.INVALID_LOGIN_FIELDS);
            return;
        }

        if (inputPasswordRef.current?.value !== inputConfirmPasswordRef.current?.value) {
            showModal(Messages.INVALID_PASSWORD_CONFIRM_PASSWORD);
            return;
        }

        const shopman: ShopmanRequest = {
            name: inputNameRef.current?.value,
            email: inputEmailRef.current?.value,
            password: inputPasswordRef.current?.value,
            role: "admin",
            storeId: "1",
        };

        mutation.mutate(shopman);
    };

    return (
        <>
            <ContainerButtonPreview>
                <ButtonPreview onClick={setPreviewPageLogin}>Login</ButtonPreview>
            </ContainerButtonPreview>
            <Form>
                <FormText>
                    <h1>Cadastro de Lojista</h1>
                    <p>Efetue seu cadastro caso seja o administrador da loja. Se voce é colaborador solicite o cadastramento ao responsável pelo estabelecimento.</p>
                </FormText>
                <FormItems>
                    <SelectStore isStoreRegistrationPossible={true} />
                    <Input type="text" placeholder="Nome Completo" ref={inputNameRef} />
                    <Input type="email" placeholder="Email" ref={inputEmailRef} />
                    <Input type="password" placeholder="Senha" ref={inputPasswordRef} />
                    <Input type="password" placeholder="Confirme a senha" ref={inputConfirmPasswordRef} />
                </FormItems>
                <ButtonSubmit onClick={(event) => handleSubmit(event)}>
                    {mutation.isPending ? "Enviando..." : "Cadastrar"}
                </ButtonSubmit>
            </Form>
            <ModalComponent />
        </>
    );
};