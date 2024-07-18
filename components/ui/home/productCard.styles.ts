import styled from "styled-components";

const Card = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.colors.backgroundGray};
    padding: 1rem;
    border-radius: 15px;
    gap: 1rem;
`;

const CardText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 50%;

    h3 {
        font-size: 17px;
        font-weight: var(--font-weight-medium);
        color: ${props => props.theme.colors.textCard};
        width: 100%;
    }
`;

const CardPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    span {
        font-size: 15px;
        font-weight: var(--font-weight-semibold);
        color: ${props => props.theme.colors.backgroundGreen};
    }
`;

const ButtonAddCart = styled.button`
    appearance: none;
    border: none;
    background-color: transparent;
    background-image: url("/add-product.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 22px;
    height: 22px;
    cursor: pointer;
`;

interface ButtonImageProps {
    src: string;
}

const ButtonImage = styled(ButtonAddCart)<ButtonImageProps>`
    width: 150px;
    height: 150px;
    background-image: url(${props => props.src ? props.src : "/default-product.svg"});
    border-radius: 50%;
    background-position: center;
`;

export { ButtonAddCart, ButtonImage, Card, CardPrice, CardText };

