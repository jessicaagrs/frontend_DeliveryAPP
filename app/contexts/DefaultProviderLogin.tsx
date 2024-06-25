import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TypeAcessContextProvider } from "./TypeAcessContext";

type DefaultProviderProps = {
    children: React.ReactNode;
};

const queryClient = new QueryClient();
export default function DefaultProviderLogin(props: DefaultProviderProps) {

    return (
        <QueryClientProvider client={queryClient}>
            <TypeAcessContextProvider>
                {props.children}
            </TypeAcessContextProvider>
        </QueryClientProvider>
    );
}