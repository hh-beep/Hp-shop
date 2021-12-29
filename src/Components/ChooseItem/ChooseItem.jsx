import React from 'react';

import "./style/style.css"

function ChooseItem({ item, category }) {

  console.log(item)
  console.log(category)

  return (
    <main className='Main' >
      <section className="card" key={ item.id }>

        <figure className='card__figure'>
          <img className='card__figure-image' src={ item.image } />
        </figure>

        <section className='card__info'>
          <h1 className='card__info-tittle' >{ item.tittle }</h1>
          <p className='card__info-price' >{ item.price }</p>
          <button>Encomendar</button>
        </section>

      </section>
    </main>
  )
}

export default ChooseItem;