import useStoreData from "@/hooks/useStoreData";
import { getStores } from "@/service/store/storeApi";
import { StoreResponse } from "@/types/storeType";
import { useQuery } from "@tanstack/react-query";
import { usePathname, useRouter } from "next/navigation";
import { ContainerSelect, Select } from "./SelectStore.styles";
import { Messages } from "@/enum/enums";
import { clearStorageBrowser } from "@/utils/routers";

type SelectStoreProps = {
    isStoreRegistrationPossible: boolean;
};

export default function SelectStore({ isStoreRegistrationPossible }: SelectStoreProps) {
    const router = useRouter();
    const pathname = usePathname();
    const { setSelectStore } = useStoreData();
    const { isPending, isError, data, error } = useQuery({
        queryKey: ["stores"],
        queryFn: getStores,
    });

    const handleClickNewStore = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push("/newStore");
    };

    const handleChangeStore = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const storeId = event.target.value;
        setSelectStore(storeId);
    };

    if(data?.data.length === 0 && pathname === "/home"){
        alert(Messages.REDIRECT_ERROR);
        clearStorageBrowser();
    }

    return (
        <ContainerSelect>
            <Select onChange={(event) => handleChangeStore(event)} border={pathname === "/home"}>
                <option value="0">{isPending ? "Aguarde buscando as lojas..." : "Selecione uma loja"}</option>
                {data?.data.map((store: StoreResponse) => (
                    <option key={store.id} value={store.id}>
                        {store.corporateReason}
                    </option>
                ))}
            </Select>
            {isStoreRegistrationPossible && (
                <button onClick={(event) => handleClickNewStore(event)}>Cadastrar Loja</button>
            )}
            {isError && <p>Erro ao buscar lojas: {error.message}</p>}
        </ContainerSelect>
    );
}
