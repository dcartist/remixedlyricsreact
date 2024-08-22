
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import NavBar from "./components/Navigation/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/about" element={<About />} />
        </Routes>
     
    </div>
  );
}

export default App;
