import React, { Component } from 'react';
import Header from '../component/header';

import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AddToCart from '../redux/actions/cart-action';

class Products extends Component {

  onAddProduct(product){
    this.props.action.addToCart(product)
  }

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
        <button class="waves-effect waves-light btn" onClick={() => this.onAddProduct(value)}>Add To Cart</button>
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
  return{
    action : bindActionCreators(AddToCart, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);