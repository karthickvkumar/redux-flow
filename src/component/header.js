import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">Online Shopping</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><NavLink to="/" exact activeClassName="active">Home</NavLink></li>
            <li><NavLink to="/product" exact activeClassName="active">Products</NavLink></li>
            <li><NavLink to="/product/add" activeClassName="active">Add Product</NavLink></li>
            <li><NavLink to="/cart" activeClassName="active">Add to Cart</NavLink></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;