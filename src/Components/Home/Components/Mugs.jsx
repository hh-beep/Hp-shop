import React from 'react';

import returnDmugs from '../../data/data__mugs';

function Mug() {

  const mugs = returnDmugs()
  
  return(
    <li className='item' >
      <h1 className='item__tittle' >Canecas</h1>
      <section className='item__container' >
        {mugs.map( (item, key) => {
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

export default Mug