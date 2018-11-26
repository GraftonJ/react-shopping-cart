import React from 'react'

export default class AddItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      quantity: '',
      product: ''
    }
  }

  onSubmit = (e) => {
    e.preventDefault()
    const { quantity, product } = this.state
    const { addToCartCB } = this.props
    addToCartCB({ quantity, product })
  }

  onProductSelect = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      product: e.target.value
    })
  }

  onQuantitySelect = (e) => {
    e.preventDefault()
    this.setState({
      ...this.state,
      quantity: e.target.value
    })
  }

  render() {
    console.log("This.props>>>>", this.props);
    return (
      <div className="container">
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Quantity</label>
            <input type="integer" className="form-control" defaultValue={this.state.quantity} onChange={this.onQuantitySelect} />
          </div>
          <div className="form-group">
            <label>Product</label>
            <select className="form-control" id="products" defaultValue={this.state.product} onChange={this.onProductSelect}>
              <option value="" selected disabled>Select an option...</option>
              {/*map through products prop from app.js (this.state.products) to set the product options*/}
              {this.props.products.map((elem) => <option key={elem.id}>{elem.name}</option>)}
            </select>
          </div>
          <input type="submit" className="btn btn-primary"/>
        </form>
      </div>
    )
  }
}
