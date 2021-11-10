import { createStore } from 'redux';
import rootReducer from '../reducers/index';

export default function configureStore(initalState){
  return createStore(rootReducer, initalState);
}

