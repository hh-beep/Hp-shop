import React from 'react';
import returnDmugs from '../data/data__mugs';

import "./style/style.css"

function Home() {

  const mugs = returnDmugs()

  return(
    <main className='main' >

    <h1 className='main__tittle' >Itens Personalizados</h1>

      <ul className='main__list'>
        <li className='item' >
          <h1 className='item__tittle' >Canecas</h1>
          <section className='item__container' >
            {mugs.map( (item, key) => {
              return(
                <figure className='card' >
                  <img className='card__image' src={item.image} />
                  <section className='card__info'>
                    <h1 className='card__info-tittle' >{ item.tittle }</h1>
                    <p className='card__info-price' >{ item.price }</p>
                  </section>
                </figure>
              )
            })}
          </section>
        </li>

        <li className='item' >
          <h1 className='item__tittle' >Canecas</h1>
          <section className='item__container' >
            {mugs.map( (item, key) => {
              return(
                <figure className='card' >
                  <img className='card__image' src={item.image} />
                  <section className='card__info'>
                    <h1 className='card__info-tittle' >{ item.tittle }</h1>
                    <p className='card__info-price' >{ item.price }</p>
                  </section>
                </figure>
              )
            })}
          </section>
        </li>
      </ul>
    
    </main>
  )
}

export default Home