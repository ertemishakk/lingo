import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Landing from './Components/Landing'
import About from './Components/About'
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Footer from './Components/Footer'
import ScrollspyNav from "react-scrollspy-nav";


function App() {
  return (
    <div className="App" >
      <ScrollspyNav
        scrollTargetIds={['about', 'services', 'pricing']}
        scrollDuration="1000"
        offset={-70}
      >

        <NavBar />
        <Landing />
        <About />
        <Services />
        <Pricing />
        <Footer />
      </ScrollspyNav>
    </div>
  );
}

export default App;
