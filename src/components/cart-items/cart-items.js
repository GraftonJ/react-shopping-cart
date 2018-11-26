import React from 'react'
import CartItem from '../cart-item/cart-item'

export default class CartItems extends React.Component {
  render() {
    return (
      <div className="container">
        <h1>Cart Items</h1>
        <div className="list-group">
          <div className="list-group-item">
            <div className="row">
              <div className="col-md-8">Product</div>
              <div className="col-md-2">Price</div>
              <div className="col-md-2">Quantity</div>
            </div>
          </div>
          {this.props.items.map((elem) => <CartItem key={elem.id} id={elem.id} item={elem} />)}
        </div>
      </div>
    )
  }
}
