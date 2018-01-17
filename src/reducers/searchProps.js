const searchProps = (state = {}, action) => {
  console.log(action.type)
  switch(action.type){
    case 'ADD_SEARCH_FILTER':
      return action.sale
    default:
      return state
  }
}

export default searchProps
