import React, { Component } from 'react';
import Header from '../component/header';

import {connect} from 'react-redux'

class Cart extends Component {
  render() {
    const response = this.props.cartList.map((value,index) => {
      return(
        <tr key={index}>
          <td>{value.product_name}</td>
          <td>{value.product_price}</td>
          <td>{value.product_description}</td>
        </tr>
      )
    })
    console.log(this.props.cartList);
    return (
      <div>
        <Header></Header>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Product Price</th>
              <th>Product Desc</th>
            </tr>
          </thead>
          <tbody>
            {response}
          </tbody>
        </table>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    cartList : state.cartReducer.cartList
  }
}

function mapDispatchToProps(dispatch){
  return{

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);