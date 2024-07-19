"use client";
import { customThemeSystem, GlobalStyle } from "@/styles/Global.styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { CustomerContextProvider } from "../CustomerProvider";
import { ShopmanContextProvider } from "../ShopmanProvider";
import { StoreContextProvider } from "../StoreProvider";
import { TypeAcessContextProvider } from "../TypeAcessProvider";

type DefaultProviderProps = {
    children: React.ReactNode;
};

const queryClient = new QueryClient();
export default function DefaultProviderSystem(props: DefaultProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={customThemeSystem}>
                <GlobalStyle />
                <StoreContextProvider>
                    <CustomerContextProvider>
                        <ShopmanContextProvider>
                            <TypeAcessContextProvider>{props.children}</TypeAcessContextProvider>
                        </ShopmanContextProvider>
                    </CustomerContextProvider>
                </StoreContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
