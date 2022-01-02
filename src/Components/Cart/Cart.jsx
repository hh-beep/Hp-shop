import React from 'react';

function Cart({ cartItems }) {

  const items = cartItems

  return(
    <main>
      {items.map( (item, key) => {
        return(
          <h1>{ item.tittle }</h1>
        )
      })}
    </main>
  )
}

export default Cart;