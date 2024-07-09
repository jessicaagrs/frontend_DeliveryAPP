import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import useStoreData from "@/hooks/useStoreData";
import { getStoreById } from "@/service/store/storeApi";
import { LoginResponse } from "@/types/loginType";
import { useQueryClient } from "@tanstack/react-query";
import SelectStore from "../selectStore/SelectStore";
import { Container, Modal } from "./AlertModal.styles";

interface ActionsModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

export const SelectStoreModal = ({ isOpen, closeModal }: ActionsModalProps) => {
    const { selectedStore } = useStoreData();
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const userStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const queryClient = useQueryClient();

    const handleClickSaveStore = async () => {
        if (!userStorage) return;
        const data = await queryClient.fetchQuery({
            queryKey: ["storeById"],
            queryFn: () => getStoreById(selectedStore, userStorage.token),
        });
        setLocalStorage(KeysStorage.STORE, data.data);
        closeModal();
    };

    if (isOpen) {
        return (
            <Container>
                <Modal>
                    <h1>Bem vindo(a) ao Delivery App</h1>
                    <SelectStore isStoreRegistrationPossible={false} />
                    <button onClick={handleClickSaveStore}>Salvar</button>
                </Modal>
            </Container>
        );
    } else {
        return <></>;
    }
};
