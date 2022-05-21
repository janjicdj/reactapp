import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prijava from "./components/Prijava";
import Pocetna from "./components/Pocetna";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/prijava" element={<Prijava />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
