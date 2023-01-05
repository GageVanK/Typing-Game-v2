import { Button } from '@mantine/core';
import { Link } from 'react-router-dom';


  
  

//Adding Home Page
export default function Home() {
  return(
    <div className='gameDiv'>
    <Button component={Link} to='/game' variant="outline" radius="md" size="md">
      Start Now
    </Button>
    </div>
  )
}
