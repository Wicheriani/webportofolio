import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';


import './css/landingPage.css';

function App() {
  return (
    <Router>
      <div className='myBG'>
        <Navigationbar />
        <div> 
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
          </Routes>

        </div>
       
      </div>
    </Router>
  );
}


export default App;
