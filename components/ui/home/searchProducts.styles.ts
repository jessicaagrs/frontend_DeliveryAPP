import styled from "styled-components";

const ContainerSearch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
`;

const Input = styled.input`
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
    padding-left: 0.5rem;
    font-size: 15px;
    background-image: url("/search-home.svg");
    background-position: right 3% bottom 45%;
    background-repeat: no-repeat;
    background-size: 25px;
    outline-color: ${props => props.theme.colors.iconSidebar};
`;

export { ContainerSearch, Input };
