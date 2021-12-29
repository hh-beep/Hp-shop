import Mug from './Components/Mugs.jsx';
import Bottles from "./Components/Bottles.jsx"
import Tshirt from './Components/Tshirts.jsx';
import Goblet from './Components/Goblets.jsx';



import React from 'react';
import "./style/style.css"

function Home({ set, setCategory }) {

  return(
    <main className='main' >

    <h1 className='main__tittle' >Itens Personalizaveis</h1>

      <ul className='main__list'>
        
        <Mug set={set} setCat={setCategory} />
        <Bottles set={set} setCat={setCategory} />
        <Tshirt set={set} setCat={setCategory} />
        <Goblet set={set} setCat={setCategory} />

      </ul>
    
    </main>
  )
}

export default Home