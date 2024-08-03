import styled from "styled-components";

const ModalBackdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
    height: 100%;
`;

const Modal = styled.div`
    width: 100%;
    max-width: 800px;
    height: auto;
    max-height: 800px;
    border: none;
    border-radius: 12px;
    background-color: white;
    padding: 20px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ButtonClose = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 48px;
    height: 48px;
    background-color: transparent;
    border: none;
    border-radius: 15px;
    cursor: pointer;
    font-weight: 500;
    font-size: 24px;
    color: ${props => props.theme.colors.textLink};
`;

const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: #eee;
    border-radius: 8px;
    text-decoration: none;
    color: black;
    font-size: 24px;
    font-weight: 500;
    max-width: 500px;
`;

export { ButtonClose, Card, Modal, ModalBackdrop };
