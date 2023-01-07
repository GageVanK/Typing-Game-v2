import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameOver from './pages/GameOver';
import HighScores from './pages/HighScores';
import NavBar from './components/NavBar';
import { MantineProvider, ColorSchemeProvider} from '@mantine/core';
import { StyledPageContainer } from './components/StyledPageContainer';

function App() {

  //https://v4.mantine.dev/theming/dark-theme/
  const [colorScheme, setColorScheme] = useState('light');
  
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
    <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    
    <BrowserRouter>
      <NavBar />
      <StyledPageContainer>
        <Routes>
          <Route path="/gameOver" element={ <GameOver /> } /> 
          <Route path="/highScores" element={ <HighScores /> } /> 
          <Route path="/" element={ <Home /> } /> 
        </Routes>
      </StyledPageContainer>
    </BrowserRouter>

    </MantineProvider>
    </ColorSchemeProvider>
  
   
  );
}

export default App;
