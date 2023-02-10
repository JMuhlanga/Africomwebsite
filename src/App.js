//import react
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Digital from './Components/Digital';
import Branding from './Components/Branding';
import Careers from './Components/Careers';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Jobpages from './Components/Jobpages';



function App() {
  return (
    <div className="App">
    <Navbar/>
      {/* routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/digital" element={<Digital />} />
        <Route path="/branding" element={<Branding />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobpages" element={<Jobpages />} />
      </Routes>
      <Footer/>


      


    </div>
  );
}

export default App;
