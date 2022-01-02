import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ChooseItem from './Components/ChooseItem/ChooseItem';
import Cart from './Components/Cart/Cart';

import Logo from "./images/logo.png"

import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./index.css"


function App() {

  const [item, setItem] = useState("")

  const [cartItems, setCartItems] = useState([])

  return (
    <Router basename="/Hp-shop">

      <Header />

      <Routes>
        <Route path="/" element={ <Home set={setItem} /> } />

        <Route path="/ChooseItem/" element={ <ChooseItem item={item} cartItems={cartItems} setCart={setCartItems} /> } />

        <Route path="/Cart" element={ <Cart cartItems={cartItems} /> } />
        <Route path="/AboutUs" element={ <p>AboutUs</p> } />
      </Routes>
      
      <Footer />

    </Router>
  );
}

export default App;

//https://api.whatsapp.com/send?phone=554598119312&text=Ola!"