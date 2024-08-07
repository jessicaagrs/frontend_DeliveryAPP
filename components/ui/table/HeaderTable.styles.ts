import styled from "styled-components";

const Header = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;
const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    margin: 2rem;
`;

const HeaderTextContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 20px;

    h1 {
        font-size: 2.5rem;
        font-weight: var(--font-weight-bold);
        color: ${props => props.theme.colors.textGray};
    }

    p {
        font-size: 1rem;
        font-weight: var(--font-weight-normal);
        color: ${props => props.theme.colors.textGray};
    }
`;

const HeaderButtonsContainer = styled.div`
    display: flex;
    gap: 20px;
    align-items: center;
`;

const ButtonAdd = styled.button`
    width: 180px;
    height: 55px;
    border: none;
    background-color: ${props => props.theme.colors.buttonGreen};
    color: ${props => props.theme.colors.textWhite};
    font-size: 1rem;
    font-weight: var(--font-weight-medium);
    border-radius: 8px;
    cursor: pointer;

    &:hover {
        transition: 0.5s;
        background-color: ${props => props.theme.colors.buttonPeach};
    }
`;

const ButtonDownload = styled(ButtonAdd)`
    background-color: ${props => props.theme.colors.buttonPeach};

    &:hover {
        background-color: ${props => props.theme.colors.buttonGreen};
    }
`;

const Divisor = styled.hr`
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.textInputGray};
`;

export { ButtonAdd, ButtonDownload, Divisor, Header, HeaderButtonsContainer, HeaderContainer, HeaderTextContainer };

