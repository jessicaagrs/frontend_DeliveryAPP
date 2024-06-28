'use client';
import WelcomeContainer from "@/components/ui/login/WelcomeContainer";
import { GlobalStyle, customThemeLogin } from "@/styles/Global.styles";
import { ThemeProvider } from "styled-components";

export default function Login() {
    return (
        <>
            <ThemeProvider theme={customThemeLogin}>
                <GlobalStyle />
                <WelcomeContainer />
            </ThemeProvider>
        </>
    );
};