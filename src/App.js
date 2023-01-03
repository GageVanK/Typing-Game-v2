import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameOver from './pages/GameOver';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import NavBar from './components/NavBar';
import { useState } from 'react';
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';
function App() {
  const [colorScheme, setColorScheme] = useState('light');
  
  const toggleColorScheme = (value) => {
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  }

  return (
<ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/gameOver" element={ <GameOver /> } /> 
        <Route path="/highScores" element={ <HighScores /> } /> 
        <Route path="/game" element={ <Game /> } /> 
        <Route path="/" element={ <Home /> } /> 
      </Routes>
    </BrowserRouter>
    </MantineProvider>
    </ColorSchemeProvider>
  
   
  );
}

export default App;
