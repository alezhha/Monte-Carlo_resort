import './App.scss';
import './responsive.scss';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Galery from './pages/Galery';
import Rooms from './pages/Rooms';
import PNF from './pages/PNF';
import Room from './components/Room';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App" >
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galery" element={<Galery />} />
          <Route path="/rooms" element={<Rooms />} />
          <Route path="/404" element={<PNF />} />
          <Route path='/room' element={<Room />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
