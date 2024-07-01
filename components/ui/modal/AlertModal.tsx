import { Container, Modal } from "./AlertModal.styles";

interface AlertModal {
    isOpen: boolean,
    closeModal: () => void,
    message: string,
};

export default function AlertModal({ isOpen, closeModal, message }: AlertModal) {
    if (isOpen) {
        return (
            <Container>
                <Modal>
                    <h1>Aviso</h1>
                    <p>{message}</p>
                    <button onClick={closeModal}>Fechar</button>
                </Modal>
            </Container>
        );
    } else {
        return (<></>);
    }
};