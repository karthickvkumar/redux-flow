const initialState = {
  products : []
}

export default function ProductReducer(state = initialState, action){
  console.log("Reducer -->")
  console.log(action)
  switch (action.type) {
    case "ADD_NEW_PRODUCT":
      return {...state, products : [...state.products, action.value]};
    default:
      return state;
  }
}
