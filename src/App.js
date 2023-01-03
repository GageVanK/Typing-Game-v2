import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';


function App() {
  return (

   //using react-router-dom library to define the routes in my application and navigate between them
    <Router>
      <Routes>
        <Route path="/" element={ <Home /> } /> 
      
      </Routes>
    </Router>
   
  );
}

export default App;
