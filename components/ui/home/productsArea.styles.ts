import styled from "styled-components";

const GridArea = styled.section`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;

     @media (min-width: 320px) and (max-width: 1280px) {
        margin-left: 1rem;
        margin-right: 1rem;
    }
`;

const Text = styled.p`
    margin-top: 2rem;
    font-size: 1.2rem;
    color: ${props => props.theme.colors.textGray};
    text-align: center;
`;

export { GridArea, Text };

