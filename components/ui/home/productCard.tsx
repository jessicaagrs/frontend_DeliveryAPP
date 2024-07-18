import { ProductResponse } from "@/types/productType";
import { formatCurrency } from "@/utils/formatter";
import { ButtonAddCart, ButtonImage, Card, CardPrice, CardText } from "./productCard.styles";

export const ProductCard = ({ description, price, urlImage }: ProductResponse) => {
    return (
        <Card>
            <CardText>
                <h3>{description}</h3>
                <CardPrice>
                    <span>{formatCurrency(price)}</span>
                    <ButtonAddCart></ButtonAddCart>
                </CardPrice>
            </CardText>
            <ButtonImage src={urlImage}></ButtonImage>
        </Card>
    );
};
