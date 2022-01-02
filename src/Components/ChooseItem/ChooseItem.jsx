import React from 'react';

import "./style/style.css"

function ChooseItem({ item, cartItems, setCart }) {

  return (
    <main className='Main' >
      <section className="card" key={ item.id }>

        <figure className='card__figure'>
          <img className='card__figure-image' src={ item.image } />
        </figure>

        <section className='card__info'>
          <h1 className='card__info-tittle' >{ item.tittle }</h1>
          <p className='card__info-price' >{ item.price }</p>

          <button className='btn' onClick={() => {

            if(cartItems.length === 0) {
              setCart([item])
            }
            else {
              var addNewItem = cartItems;
              addNewItem.push(item)
              setCart(addNewItem)
            }
            console.log(cartItems)
          }} >Adicionar ao Carrinho</button>
        </section>

      </section>
    </main>
  )
}

export default ChooseItem;