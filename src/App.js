import React from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';

import "./index.css"

function App() {
  return (
    <Router basename="/Hp-shop">

      <Header />

      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/Cart" element={ <p>Cart</p> } />
        <Route path="/Profile" element={ <p>Profile</p> } />
        <Route path="/AboutUs" element={ <p>AboutUs</p> } />
      </Routes>
      
      <Footer />

    </Router>
  );
}

export default App;
