import { useState } from 'react';
import AlertModal from '../components/ui/modal/AlertModal';

export function useAlertModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const showModal = (msg: string) => {
        setMessage(msg);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setMessage("");
    };

    const ModalComponent = () => (
        <AlertModal isOpen={isOpen} setIsOpen={setIsOpen} message={message} />
    );

    return {
        showModal,
        closeModal,
        ModalComponent,
    };
}