import React, { Component } from 'react';
import Header from '../component/header';

import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as productAction from '../redux/actions/product-action';

class AddProduct extends Component {
  constructor(props){
    super(props);
    this.state = {
      product_name : '',
      product_price : '',
      product_description : ''
    }
  }

  onInputChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
  }

  onAddProduct(){
    console.log(this.state)
    this.props.action.addProduct(this.state)
  }

  render() {
    return (
      <div>
        <Header></Header>
        <div className="row">
          <div className="col s12">
            <div className="row">
              <div className="input-field col s6">
                <input placeholder="Enter your product nane" name="product_name" type="text" className="validate" onChange={this.onInputChange} />
              </div>
              <div className="input-field col s6">
                <input placeholder="Enter your product price ($)" name="product_price" type="text" className="validate" onChange={this.onInputChange} />
              </div>
            </div>

            <div className="row">
              <div className="input-field col s12">
                <textarea placeholder="Enter your product description" name="product_description" className="materialize-textarea" onChange={this.onInputChange} ></textarea>
              </div>
            </div>
            <button className="waves-effect waves-light btn" onClick={() => this.onAddProduct()}>Add New Produt</button>
          </div>
        </div>

      </div>
    );
  }
}

function mapStateToProps(state){
  return{}
}

function mapDispatchToProps(dispatch){
  return{
    action : bindActionCreators(productAction, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);