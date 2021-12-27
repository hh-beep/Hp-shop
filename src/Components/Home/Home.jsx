import React from 'react';

import Mug from './Components/Mugs.jsx';
import Bottles from "./Components/Bottles.jsx"

import "./style/style.css"

function Home() {

  return(
    <main className='main' >

    <h1 className='main__tittle' >Itens Personalizaveis</h1>

      <ul className='main__list'>
        
        <Mug />
        <Bottles />

      </ul>
    
    </main>
  )
}

export default Home