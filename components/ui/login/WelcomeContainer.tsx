import Image from "next/image";
import { FormLogin } from "./FormLogin";
import { ContainerLogin, WelcomeBox } from "./WelcomeContainer.styles";

export default function WelcomeContainer() {
    return (
        <ContainerLogin>
            <WelcomeBox>
                <Image src="/girl-hunger.png" width={400} height={400} alt="girl-with-hunger" />
                <h1>Bem vindo(a)!</h1>
                <p>Acesse sua conta para gerenciar seus pedidos.</p>
            </WelcomeBox>
            <FormLogin />
        </ContainerLogin>
    );
}
