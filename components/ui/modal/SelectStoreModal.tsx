import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import { getStoreById } from "@/service/store/storeApi";
import { ErrorApi } from "@/types/errorApiType";
import { LoginResponse } from "@/types/loginType";
import { useQueryClient } from "@tanstack/react-query";
import SelectStore from "../selectStore/SelectStore";
import { Container, Modal } from "./AlertModal.styles";
import useStoreData from "@/hooks/useStoreData";

interface ActionsModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

export const SelectStoreModal = ({ isOpen, closeModal }: ActionsModalProps) => {
    const { getLocalStorage, setLocalStorage } = useLocalStorage();
    const { selectedStore } = useStoreData();
    const userStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const queryClient = useQueryClient();
    const { showModal, AlertModalComponent } = useModal();

    const handleClickSaveStore = async () => {
        if (!userStorage) return;

        try {
            const data = await queryClient.fetchQuery({
                queryKey: ["storeById"],
                queryFn: () => getStoreById(selectedStore, userStorage.token),
            });
            setLocalStorage(KeysStorage.STORE, data.data);
            closeModal();
        } catch (error: any) {
            const errorResponse = error as ErrorApi;
            showModal(errorResponse.message);
        }
    };

    if (isOpen) {
        return (
            <Container>
                <Modal>
                    <h1>Bem vindo(a) ao Delivery App</h1>
                    <SelectStore isStoreRegistrationPossible={false} />
                    <button onClick={handleClickSaveStore}>Salvar</button>
                </Modal>
                <AlertModalComponent />
            </Container>
        );
    } else {
        return <></>;
    }
};
