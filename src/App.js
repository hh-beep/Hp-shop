import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';

import "./index.css"

function App() {
  return (
    <Router>

      <Header />

      <Routes>
        <Route path="/Home" element={ <p>Home</p> } />
        <Route path="/Cart" element={ <p>Cart</p> } />
        <Route path="/Profile" element={ <p>Profile</p> } />
        <Route path="/AboutUs" element={ <p>AboutUs</p> } />
      </Routes>
      
      <Footer />

    </Router>
  );
}

export default App;
