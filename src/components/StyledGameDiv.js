import styled from 'styled-components';
  
export const StyledGameDiv = styled.div`
height: 75vh;
max-height: 500px;
display: grid;
grid-template-rows: 50px 1fr;
grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;