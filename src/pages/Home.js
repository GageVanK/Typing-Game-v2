import { Button, Center, Text } from '@mantine/core';
import { Link } from 'react-router-dom';


  
  

//Adding Home Page
export default function Home() {
  return(
    <div>
    
    <Center>
    <Button component={Link} to='/game' display="block" ta="center" variant="outline" radius="md" size="md">
      Start Now
    </Button>
    </Center>
    </div>
  )
}
