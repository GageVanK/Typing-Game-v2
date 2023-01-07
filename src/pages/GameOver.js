import { Center, Button, Text } from '@mantine/core';
import { useScore } from '../contexts/ScoreContext';
import { Link } from 'react-router-dom';

//Adding function for HighScores Page
export default function GameOver() {
  const [score] = useScore();

  return(
    <>
      <Center>
        <h1>Game Over</h1>
      </Center>
      <Center>
        <Text fz="xl" fw={500}>Score: {score}</Text>
      </Center>
      <Center>
        <Button mt="md" component={Link} to='/' variant="outline" radius="md" size="md">
          Play Again
        </Button>
      </Center>
      </>
  )

}