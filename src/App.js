import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Provider} from 'react-redux';
 
import Home from './pages/home';
import Shop from './pages/shop';
import Products from './pages/products';
import Cart from './pages/cart';
import AddProduct from './pages/add-product';
import "./css/materialize.css";
import "./css/style.css";

import configureStore from './redux/store/redux-store';
const reduxStore = configureStore();


class App extends Component {
  render() {
    return (
      <Provider store={reduxStore}>
        <BrowserRouter>
          <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/shop" component={Shop}></Route>
            <Route path="/product" exact component={Products}></Route>
            <Route path="/cart" component={Cart}></Route>
            <Route path="/product/add" component={AddProduct}></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;