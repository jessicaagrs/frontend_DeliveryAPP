'use client';

import { ThemeProvider } from 'styled-components';
import Logo from '../../components/ui/acess/Logo';
import { GlobalStyle, customThemeLogin } from "../../styles/Global.styles";

export default function Acess() {
    return (
        <>
            <ThemeProvider theme={customThemeLogin}>
                <GlobalStyle />
                <Logo />
            </ThemeProvider>
        </>
    );
}
