import Image from "next/image";
import { ButtonClose, Modal, ModalBackdrop } from "./ProductDetail.styles";

type ProductDetailProps = {
    urlImage: string;
    isOpen: boolean;
    closeModal: () => void;
};

export default function ProductDetail({ urlImage, isOpen, closeModal }: ProductDetailProps) {
    if (isOpen) {
        return (
            <ModalBackdrop>
                <Modal>
                    <Image
                        src={urlImage}
                        alt="Imagem do produto"
                        width={600}
                        height={600}
                        style={{
                            maxWidth: "100%",
                            maxHeight: "100%",
                            objectFit: "contain", // ou "cover"
                        }}
                    />
                    <ButtonClose onClick={closeModal}>X</ButtonClose>
                </Modal>
            </ModalBackdrop>
        );
    } else {
        return <></>;
    }
}
