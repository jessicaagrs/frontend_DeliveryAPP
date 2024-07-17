import styled from "styled-components";

const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    margin-top: 2rem;
`;

const SearchItems = styled.div`
    width: 500px;
    position: relative;
`;

const Input = styled.input`
    appearance: none;
    width: 500px;
    height: 50px;
    border-radius: 15px;
    border: none;
    background: rgba(255, 255, 255, 0.4);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.88);
    padding: 0 1rem 0 1rem;
    font-size: 15px;
    outline-color: ${props => props.theme.colors.iconSidebar};

    &::-webkit-search-cancel-button {
        position: relative;
        -webkit-appearance: none;
        height: 20px;
        width: 20px;
        background-color: transparent;
        background-repeat: no-repeat;
        background-size: 20px;
        background-image: url("/cancel-input-search.svg");
        cursor: pointer;
    }
`;

interface ButtonSearchProps {
    isVisible: boolean;
}

const ButtonSearch = styled.button<ButtonSearchProps>`
    background-image: url("/search-home.svg");
    background-repeat: no-repeat;
    background-size: 25px;
    width: 34px;
    height: 34px;
    border: none;
    background-color: transparent;
    position: absolute;
    right: 10px;
    bottom: 4px;
    cursor: pointer;
    display: ${props => (props.isVisible? "block" : "none")};
`;

export { ButtonSearch, ContainerSearch, Input, SearchItems };
