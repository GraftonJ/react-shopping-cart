import React from 'react'

export default class AddItem extends React.Component {
  render() {
    return (
      <div className="container">
        <form>
          <div class="form-group">
            <label for="quantity">Quantity</label>
            <select class="form-control" id="quantity">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div class="form-group">
            <label for="products">Products</label>
            <select class="form-control" id="products">
              <option>0</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
        </form>
      </div>
    )
  }
}
