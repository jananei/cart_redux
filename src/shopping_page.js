import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveToCart } from './action.js';
import  {Button,Badge,Media} from 'react-bootstrap';
import Cart from './cart.js';
import Table from './table.js';

import './phone.jpg';
import './football.jpg';
import './cart.png';
class Shopping extends Component {
  constructor(props) {
    super(props)
    this.state = {
      click: false,
      viewButtonValue: false
    }
  }

  viewCart = () => {
    console.log("in")
    const currentState = this.state.click
    const buttonState = this.state.viewButtonValue
    this.setState({

      viewButtonValue: !buttonState,
      click: !currentState
    })
  }
  render() {
    return (
      <div>
        <Media>
          <Media.Right>
          <Button onClick={this.viewCart} bsStyle="primary" >{this.state.viewButtonValue ? "Home" : "Cart"}</Button>
       
        <span>
            <Badge>{this.props.cartItem.length} </Badge>
         </span>   
         </Media.Right>
        </Media>
            {this.state.click ? <Cart itemInCart={this.props.cartItem} /> : <Table element={this.props.item} />}       
      </div>
    );
  }
}

const mapStateToProps = state => ({
  item: state.item,
  cartItem: state.cartItem

});
const mapDispatchToProps = {
  moveToCart: moveToCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopping);