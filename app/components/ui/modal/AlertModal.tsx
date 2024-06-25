import { Container, Modal } from "./AlertModal.styles";

interface AlertModal {
    isOpen: boolean,
    setIsOpen: (isOpen: boolean) => void,
    message: string,
};

export default function AlertModal({ isOpen, setIsOpen, message }: AlertModal) {
    if (isOpen) {
        return (
            <Container>
                <Modal>
                    <h1>Aviso</h1>
                    <p>{message}</p>
                    <button onClick={() => setIsOpen(!isOpen)}>Fechar</button>
                </Modal>
            </Container>
        );
    } else {
        return (<></>);
    }
};