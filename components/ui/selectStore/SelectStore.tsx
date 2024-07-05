import { useRouter } from "next/navigation";
import { ContainerSelect, Select } from "./SelectStore.styles";

type SelectStoreProps = {
    isStoreRegistrationPossible: boolean;
};

export default function SelectStore({ isStoreRegistrationPossible }: SelectStoreProps) {
    const router = useRouter();

    const handleClickNewStore = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        router.push("/newStore");
    }

    return (
        <ContainerSelect>
            <Select>
                <option value="0">Selecione uma loja</option>
            </Select>
            {isStoreRegistrationPossible && (
                <button onClick={(event) => handleClickNewStore(event)}>Cadastrar Loja</button>
            )}
        </ContainerSelect>

    );
};