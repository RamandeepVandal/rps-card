import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

// screens
import { MainScreen } from './screens/MainScreen';
import Game from './screens/Game';
import { Instructions } from './screens/Instructions';
import { Select } from './screens/Select';
import GameAI from './screens/GameAI';
import { SelectAI } from './screens/SelectAI';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<MainScreen />} />
        <Route path="/Instructions" element={<Instructions />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/Select" element={<Select />} />
        <Route path="/GameAI" element={<GameAI />} />
        <Route path="/SelectAI" element={<SelectAI />} />
      </Routes>
    </Router>
  );
}

export default App;
