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

    @media (min-width: 320px) and (max-width: 1280px) {
        width: 90%;
    }
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

interface ButtonAddCartProps {
    clicked: boolean;
}

const ButtonAddCart = styled.button<ButtonAddCartProps>`
    appearance: none;
    border: none;
    background-color: transparent;
    background-image: url("/add-product.svg");
    background-repeat: no-repeat;
    background-size: cover;
    width: 22px;
    height: 22px;
    cursor: pointer;
    position: relative;
    pointer-events: all;

    &::after {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
        white-space: nowrap;
        pointer-events: none;
        transition: opacity 1s;
        opacity: ${props => (props.clicked ? 1 : 0)};
        content: attr(aria-label);
        background: ${props => props.theme.colors.backgroundSidebar};
        color: ${props => props.theme.colors.textWhite};
        border-radius: 5px;
        padding: 3px 4px;
        font-size: 12px;
        position: absolute;
        top: 130%;
        left: 50%;
        transform: translateX(-50%);
    }
`;

interface ButtonImageProps {
    src: string;
}

const ButtonImage = styled.button<ButtonImageProps>`
    appearance: none;
    border: none;
    background-color: transparent;
    width: 150px;
    height: 150px;
    background-image: url(${props => (props.src ? props.src : "/default-product.svg")});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    background-position: center;
    cursor: pointer;
`;

export { ButtonAddCart, ButtonImage, Card, CardPrice, CardText };

