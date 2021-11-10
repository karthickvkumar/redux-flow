export function addProduct(data){
  console.log("Action --->")
  console.log(data)
  return {
    type : 'ADD_NEW_PRODUCT',
    value : data
  }
}