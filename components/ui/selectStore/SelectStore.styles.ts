import styled from "styled-components";

const ContainerSelect = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;

    button {
        border: none;
        background-color: transparent;
        width: 40%;
        color: ${(props) => props.theme.colors.textWhite};
        cursor: pointer;
        font-weight: var(--font-weight-semibold);
    }

    button:hover {
        text-decoration: underline;
    }

    p {
        color: ${(props) => props.theme.colors.textError};
        font-size: 14px;
        width: 100%;
    }
`;

interface SelectProps {
    border?: boolean;
}
const Select = styled.select<SelectProps>`
    appearance: none;
    width: 350px;
    height: 60px;
    border: ${(props) => (props.border ? `1px solid ${props.theme.colors.buttonGray}` : "none")};
    border-radius: 15px;
    font-size: 15px;
    font-weight: var(--font-weight-medium);
    color: ${(props) => props.theme.colors.textInputGray};
    outline: none;
    padding: 0px 10px 0px 10px;
    background-image: url("/arrow-up-select.svg");
    background-position: right 2% bottom 45%;
    background-repeat: no-repeat;
    background-size: 30px;

    &:focus {
        background-image: url("/arrow-down-select.svg");
    }

    @media (min-width: 320px) and (max-width: 415px) {
        width: 300px;
        height: 50px;
    }
`;

export { ContainerSelect, Select };

