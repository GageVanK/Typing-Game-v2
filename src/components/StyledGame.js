import styled from 'styled-components';


//Custom styles w/ Styled-components for the game page layout + other styles

export const StyledGameDiv = styled.div`
height: 75vh;
max-height: 500px;
display: grid;
grid-template-rows: 50px 1fr;
grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;

export const StyledScore = styled.p`
    font-size: 1.5rem;
`;

export const StyledTimer = styled.p`
    font-size: 1.5rem;
    grid-column: 3;
`;

export const StyledLetter = styled.p`
    font-size: 10rem;
    grid-row: 2;
    grid-column: 1/4;
    text-align: center;
`;