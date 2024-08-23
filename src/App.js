
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import SongList from './pages/SongList';
import Song from './pages/Song';
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/songs/:id" element={<Song />} />
        </Routes>
     
    </div>
  );
}

export default App;
