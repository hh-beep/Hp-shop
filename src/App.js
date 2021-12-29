import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import ChooseItem from './Components/ChooseItem/ChooseItem';


import Logo from "./images/logo.png"

import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';

import "./index.css"

function App() {

  const [item, setItem] = useState("")

  const [cat, setCat] = useState("")

  return (
    <Router basename="/Hp-shop">

      <Header />

      <Routes>
        <Route path="/" element={ <Home set={setItem} setCategory={setCat} /> } />

        <Route path="/ChooseItem/" element={ <ChooseItem category={cat} item={item} /> } />

        <Route path="/Profile" element={ <h1 onClick={() => {
          window.location.href = "https://api.whatsapp.com/send?phone=554598119312&text=Ola!"
        }}>send msg</h1> } />
        <Route path="/AboutUs" element={ <p>AboutUs</p> } />
      </Routes>
      
      <Footer />

    </Router>
  );
}

export default App;

//<a href="https://api.whatsapp.com/send?phone=1111111111&text=Hi">Send Message</a>
