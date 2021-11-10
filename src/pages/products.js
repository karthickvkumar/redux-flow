import React, { Component } from 'react';
import Header from '../component/header';

import {connect} from 'react-redux';

class Products extends Component {
  render() {
    const list = this.props.products.map((value, index) => {
      return(
        <div className="product">
          <div>
          <span>Product Name :</span>
          <span>{value.product_name}</span>
        </div>
        <div>
          <span>Product Price :</span>
          <span>$ {value.product_price}</span>
        </div>
        <div>
          <span>Product Description :</span>
          <span>$ {value.product_description}</span>
        </div>
        </div>
      )
    })
    return (
      <div>
        <Header></Header>
        <div>
          {list}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {
    products : state.ProductReducer.products
  }
}

function mapDispatchToProps(dispatch){
  return{}
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);