import { Button, Center } from '@mantine/core';
import { StyledGameDiv } from '../components/StyledGameDiv';
//Adding Home Page
export default function Home() {
  

  return(
    <><StyledGameDiv>
      <p>Score:</p>

      <p>A</p>
      <p>Time:</p>
      

    </StyledGameDiv>
    
    <Center>

    <Button display="block" ta="center" variant="outline" radius="md" size="md">
        Start Now
      </Button>
    </Center></>
  )
}
