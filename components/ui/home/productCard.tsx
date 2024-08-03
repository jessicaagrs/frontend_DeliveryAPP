import useCart from "@/hooks/cart/useCart";
import { useModal } from "@/hooks/global/useModal";
import { Product } from "@/types/cartType";
import { ProductResponse } from "@/types/productType";
import { formatCurrency } from "@/utils/formatter";
import { useState } from "react";
import { ButtonAddCart, ButtonImage, Card, CardPrice, CardText } from "./productCard.styles";

export const ProductCard = ({ description, price, urlImage, id }: ProductResponse) => {
    const { addProductCart } = useCart();
    const [clicked, setClicked] = useState(false);
    const { ProductDetailModalComponent, showModalProductDetail, isOpen } = useModal();

    const handleClickAddCard = () => {
        setClicked(true);
        const product: Product = {
            id,
            description,
            price,
            urlImage,
            quantity: 1,
        };

        addProductCart(product);
        setTimeout(() => {
            setClicked(false);
        }, 2000);
    };

    const handleClickViewDetail = () => {
        showModalProductDetail(urlImage);
    };

    return (
        <Card key={id}>
            <CardText>
                <h3>{description}</h3>
                <CardPrice>
                    <span>{formatCurrency(price)}</span>
                    <ButtonAddCart
                        clicked={clicked}
                        onClick={handleClickAddCard}
                        role="tooltip"
                        aria-label="Produto adicionado ao carrinho"
                    ></ButtonAddCart>
                </CardPrice>
            </CardText>
            <ButtonImage
                src={urlImage}
                onClick={handleClickViewDetail}
            ></ButtonImage>
            {isOpen && <ProductDetailModalComponent />}
        </Card>
    );
};
