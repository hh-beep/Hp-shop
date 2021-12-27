import React from 'react';

import returnDbottle from '../../data/data__bottle';

function Bottles() {

  const bottles = returnDbottle()
  
  return(
    <li className='item' >
      <h1 className='item__tittle' >Garrafas</h1>
      <section className='item__container' >
        {bottles.map( (item, key) => {
          return(
            <figure className='card' key={key} >
              <img className='card__image' src={item.image} />
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

export default Bottles;