import useCart from "@/hooks/cart/useCart";
import { Product } from "@/types/cartType";
import { ProductResponse } from "@/types/productType";
import { formatCurrency } from "@/utils/formatter";
import { ButtonAddCart, ButtonImage, Card, CardPrice, CardText } from "./productCard.styles";

export const ProductCard = ({ description, price, urlImage, id }: ProductResponse) => {
    const { addProductCart } = useCart();
    const handleClickAddCard = () => {
        const product: Product = {
            id,
            description,
            price,
            urlImage,
            quantity: 1,
        };

        addProductCart(product);
    };

    return (
        <Card key={id}>
            <CardText>
                <h3>{description}</h3>
                <CardPrice>
                    <span>{formatCurrency(price)}</span>
                    <ButtonAddCart onClick={handleClickAddCard}></ButtonAddCart>
                </CardPrice>
            </CardText>
            <ButtonImage src={urlImage}></ButtonImage>
        </Card>
    );
};
