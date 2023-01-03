import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameOver from './pages/GameOver';
import Game from './pages/Game';
import HighScores from './pages/HighScores';
import NavBar from './components/NavBar';

function App() {
  return (



   
    <BrowserRouter>
    <NavBar />
      <Routes>
        <Route path="/gameOver" element={ <GameOver /> } /> 
        <Route path="/highScores" element={ <HighScores /> } /> 
        <Route path="/game" element={ <Game /> } /> 
        <Route path="/" element={ <Home /> } /> 
      </Routes>
    </BrowserRouter>


   
  );
}

export default App;
