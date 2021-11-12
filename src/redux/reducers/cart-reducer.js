const intailState = {
  cartList : []
}

export default function cartReducer(state = intailState, action){
  switch (action.type) {
    case "ADD_TO_CART":
      
      return {...state, cartList : [...state.cartList, action.value]}
  
    default:
      return state;
  }
}