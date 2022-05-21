import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Prijava from "./components/Prijava";
import Provera from "./components/Provera";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Pocetna />} />
          <Route path="/provera" element={<Provera />} />
          <Route path="/prijava" element={<Prijava />} />
        </Routes>
      </Router>
    </div >
  );
}

export default App;
