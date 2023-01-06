import { Button, Group } from '@mantine/core';
import styled from 'styled-components';

//Adding Home Page
export default function Home() {
  
  const StyledDiv = styled.div`
    height: 75vh;
    max-height: 500px;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;
  return(
    <><StyledDiv>
      <p>Score:</p>

      <p>A</p>
      <p>Time:</p>
      

    </StyledDiv>
    
    <div>

    <Button display="block" ta="center" variant="outline" radius="md" size="md">
        Start Now
      </Button>
    </div></>
  )
}
