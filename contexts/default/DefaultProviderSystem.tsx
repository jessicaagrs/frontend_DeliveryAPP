"use client";
import { customThemeSystem, GlobalStyle } from "@/styles/Global.styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "styled-components";
import { FilterProductsContextProvider } from "../FilterProductsProvider";

type DefaultProviderProps = {
    children: React.ReactNode;
};

const queryClient = new QueryClient();
export default function DefaultProviderSystem(props: DefaultProviderProps) {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider theme={customThemeSystem}>
                <GlobalStyle />
                <FilterProductsContextProvider>{props.children}</FilterProductsContextProvider>
            </ThemeProvider>
        </QueryClientProvider>
    );
}
