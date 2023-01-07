import { Button, Center } from '@mantine/core';
import { StyledGameDiv, StyledTimer, StyledLetter, StyledScore } from '../components/StyledGame';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//Adding Home Page
export default function Home() {

  
//Using alphabet for game  
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const [currentLetter, setCurrentLetter] = useState(' ');
  //https://reactjs.org/docs/hooks-intro.html
  //Adding Hooks for the Score(Counter) + Timer(20-Second Interval)
  const [score] = useState(1);
  const MAX_SECONDS = 19;
  const [ms, setMs] = useState(999);
  const [seconds, setSeconds] = useState(MAX_SECONDS);
  const [isRunning, setIsRunning] = useState(false);
  //https://www.geeksforgeeks.org/reactjs-usenavigate-hook/
  const navigate = useNavigate();



  useEffect(() => {
    const currentTime = new Date();
    setRandomLetter();
    //Using isRunning hook to use Button to start the timer
    if (isRunning) {
    const interval = setInterval(() => 
    updateTime(currentTime), 1);
    
    return () => {
        clearInterval(interval);
    }};
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [isRunning]);


const updateTime = (startTime) => {
  // Calculate the end time by creating a new Date object
  const endTime = new Date();

  // Calculate the time passed (in milliseconds) by subtracting the start time from the end time
  const msPassed = endTime.getTime() - startTime.getTime();

  // Convert the time passed (in milliseconds) to a string
  const msPassedStr = msPassed.toString();

  // Add leading zeros to the string if necessary to ensure it has exactly 5 characters
  // (0000 - first 2 are the seconds, and the last 3 are the milliseconds)
  const formattedMSString = ('0000' + msPassedStr).slice(-5);

  // Calculate the updated seconds by subtracting the seconds passed from the maximum number of seconds
  // (MAX_SECONDS) and subtracting 1 (to account for the fact that we're using "less than or equal to"
  // in the condition that checks for the end of the game)
  const updatedSeconds =
    MAX_SECONDS - parseInt(formattedMSString.substring(0, 2)) - 1;

  // Calculate the updated milliseconds by subtracting the milliseconds passed from 1000
  const updatedMs =
    1000 - parseInt(formattedMSString.substring(formattedMSString.length - 3));

  // Update the state variables for the seconds and milliseconds
  setSeconds(addLeadingZeros(updatedSeconds, 2));
  setMs(addLeadingZeros(updatedMs, 3));
};


useEffect(() => {
  // Check if the seconds have run out (less than or equal to -1)
  if (seconds <= -1) {
    // Navigate to the "/gameOver" route
    navigate('/gameOver');
  }
}, [seconds, ms, navigate]);


const addLeadingZeros = (str, length) => {
  // Initialize a string of zeros with a length of 0
  let zeros = '';

  // Loop through a range of numbers from 0 to the desired length
  for (let i = 0; i < length; i++) {
    // Add another zero to the string of zeros for each iteration of the loop
    zeros += '0';
  }

  // Return the original string with the desired number of zeros added to the front,
  // ensuring that the resulting string has the desired length by using the slice method
  return (zeros + str).slice(-length);
};


const setRandomLetter = () => {

  // Generate a random integer between 0 and 25 (inclusive)
  const randomInt = Math.floor(Math.random() * 26);
  // Set the value of currentLetter to the letter at the index randomInt in the letters string
  setCurrentLetter(letters[randomInt])

};



  return(
  <>
    <StyledGameDiv>
      <StyledScore>Score: {score}</StyledScore>
      <StyledLetter>{currentLetter}</StyledLetter>
      <StyledTimer>{seconds}:{ms}</StyledTimer>
    </StyledGameDiv>
    
    <Center>
      <Button onClick={() => setIsRunning(true)} display="block" ta="center" variant="outline" radius="md" size="md">
        Start Now
      </Button>
    </Center>
  </>
  )
}
