import Navbar from './js/navbar';
import SplashPage from './js/splashpage';
import Information from './js/information';
import AboutUsHome from './js/AboutUsHome';
import StatsHome from './js/statsHome';
import Overdose from './js/overdose';
import ContactUs from './js/ContactUs';
import CallToAction from './js/CallToAction';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <SplashPage />
      <Information />
      <AboutUsHome />
      <StatsHome />
      <CallToAction />
      <Overdose />
      <ContactUs />
    </div>
  );
}

export default App;
