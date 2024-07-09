import styled from "styled-components";

const Container = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
`;

const Modal = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 600px;
    background-color: ${(props) => props.theme.colors.textWhite};
    color: ${(props) => props.theme.colors.textGray};
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    border-radius: 12px;

    h1 {
        text-align: center;
        font-size: 32px;
    }

    p {
        font-size: 18px;
        text-align: justify;
    }

    button {
        border: none;
        cursor: pointer;
        width: 230px;
        height: 40px;
        border-radius: 30px;
        color: ${(props) => props.theme.colors.textWhite};
        background-color: ${(props) => props.theme.colors.backgroundGreen};
        font-weight: var(--font-weight-regular);
        font-size: 18px;
        margin-bottom: 10px;
    }

    button:hover {
        color: ${(props) => props.theme.colors.backgroundGreen};
        background-color: ${(props) => props.theme.colors.textWhite};
        border: 1px solid ${(props) => props.theme.colors.backgroundGreen};
    }

    @media (min-width: 320px) and (max-width: 660px) {
        width: 90%;

        h1 {
            font-size: 24px;
        }

        button {
            width: 210px;
        }
    }
`;

export { Container, Modal };

