import { TypeAcessContextProvider } from "./TypeAcessContext";

type DefaultProviderProps = {
    children: React.ReactNode;
};
export default function DefaultProviderLogin(props: DefaultProviderProps) {

    return (
        <TypeAcessContextProvider>
            {props.children}
        </TypeAcessContextProvider>
    );
}