const searchProps = (state = false, action) => {
  console.log(action.type)
  switch(action.type){
    case 'ADD_SEARCH_FILTER':
      return action.visible
    default:
      return state
  }
}

export default searchProps
