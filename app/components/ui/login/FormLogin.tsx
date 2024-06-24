import { BoxOptions, BoxPassword, ButtonEyePassword, ButtonLogin, ButtonOptions, ContainerForm, Input } from "./FormLogin.styles";

export const FormLogin = () => {
    return (
        <ContainerForm>
            <Input type="email" placeholder="Email" />
            <BoxPassword>
                <Input type="password" placeholder="Senha" />
                <ButtonEyePassword />
            </BoxPassword>
            <BoxOptions>
                <ButtonOptions>Cadastro</ButtonOptions>
                <ButtonOptions dark>Esqueci a senha</ButtonOptions>
            </BoxOptions>
            <ButtonLogin>Entrar</ButtonLogin>
        </ContainerForm>
    );
};