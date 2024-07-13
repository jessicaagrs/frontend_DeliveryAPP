"use client";
import { GlobalStyle, customThemeLogin } from "@/styles/Global.styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { StoreContextProvider } from "./StoreProvider";
import { TypeAcessContextProvider } from "./TypeAcessProvider";

type DefaultProviderProps = {
    children: React.ReactNode;
};

const queryClient = new QueryClient();
export default function DefaultProviderLogin(props: DefaultProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={customThemeLogin}>
                <GlobalStyle />
                <StoreContextProvider>
                    <TypeAcessContextProvider>{props.children}</TypeAcessContextProvider>
                </StoreContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
