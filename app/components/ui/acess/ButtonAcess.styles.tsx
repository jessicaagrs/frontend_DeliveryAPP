import styled from 'styled-components';

export const ButtonsContainer = styled.div`
    display: flex;
    gap: 25px;

    button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.buttonPeach}; 
        width: 250px;
        height: 60px;
        border-radius: 30px;
        color: ${(props) => props.theme.colors.textWhite};
        font-size: 23px;
        font-weight: var(--font-weight-regular);

        @media (min-width: 320px) and (max-width: 480px){
            width: 150px;
            height: 50px;
            font-size: 18px;
        }
    }

    button:hover {
        background-color: ${(props) => props.theme.colors.textWhite};
        color: ${(props) => props.theme.colors.buttonPeach};
    }
`;