import { SelectStoreModal } from "@/components/ui/modal/SelectStoreModal";
import { useState } from "react";
import AlertModal from "../../components/ui/modal/AlertModal";
import ProductDetail from "@/components/ui/modal/ProductDetail";

export function useModal() {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [urlImage, setUrlImage] = useState("");

    const showModal = (msg?: string) => {
        setMessage(msg ?? "");
        setIsOpen(true);
    };

    const showModalProductDetail = (urlImage: string) => {
        setUrlImage(urlImage);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false);
        setMessage("");
        setUrlImage("");
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

    const ProductDetailModalComponent = () => (
        <ProductDetail
            isOpen={isOpen}
            closeModal={closeModal}
            urlImage={urlImage}
        />
    );

    return {
        isOpen,
        showModal,
        showModalProductDetail,
        closeModal,
        AlertModalComponent,
        SelectModalComponent,
        ProductDetailModalComponent,
    };
}
