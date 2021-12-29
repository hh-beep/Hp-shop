import React from 'react';

import returnDtshirts from "../../data/data__tshirts.js"

function Tshirt({ set, setCat }) {
  
  const tshirts = returnDtshirts()
  
  return(
    <li className='item' >
      <h1 className='item__tittle' >Camisas</h1>
      <section className='item__container' >
        {tshirts.map( (item, key) => {
          return(
            <figure className='card' key={key} onClick={() => {

              set(item)

              setCat(tshirts)

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

export default Tshirt;