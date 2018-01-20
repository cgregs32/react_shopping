const cart = (state = [], action) => {
  switch(action.type){
    case 'ADD_TO_CART':
    debugger
      return [action.item, ...state]
    default:
      return state
  }
}

export default cart
