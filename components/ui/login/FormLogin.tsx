import loginSession from "@/data/login/loginApi";
import { KeysStorage, Messages } from "@/enum/enums";
import { useAlertModal } from "@/hooks/useAlertModal";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { LoginRequest, LoginResponse } from "@/types/loginType";
import { useMutation } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Loading from "../loading/Loading";
import { BoxOptions, BoxPassword, ButtonEyePassword, ButtonLogin, ButtonOptions, ContainerForm, Input } from "./FormLogin.styles";

export const FormLogin = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const buttonEyePasswordRef = useRef<HTMLButtonElement>(null);
    const [viewEye, setViewEye] = useState(false);
    const router = useRouter();
    const { ModalComponent, showModal } = useAlertModal();
    const { setLocalStorage, getLocalStorage } = useLocalStorage();

    const handleClickViewPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setViewEye(prevViewEye => !prevViewEye);
    };

    const handleClickRedirectRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push("/register");
    };

    const handleClickForgotPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        showModal(Messages.FUNCTIONALITY_NOT_IMPLEMENTED);
    };

    const mutation = useMutation<AxiosResponse<LoginResponse>, AxiosError, LoginRequest>({
        mutationFn: loginSession,
        onError: (error) => {
            showModal(error.message);
        },
        onSuccess: (data) => {
            setLocalStorage(KeysStorage.USER, [data.data]);
            router.push("/home");
        },
    });

    const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();

        if (!inputEmailRef.current?.value || !inputPasswordRef.current?.value) {
            showModal(Messages.INVALID_LOGIN_FIELDS);
            return;
        }

        const typeAcess = getLocalStorage<string>(KeysStorage.TYPEACESS);

        if (!typeAcess) {
            showModal(Messages.UNEXPECTED_ERROR);
            return;
        }

        const dataUser: LoginRequest = {
            email: inputEmailRef.current?.value,
            password: inputPasswordRef.current?.value,
            typeLogin: typeAcess,
        };

        mutation.mutate(dataUser);
    };

    useEffect(() => {
        if (inputPasswordRef.current && buttonEyePasswordRef.current) {
            if (viewEye) {
                inputPasswordRef.current.type = "text";
                buttonEyePasswordRef.current.style.backgroundImage = "url('/password-eye-open.svg')";
            } else {
                inputPasswordRef.current.type = "password";
                buttonEyePasswordRef.current.style.backgroundImage = "url('/password-eye-close.svg')";
            }
        }
    }, [viewEye]);

    if (mutation.isPending) {
        return (
            <Loading />
        );
    }

    return (
        <ContainerForm>
            <Input type="email" placeholder="Email" ref={inputEmailRef} />
            <BoxPassword>
                <Input type="password" placeholder="Senha" ref={inputPasswordRef} />
                <ButtonEyePassword ref={buttonEyePasswordRef} onClick={(event) => handleClickViewPassword(event)} />
            </BoxPassword>
            <BoxOptions>
                <ButtonOptions onClick={(event) => handleClickRedirectRegister(event)}>Cadastro</ButtonOptions>
                <ButtonOptions dark onClick={(event) => handleClickForgotPassword(event)}>Esqueci a senha</ButtonOptions>
            </BoxOptions>
            <ButtonLogin onClick={(event) => handleSubmit(event)}>Entrar</ButtonLogin>
            <ModalComponent />
        </ContainerForm>
    );
};

