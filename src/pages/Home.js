import { Button, Center } from '@mantine/core';


//Adding Home Page
export default function Home() {
  return(
    <div>
    <p>Score:</p>
    <p>Time:</p>

    
    <Center>
    <Button display="block" ta="center" variant="outline" radius="md" size="md">
      Start Now
    </Button>
    </Center>
    </div>
  )
}
