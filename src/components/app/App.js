import React, { Component } from 'react'
import './App.css'
import Header from '../header/header.js'
import CartFooter from '../cart-footer/cart-footer.js'
import Items from '../cart-items/cart-items.js'
import CartItem from '../cart-item/cart-item.js'


class App extends Component {

  render() {
    const cartItemsList =
    [
      { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
      { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
      { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 },
    ]
    console.log(cartItemsList)
    return (
      <div className='App'>
        <Header />
        <Items />
        <CartItem />
        <CartFooter copyright='208' />
      </div>
    )
  }

}

export default App
