import React, { Component } from 'react'
import './App.css'
import Header from '../header/header.js'
import CartFooter from '../cart-footer/cart-footer.js'
import Items from '../cart-items/cart-items.js'


class App extends Component {
  render() {
    return (
      <div className='App'>
        <Header />
        <Items />
        <CartFooter />
      </div>
    )
  }

}

export default App
