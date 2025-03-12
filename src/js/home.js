import Navbar from './navbar';
import SplashPage from './splashpage';
import Information from './information';
import AboutUsHome from './AboutUsHome';
import StatsHome from './statsHome';
import Overdose from './overdose';
import ContactUs from './ContactUs';
import CallToAction from './CallToAction';
import { useState, useEffect } from 'react';

const Home = () => {
    return ( 
    <div className="App">
      <Navbar />
      <Information />
      <AboutUsHome />
      <StatsHome />
      <CallToAction />
      <Overdose />
      <ContactUs />
    </div>
     );
}
 
export default Home;