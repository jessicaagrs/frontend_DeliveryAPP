'use client';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type DefaultProviderProps = {
    children: React.ReactNode;
};

const queryClient = new QueryClient();
export default function DefaultProviderLogin(props: DefaultProviderProps) {

    return (
        <QueryClientProvider client={queryClient}>
                {props.children}
        </QueryClientProvider>
    );
}