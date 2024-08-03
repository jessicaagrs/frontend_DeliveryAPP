import styled from "styled-components";

const ContainerCartIcon = styled.section`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 40px;
    margin: 20px 0 20px 0;

    h1 {
        font-size: 1.5rem;
        font-weight: var(--font-weight-semibold);
        color: ${props => props.theme.colors.textInputGray};
    }

    @media (min-width: 320px) and (max-width: 1280px) {
        margin: 20px 5px 20px 0;

        h1 {
            font-size: 1rem;
        }
    }
`;

const CartIconItems = styled.div`
    display: flex;
    align-items: center;
    position: relative;

    @media (min-width: 320px) and (max-width: 1280px) {
        margin-right: 20px;
    }
`;

const ButtonCart = styled.button`
    border: none;
    background-color: transparent;
    background-image: url("/cart.svg");
    background-repeat: no-repeat;
    background-size: 30px;
    background-position: center;
    width: 30px;
    height: 30px;
`;

const CartProducts = styled.div`
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: ${props => props.theme.colors.textError};
    color: ${props => props.theme.colors.textWhite};
    font-size: 0.6rem;
    text-align: center;
    position: absolute;
    left: 20px;
    bottom: 20px;
`;

export { ButtonCart, CartIconItems, CartProducts, ContainerCartIcon };
