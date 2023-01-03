import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GameOver from './pages/GameOver';
import Game from './pages/Game';
import HighScores from './pages/HighScores';

function App() {
  return (

   //using react-router-dom library to define the routes in my application and navigate between them
   //Refer to Docs for further info: https://codezup.com/routing-using-react-router-dom-v6-in-react-js/s
    <Router>
      <Routes>
        <Route path="/gameOver" element={ <GameOver /> } /> 
        <Route path="/highScores" element={ <HighScores /> } /> 
        <Route path="/game" element={ <Game /> } /> 
        <Route path="/" element={ <Home /> } /> 
      </Routes>
    </Router>
   
  );
}

export default App;
