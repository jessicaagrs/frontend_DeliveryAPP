import { Messages } from "@/app/enum/enums";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import AlertModal from "../modal/AlertModal";
import { BoxOptions, BoxPassword, ButtonEyePassword, ButtonLogin, ButtonOptions, ContainerForm, Input } from "./FormLogin.styles";

export const FormLogin = () => {
    const inputPasswordRef = useRef<HTMLInputElement>(null);
    const inputEmailRef = useRef<HTMLInputElement>(null);
    const buttonEyePasswordRef = useRef<HTMLButtonElement>(null);
    const [viewEye, setViewEye] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const router = useRouter();

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setViewEye(prevViewEye => !prevViewEye);
    };

    const handleClickRedirectRegister = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push("/register");
    };

    const handleClickModal = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        setIsOpen(prevIsOpen => !prevIsOpen);
    };

    const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
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

    return (
        <ContainerForm>
            <Input type="email" placeholder="Email" ref={inputEmailRef} />
            <BoxPassword>
                <Input type="password" placeholder="Senha" ref={inputPasswordRef} />
                <ButtonEyePassword ref={buttonEyePasswordRef} onClick={(event) => handleClick(event)} />
            </BoxPassword>
            <BoxOptions>
                <ButtonOptions onClick={(event) => handleClickRedirectRegister(event)}>Cadastro</ButtonOptions>
                <ButtonOptions dark onClick={(event) => handleClickModal(event)}>Esqueci a senha</ButtonOptions>
            </BoxOptions>
            <ButtonLogin onClick={(event) => handleSubmit(event)}>Entrar</ButtonLogin>
            <AlertModal isOpen={isOpen} setIsOpen={setIsOpen} message={Messages.FUNCTIONALITY_NOT_IMPLEMENTED} />
        </ContainerForm>
    );
};

