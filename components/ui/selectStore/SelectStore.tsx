import { KeysStorage, Messages } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/global/useLocalStorage";
import useStore from "@/hooks/store/useStore";
import { StoreResponse } from "@/types/storeType";
import { clearStorageBrowser } from "@/utils/routers";
import { usePathname, useRouter } from "next/navigation";
import { ContainerSelect, Select } from "./SelectStore.styles";

type SelectStoreProps = {
    isStoreRegistrationPossible: boolean;
    onChange: (value: string) => void;
};

export default function SelectStore({ isStoreRegistrationPossible, onChange }: SelectStoreProps) {
    const router = useRouter();
    const pathname = usePathname();
    const { data, error, isError, isPending } = useStore();
    const { setLocalStorage } = useLocalStorage();

    const handleClickNewStore = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push("/newStore");
    };

    const handleChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const storeId = event.target.value;

        if (pathname === "/home") {
            onChange(storeId);
        } else {
            setLocalStorage(KeysStorage.STOREID, storeId);
        }
    };

    if (data?.length === 0 && pathname === "/home") {
        alert(Messages.REDIRECT_ERROR);
        clearStorageBrowser();
    }

    return (
        <ContainerSelect>
            <Select
                onChange={event => handleChangeStore(event)}
                border={pathname === "/home"}
            >
                <option value="0">{isPending ? "Aguarde buscando as lojas..." : "Selecione uma loja"}</option>
                {data?.map((store: StoreResponse) => (
                    <option
                        key={store.id}
                        value={store.id}
                    >
                        {store.corporateReason}
                    </option>
                ))}
            </Select>
            {isStoreRegistrationPossible && (
                <button onClick={event => handleClickNewStore(event)}>Cadastrar Loja</button>
            )}
            {isError && <p>Erro ao buscar lojas: {error?.message}</p>}
        </ContainerSelect>
    );
}
