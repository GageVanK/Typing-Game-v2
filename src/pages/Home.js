import { Button, Center } from '@mantine/core';
import { StyledGameDiv, StyledTimer, StyledLetter, StyledScore } from '../components/StyledGame';

//Adding Home Page
export default function Home() {
  

  return(
    <><StyledGameDiv>
      <StyledScore>Score:</StyledScore>

      <StyledLetter>A</StyledLetter>
      <StyledTimer>Time:</StyledTimer>
      

    </StyledGameDiv>
    
    <Center>

    <Button display="block" ta="center" variant="outline" radius="md" size="md">
        Start Now
      </Button>
    </Center></>
  )
}
