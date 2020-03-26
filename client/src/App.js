import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './Components/NavBar'
import Landing from './Components/Landing'
import About from './Components/About'
import Services from './Components/Services'
import Pricing from './Components/Pricing'
import Portfolio from './Components/Portfolio'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  return (
    <div className="App" >

      <NavBar />
      <Landing />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
