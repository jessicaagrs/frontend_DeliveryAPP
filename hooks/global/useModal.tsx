import { SelectStoreModal } from "@/components/ui/modal/SelectStoreModal";
import { useState } from "react";
import AlertModal from "../../components/ui/modal/AlertModal";

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");

    const showModal = (msg?: string) => {
        setMessage(msg ?? "");
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setMessage("");
    };

    const AlertModalComponent = () => (
        <AlertModal
            isOpen={isOpen}
            closeModal={closeModal}
            message={message}
        />
    );

    const SelectModalComponent = () => (
        <SelectStoreModal
            isOpenSelect={isOpen}
            closeModal={closeModal}
        />
    );

    return {
        isOpen,
        showModal,
        closeModal,
        AlertModalComponent,
        SelectModalComponent,
    };
}
