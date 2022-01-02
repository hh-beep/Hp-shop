import Mug from './Components/Mugs.jsx';
import Bottles from "./Components/Bottles.jsx"
import Tshirt from './Components/Tshirts.jsx';
import Goblet from './Components/Goblets.jsx';



import React from 'react';
import "./style/style.css"

function Home({ set }) {

  return(
    <main className='main' >

    <h1 className='main__tittle' >Itens Personalizaveis</h1>

      <ul className='main__list'>
        
        <Mug set={set} />
        <Bottles set={set} />
        <Tshirt set={set} />
        <Goblet set={set} />

      </ul>
    
    </main>
  )
}

export default Home