import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeFromCart } from './action.js';
import  {Button,Jumbotron} from 'react-bootstrap';

class Cart extends Component {
  removeItem = (e) => {
    let removeIndex = e.target.parentNode.parentNode.rowIndex
    this.props.removeFromCart(removeIndex)
    
  }
  render() {

    const viewTable = this.props.itemInCart.map((cart, key) => {

      return (


        <tr >
          <td><img src={require(`./${cart.image}.jpg`)} heigth='100' width='60' alt=""/> </td>
          <td> {cart.productName}</td>
          <td>  {cart.price}</td>
          <td>
            <Button bsStyle="danger" onClick={this.removeItem} >
              Remove from cart
            </Button>
          </td>
        </tr>

      )

    }
    )
    return (
      <div id="table">
          <Jumbotron>
        <table cellPadding="10" cellSpacing="10">
          <tbody>
            {viewTable}
          </tbody>
        </table>
        </Jumbotron>
      </div>
    )
  }
}
const mapStateToProps = state => ({
  item: state.item,
  cartItem: state.cartItem

});
const mapDispatchToProps = {

  removeFromCart: removeFromCart

}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);