import {combineReducers} from 'redux';

import ProductReducer from './product-reducer';
import cartReducer from './cart-reducer';

const rootReducer = combineReducers({
  ProductReducer,
  cartReducer
});

export default rootReducer;