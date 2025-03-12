import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './js/navbar';
import SplashPage from './js/splashpage';
import Information from './js/information';
import AboutUsHome from './js/AboutUsHome';
import StatsHome from './js/statsHome';
import Overdose from './js/overdose';
import ContactUs from './js/ContactUs';
import CallToAction from './js/CallToAction';
import AboutUs from './js/AboutUs';
import Home from './js/home';
import Memorial from './js/memorial';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Define all routes here */}
          <Route path="/MBHFoundation" element={<Home />} /> {/* Home route */}
          <Route path="/Memorial" element={<Memorial />} /> {/* Memorial route */}
          <Route path="/AboutUs" element={<AboutUs />} /> {/* About Us route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
