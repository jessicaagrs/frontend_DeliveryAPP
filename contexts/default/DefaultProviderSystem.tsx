"use client";
import { customThemeSystem, GlobalStyle } from "@/styles/Global.styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { FilterProductsContextProvider } from "../FilterProductsProvider";
import { CartContextProvider } from "../CartProvider";

type DefaultProviderProps = {
    children: React.ReactNode;
};

const queryClient = new QueryClient();
export default function DefaultProviderSystem(props: DefaultProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={customThemeSystem}>
                <GlobalStyle />
                <FilterProductsContextProvider>
                    <CartContextProvider>{props.children}</CartContextProvider>
                </FilterProductsContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
