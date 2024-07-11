import styled from "styled-components";

const ContainerFilter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    width: 100%;
    gap: 30px;
`;

interface ButtonFilterProps {
    isSelected?: boolean;
}

const ButtonFilter = styled.button<ButtonFilterProps>`
    appearance: none;
    border: none;
    background-color: ${props => (props.isSelected? props.theme.colors.backgroundGreen : "transparent")};
    font-size: 16px;
    font-weight: var(--font-weight-normal);
    color: ${props => (props.isSelected? props.theme.colors.textWhite : props.theme.colors.iconSidebar)};
    cursor: pointer;
    width: 110px;
    height: 30px;
    border-radius: ${props => (props.isSelected? "30px" : "0px")};

    &:hover {
        background-color: ${(props) => props.theme.colors.backgroundGreen};
        color: ${(props) => props.theme.colors.textWhite};
        border-radius: 30px;
    }

`;

export { ButtonFilter, ContainerFilter };

