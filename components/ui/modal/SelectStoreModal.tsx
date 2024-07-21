import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/useLocalStorage";
import { useModal } from "@/hooks/useModal";
import { LoginResponse } from "@/types/loginType";
import { StoreResponse } from "@/types/storeType";
import SelectStore from "../selectStore/SelectStore";
import { Container, Modal } from "./AlertModal.styles";

interface ActionsModalProps {
    isOpen: boolean;
    closeModal: () => void;
}

export const SelectStoreModal = ({ isOpen, closeModal }: ActionsModalProps) => {
    const { getLocalStorage } = useLocalStorage();
    const loginStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const { showModal, AlertModalComponent } = useModal();

    const handleClickSaveStore = async () => {
        if (!loginStorage) return;

        const storeStorage = getLocalStorage(KeysStorage.STORE) as StoreResponse;
        if (!storeStorage) {
            showModal("Selecione uma loja");
            return;
        }

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
                <AlertModalComponent />
            </Container>
        );
    } else {
        return <></>;
    }
};
