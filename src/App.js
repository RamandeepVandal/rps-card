import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// screens
import { MainScreen } from './screens/MainScreen';
import Game from './screens/Game';
import { Instructions } from './screens/Instructions';
import { GameOver } from './screens/GameOver';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainScreen />} />
        <Route path="/Instructions" element={<Instructions />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/GameOver" element={<GameOver />} />
      </Routes>
    </Router>
  );
}

export default App;
