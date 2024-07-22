import { KeysStorage } from "@/enum/enums";
import { useLocalStorage } from "@/hooks/global/useLocalStorage";
import { useModal } from "@/hooks/global/useModal";
import useStoreById from "@/hooks/store/useStoreById";
import { ErrorApi } from "@/types/errorApiType";
import { LoginResponse } from "@/types/loginType";
import { useState } from "react";
import SelectStore from "../selectStore/SelectStore";
import { Container, Modal } from "./AlertModal.styles";

interface ActionsModalProps {
    isOpenSelect: boolean;
    closeModal: () => void;
}

export const SelectStoreModal = ({ isOpenSelect, closeModal }: ActionsModalProps) => {
    const { getLocalStorage } = useLocalStorage();
    const loginStorage = getLocalStorage(KeysStorage.LOGIN) as LoginResponse;
    const { showModal, AlertModalComponent, isOpen } = useModal();
    const { fetchStoreById } = useStoreById();
    const [selectedOption, setSelectedOption] = useState<string | null>(null);

    const handleSelectChange = (option: string) => {
        setSelectedOption(option);
    };

    const handleClickSaveStore = async () => {
        if (!loginStorage) return;

        if (selectedOption === "" || selectedOption === null || selectedOption === "0") {
            showModal("Selecione uma loja");
            return;
        }

        try {
            await fetchStoreById(selectedOption);
            closeModal();
        } catch (error: any) {
            const errorResponse = error as ErrorApi;
            showModal(errorResponse.message);
        }
    };

    if (isOpenSelect) {
        return (
            <Container>
                <Modal>
                    <h1>Bem vindo(a) ao Delivery App</h1>
                    <SelectStore
                        isStoreRegistrationPossible={false}
                        onChange={handleSelectChange}
                    />
                    <button onClick={handleClickSaveStore}>Salvar</button>
                </Modal>
                {isOpen && <AlertModalComponent />}
            </Container>
        );
    } else {
        return <></>;
    }
};
