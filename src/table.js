import React, { Component } from 'react';
import { connect } from 'react-redux';
import { moveToCart } from './action.js';
import  {Button,Jumbotron} from 'react-bootstrap';
import './watch.jpg';
import './phone.jpg';
import './football.jpg';


class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      click: false,
      addButton:false
    }
  }
  addCart = (e) => {
    let index = e.target.parentNode.parentNode.cellIndex;
    this.props.moveToCart(index)
    const addState = this.state.addButton
    this.setState({
      addButton:!addState
    })
  }
  viewCart = () => {
    console.log("in")
    const currentState = this.state.click
    
    this.setState({
      click: !currentState,
   
    })
  }
  render() {

    const table = this.props.element.map((content, key) => {
      return (

        <td key={content.id} >
          <div><img src={require(`./${content.image}.jpg`)} alt="" heigth='150' width='80' /> </div>
          <div> {'Product Name:' + content.productName}</div>
          <div>  {'Price:' + content.price}</div>
          <div>
            <Button bsStyle="info" onClick={this.addCart} >add to cart</Button>
          </div>
        </td>

      )
    }
    )
    return (
      <div>
        <Jumbotron>
        <table align="center" id="table" cellPadding="10" cellSpacing="10">
          <tbody>
            <tr>
              {table}
            </tr>
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
  moveToCart: moveToCart,
}
export default connect(mapStateToProps, mapDispatchToProps)(Table);