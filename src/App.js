import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prijava from "./components/Prijava";
import Pocetna from "./components/Pocetna";
import Prijavljeni from "./components/Prijavljeni";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/prijava" element={<Prijava />} />
          <Route path="/provera" element={<Prijavljeni />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
