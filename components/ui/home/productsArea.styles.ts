import styled from "styled-components";

const GridArea = styled.section`
    width: 100%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 2rem;
`;

export { GridArea };
