import React from 'react';

import returnDgoblets from "../../data/data__goblets.js"

function Goblet({ set, setCat }) {
  
  const goblets = returnDgoblets()
  
  return(
    <li className='item' >
      <h1 className='item__tittle' >Taças</h1>
      <section className='item__container' >
        {goblets.map( (item, key) => {
          return(
            <figure className='card' key={key} onClick={() => {

              set(item)

              setCat(goblets)

              window.location.hash = "#/Hp-shop/ChooseItem/"

            }} >
              <img className='card__image' src={ item.image } />
              <section className='card__info' >
                <h1 className='card__info-tittle' >{ item.tittle }</h1>
                <p className='card__info-price' >{ item.price }</p>
              </section>
            </figure>
          )
        })}
      </section>
    </li>
  )
}

export default Goblet;